import{j as w}from"./errors.XUWOsSd4.js";import{r as f}from"./index._83CrWW8.js";import{a as m}from"./globalStore.20-X0qsX.js";import{r as g}from"./resolve-element.cxDUm8eP.js";const E={some:0,all:1};function I(n,e,{root:s,margin:u,amount:r="some"}={}){const c=g(n),o=new WeakMap,a=l=>{l.forEach(t=>{const d=o.get(t.target);if(t.isIntersecting!==!!d)if(t.isIntersecting){const p=e(t);typeof p=="function"?o.set(t.target,p):i.unobserve(t.target)}else d&&(d(t),o.delete(t.target))})},i=new IntersectionObserver(a,{root:s,rootMargin:u,threshold:typeof r=="number"?r:E[r]});return c.forEach(l=>i.observe(l)),()=>i.disconnect()}function h(n,{root:e,margin:s,amount:u,once:r=!1}={}){const[c,o]=f.useState(!1);return f.useEffect(()=>{if(!n.current||r&&c)return;const a=()=>(o(!0),r?void 0:()=>o(!1)),i={root:e&&e.current||void 0,margin:s,amount:u};return I(n.current,a,i)},[e,n,s,r]),c}function j({children:n}){const e=f.useRef(null),s=h(e);return f.useEffect(()=>{s?m(!0):m(!1)},[s]),w.jsx("div",{id:"viewwrapper",ref:e,children:n})}export{j as default};
