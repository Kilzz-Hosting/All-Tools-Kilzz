/* Generated from original index.html. */
const ROOT=document.getElementById('app');
ROOT.innerHTML=`<div id="home-view" class="view active">
  <div class="topbar">
    <div class="topbar-left">
      <div class="icon-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
      <div><div class="topbar-title">Menu Informasi</div><div class="topbar-sub">About Dev · Report Bug</div></div>
    </div>
    <div class="player paused" id="player">
      <div class="eq"><span></span><span></span><span></span></div>
      <button id="playPauseBtn" title="Play/Pause">
        <svg id="playIcon" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        <svg id="pauseIcon" viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
      </button>
      <button id="nextBtn" title="Next track"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5l10 7-10 7V5zM18 5h2v14h-2z"/></svg></button>
    </div>
    <div class="icon-btn" onclick="alert('Menu tambahan belum diisi — sambungkan sesuai kebutuhanmu.')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></div>
  </div>

  <div class="hero" id="heroBanner"><div class="hero-text"><div class="hero-title display"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7v8l10-12h-7z"/></svg>ALL TOOLS KILZZ</div><div class="hero-sub tech">by Kilzz</div></div></div>

  <div class="profile card">
    <div class="profile-top">
      <div class="avatar"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z"/></svg></div>
      <div class="profile-grid">
        <div class="profile-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>NEGARA <b id="infoCountry">Indonesia</b></div>
        <div class="profile-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/></svg>DEVICE <b id="infoDevice">-</b></div>
        <div class="profile-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8s4-4 10-4 10 4 10 4M5 12s3-3 7-3 7 3 7 3M8.5 15.5s1.5-1.5 3.5-1.5 3.5 1.5 3.5 1.5M12 19h.01"/></svg>BROWSER <b id="infoBrowser">-</b></div>
        <div class="profile-item"><span class="dot"></span>STATUS <b>Online</b></div>
      </div>
    </div>
    <div class="profile-bottom">
      <div class="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4"/></svg><span class="battery-bar"><span class="battery-fill" id="battFill"></span></span><span id="battPct">--%</span></div>
      <div class="pill role"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/></svg>Role : member</div>
    </div>
  </div>

  <div class="tabs">
    <button class="tab active tech" data-tab="all"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>All</button>
    <button class="tab tech" data-tab="downloader"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg>Downloader</button>
    <button class="tab tech" data-tab="tools"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-3-3z"/></svg>Tools</button>
  </div>

  <div class="section" data-group="downloader"><div class="section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg>Downloader<span class="line"></span></div><div class="grid" id="downloaderGrid"></div></div>
  <div class="section" data-group="tools"><div class="section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-3-3z"/></svg>Tools<span class="line"></span></div><div class="grid" id="toolsGrid"></div></div>
  <div class="footer-note">All Tools Kilzz · dibuat oleh Kilzz</div>
</div>

<div id="detail-view" class="view">
  <div class="detail-topbar"><button class="back-btn" onclick="goHome()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>All Tools Kilzz</button><div class="detail-topbar-title"><svg id="dTopIcon" viewBox="0 0 24 24" fill="currentColor"></svg><span id="dTopLabel">TOOL</span></div><div class="live-dot"></div></div>
  <div class="detail-hero"><div class="detail-eyebrow" id="dEyebrow">VIDEO & AUDIO</div><div class="detail-title display" id="dTitle">Downloader</div><div class="detail-desc" id="dDesc">Deskripsi tool.</div></div>
  <div class="status-card card"><div class="status-dot pending" id="dStatusDot"></div><div class="status-text"><b id="dStatusTitle">Nexray API ·</b><span id="dStatusSub">Belum diuji · jalankan fitur</span></div><div class="status-refresh" onclick="resetStatus()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0114-4.9M20 15a8 8 0 01-14 4.9"/></svg></div></div>
  <div class="feature-line" id="dFeatures">Video MP4 multi-resolusi · Info lengkap.</div>

  <div class="form-card card">
    <div id="formatWrap" style="display:none">
      <div class="field-label">Format</div>
      <div class="quality-row" id="formatRow"></div>
    </div>
    <div id="qualityWrap" style="display:none">
      <div class="field-label">Kualitas</div>
      <div class="quality-row" id="qualityRow"></div>
    </div>
    <div id="inputWrapUrl">
      <input type="text" id="urlInput" class="url-input" placeholder="Tempel URL di sini...">
    </div>
    <div id="inputWrapFile" style="display:none">
      <label class="file-label" id="fileLabelBox" for="fileInput">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l5 5h-3v6h-4V8H7l5-5zM4 15h2v4h12v-4h2v6H4v-6z"/></svg>
        <span id="fileLabelText">Pilih file untuk diupload...</span>
      </label>
      <input type="file" id="fileInput" accept="image/*,video/*,audio/*" style="display:none" onchange="onFileChosen(this)">
    </div>
    <button class="btn-main" id="submitBtn" onclick="runAction()">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      <span id="submitLabel">Ambil Info</span>
    </button>
  </div>

  <div class="msg err" id="errMsg"></div><div class="msg info" id="infoMsg"></div>
  <div class="result-card card" id="resultCard">
    <div id="singleResult">
      <img class="result-thumb" id="resThumb" src="" alt="thumbnail" onerror="this.style.display='none'">
      <div class="result-body">
        <div class="result-title" id="resTitle">-</div>
        <div class="result-meta"><span id="resDuration" style="display:none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg><b></b></span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/></svg><span id="resPlatform">-</span></span></div>
        <div class="dl-list" id="dlList"></div>
      </div>
    </div>
    <div id="searchResultList" class="result-body" style="display:none"></div>
  </div>
  <div style="padding:0 12px"><a class="raw-toggle" onclick="toggleRaw()">Lihat respons API mentah</a></div><pre class="raw-json card" id="rawJson"></pre>
  <div class="footer-note">All Tools Kilzz · dibuat oleh Kilzz</div>
</div>`;

