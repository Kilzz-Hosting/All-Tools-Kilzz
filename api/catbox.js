export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed',
    });
  }

  try {
    const contentType = req.headers['content-type'] || '';

    if (!contentType.startsWith('image/')) {
      return res.status(400).json({
        ok: false,
        error: 'Request harus berupa file gambar.',
      });
    }

    const chunks = [];

    for await (const chunk of req) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);

    if (!buffer.length) {
      return res.status(400).json({
        ok: false,
        error: 'File gambar kosong.',
      });
    }

    const maxSize = 4 * 1024 * 1024;

    if (buffer.length > maxSize) {
      return res.status(413).json({
        ok: false,
        error: 'Ukuran gambar terlalu besar. Maksimal 4 MB untuk upload melalui Vercel Function.',
      });
    }

    const filename =
      req.headers['x-filename'] || 'image';

    console.log('userhash exists:', !!process.env.CATBOX_USERHASH);

    const formData = new FormData();

    formData.append('reqtype', 'fileupload');
    formData.append(
      'userhash',
      process.env.CATBOX_USERHASH
    );

    formData.append(
      'fileToUpload',
      new Blob([buffer], {
        type: contentType,
      }),
      filename
    );

    const catboxResponse = await fetch(
      'https://catbox.moe/user/api.php',
      {
        method: 'POST',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; CatboxUploader/1.0)',
        },
        body: formData,
      }
    );

    const result = (await catboxResponse.text()).trim();

    console.log('catbox status:', catboxResponse.status);
    console.log('catbox result:', result);

    if (!catboxResponse.ok) {
      return res.status(catboxResponse.status).json({
        ok: false,
        error: result || 'Catbox mengembalikan error.',
      });
    }

    if (!/^https?:\/\//i.test(result)) {
      return res.status(502).json({
        ok: false,
        error: result || 'Catbox tidak memberikan URL hasil upload.',
      });
    }

    return res.status(200).json({
      ok: true,
      url: result,
      filename,
      size: buffer.length,
      type: contentType,
    });

  } catch (error) {
    console.error('Catbox error:', error);

    return res.status(500).json({
      ok: false,
      error: error?.message || 'Terjadi kesalahan saat upload ke Catbox.',
    });
  }
}
