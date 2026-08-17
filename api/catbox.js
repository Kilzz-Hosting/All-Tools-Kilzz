export const config = {
  api: {
    bodyParser: false,
  },
};

function buildMultipartBody(fields, fileField, fileBuffer, filename, fileContentType) {
  const boundary = '----CatboxBoundary' + Math.random().toString(16).slice(2);
  const parts = [];

  for (const [key, value] of Object.entries(fields)) {
    parts.push(Buffer.from(
      `--${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${value}\r\n`
    ));
  }

  parts.push(Buffer.from(
    `--${boundary}\r\nContent-Disposition: form-data; name="${fileField}"; filename="${filename}"\r\nContent-Type: ${fileContentType}\r\n\r\n`
  ));
  parts.push(fileBuffer);
  parts.push(Buffer.from(`\r\n--${boundary}--\r\n`));

  return { body: Buffer.concat(parts), boundary };
}

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

    const filename = req.headers['x-filename'] || 'image.jpg';
    const userhash = (process.env.CATBOX_USERHASH || '').trim();

    console.log('userhash length:', userhash.length);

    const { body, boundary } = buildMultipartBody(
      { reqtype: 'fileupload', userhash },
      'fileToUpload',
      buffer,
      filename,
      contentType
    );

    const catboxResponse = await fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'User-Agent': 'Mozilla/5.0 (compatible; CatboxUploader/1.0)',
      },
      body,
    });

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