/* ============================================================
   ICON SET
   ============================================================ */
const ICONS={
youtube:'<path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/>',
tiktok:'<path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.28 1.37V7.3s-1.88.09-3.22-1.48z"/>',
box:'<path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5V13L3 8zm18 0v8l-9 5V13l9-5z"/>',
instagram:'<path d="M12 8.6a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8zM12 2c-2.7 0-3.1 0-4.2.1-1 .1-1.7.2-2.4.5a4.8 4.8 0 00-1.7 1.1 4.8 4.8 0 00-1.1 1.7c-.3.7-.4 1.4-.5 2.4C2 8.9 2 9.3 2 12s0 3.1.1 4.2c.1 1 .2 1.7.5 2.4a4.8 4.8 0 001.1 1.7 4.8 4.8 0 001.7 1.1c.7.3 1.4.4 2.4.5 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c1-.1 1.7-.2 2.4-.5a4.8 4.8 0 001.7-1.1 4.8 4.8 0 001.1-1.7c.3-.7.4-1.4.5-2.4.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2c-.1-1-.2-1.7-.5-2.4a4.8 4.8 0 00-1.1-1.7 4.8 4.8 0 00-1.7-1.1c-.7-.3-1.4-.4-2.4-.5C15.1 2 14.7 2 12 2zm0 3.8a5.6 5.6 0 110 11.2 5.6 5.6 0 010-11.2zm5.8-.2a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z"/>',
link:'<path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1.5 1.5M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1.5-1.5"/>',
spotify:'<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.6 14.6a.6.6 0 01-.83.2c-2.3-1.4-5.2-1.7-8.6-.9a.6.6 0 11-.27-1.17c3.7-.85 6.9-.48 9.5 1.1a.6.6 0 01.2.76zm1.2-2.7a.75.75 0 01-1.03.25c-2.6-1.6-6.6-2.07-9.7-1.13a.75.75 0 11-.44-1.44c3.5-1.06 7.9-.54 10.9 1.3a.75.75 0 01.27 1.02zm.1-2.8C15.1 9.1 9.9 8.9 6.9 9.8a.9.9 0 11-.5-1.73c3.5-1.05 9.2-.8 12.8 1.4a.9.9 0 11-.9 1.55z"/>',
upload:'<path d="M12 3l5 5h-3v6h-4V8H7l5-5zM4 15h2v4h12v-4h2v6H4v-6z"/>',
search:'<path d="M10 3a7 7 0 104.9 12l5 5 1.4-1.4-5-5A7 7 0 0010 3zm0 2a5 5 0 110 10 5 5 0 010-10z"/>'
};

const API_KEY = 'sylva-XgcZHu2T'; // apikey Sylvatica — dipakai semua tool yang useApiKey:true

/* ============================================================
   TOOL CONFIG
   - inputType: 'url' (default) atau 'file'
   - paramName: nama query param untuk teks yang diinput user (default 'url')
   - useApiKey: true -> otomatis nambah &apikey=API_KEY di request
   - resultType: 'single' (default, 1 hasil) atau 'list' (banyak hasil, misal search)
   - formats: dipakai kalau satu tool punya beberapa pilihan format
     (contoh: YouTube MP4/MP3) — masing-masing format bisa punya
     endpoint, paramName, quality & useApiKey sendiri-sendiri.
   - endpoint:null artinya belum disambungkan ke API.
   ============================================================ */
