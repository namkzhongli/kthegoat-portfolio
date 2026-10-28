// Offline layout/smoke test. CDN libs are replaced by stubs (no real animation/WebGL).
// Run: NODE_PATH=$(npm root -g) node _project/tools/test/run.js  -> desk-full.png, mob-full.png
const { chromium } = require('playwright');
const S = require('./stubs.js');
const fs = require('fs');
(async () => {
  const path = require('path'); const ROOT = path.resolve(__dirname, '../../..');
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const browser = await chromium.launch();
  for (const vp of [{n:'desk',w:1440,h:900},{n:'mob',w:390,h:844,m:true}]) {
    const ctx = await browser.newContext({ viewport:{width:vp.w,height:vp.h}, isMobile:!!vp.m, hasTouch:!!vp.m, deviceScaleFactor:1 });
    const page = await ctx.newPage();
    const errs=[];
    page.on('pageerror', e => errs.push('PAGEERR '+e.message));
    page.on('console', m => { if (m.type()==='error' || m.type()==='warning') errs.push(m.type()+': '+m.text()); });
    await page.route('**/*', r => {
      const u = r.request().url();
      if (u.endsWith('/test.html')) return r.fulfill({ body: html, contentType:'text/html' });
      if (u.includes('gsap.min.js')) return r.fulfill({ body:S.gsap, contentType:'application/javascript' });
      if (u.includes('ScrollTrigger')) return r.fulfill({ body:S.st, contentType:'application/javascript' });
      if (u.includes('lenis')) return r.fulfill({ body:S.lenis, contentType:'application/javascript' });
      if (u.includes('three.module')) return r.fulfill({ body:S.three, contentType:'application/javascript' });
      if (u.includes('BufferGeometryUtils')) return r.fulfill({ body:S.utils, contentType:'application/javascript' });
      const m = u.match(/http:\/\/t\.local\/(img|logos)\/(.+)$/);
      if (m) return r.fulfill({ path: path.join(ROOT, m[1], decodeURIComponent(m[2])) });
      return r.fulfill({ status:404, body:'' });
    });
    await page.goto('http://t.local/test.html');
    await page.waitForTimeout(2500);
    const info = await page.evaluate(() => {
      const r=null;
      const r2=null;
      const sw = document.documentElement.scrollWidth, iw = innerWidth;
      return { letters: r && r.letters.map(l=>({n:l.shapes.length,h:l.shapes.reduce((a,s)=>a+s.holes.length,0),x:+l.x.toFixed(2)})), w:r&&r.w, h:r&&r.h, two: r2 && r2.letters.length,
        overflow: sw - iw, loader: !!document.getElementById('loader'), glReady: document.documentElement.classList.contains('gl-ready'),
        st: document.getElementById('stTitle').textContent, chs: document.querySelectorAll('.ch').length, cells: document.querySelectorAll('.bcell').length,
        wide: [...document.querySelectorAll('body *')].filter(e=>{const b=e.getBoundingClientRect(); return b.right>iw+1 && !e.closest('.mq,.strip,.bgnames,.grain,#loader,.bezel')}).slice(0,8).map(e=>e.tagName+'.'+e.className+':'+Math.round(e.getBoundingClientRect().right)) };
    });
    console.log(vp.n, JSON.stringify(info), '\n', errs.join('\n'));
    await page.evaluate(()=>{ const l=document.getElementById('loader'); if(l) l.remove(); });
    // make split chars visible & render static full page
    await page.screenshot({ path: path.join(__dirname, `${vp.n}-full.png`), fullPage:true });
    await ctx.close();
  }
  await browser.close();
})();
