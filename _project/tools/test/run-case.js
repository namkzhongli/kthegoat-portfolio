// Offline check of the case-study overlay (#kaza): opens it with reduced motion (stub libs), then screenshots
// the whole overlay content at desktop and phone size. Run: NODE_PATH=$(npm root -g) node _project/tools/test/run-case.js
const { chromium } = require('playwright');
const S = require('./stubs.js');
const fs = require('fs'), path = require('path');
(async () => {
  const ROOT = path.resolve(__dirname, '../../..');
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const browser = await chromium.launch();
  for (const vp of [{n:'desk',w:1440,h:900},{n:'mob',w:390,h:844,m:true}]) {
    const ctx = await browser.newContext({ viewport:{width:vp.w,height:vp.h}, isMobile:!!vp.m, hasTouch:!!vp.m, reducedMotion:'reduce' });
    const page = await ctx.newPage(); const errs = [];
    page.on('pageerror', e => errs.push('PAGEERR '+e.message));
    page.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
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
    await page.waitForTimeout(1500);
    await page.evaluate(() => { const l = document.getElementById('loader'); if (l) l.remove(); document.querySelector('.bcell.has-case').click(); });
    await page.waitForTimeout(800);
    const info = await page.evaluate(() => {
      const cs = document.getElementById('cs'), iw = innerWidth;
      const wide = [...cs.querySelectorAll('*')].filter(e => { const b = e.getBoundingClientRect(); return b.width && b.right > iw + 1 && !e.closest('.cs-track,.cs-mq'); }).slice(0, 8).map(e => e.tagName + '.' + e.className + ':' + Math.round(e.getBoundingClientRect().right));
      return { open: cs.classList.contains('open'), hash: location.hash, h: cs.scrollHeight, overflowX: cs.scrollWidth - cs.clientWidth, idx: document.getElementById('csIdx').textContent, wide,
        imgs: [...cs.querySelectorAll('img')].length, mainInert: document.querySelector('main').inert };
    });
    console.log(vp.n, JSON.stringify(info), '\n', errs.join('\n'));
    await page.evaluate(() => { const cs = document.getElementById('cs'); cs.querySelectorAll('img').forEach(i => i.loading = 'eager'); Object.assign(cs.style, { position:'absolute', height:'auto', overflow:'visible' }); document.querySelector('main').style.display = 'none'; document.querySelector('.cs-bar').style.position = 'absolute'; });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: path.join(__dirname, `case-${vp.n}.png`), fullPage: true });
    await ctx.close();
  }
  await browser.close();
})();