const TOOLS={

  youtube:{
    group:'downloader', name:'YouTube', desc:'Video MP4 & Audio MP3', icon:ICONS.youtube,
    iconBg:'#FF0000', color:'#FF0000', shadow:'rgba(255,0,0,.45)',
    eyebrow:'VIDEO & AUDIO', title:'YouTube Downloader',
    longDesc:'Pilih format MP4 atau MP3, tempel link YouTube, lalu ambil hasilnya.',
    features:'Video MP4 multi-resolusi · Audio MP3 · Info lengkap.',
    inputType:'url',
    defaultFormat:'mp4',
    formats:{
      mp4:{
        label:'MP4', endpoint:'https://sylvatica.my.id/api/download/ytmp4', paramName:'url', useApiKey:true,
        quality:{ paramName:'resolusi', options:[
          {label:'1080p', value:'1080'},{label:'720p', value:'720'},
          {label:'480p', value:'480'},{label:'360p', value:'360'}
        ]}
      },
      mp3:{
        label:'MP3', endpoint:'https://sylvatica.my.id/api/download/ytmp3', paramName:'url', useApiKey:true, quality:null
      }
    }
  },

  tiktok:{
    group:'downloader', name:'TikTok', desc:'Video, foto & audio', icon:ICONS.tiktok,
    iconBg:'#010101', color:'#25F4EE', shadow:'rgba(37,244,238,.4)',
    eyebrow:'VIDEO & FOTO', title:'TikTok Downloader',
    longDesc:'Download video TikTok tanpa watermark, foto slide, dan audio original.',
    features:'MP4/MP3/JPG · Tanpa watermark.',
    inputType:'url',
    endpoint:'https://sylvatica.my.id/api/download/tiktok', paramName:'url', useApiKey:true, quality:null
  },

  terabox:{
    group:'downloader', name:'Terabox Downloader', desc:'Ambil file dari link share Terabox', icon:ICONS.box,
    iconBg:'linear-gradient(135deg,#0C5FFF,#00C2FF)', color:'#00A3FF', shadow:'rgba(0,163,255,.45)',
    eyebrow:'FILE', title:'Terabox Downloader',
    longDesc:'Tempel link share Terabox untuk mengambil file dan link unduhan langsung.',
    features:'Semua tipe file · Link langsung.',
    inputType:'url',
    endpoint:'https://api.nexray.eu.cc/downloader/terabox', paramName:'url', quality:null
  },

  instagram:{
    group:'downloader', name:'Instagram', desc:'Download video & foto', icon:ICONS.instagram,
    iconBg:'linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)', color:'#ee2a7b', shadow:'rgba(238,42,123,.45)',
    eyebrow:'VIDEO & FOTO', title:'Instagram Downloader',
    longDesc:'Tempel link Instagram (Reels, Post, atau Story) untuk mengambil video/foto-nya.',
    features:'HD · Reels, Post, Story.',
    inputType:'url',
    endpoint:'https://sylvatica.my.id/api/download/instagram', paramName:'url', useApiKey:true, quality:null
  },

  spotify:{
    group:'downloader', name:'Spotify', desc:'Download audio dari Spotify', icon:ICONS.spotify,
    iconBg:'#1DB954', color:'#1DB954', shadow:'rgba(29,185,84,.45)',
    eyebrow:'AUDIO', title:'Spotify Downloader',
    longDesc:'Tempel link lagu Spotify untuk mengambil audio dan info track.',
    features:'Audio MP3 · Info lagu.',
    inputType:'url',
    endpoint:'https://api.nexray.eu.cc/downloader/spotify', paramName:'url', quality:null
  },

  spotifySearch:{
    group:'downloader', name:'Spotify Search', desc:'Cari judul lagu/artis', icon:ICONS.search,
    iconBg:'#1DB954', color:'#1DB954', shadow:'rgba(29,185,84,.45)',
    eyebrow:'PENCARIAN', title:'Spotify Search',
    longDesc:'Ketik judul lagu atau nama artis untuk mencari track di Spotify.',
    features:'Pencarian judul/artis · Hasil banyak track.',
    inputType:'url', paramName:'q', placeholder:'Cari judul lagu atau artis...', actionLabel:'Cari Lagu',
    resultType:'list',
    endpoint:'https://sylvatica.my.id/api/search/spotify', useApiKey:true, quality:null
  },

  catbox:{
    group:'tools',
    name:'Catbox',
    desc:'Upload gambar/video/audio jadi link',
    icon:ICONS.upload,
    iconBg:'#fb923c',
    color:'#fb923c',
    shadow:'rgba(251,146,60,.45)',
    eyebrow:'IMG2URL',
    title:'Catbox Img2URL',
    longDesc:'Upload gambar, video, atau audio ke Catbox dan dapatkan direct URL. Catatan: file di atas ±4MB kemungkinan gagal karena batas platform hosting.',
    features:'Gambar · Video · Audio (maks ±4MB) · Direct URL.',
    inputType:'file',
    actionLabel:'Upload ke Catbox',
    endpoint:'/api/catbox'
  }
};

