import{r as m}from"./index._83CrWW8.js";import{h as A,M,j as g,p as P,v as k,c as C,k as T,e as v,d as I,f as R,u as N}from"./motion.eGBi1l74.js";import{w as V}from"./errors.XUWOsSd4.js";import{r as X}from"./resolve-element.cxDUm8eP.js";function ge(e){const t=A(()=>g(e)),{isStatic:o}=m.useContext(M);if(o){const[,n]=m.useState(e);m.useEffect(()=>t.on("change",n),[])}return t}const w=new WeakMap;let d;function Y(e,t){if(t){const{inlineSize:o,blockSize:n}=t[0];return{width:o,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function D({target:e,contentRect:t,borderBoxSize:o}){var n;(n=w.get(e))===null||n===void 0||n.forEach(s=>{s({target:e,contentSize:t,get size(){return Y(e,o)}})})}function G(e){e.forEach(D)}function F(){typeof ResizeObserver>"u"||(d=new ResizeObserver(G))}function _(e,t){d||F();const o=X(e);return o.forEach(n=>{let s=w.get(n);s||(s=new Set,w.set(n,s)),s.add(t),d?.observe(n)}),()=>{o.forEach(n=>{const s=w.get(n);s?.delete(t),s?.size||d?.unobserve(n)})}}const y=new Set;let p;function j(){p=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};y.forEach(o=>o(t))},window.addEventListener("resize",p)}function J(e){return y.add(e),p||j(),()=>{y.delete(e),!y.size&&p&&(p=void 0)}}function $(e,t){return typeof e=="function"?J(e):_(e,t)}const q=50,S=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),K=()=>({time:0,x:S(),y:S()}),Q={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function H(e,t,o,n){const s=o[t],{length:r,position:i}=Q[t],l=s.current,u=o.time;s.current=e["scroll"+i],s.scrollLength=e["scroll"+r]-e["client"+r],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=P(0,s.scrollLength,s.current);const f=n-u;s.velocity=f>q?0:k(s.current-l,f)}function U(e,t,o){H(e,"x",t,o),H(e,"y",t,o),t.time=o}function Z(e,t){const o={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)o.x+=n.offsetLeft,o.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const s=n.getBoundingClientRect();n=n.parentElement;const r=n.getBoundingClientRect();o.x+=s.left-r.left,o.y+=s.top-r.top}else if(n instanceof SVGGraphicsElement){const{x:s,y:r}=n.getBBox();o.x+=s,o.y+=r;let i=null,l=n.parentNode;for(;!i;)l.tagName==="svg"&&(i=l),l=n.parentNode;n=i}else break;return o}const ee={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},L={start:0,center:.5,end:1};function W(e,t,o=0){let n=0;if(L[e]!==void 0&&(e=L[e]),typeof e=="string"){const s=parseFloat(e);e.endsWith("px")?n=s:e.endsWith("%")?e=s/100:e.endsWith("vw")?n=s/100*document.documentElement.clientWidth:e.endsWith("vh")?n=s/100*document.documentElement.clientHeight:e=s}return typeof e=="number"&&(n=t*e),o+n}const te=[0,0];function ne(e,t,o,n){let s=Array.isArray(e)?e:te,r=0,i=0;return typeof e=="number"?s=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?s=e.split(" "):s=[e,L[e]?e:"0"]),r=W(s[0],o,n),i=W(s[1],t),r-i}const se={x:0,y:0};function oe(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function re(e,t,o){let{offset:n=ee.All}=o;const{target:s=e,axis:r="y"}=o,i=r==="y"?"height":"width",l=s!==e?Z(s,e):se,u=s===e?{width:e.scrollWidth,height:e.scrollHeight}:oe(s),f={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let a=!t[r].interpolate;const E=n.length;for(let c=0;c<E;c++){const z=ne(n[c],f[i],u[i],l[r]);!a&&z!==t[r].interpolatorOffsets[c]&&(a=!0),t[r].offset[c]=z}a&&(t[r].interpolate=C(t[r].offset,T(n)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}function ie(e,t=e,o){if(o.x.targetOffset=0,o.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)o.x.targetOffset+=n.offsetLeft,o.y.targetOffset+=n.offsetTop,n=n.offsetParent}o.x.targetLength=t===e?t.scrollWidth:t.clientWidth,o.y.targetLength=t===e?t.scrollHeight:t.clientHeight,o.x.containerLength=e.clientWidth,o.y.containerLength=e.clientHeight}function le(e,t,o,n={}){return{measure:()=>ie(e,n.target,o),update:s=>{U(e,o,s),(n.offset||n.target)&&re(e,o,n)},notify:()=>t(o)}}const h=new WeakMap,O=new WeakMap,x=new WeakMap,B=e=>e===document.documentElement?window:e;function ce(e,{container:t=document.documentElement,...o}={}){let n=x.get(t);n||(n=new Set,x.set(t,n));const s=K(),r=le(t,e,s,o);if(n.add(r),!h.has(t)){const l=()=>{for(const c of n)c.measure()},u=()=>{for(const c of n)c.update(R.timestamp)},f=()=>{for(const c of n)c.notify()},a=()=>{v.read(l,!1,!0),v.update(u,!1,!0),v.update(f,!1,!0)};h.set(t,a);const E=B(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&O.set(t,$(t,a)),E.addEventListener("scroll",a,{passive:!0})}const i=h.get(t);return v.read(i,!1,!0),()=>{var l;I(i);const u=x.get(t);if(!u||(u.delete(r),u.size))return;const f=h.get(t);h.delete(t),f&&(B(t).removeEventListener("scroll",f),(l=O.get(t))===null||l===void 0||l(),window.removeEventListener("resize",f))}}function b(e,t){V(!!(!t||t.current))}const fe=()=>({scrollX:g(0),scrollY:g(0),scrollXProgress:g(0),scrollYProgress:g(0)});function pe({container:e,target:t,layoutEffect:o=!0,...n}={}){const s=A(fe);return(o?N:m.useEffect)(()=>(b("target",t),b("container",e),ce(({x:i,y:l})=>{s.scrollX.set(i.current),s.scrollXProgress.set(i.progress),s.scrollY.set(l.current),s.scrollYProgress.set(l.progress)},{...n,container:e?.current||void 0,target:t?.current||void 0})),[e,t,JSON.stringify(n.offset)]),s}export{ge as a,pe as u};
