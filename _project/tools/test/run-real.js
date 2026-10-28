// Real-library check (three.js r160 + GSAP 3.12.5 + Archivo/Geist Mono, WebGL via SwiftShader).
// The cloud sandbox cannot reach the CDNs, but GitHub works, so fetch the libs once:
//   L=/tmp/libs; git clone -q --depth 1 --filter=blob:none --sparse -b r160 https://github.com/mrdoob/three.js $L/three && (cd $L/three && git sparse-checkout set build examples/jsm/utils)
//   git clone -q --depth 1 --filter=blob:none --sparse -b 3.12.5 https://github.com/greensock/GSAP $L/gsap && (cd $L/gsap && git sparse-checkout set dist)
//   git clone -q --depth 1 --filter=blob:none --sparse https://github.com/google/fonts $L/gfonts && (cd $L/gfonts && git sparse-checkout set ofl/archivo ofl/geistmono)
// Run: LIBS=/tmp/libs NODE_PATH=$(npm root -g) node _project/tools/test/run-real.js [shot-prefix]
// Lenis is stubbed (native scroll). Output: real-*.png next to this file.
const { chromium } = require('playwright');
const S = require('./stubs.js');
const fs = require('fs'), path = require('path');
const L = process.env.LIBS; if (!L) { console.error('set LIBS'); process.exit(1); }
const ROOT = path.resolve(__dirname, '../../..');
const OUT = p => path.join(__dirname, `real-${p}.png`);
const fontCSS = `@font-face{font-family:'Archivo';src:url(http://t.local/__font/archivo.ttf) format('truetype');font-weight:100 900;font-stretch:62% 125%}
@font-face{font-family:'Geist Mono';src:url(http://t.local/__font/geist.ttf) format('truetype');font-weight:100 900}`;
async function page(browser, vp){
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, isMobile: !!vp.m, hasTouch: !!vp.m, deviceScaleFactor: 1 });
  const pg = await ctx.newPage(); pg.errs = []; pg.setDefaultTimeout(120000);
  pg.on('pageerror', e => pg.errs.push('PAGEERR ' + e.message));
  pg.on('console', m => { if (m.type() === 'error') pg.errs.push(m.text()); });
  await pg.route('**/*', r => {
    const u = r.request().url();
    if (u.startsWith('http://t.local/') && (u.endsWith('/') || u.includes('/?') || u.includes('/#'))) return r.fulfill({ body: fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'), contentType: 'text/html' });
    if (u.includes('gsap.min.js')) return r.fulfill({ path: path.join(L, 'gsap/dist/gsap.min.js') });
    if (u.includes('ScrollTrigger.min.js')) return r.fulfill({ path: path.join(L, 'gsap/dist/ScrollTrigger.min.js') });
    if (u.includes('lenis')) return r.fulfill({ body: S.lenis, contentType: 'application/javascript' });
    if (u.includes('three.module.js')) return r.fulfill({ path: path.join(L, 'three/build/three.module.js'), contentType: 'application/javascript' });
    if (u.includes('BufferGeometryUtils')) return r.fulfill({ path: path.join(L, 'three/examples/jsm/utils/BufferGeometryUtils.js'), contentType: 'application/javascript' });
    if (u.includes('fonts.googleapis.com')) return r.fulfill({ body: fontCSS, contentType: 'text/css' });
    if (u.endsWith('/__font/archivo.ttf')) return r.fulfill({ path: path.join(L, 'gfonts/ofl/archivo/Archivo[wdth,wght].ttf') });
    if (u.endsWith('/__font/geist.ttf')) return r.fulfill({ path: path.join(L, 'gfonts/ofl/geistmono/GeistMono[wght].ttf') });
    const m = u.match(/http:\/\/t\.local\/(img|logos)\/([^?#]+)/);
    if (m) return r.fulfill({ path: path.join(ROOT, m[1], decodeURIComponent(m[2])) });
    return r.fulfill({ status: 404, body: '' });
  });
  return pg;
}
(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  for (const vp of [{ n: 'desk', w: 1440, h: 900 }, { n: 'mob', w: 390, h: 844, m: true }]) {
    const pg = await page(browser, vp);
    await pg.goto('http://t.local/');
    await pg.waitForTimeout(9000);
    await pg.screenshot({ path: OUT(vp.n + '-hero') });
    if (!vp.m) {
      await pg.mouse.move(1300, 160); await pg.waitForTimeout(1600);
      await pg.screenshot({ path: OUT(vp.n + '-hero-tilt') });
      await pg.mouse.move(560, 520); await pg.waitForTimeout(1200);
      await pg.screenshot({ path: OUT(vp.n + '-hero-hover') });
    }
    const gl = await pg.evaluate(() => document.documentElement.classList.contains('gl-ready'));
    // brands grid + a work chapter
    await pg.evaluate(() => document.querySelector('#brands').scrollIntoView()); await pg.waitForTimeout(2500);
    await pg.screenshot({ path: OUT(vp.n + '-brands') });
    await pg.evaluate(() => { const sp = document.querySelector('#workPin').parentElement; scrollTo(0, sp.offsetTop + (sp.offsetHeight - innerHeight) * .62); }); await pg.waitForTimeout(3000);
    await pg.screenshot({ path: OUT(vp.n + '-work') });
    // skills accordion
    await pg.evaluate(() => { document.querySelector('#skills').scrollIntoView(); });
    await pg.waitForTimeout(800);
    await pg.evaluate(() => document.querySelectorAll('.sk-head')[3].click());
    await pg.waitForTimeout(1500);
    await pg.screenshot({ path: OUT(vp.n + '-skills') });
    // open a case from the brand grid
    await pg.evaluate(() => { document.querySelector('#brands').scrollIntoView(); });
    await pg.waitForTimeout(800);
    await pg.evaluate(() => document.querySelectorAll('.bcell.has-case')[5].click()).catch(() => {});
    await pg.waitForTimeout(3500);
    await pg.screenshot({ path: OUT(vp.n + '-case') });
    console.log(vp.n, 'gl', gl, 'hash', await pg.evaluate(() => location.hash), '\n', pg.errs.join('\n'));
    await pg.context().close();
  }
  await browser.close();
})();