/* ============================================================
   RENDER GRID DI HOME
   ============================================================ */
function cardHTML(id,t){
  const disabled = !t.formats && !t.endpoint; // tool dengan 'formats' selalu dianggap aktif
  const bg = t.iconBg || t.color;
  return `<button class="tool-card ${disabled?'disabled':''}" onclick="${disabled?`alert('Endpoint untuk ${t.name} belum diisi di kode.')`:`openTool('${id}')`}">
    <div class="tool-icon" style="background:${bg}"><svg viewBox="0 0 24 24" fill="currentColor">${t.icon}</svg></div>
    <div class="tool-name">${t.name}</div>
    <div class="tool-desc">${t.desc}</div>
    <div class="tool-foot"><span class="tool-badge">${disabled?'SOON':'READY'}</span>
    <span class="tool-go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></span></div>
  </button>`;
}
function renderGrids(){
  const dl=document.getElementById('downloaderGrid'), tl=document.getElementById('toolsGrid');
  dl.innerHTML=''; tl.innerHTML='';
  Object.entries(TOOLS).forEach(([id,t])=>(t.group==='downloader'?dl:tl).insertAdjacentHTML('beforeend',cardHTML(id,t)));
}
renderGrids();

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const tab=btn.dataset.tab;
  document.querySelectorAll('.section[data-group]').forEach(sec=>sec.style.display=(tab==='all'||sec.dataset.group===tab)?'':'none');
}));

/* ============================================================
   INFO PERANGKAT
   ============================================================ */
(function deviceInfo(){
 const ua=navigator.userAgent;let device='Desktop';if(/android/i.test(ua))device='Android';else if(/iphone|ipad|ipod/i.test(ua))device='iOS';document.getElementById('infoDevice').textContent=device;
 let browser='Browser';if(/edg\//i.test(ua))browser='Edge';else if(/opr\//i.test(ua))browser='Opera';else if(/chrome|crios/i.test(ua))browser='Chrome';else if(/firefox|fxios/i.test(ua))browser='Firefox';else if(/safari/i.test(ua))browser='Safari';document.getElementById('infoBrowser').textContent=browser;
 const pctEl=document.getElementById('battPct'),fill=document.getElementById('battFill');
 function setBattery(pct){pct=Math.max(0,Math.min(100,Math.round(pct)));pctEl.textContent=pct+'%';fill.style.width=pct+'%';fill.style.setProperty('background',pct<15?'#ef4444':pct<=40?'#f97316':'#22d67a','important')}
 if(navigator.getBattery){navigator.getBattery().then(b=>{const upd=()=>setBattery(b.level*100);upd();b.addEventListener('levelchange',upd)}).catch(()=>pctEl.textContent='N/A')}else pctEl.textContent='N/A';
})();

/* ============================================================
   MUSIC PLAYER + HERO VIDEO
   ============================================================ */
const audio=new Audio("https://files.catbox.moe/rv9xl4.mp3");audio.preload='none';audio.autoplay=false;let playing=false;
const player=document.getElementById('player'),playPauseBtn=document.getElementById('playPauseBtn'),playIcon=document.getElementById('playIcon'),pauseIcon=document.getElementById('pauseIcon');
function updatePlayer(){player.classList.toggle('paused',!playing);playIcon.style.display=playing?'none':'block';pauseIcon.style.display=playing?'block':'none'}
playPauseBtn.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();playing=true}catch(e){playing=false}}else{audio.pause();playing=false}updatePlayer()});
audio.addEventListener('ended',()=>{playing=false;updatePlayer()});
const HERO_IMAGE_URL="https://files.catbox.moe/nc63iv.mp4";if(HERO_IMAGE_URL){const hero=document.getElementById('heroBanner'),video=document.createElement('video');video.src=HERO_IMAGE_URL;video.autoplay=true;video.muted=true;video.loop=true;video.playsInline=true;video.preload='metadata';hero.prepend(video);hero.style.background='linear-gradient(180deg,rgba(10,6,18,.1),rgba(10,6,18,.5))'}else document.getElementById('heroBanner').style.background='radial-gradient(circle at 30% 20%,#3b1a63,#0a0612 75%)';

/* ============================================================
   NAVIGASI HOME <-> DETAIL
   ============================================================ */
let currentTool=null;
let currentFormat=null; // key format aktif, khusus tool yang punya 'formats'
let chosenFile=null;    // File object khusus tool inputType:'file'

function renderQualityChips(qualityConf){
  const wrap=document.getElementById('qualityWrap'), row=document.getElementById('qualityRow');
  row.innerHTML='';
  if(!qualityConf){ wrap.style.display='none'; return; }
  wrap.style.display='';
  qualityConf.options.forEach((o,i)=>{
    const c=document.createElement('button');
    c.type='button'; c.className='quality-chip'+(i===0?' active':''); c.textContent=o.label; c.dataset.value=o.value;
    c.onclick=()=>{ row.querySelectorAll('.quality-chip').forEach(x=>x.classList.remove('active')); c.classList.add('active'); };
    row.appendChild(c);
  });
}

