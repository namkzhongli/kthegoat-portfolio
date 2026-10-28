exports.gsap = `
(function(){
 const arr=t=>typeof t==='string'?[...document.querySelectorAll(t)]:Array.isArray(t)?t.flat():t&&t.length!==undefined&&!(t instanceof Element)?[...t]:[t];
 const apply=(t,v)=>{ if(!v) return; arr(t).forEach(el=>{ if(!(el instanceof Element)) { if(el && typeof el==='object') Object.keys(v).forEach(k=>{ if(typeof v[k]==='number') el[k]=v[k]; }); return; }
   if('autoAlpha' in v){ el.style.opacity=v.autoAlpha; el.style.visibility=v.autoAlpha?'inherit':'hidden'; }
   if('clipPath' in v) el.style.clipPath=v.clipPath;
   if(v.attr) Object.keys(v.attr).forEach(k=>el.setAttribute(k,v.attr[k]));
   if('zIndex' in v) el.style.zIndex=v.zIndex; }); };
 const tw=()=>({kill(){},progress(){return 0}});
 const mkTl=(o)=>{ if(o&&o.onComplete) setTimeout(o.onComplete,0); const tl={ to(t,v){apply(t,v);return tl}, from(){return tl}, fromTo(t,a,b){apply(t,a);return tl}, set(t,v){apply(t,v);return tl}, eventCallback(){return tl}, duration(){return 10}, time(){return 0}, progress(){return 0} }; return tl; };
 window.__tickers=[];
 window.gsap={ registerPlugin(){}, to(t,v){return tw()}, from(){return tw()}, fromTo(t,a,b){return tw()}, set(t,v){apply(t,v);return tw()}, timeline(o){return mkTl(o)}, context(f){ try{f()}catch(e){console.error(e)} return {revert(){},add(){}} }, ticker:{add(f){window.__tickers.push(f)}, remove(){}, lagSmoothing(){}} };
})();`;
exports.st = `window.ScrollTrigger={create(o){return {start:0,end:1000}},addEventListener(){},removeEventListener(){},config(){},refresh(){},update(){},maxScroll(){return 1000}};`;
exports.lenis = `window.Lenis=class{constructor(){} on(){} raf(){} scrollTo(){} stop(){} start(){} destroy(){}};`;
exports.three = `
export class Vector2{constructor(x,y){this.x=x;this.y=y}}
export class Shape{constructor(p){this.pts=p;this.holes=[]}}
export class Path{constructor(p){this.pts=p}}
export class WebGLRenderer{constructor(){throw new Error('stub: no webgl')}}
export const MathUtils={degToRad:d=>d*Math.PI/180};
export class Group{} export class Scene{} export class PerspectiveCamera{} export class Mesh{} export class Color{}
export class MeshStandardMaterial{} export class MeshBasicMaterial{} export class ShaderMaterial{} export class SphereGeometry{} export class PlaneGeometry{} export class ExtrudeGeometry{} export class PMREMGenerator{}
export const BackSide=1, DoubleSide=2, ACESFilmicToneMapping=4;`;
exports.utils = `export function toCreasedNormals(g){return g}`;
