import{s as y,E as b,F as E,G as S,H as $}from"./index-3c51c478.js";const a=[];function q(n,c){return{subscribe:w(n,c).subscribe}}function w(n,c=b){let i;const e=new Set;function o(s){if(y(n,s)&&(n=s,i)){const u=!a.length;for(const t of e)t[1](),a.push(t,n);if(u){for(let t=0;t<a.length;t+=2)a[t][0](a[t+1]);a.length=0}}}function f(s){o(s(n))}function r(s,u=b){const t=[s,u];return e.add(t),e.size===1&&(i=c(o)||b),s(n),()=>{e.delete(t),e.size===0&&(i(),i=null)}}return{set:o,update:f,subscribe:r}}function z(n,c,i){const e=!Array.isArray(n),o=e?[n]:n,f=c.length<2;return q(i,r=>{let s=!1;const u=[];let t=0,d=b;const m=()=>{if(t)return;d();const l=c(e?u[0]:u,r);f?r(l):d=$(l)?l:b},_=o.map((l,h)=>E(l,g=>{u[h]=g,t&=~(1<<h),s&&m()},()=>{t|=1<<h}));return s=!0,m(),function(){S(_),d()}})}const k="modulepreload",p={},C="/_app/immutable/",A=function(c,i){return!i||i.length===0?c():Promise.all(i.map(e=>{if(e=`${C}${e}`,e in p)return;p[e]=!0;const o=e.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${f}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":k,o||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),o)return new Promise((s,u)=>{r.addEventListener("load",s),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>c())};export{A as _,z as d,w};