function renderFormatChips(t){
  const wrap=document.getElementById('formatWrap'), row=document.getElementById('formatRow');
  row.innerHTML='';
  if(!t.formats){ wrap.style.display='none'; return; }
  wrap.style.display='';
  const keys=Object.keys(t.formats);
  currentFormat=t.defaultFormat||keys[0];
  keys.forEach(key=>{
    const f=t.formats[key];
    const c=document.createElement('button');
    c.type='button'; c.className='quality-chip'+(key===currentFormat?' active':''); c.textContent=f.label; c.dataset.key=key;
    c.onclick=()=>{
      row.querySelectorAll('.quality-chip').forEach(x=>x.classList.remove('active'));
      c.classList.add('active');
      currentFormat=key;
      renderQualityChips(f.quality);
    };
    row.appendChild(c);
  });
  renderQualityChips(t.formats[currentFormat].quality);
}

function openTool(id){
  const t=TOOLS[id]; if(!t) return;
  currentTool=id; chosenFile=null;

  document.documentElement.style.setProperty('--dl-color', typeof t.color==='string' && t.color.startsWith('#') ? t.color : '#a855f7');
  document.documentElement.style.setProperty('--dl-shadow', t.shadow||'rgba(124,58,237,.5)');

  document.getElementById('dTopIcon').innerHTML=t.icon;
  document.getElementById('dTopLabel').textContent=t.name.toUpperCase();
  document.getElementById('dEyebrow').textContent=t.eyebrow;
  document.getElementById('dTitle').textContent=t.title;
  document.getElementById('dDesc').textContent=t.longDesc;
  document.getElementById('dFeatures').textContent=t.features;

  // format chips (kalau ada) — kalau tidak, sembunyikan & render quality biasa
  if(t.formats){ renderFormatChips(t); }
  else { document.getElementById('formatWrap').style.display='none'; renderQualityChips(t.quality); }

  // input url vs file
  const isFile = t.inputType==='file';
  document.getElementById('inputWrapUrl').style.display = isFile ? 'none' : '';
  document.getElementById('inputWrapFile').style.display = isFile ? '' : 'none';
  document.getElementById('urlInput').value='';
  document.getElementById('urlInput').placeholder = t.placeholder || `Tempel URL ${t.name}...`;
  document.getElementById('fileInput').value='';
  document.getElementById('fileLabelText').textContent='Pilih file untuk diupload...';
  document.getElementById('fileLabelBox').classList.remove('has-file');

  document.getElementById('submitLabel').textContent = t.actionLabel || 'Ambil Info';

  resetStatus(); hideResult(); window.scrollTo(0,0);
  document.getElementById('home-view').classList.remove('active');
  document.getElementById('detail-view').classList.add('active');
}

function goHome(){
  document.getElementById('detail-view').classList.remove('active');
  document.getElementById('home-view').classList.add('active');
  window.scrollTo(0,0);
}

function resetStatus(){
  document.getElementById('dStatusDot').className='status-dot pending';
  document.getElementById('dStatusSub').textContent='Belum diuji · jalankan fitur';
}
function hideResult(){
  document.getElementById('resultCard').classList.remove('show');
  document.getElementById('errMsg').classList.remove('show');
  document.getElementById('infoMsg').classList.remove('show');
  document.getElementById('rawJson').classList.remove('show');
  document.getElementById('rawJson').textContent='';
  document.getElementById('singleResult').style.display='';
  document.getElementById('searchResultList').style.display='none';
  document.getElementById('searchResultList').innerHTML='';
}
function toggleRaw(){ document.getElementById('rawJson').classList.toggle('show'); }

function onFileChosen(input){

  chosenFile =
    input.files && input.files[0]
      ? input.files[0]
      : null;

  const text =
    document.getElementById('fileLabelText');

  const box =
    document.getElementById('fileLabelBox');

  if(chosenFile){

    const sizeMB =
      (chosenFile.size / 1024 / 1024).toFixed(2);

    text.textContent =
      `${chosenFile.name} · ${sizeMB} MB`;

    box.classList.add('has-file');

  }else{

    text.textContent =
      'Pilih file untuk diupload...';

    box.classList.remove('has-file');
  }
}

/* ============================================================
   AKSI UTAMA — cabang ke download (url) atau upload (file)
   ============================================================ */
function runAction(){
  const t=TOOLS[currentTool];
  if(t.inputType==='file') return uploadFile(t);
  return runDownload(t);
}

