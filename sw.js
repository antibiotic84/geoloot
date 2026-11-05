/* GEOLOOT service worker – çevrimdışı çalışma */
const CACHE='geoloot-05cf55aa';
const TILES='geoloot-tiles', TILE_HOSTS=['tile.openstreetmap.org','a.tile.opentopomap.org','b.tile.opentopomap.org','c.tile.opentopomap.org'], TILE_MAX=4000;
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon-32.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==TILES).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  if(TILE_HOSTS.includes(u.hostname)){
    // harita karoları: önce önbellek (bakılan alanlar çevrimdışı da görünür); toplu indirme yapılmaz
    e.respondWith(caches.open(TILES).then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{ if(res.ok){ c.put(r,res.clone()); c.keys().then(k=>{ if(k.length>TILE_MAX) k.slice(0,k.length-TILE_MAX).forEach(x=>c.delete(x)); }); } return res; }))));
    return;
  }
  if(u.origin!==location.origin) return;
  if(r.mode==='navigate'){
    // sayfa: önce ağ (güncel sürüm), ağ yoksa önbellek
    e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{ const cp=res.clone(); caches.open(CACHE).then(c=>c.put('./index.html',cp)); return res; }).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{ const cp=res.clone(); caches.open(CACHE).then(c=>c.put(r,cp)); return res; })));
});