async function runDownload(t){
  const urlVal=document.getElementById('urlInput').value.trim();
  const err=document.getElementById('errMsg'), info=document.getElementById('infoMsg');
  const btn=document.getElementById('submitBtn'), label=document.getElementById('submitLabel');
  hideResult();

  if(!urlVal){ err.textContent = t.paramName==='q' ? 'Ketik dulu kata kuncinya sebelum lanjut.' : 'Tempel URL dulu sebelum lanjut.'; err.classList.add('show'); return; }

  // tentukan endpoint & param aktif (beda kalau tool punya 'formats')
  let endpoint, paramName, qualityConf, useApiKey;
  if(t.formats){
    const f=t.formats[currentFormat];
    endpoint=f.endpoint; paramName=f.paramName; qualityConf=f.quality; useApiKey=f.useApiKey;
  } else {
    endpoint=t.endpoint; paramName=t.paramName||'url'; qualityConf=t.quality; useApiKey=t.useApiKey;
  }

  if(!endpoint){ err.textContent='Endpoint tool ini belum diisi. Tambahkan di objek TOOLS pada kode.'; err.classList.add('show'); return; }

  btn.disabled=true; label.innerHTML=''; btn.querySelector('svg').style.display='none';
  btn.insertBefore(Object.assign(document.createElement('span'),{className:'spinner',id:'spin'}),label);
  label.textContent = paramName==='q' ? 'Mencari...' : 'Memproses...';

  try{
    // urutan param dijaga: url/q dulu, lalu resolusi/kualitas, apikey paling akhir
    const p=new URLSearchParams();
    p.set(paramName, urlVal);
    if(qualityConf){
      const c=document.querySelector('#qualityRow .quality-chip.active');
      if(c) p.set(qualityConf.paramName, c.dataset.value);
    }
    if(useApiKey) p.set('apikey', API_KEY);

    const res=await fetch(`${endpoint}?${p.toString()}`);
    const raw=await res.text();
    let data; try{ data=JSON.parse(raw); } catch(e){ throw new Error('Respons API bukan JSON valid.'); }

    document.getElementById('rawJson').textContent=JSON.stringify(data,null,2);
    if(!res.ok) throw new Error(data.message||data.error||`API mengembalikan status ${res.status}`);

    if(t.resultType==='list') renderSearchResults(data, t);
    else renderResult(data, t);

    document.getElementById('dStatusDot').className='status-dot ok';
    document.getElementById('dStatusSub').textContent='Aktif · terakhir berhasil sekarang';
  } catch(e){
    err.textContent='Gagal mengambil data: '+e.message+' — cek tombol "Lihat respons API mentah" untuk detail.';
    err.classList.add('show');
    document.getElementById('dStatusDot').className='status-dot bad';
    document.getElementById('dStatusSub').textContent='Gagal · coba lagi';
  } finally {
    btn.disabled=false; const s=document.getElementById('spin'); if(s) s.remove();
    btn.querySelector('svg').style.display=''; label.textContent=t.actionLabel||'Ambil Info';
  }
}

/* Upload (Catbox) — mendukung gambar, video, dan audio (maks ±4MB) */
async function uploadFile(t){
  const err = document.getElementById('errMsg');
  const info = document.getElementById('infoMsg');
  const btn = document.getElementById('submitBtn');
  const label = document.getElementById('submitLabel');

  hideResult();

  if(!chosenFile){
    err.textContent = 'Pilih file dulu sebelum upload.';
    err.classList.add('show');
    return;
  }

  const allowedPrefixes = ['image/', 'video/', 'audio/'];
  if(!allowedPrefixes.some(p => chosenFile.type.startsWith(p))){
    err.textContent = 'File yang dipilih harus berupa gambar, video, atau audio.';
    err.classList.add('show');
    return;
  }

  const maxSize = 4 * 1024 * 1024;

  if(chosenFile.size > maxSize){
    err.textContent =
      'Ukuran file terlalu besar. Maksimal 4 MB.';
    err.classList.add('show');
    return;
  }

  btn.disabled = true;

  const oldIcon = btn.querySelector('svg');

  if(oldIcon){
    oldIcon.style.display = 'none';
  }

  const spinner = document.createElement('span');
  spinner.className = 'spinner';
  spinner.id = 'spin';

  btn.insertBefore(spinner, label);

  label.textContent = 'Mengupload...';

  try{

    /*
      File dikirim langsung sebagai body ke
      Vercel Function.

      Userhash TIDAK dikirim dari browser.
      Userhash disimpan di Environment Variable Vercel.
    */
    const response = await fetch(t.endpoint, {
      method: 'POST',

      headers: {
        'Content-Type': chosenFile.type,
        'X-Filename': encodeURIComponent(chosenFile.name)
      },

      body: chosenFile
    });

    const raw = await response.text();

    let data;

    try{
      data = JSON.parse(raw);
    }catch{
      throw new Error(
        raw || `Server mengembalikan status ${response.status}`
      );
    }

    document.getElementById('rawJson').textContent =
      JSON.stringify(data, null, 2);

    if(!response.ok || !data.ok){
      throw new Error(
        data.error ||
        `Upload gagal dengan status ${response.status}`
      );
    }

    if(!data.url){
      throw new Error(
        'Upload berhasil tetapi Catbox tidak memberikan URL.'
      );
    }

    renderCatboxResult(data);

    document.getElementById('dStatusDot').className =
      'status-dot ok';

    document.getElementById('dStatusSub').textContent =
      'Aktif · file berhasil diupload';

    info.textContent =
      'File berhasil diupload ke Catbox.';

    info.classList.add('show');

  }catch(error){

    err.textContent =
      'Gagal upload: ' + error.message;

    err.classList.add('show');

    document.getElementById('dStatusDot').className =
      'status-dot bad';

    document.getElementById('dStatusSub').textContent =
      'Gagal · coba lagi';

  }finally{

    btn.disabled = false;

    const spin = document.getElementById('spin');

    if(spin){
      spin.remove();
    }

    if(oldIcon){
      oldIcon.style.display = '';
    }

    label.textContent =
      t.actionLabel || 'Upload';

  }
}

function renderCatboxResult(data){

  const resultCard =
    document.getElementById('resultCard');

  const single =
    document.getElementById('singleResult');

  const search =
    document.getElementById('searchResultList');

  single.style.display = '';
  search.style.display = 'none';

  const thumb =
    document.getElementById('resThumb');

  thumb.src = data.url;
  thumb.style.display = '';

  document.getElementById('resTitle').textContent =
    data.filename || 'File berhasil diupload';

  document.getElementById('resPlatform').textContent =
    'Catbox';

  document.getElementById('resDuration').style.display =
    'none';

  const list =
    document.getElementById('dlList');

  list.innerHTML = '';

  const row =
    document.createElement('div');

  row.className = 'dl-item';

  row.innerHTML = `
    <span>
      <svg
        class="file-ic"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2">
        <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1.5 1.5"/>
        <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1.5-1.5"/>
      </svg>
      Direct URL
    </span>

    <a
      class="dl-btn"
      href="${escapeHtml(data.url)}"
      target="_blank"
      rel="noopener">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/>
      </svg>
      Buka
    </a>
  `;

  list.appendChild(row);

  const urlBox =
    document.createElement('div');

  urlBox.style.cssText = `
    margin-top:8px;
    display:flex;
    gap:7px;
    width:100%;
  `;

  urlBox.innerHTML = `
    <input
      id="catboxUrlOutput"
      class="url-input"
      value="${escapeHtml(data.url)}"
      readonly
      style="flex:1;min-width:0;"
    >

    <button
      type="button"
      class="dl-btn"
      onclick="copyCatboxUrl()">
      Copy
    </button>
  `;

  list.appendChild(urlBox);

  resultCard.classList.add('show');
}

function escapeHtml(value){

  return String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#039;');

}

async function copyCatboxUrl(){

  const input =
    document.getElementById('catboxUrlOutput');

  if(!input) return;

  const url = input.value;

  try{

    await navigator.clipboard.writeText(url);

  }catch{

    input.focus();
    input.select();
    input.setSelectionRange(0, 99999);

    document.execCommand('copy');
  }

  const info =
    document.getElementById('infoMsg');

  info.textContent =
    'URL Catbox berhasil disalin.';

  info.classList.add('show');

}

/* ============================================================
   PARSER RESPON (single) — otomatis cari url/thumbnail/judul
   ============================================================ */
function walk(obj,cb,path=''){
  if(obj==null) return;
  if(typeof obj==='object') Object.entries(obj).forEach(([k,v])=>{
    if(typeof v==='string'||typeof v==='number') cb(k,v,path);
    else if(typeof v==='object') walk(v,cb,path?path+'.'+k:k);
  });
}

function renderResult(data,t){
  document.getElementById('singleResult').style.display='';
  document.getElementById('searchResultList').style.display='none';

  let thumb='',title='',duration='',platform=t.name; const links=[]; const seenUrl=new Set();
  walk(data,(key,val,path)=>{
    const k=key.toLowerCase();
    // gabung path+key: item di dalam array (mis. downloads.nowm[0]) cuma punya index angka
    // sebagai key sendiri, jadi harus ikut cek nama parent-nya biar kebaca
    const combined=(path+'.'+key).toLowerCase();
    if(typeof val==='string' && /^https?:\/\//i.test(val)){
      if(/thumb|cover|image|poster/.test(combined) && !thumb) thumb=val;
      else if(/url|link|download|play|src|media|mp3|audio|nowm|slides?/.test(combined) && !seenUrl.has(val)){
        seenUrl.add(val);
        links.push({label:guessLabel(path,key),url:val});
      }
    } else if(typeof val==='string'){
      if(/title|caption|filename|name/.test(k) && !title && val.length<200) title=val;
      if(/duration|length/.test(k) && !duration) duration=val;
    } else if(typeof val==='number' && /duration|length/.test(k) && !duration){ duration=val+'s'; }
  });

  document.getElementById('resThumb').src=thumb;
  document.getElementById('resThumb').style.display=thumb?'':'none';
  document.getElementById('resTitle').textContent=title||'Media ditemukan';
  document.getElementById('resPlatform').textContent=platform;
  if(duration){ document.getElementById('resDuration').style.display=''; document.getElementById('resDuration').querySelector('b').textContent=duration; }
  else document.getElementById('resDuration').style.display='none';

  const list=document.getElementById('dlList'); list.innerHTML=''; const seen=new Set();
  links.forEach(l=>{
    if(seen.has(l.url)) return; seen.add(l.url);
    const row=document.createElement('div'); row.className='dl-item';
    row.innerHTML=`<span><svg class="file-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>${l.label}</span><a class="dl-btn" href="${l.url}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg>Unduh</a>`;
    list.appendChild(row);
  });

  if(!links.length){
    document.getElementById('infoMsg').textContent='Data diterima tapi tidak ada link unduhan yang terbaca otomatis — cek respons mentah di bawah.';
    document.getElementById('infoMsg').classList.add('show');
  }
  document.getElementById('resultCard').classList.add('show');
}

/* ============================================================
   PARSER RESPON (list) — untuk hasil pencarian (Spotify Search dll)
   ============================================================ */
function findResultArray(obj){
  // cari array of objects pertama yang "kelihatan" seperti daftar hasil
  // (item-nya punya field title/name/track)
  let best=null;
  function scan(o){
    if(Array.isArray(o)){
      if(o.length && typeof o[0]==='object' && o[0]!==null){
        const keys=Object.keys(o[0]).join(' ').toLowerCase();
        if(/title|name|track|judul/.test(keys) && !best) best=o;
      }
      o.forEach(scan);
    } else if(o && typeof o==='object'){
      Object.values(o).forEach(scan);
    }
  }
  scan(obj);
  return best;
}

function extractItemLink(item){
  let link='';
  walk(item,(k,v)=>{
    if(!link && typeof v==='string' && /^https?:\/\//i.test(v) && /url|link|download|play|preview|audio|src/i.test(k)) link=v;
  });
  return link;
}
function extractItemField(item, pattern){
  let out='';
  walk(item,(k,v)=>{
    if(!out && typeof v==='string' && pattern.test(k) && v.length<200) out=v;
  });
  return out;
}

function renderSearchResults(data,t){
  document.getElementById('singleResult').style.display='none';
  const wrap=document.getElementById('searchResultList');
  wrap.style.display=''; wrap.innerHTML='';

  const items=findResultArray(data);
  if(!items || !items.length){
    document.getElementById('infoMsg').textContent='Tidak ada hasil yang terbaca otomatis dari respons — cek "Lihat respons API mentah" di bawah.';
    document.getElementById('infoMsg').classList.add('show');
    document.getElementById('resultCard').classList.add('show');
    return;
  }

  items.slice(0,20).forEach(item=>{
    const title = extractItemField(item, /title|name|track|judul/i) || 'Tanpa judul';
    const subtitle = extractItemField(item, /artist|singer|channel|uploader|author/i);
    const thumb = extractItemField(item, /thumb|cover|image|artwork|poster/i);
    const link = extractItemLink(item);

    const row=document.createElement('div'); row.className='search-item';
    row.innerHTML = `
      <img src="${thumb}" alt="" onerror="this.style.display='none'">
      <div class="si-info">
        <div class="si-title">${title}</div>
        ${subtitle?`<div class="si-sub">${subtitle}</div>`:''}
      </div>
      ${link ? `<a class="dl-btn" href="${link}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg>Buka</a>` : ''}
    `;
    wrap.appendChild(row);
  });

  document.getElementById('resultCard').classList.add('show');
}

function guessLabel(path,key){
  const s=(path+'.'+key).toLowerCase();
  if(/audio|mp3/.test(s)) return'Audio';
  if(/hd/.test(s)) return'Video HD';
  if(/sd/.test(s)) return'Video SD';
  if(/1080/.test(s)) return'Video 1080p';
  if(/720/.test(s)) return'Video 720p';
  if(/480/.test(s)) return'Video 480p';
  if(/no.?water|nowm/.test(s)) return'Tanpa Watermark';
  if(/video/.test(s)) return'Video';
  if(/image|photo|foto/.test(s)) return'Gambar';
  return key;
}
