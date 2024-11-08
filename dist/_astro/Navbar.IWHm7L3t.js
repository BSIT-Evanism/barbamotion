import{j as g}from"./errors.XUWOsSd4.js";import{R as ae,r as D}from"./index._83CrWW8.js";import{A,I as ce,a as le,b as de,M as Je,N as fe,c as q,d as Y,e as ue,E as pe,f as me,i as Se,g as qe,h as Ye,D as Ge,_ as Xe,j as Ze,k as $e}from"./astro/assets-service.AdN6gOXt.js";import Qe from"./LayoutWrapper.tgrlcOvN.js";/* empty css                       */import{r as Ke,d as G,h as he}from"./globalStore.20-X0qsX.js";import{u as et}from"./index.lJ6MF3t_.js";import{m as X}from"./motion.eGBi1l74.js";import{A as tt}from"./index.OSiLmFua.js";function rt(e){return!(e.length!==3||!e[0]||typeof e[0]!="object")}function Te(e,t,r){const n=t?.split("/").pop()?.replace(".astro","")??"",s=(...o)=>{if(!rt(o))throw new A({...ce,message:ce.message(n)});return e(...o)};return Object.defineProperty(s,"name",{value:n,writable:!1}),s.isAstroComponentFactory=!0,s.moduleId=t,s.propagation=r,s}function nt(e){return Te(e.factory,e.moduleId,e.propagation)}function N(e,t,r){return typeof e=="function"?Te(e,t,r):nt(e)}const st="4.1.1";function ot(){return t=>{if(typeof t=="string")throw new A({...le,message:le.message(JSON.stringify(t))});let r=[...Object.values(t)];if(r.length===0)throw new A({...de,message:de.message(JSON.stringify(t))});return Promise.all(r.map(n=>n()))}}function L(e){return{site:e?new URL(e):void 0,generator:`Astro v${st}`,glob:ot()}}typeof process<"u"&&process.stdout&&process.stdout.isTTY;const{replace:it}="",at=/[&<>'"]/g,ct={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},lt=e=>ct[e],dt=e=>it.call(e,at,lt);function se(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}const z=dt;class V extends String{get[Symbol.toStringTag](){return"HTMLString"}}const m=e=>e instanceof V?e:typeof e=="string"?new V(e):e;function ft(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}const Ie=Symbol.for("astro:render");function B(e){return Object.defineProperty(e,Ie,{value:!0})}function ut(e){return e&&typeof e=="object"&&e[Ie]}function Ee(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Ee(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Oe(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Ee(e))&&(n&&(n+=" "),n+=t);return n}const v={Value:0,JSON:1,RegExp:2,Date:3,Map:4,Set:5,BigInt:6,URL:7,Uint8Array:8,Uint16Array:9,Uint32Array:10};function Z(e,t={},r=new WeakSet){if(r.has(e))throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);r.add(e);const n=e.map(s=>Le(s,t,r));return r.delete(e),n}function Ne(e,t={},r=new WeakSet){if(r.has(e))throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);r.add(e);const n=Object.fromEntries(Object.entries(e).map(([s,o])=>[s,Le(o,t,r)]));return r.delete(e),n}function Le(e,t={},r=new WeakSet){switch(Object.prototype.toString.call(e)){case"[object Date]":return[v.Date,e.toISOString()];case"[object RegExp]":return[v.RegExp,e.source];case"[object Map]":return[v.Map,Z(Array.from(e),t,r)];case"[object Set]":return[v.Set,Z(Array.from(e),t,r)];case"[object BigInt]":return[v.BigInt,e.toString()];case"[object URL]":return[v.URL,e.toString()];case"[object Array]":return[v.JSON,Z(e,t,r)];case"[object Uint8Array]":return[v.Uint8Array,Array.from(e)];case"[object Uint16Array]":return[v.Uint16Array,Array.from(e)];case"[object Uint32Array]":return[v.Uint32Array,Array.from(e)];default:return e!==null&&typeof e=="object"?[v.Value,Ne(e,t,r)]:e===void 0?[v.Value]:[v.Value,e]}}function Re(e,t){return JSON.stringify(Ne(e,t))}const Ce=Object.freeze(["data-astro-transition-scope","data-astro-transition-persist"]);function pt(e,t){let r={isPage:!1,hydration:null,props:{},propsWithoutTransitionAttributes:{}};for(const[n,s]of Object.entries(e))if(n.startsWith("server:")&&n==="server:root"&&(r.isPage=!0),n.startsWith("client:"))switch(r.hydration||(r.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),n){case"client:component-path":{r.hydration.componentUrl=s;break}case"client:component-export":{r.hydration.componentExport.value=s;break}case"client:component-hydration":break;case"client:display-name":break;default:{if(r.hydration.directive=n.split(":")[1],r.hydration.value=s,!t.has(r.hydration.directive)){const o=Array.from(t.keys()).map(a=>`client:${a}`).join(", ");throw new Error(`Error: invalid hydration directive "${n}". Supported hydration methods: ${o}`)}if(r.hydration.directive==="media"&&typeof r.hydration.value!="string")throw new A(Je);break}}else r.props[n]=s,Ce.includes(n)||(r.propsWithoutTransitionAttributes[n]=s);for(const n of Object.getOwnPropertySymbols(e))r.props[n]=e[n],r.propsWithoutTransitionAttributes[n]=e[n];return r}async function mt(e,t){const{renderer:r,result:n,astroId:s,props:o,attrs:a}=e,{hydrate:i,componentUrl:p,componentExport:h}=t;if(!h.value)throw new A({...fe,message:fe.message(t.displayName)});const c={children:"",props:{uid:s}};if(a)for(const[u,j]of Object.entries(a))c.props[u]=z(j);c.props["component-url"]=await n.resolve(decodeURI(p)),r.clientEntrypoint&&(c.props["component-export"]=h.value,c.props["renderer-url"]=await n.resolve(decodeURI(r.clientEntrypoint)),c.props.props=z(Re(o,t))),c.props.ssr="",c.props.client=i;let T=await n.resolve("astro:scripts/before-hydration.js");return T.length&&(c.props["before-hydration-url"]=T),c.props.opts=z(JSON.stringify({name:t.displayName,value:t.hydrateArgs||""})),Ce.forEach(u=>{o[u]&&(c.props[u]=o[u])}),c}/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */const ee="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",Q=ee.length;function ht(e){let t=0;if(e.length===0)return t;for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);t=(t<<5)-t+n,t=t&t}return t}function yt(e){let t,r="",n=ht(e);const s=n<0?"Z":"";for(n=Math.abs(n);n>=Q;)t=n%Q,n=Math.floor(n/Q),r=ee[t]+r;return n>0&&(r=ee[n]+r),s+r}function gt(e){return e==null?!1:e.isAstroComponentFactory===!0}function bt(e,t){let r=t.propagation||"none";return t.moduleId&&e.componentMetadata.has(t.moduleId)&&r==="none"&&(r=e.componentMetadata.get(t.moduleId).propagation),r==="in-tree"||r==="self"}const wt=Symbol.for("astro.headAndContent");function vt(e){return typeof e=="object"&&!!e[wt]}var At='(()=>{var b=Object.defineProperty;var f=(c,o,i)=>o in c?b(c,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[o]=i;var l=(c,o,i)=>(f(c,typeof o!="symbol"?o+"":o,i),i);var p;{let c={0:t=>m(t),1:t=>i(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(i(t)),5:t=>new Set(i(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let[e,r]=t;return e in c?c[e](r):void 0},i=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,r])=>[e,o(r)]));customElements.get("astro-island")||customElements.define("astro-island",(p=class extends HTMLElement{constructor(){super(...arguments);l(this,"Component");l(this,"hydrator");l(this,"hydrate",async()=>{var d;if(!this.hydrator||!this.isConnected)return;let e=(d=this.parentElement)==null?void 0:d.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let r=this.querySelectorAll("astro-slot"),a={},h=this.querySelectorAll("template[data-astro-template]");for(let n of h){let s=n.closest(this.tagName);s!=null&&s.isSameNode(this)&&(a[n.getAttribute("data-astro-template")||"default"]=n.innerHTML,n.remove())}for(let n of r){let s=n.closest(this.tagName);s!=null&&s.isSameNode(this)&&(a[n.getAttribute("name")||"default"]=n.innerHTML)}let u;try{u=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(n){let s=this.getAttribute("component-url")||"<unknown>",y=this.getAttribute("component-export");throw y&&(s+=` (export ${y})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),n),n}await this.hydrator(this)(this.Component,u,a,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});l(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),r.disconnect(),this.childrenConnectedCallback()},r=new MutationObserver(()=>{var a;((a=this.lastChild)==null?void 0:a.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});r.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),r=this.getAttribute("client");if(Astro[r]===void 0){window.addEventListener(`astro:${r}`,()=>this.start(),{once:!0});return}Astro[r](async()=>{let a=this.getAttribute("renderer-url"),[h,{default:u}]=await Promise.all([import(this.getAttribute("component-url")),a?import(a):()=>()=>{}]),d=this.getAttribute("component-export")||"default";if(!d.includes("."))this.Component=h[d];else{this.Component=h;for(let n of d.split("."))this.Component=this.Component[n]}return this.hydrator=u,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},l(p,"observedAttributes",["props"]),p))}})();';const xt="<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>";function jt(e){return e._metadata.hasHydrationScript?!1:e._metadata.hasHydrationScript=!0}function St(e,t){return e._metadata.hasDirectives.has(t)?!1:(e._metadata.hasDirectives.add(t),!0)}function ye(e,t){const n=e.clientDirectives.get(t);if(!n)throw new Error(`Unknown directive: ${t}`);return n}function $t(e,t,r){switch(t){case"both":return`${xt}<script>${ye(e,r)};${At}<\/script>`;case"directive":return`<script>${ye(e,r)}<\/script>`}return""}const Me=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,Tt=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,It=/^(contenteditable|draggable|spellcheck|value)$/i,Et=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,Ot=new Set(["set:html","set:text"]),Nt=e=>e.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g,(t,r)=>/[^\w]|\s/.test(t)?"":r===0?t:t.toUpperCase()),R=(e,t=!0)=>t?String(e).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):e,Lt=e=>e.toLowerCase()===e?e:e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),ge=e=>Object.entries(e).filter(([t,r])=>typeof r=="string"&&r.trim()||typeof r=="number").map(([t,r])=>t[0]!=="-"&&t[1]!=="-"?`${Lt(t)}:${r}`:`${t}:${r}`).join(";");function Rt(e){let t="";for(const[r,n]of Object.entries(e))t+=`const ${Nt(r)} = ${JSON.stringify(n)?.replace(/<\/script>/g,"\\x3C/script>")};
`;return m(t)}function be(e){return e.length===1?e[0]:`${e.slice(0,-1).join(", ")} or ${e[e.length-1]}`}function O(e,t,r=!0){if(e==null)return"";if(e===!1)return It.test(t)||Et.test(t)?m(` ${t}="false"`):"";if(Ot.has(t))return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),"";if(t==="class:list"){const n=R(Oe(e),r);return n===""?"":m(` ${t.slice(0,-5)}="${n}"`)}if(t==="style"&&!(e instanceof V)){if(Array.isArray(e)&&e.length===2)return m(` ${t}="${R(`${ge(e[0])};${e[1]}`,r)}"`);if(typeof e=="object")return m(` ${t}="${R(ge(e),r)}"`)}return t==="className"?m(` class="${R(e,r)}"`):e===!0&&(t.startsWith("data-")||Tt.test(t))?m(` ${t}`):m(` ${t}="${R(e,r)}"`)}function te(e,t=!0){let r="";for(const[n,s]of Object.entries(e))r+=O(s,n,t);return m(r)}function H(e,{props:t,children:r=""},n=!0){const{lang:s,"data-astro-id":o,"define:vars":a,...i}=t;return a&&(e==="style"&&(delete i["is:global"],delete i["is:scoped"]),e==="script"&&(delete i.hoist,r=Rt(a)+`
`+r)),(r==null||r=="")&&Me.test(e)?`<${e}${te(i,n)} />`:`<${e}${te(i,n)}>${r}</${e}>`}function _e(e){const t=[],r={write:s=>t.push(s)},n=e(r);return{async renderToFinalDestination(s){for(const o of t)s.write(o);r.write=o=>s.write(o),await n}}}const K=(e,t,r)=>{const n=JSON.stringify(e.props),s=e.children;return t===r.findIndex(o=>JSON.stringify(o.props)===n&&o.children==s)};function we(e){e._metadata.hasRenderedHead=!0;const t=Array.from(e.styles).filter(K).map(o=>o.props.rel==="stylesheet"?H("link",o):H("style",o));e.styles.clear();const r=Array.from(e.scripts).filter(K).map(o=>H("script",o,!1)),n=Array.from(e.links).filter(K).map(o=>H("link",o,!1));let s=t.join(`
`)+n.join(`
`)+r.join(`
`);if(e._metadata.extraHead.length>0)for(const o of e._metadata.extraHead)s+=o;return m(s)}function*Ct(){yield B({type:"head"})}function*_(){yield B({type:"maybe-head"})}const re=Symbol.for("astro:slot-string");class Ue extends V{instructions;[re];constructor(t,r){super(t),this.instructions=r,this[re]=!0}}function Mt(e){return!!e[re]}function F(e,t,r){return!t&&r?F(e,r):{async render(n){await M(n,typeof t=="function"?t(e):t)}}}async function W(e,t,r){let n="",s=null;const o={write(i){i instanceof Response||(typeof i=="object"&&"type"in i&&typeof i.type=="string"?(s===null&&(s=[]),s.push(i)):n+=oe(e,i))}};return await F(e,t,r).render(o),m(new Ue(n,s))}async function He(e,t={}){let r=null,n={};return t&&await Promise.all(Object.entries(t).map(([s,o])=>W(e,o).then(a=>{a.instructions&&(r===null&&(r=[]),r.push(...a.instructions)),n[s]=a}))),{slotInstructions:r,children:n}}const _t=Symbol.for("astro:fragment"),ve=Symbol.for("astro:renderer");new TextEncoder;const Ut=new TextDecoder;function ke(e,t){if(ut(t)){const r=t;switch(r.type){case"directive":{const{hydration:n}=r;let s=n&&jt(e),o=n&&St(e,n.directive),a=s?"both":o?"directive":null;if(a){let i=$t(e,a,n.directive);return m(i)}else return""}case"head":return e._metadata.hasRenderedHead||e.partial?"":we(e);case"maybe-head":return e._metadata.hasRenderedHead||e._metadata.headInTree||e.partial?"":we(e);case"renderer-hydration-script":{const{rendererSpecificHydrationScripts:n}=e._metadata,{rendererName:s}=r;return n.has(s)?"":(n.add(s),r.render())}default:throw new Error(`Unknown chunk type: ${t.type}`)}}else{if(t instanceof Response)return"";if(Mt(t)){let r="";const n=t;if(n.instructions)for(const s of n.instructions)r+=ke(e,s);return r+=t.toString(),r}}return t.toString()}function oe(e,t){return ArrayBuffer.isView(t)?Ut.decode(t):ke(e,t)}function Ht(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}async function M(e,t){if(t=await t,t instanceof Ue)e.write(t);else if(ft(t))e.write(t);else if(Array.isArray(t)){const r=t.map(n=>_e(s=>M(s,n)));for(const n of r)n&&await n.renderToFinalDestination(e)}else if(typeof t=="function")await M(e,t());else if(typeof t=="string")e.write(m(z(t)));else if(!(!t&&t!==0))if(Ht(t))await t.render(e);else if(Bt(t))await t.render(e);else if(zt(t))await t.render(e);else if(ArrayBuffer.isView(t))e.write(t);else if(typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t))for await(const r of t)await M(e,r);else e.write(t)}const Pe=Symbol.for("astro.componentInstance");class kt{[Pe]=!0;result;props;slotValues;factory;returnValue;constructor(t,r,n,s){this.result=t,this.props=r,this.factory=s,this.slotValues={};for(const o in n){let a=!1,i=n[o](t);this.slotValues[o]=()=>a?n[o](t):(a=!0,i)}}async init(t){return this.returnValue!==void 0?this.returnValue:(this.returnValue=this.factory(t,this.props,this.slotValues),this.returnValue)}async render(t){this.returnValue===void 0&&await this.init(this.result);let r=this.returnValue;se(r)&&(r=await r),vt(r)?await r.content.render(t):await M(t,r)}}function Pt(e,t){if(e!=null)for(const r of Object.keys(e))r.startsWith("client:")&&console.warn(`You are attempting to render <${t} ${r} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`)}function Dt(e,t,r,n,s={}){Pt(n,t);const o=new kt(e,n,s,r);return bt(e,r)&&e._metadata.propagators.add(o),o}function zt(e){return typeof e=="object"&&!!e[Pe]}const De=Symbol.for("astro.renderTemplateResult");class Vt{[De]=!0;htmlParts;expressions;error;constructor(t,r){this.htmlParts=t,this.error=void 0,this.expressions=r.map(n=>se(n)?Promise.resolve(n).catch(s=>{if(!this.error)throw this.error=s,s}):n)}async render(t){const r=this.expressions.map(n=>_e(s=>{if(n||n===0)return M(s,n)}));for(let n=0;n<this.htmlParts.length;n++){const s=this.htmlParts[n],o=r[n];t.write(m(s)),o&&await o.renderToFinalDestination(t)}}}function Bt(e){return typeof e=="object"&&!!e[De]}function b(e,...t){return new Vt(e,t)}function Ft(e){return typeof HTMLElement<"u"&&HTMLElement.isPrototypeOf(e)}async function Wt(e,t,r,n){const s=Jt(t);let o="";for(const a in r)o+=` ${a}="${R(await r[a])}"`;return m(`<${s}${o}>${await W(e,n?.default)}</${s}>`)}function Jt(e){const t=customElements.getName(e);return t||e.name.replace(/^HTML|Element$/g,"").replace(/[A-Z]/g,"-$&").toLowerCase().replace(/^-/,"html-")}const Ae=new Map([["solid","solid-js"]]);function qt(e){switch(e?.split(".").pop()){case"svelte":return["@astrojs/svelte"];case"vue":return["@astrojs/vue"];case"jsx":case"tsx":return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue (jsx)"];default:return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue","@astrojs/svelte","@astrojs/lit"]}}function Yt(e){return e===_t}function Gt(e){return e&&e["astro:html"]===!0}const Xt=/\<\/?astro-slot\b[^>]*>/g,Zt=/\<\/?astro-static-slot\b[^>]*>/g;function Qt(e,t){const r=t?Zt:Xt;return e.replace(r,"")}async function Kt(e,t,r,n,s={}){if(!r&&!n["client:only"])throw new Error(`Unable to render ${t} because it is ${r}!
Did you forget to import the component or is it possible there is a typo?`);const{renderers:o,clientDirectives:a}=e,i={astroStaticSlot:!0,displayName:t},{hydration:p,isPage:h,props:c,propsWithoutTransitionAttributes:T}=pt(n,a);let u="",j;p&&(i.hydrate=p.directive,i.hydrateArgs=p.value,i.componentExport=p.componentExport,i.componentUrl=p.componentUrl);const I=qt(i.componentUrl),$=o.filter(l=>l.name!=="astro:jsx"),{children:x,slotInstructions:S}=await He(e,s);let d;if(i.hydrate!=="only"){let l=!1;try{l=r&&r[ve]}catch{}if(l){const f=r[ve];d=o.find(({name:y})=>y===f)}if(!d){let f;for(const y of o)try{if(await y.ssr.check.call({result:e},r,c,x)){d=y;break}}catch(J){f??=J}if(!d&&f)throw f}if(!d&&typeof HTMLElement=="function"&&Ft(r)){const f=await Wt(e,r,n,s);return{render(y){y.write(f)}}}}else{if(i.hydrateArgs){const l=i.hydrateArgs,f=Ae.has(l)?Ae.get(l):l;d=o.find(({name:y})=>y===`@astrojs/${f}`||y===f)}if(!d&&$.length===1&&(d=$[0]),!d){const l=i.componentUrl?.split(".").pop();d=o.filter(({name:f})=>f===`@astrojs/${l}`||f===l)[0]}}if(d)i.hydrate==="only"?u=await W(e,s?.fallback):{html:u,attrs:j}=await d.ssr.renderToStaticMarkup.call({result:e},r,T,x,i);else{if(i.hydrate==="only")throw new A({...q,message:q.message(i.displayName),hint:q.hint(I.map(l=>l.replace("@astrojs/","")).join("|"))});if(typeof r!="string"){const l=$.filter(y=>I.includes(y.name)),f=$.length>1;if(l.length===0)throw new A({...Y,message:Y.message(i.displayName,i?.componentUrl?.split(".").pop(),f,$.length),hint:Y.hint(be(I.map(y=>"`"+y+"`")))});if(l.length===1)d=l[0],{html:u,attrs:j}=await d.ssr.renderToStaticMarkup.call({result:e},r,T,x,i);else throw new Error(`Unable to render ${i.displayName}!

This component likely uses ${be(I)},
but Astro encountered an error during server-side rendering.

Please ensure that ${i.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(d&&!d.clientEntrypoint&&d.name!=="@astrojs/lit"&&i.hydrate)throw new A({...ue,message:ue.message(t,i.hydrate,d.name)});if(!u&&typeof r=="string"){const l=er(r),f=Object.values(x).join(""),y=b`<${l}${te(c)}${m(f===""&&Me.test(l)?"/>":`>${f}</${l}>`)}`;u="";const J={write(ie){ie instanceof Response||(u+=oe(e,ie))}};await y.render(J)}if(!p)return{render(l){if(S)for(const f of S)l.write(f);h||d?.name==="astro:jsx"?l.write(u):u&&u.length>0&&l.write(m(Qt(u,d?.ssr?.supportsAstroStaticSlot??!1)))}};const Fe=yt(`<!--${i.componentExport.value}:${i.componentUrl}-->
${u}
${Re(c,i)}`),U=await mt({renderer:d,result:e,astroId:Fe,props:c,attrs:j},i);let P=[];if(u){if(Object.keys(x).length>0)for(const l of Object.keys(x)){let f=d?.ssr?.supportsAstroStaticSlot?i.hydrate?"astro-slot":"astro-static-slot":"astro-slot",y=l==="default"?`<${f}>`:`<${f} name="${l}">`;u.includes(y)||P.push(l)}}else P=Object.keys(x);const We=P.length>0?P.map(l=>`<template data-astro-template${l!=="default"?`="${l}"`:""}>${x[l]}</template>`).join(""):"";return U.children=`${u??""}${We}`,U.children&&(U.props["await-children"]="",U.children+="<!--astro:end-->"),{render(l){if(S)for(const f of S)l.write(f);l.write(B({type:"directive",hydration:p})),p.directive!=="only"&&d?.ssr.renderHydrationScript&&l.write(B({type:"renderer-hydration-script",rendererName:d.name,render:d.ssr.renderHydrationScript})),l.write(m(H("astro-island",U,!1)))}}}function er(e){const t=/[&<>'"\s]+/g;return t.test(e)?e.trim().split(t)[0].trim():e}async function tr(e,t={}){const r=await W(e,t?.default);return{render(n){r!=null&&n.write(r)}}}async function rr(e,t,r,n={}){const{slotInstructions:s,children:o}=await He(e,n),a=t({slots:o}),i=s?s.map(p=>oe(e,p)).join(""):"";return{render(p){p.write(m(i+a))}}}function nr(e,t,r,n,s={}){const o=Dt(e,t,r,n,s);return{async render(a){await o.render(a)}}}async function w(e,t,r,n,s={}){return se(r)&&(r=await r),Yt(r)?await tr(e,s):(n=sr(n),Gt(r)?await rr(e,r,n,s):gt(r)?nr(e,t,r,n,s):await Kt(e,t,r,n,s))}function sr(e){if(e["class:list"]!==void 0){const t=e["class:list"];delete e["class:list"],e.class=Oe(e.class,t),e.class===""&&delete e.class}return e}function E(e={},t,{class:r}={}){let n="";r&&(typeof e.class<"u"?e.class+=` ${r}`:typeof e["class:list"]<"u"?e["class:list"]=[e["class:list"],r]:e.class=r);for(const[s,o]of Object.entries(e))n+=O(o,s,!0);return m(n)}const or=L(),ze=N(async(e,t,r)=>{const n=e.createAstro(or,t,r);return n.self=ze,b`${_()}<main data-astro-cid-whrugjgn> <div class="h-screen fixed bg-secondary w-screen flex justify-center items-center pointer-events-none font-italic" id="preloader" data-astro-cid-whrugjgn> <h1 id="title" class="text-4xl text-white" data-astro-cid-whrugjgn>Welcome</h1> </div> </main>  `},"/Users/swe-evan/repos/barbamotion/src/components/Preloader.astro",void 0),ir=L(),Ve=N(async(e,t,r)=>{const n=e.createAstro(ir,t,r);return n.self=Ve,b`${_()}<div class="fixed flex justify-center items-center top-0 bg-black z-10 pointer-events-none w-full h-full" id="transitiondiv" data-astro-cid-j2fjyzmd> <div class="staggertext h-screen w-80px bg-black text-white font-bold text-2xl fixed left-0 top-0 z-20 flex flex-col items-center justify-between py-10" data-astro-cid-j2fjyzmd> <h1 data-astro-cid-j2fjyzmd>E</h1> <h1 data-astro-cid-j2fjyzmd>V</h1> </div> <div class="staggertext h-screen w-80px bg-black text-white font-bold text-2xl fixed right-0 top-0 z-20 flex flex-col items-center justify-between py-10" data-astro-cid-j2fjyzmd> <h1 data-astro-cid-j2fjyzmd>S</h1> <h1 data-astro-cid-j2fjyzmd>O</h1> </div> </div> <div class="w-full h-full absolute top-0 flex justify-center items-center pointer-events-none z-10" data-astro-cid-j2fjyzmd> <h1 class="pointer-events-none text-white text-4xl font-italic fixed top-45vh underline-dotted underline-white" id="navigateLabel" data-astro-cid-j2fjyzmd></h1> </div>  `},"/Users/swe-evan/repos/barbamotion/src/components/Transition.astro",void 0);var xe=Object.freeze,ar=Object.defineProperty,cr=(e,t)=>xe(ar(e,"raw",{value:xe(t||e.slice())})),je;const lr=L(),Be=N(async(e,t,r)=>{const n=e.createAstro(lr,t,r);return n.self=Be,n.props,b(je||(je=cr([`<head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- <meta name="generator" content={Astro.generator} /> --><script src="https://code.jquery.com/jquery-3.7.0.min.js"><\/script><!-- HTML Meta Tags --><title>Evan Solanoy - Software Developer and Designer</title><meta name="description" content="Welcome to my portfolio website. I'm a software developer with a passion for creating innovative solutions and building beautiful user experiences."><meta property="image" content="/meta-img.png"><!-- Facebook Meta Tags --><meta property="og:url" content="https://portfolio.evansolanoy.studio"><meta property="og:type" content="website"><meta property="og:title" content="Evan Solanoy - Software Developer and Designer"><meta property="og:description" content="Welcome to my portfolio website. I'm a software developer with a passion for creating innovative solutions and building beautiful user experiences."><meta property="og:image" content="/meta-img.png"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="portfolio.evansolanoy.studio"><meta property="twitter:url" content="https://portfolio.evansolanoy.studio"><meta name="twitter:title" content="Evan Solanoy - Software Developer and Designer"><meta name="twitter:description" content="Welcome to my portfolio website. I'm a software developer with a passion for creating innovative solutions and building beautiful user experiences."><meta name="twitter:image" content="/meta-img.png"><!-- Meta Tags Generated via https://www.opengraph.xyz --><!-- <ViewTransitions /> -->`,'</head> <body id="smooth-wrapper" data-barba="wrapper"> '," "," "," "," ","  </body>"])),Ct(),w(e,"ToggleBottomBar",null,{"client:only":"react","client:component-hydration":"only","client:component-path":"/Users/swe-evan/repos/barbamotion/src/components/ToggleBottomBar","client:component-export":"default"}),w(e,"Transition",Ve,{}),w(e,"Preloader",ze,{}),w(e,"ViewControl",null,{"client:only":"react","client:component-hydration":"only","client:component-path":"/Users/swe-evan/repos/barbamotion/src/components/ViewControl","client:component-export":"default"},{default:s=>b` ${w(s,"Navbar",vr,{"client:visible":!0,"client:component-hydration":"visible","client:component-path":"/Users/swe-evan/repos/barbamotion/src/components/Navbar","client:component-export":"default"})} `}),w(e,"LayoutWrapper",Qe,{"client:load":!0,"client:component-hydration":"load","client:component-path":"/Users/swe-evan/repos/barbamotion/src/components/LayoutWrapper","client:component-export":"default"},{default:s=>b` ${F(s,r.default)} `}))},"/Users/swe-evan/repos/barbamotion/src/layouts/Layout.astro",void 0),dr=L(),C=N(async(e,t,r)=>{const n=e.createAstro(dr,t,r);n.self=C;const{class:s,...o}=n.props;return b`${_()}<div${O(`bg-secondary p-4 rounded-lg shadow-lg ${s}`,"class")}${E(o)}> ${F(e,r.default)} </div>`},"/Users/swe-evan/repos/barbamotion/src/components/BentoBox.astro",void 0);async function fr(){if(!globalThis?.astroAsset?.imageService){const{default:e}=await Xe(()=>import("./astro/assets-service.AdN6gOXt.js").then(t=>t.s),__vite__mapDeps([])).catch(t=>{const r=new A(Ze);throw r.cause=t,r});return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=e,e}return globalThis.astroAsset.imageService}async function ur(e,t){if(!e||typeof e!="object")throw new A({...pe,message:pe.message(JSON.stringify(e))});if(typeof e.src>"u")throw new A({...me,message:me.message(e.src,"undefined",JSON.stringify(e))});const r=await fr(),n={...e,src:typeof e.src=="object"&&"then"in e.src?(await e.src).default??await e.src:e.src},s=Se(n.src)?n.src.clone??n.src:n.src;n.src=s;const o=r.validateOptions?await r.validateOptions(n,t):n,a=r.getSrcSet?await r.getSrcSet(o,t):[];let i=await r.getURL(o,t),p=await Promise.all(a.map(async h=>({transform:h.transform,url:await r.getURL(h.transform,t),descriptor:h.descriptor,attributes:h.attributes})));if(qe(r)&&globalThis.astroAsset.addStaticImage&&!(Ye(o.src)&&i===o.src)){const h=r.propertiesToHash??Ge;i=globalThis.astroAsset.addStaticImage(o,h),p=a.map(c=>({transform:c.transform,url:globalThis.astroAsset.addStaticImage(c.transform,h),descriptor:c.descriptor,attributes:c.attributes}))}return{rawOptions:n,options:o,src:i,srcSet:{values:p,attribute:p.map(h=>`${h.url} ${h.descriptor}`).join(", ")},attributes:r.getHTMLAttributes!==void 0?await r.getHTMLAttributes(o,t):{}}}const pr=L(),k=N(async(e,t,r)=>{const n=e.createAstro(pr,t,r);n.self=k;const s=n.props;if(s.alt===void 0||s.alt===null)throw new A($e);typeof s.width=="string"&&(s.width=parseInt(s.width)),typeof s.height=="string"&&(s.height=parseInt(s.height));const o=await ne(s),a={};return o.srcSet.values.length>0&&(a.srcset=o.srcSet.attribute),b`${_()}<img${O(o.src,"src")}${E(a)}${E(o.attributes)}>`},"/Users/swe-evan/repos/barbamotion/node_modules/.pnpm/astro@4.1.1_@types+node@22.5.0_sass@1.69.6_typescript@5.3.3/node_modules/astro/components/Image.astro",void 0),mr=L(),hr=N(async(e,t,r)=>{const n=e.createAstro(mr,t,r);n.self=hr;const s=["webp"],o="png",a=["gif","svg","jpg","jpeg"],{formats:i=s,pictureAttributes:p={},fallbackFormat:h,...c}=n.props;if(c.alt===void 0||c.alt===null)throw new A($e);const T=await Promise.all(i.map(async x=>await ne({...c,format:x,widths:c.widths,densities:c.densities})));let u=h??o;!h&&Se(c.src)&&a.includes(c.src.format)&&(u=c.src.format);const j=await ne({...c,format:u,widths:c.widths,densities:c.densities}),I={},$={};return c.sizes&&($.sizes=c.sizes),j.srcSet.values.length>0&&(I.srcset=j.srcSet.attribute),b`${_()}<picture${E(p)}> ${Object.entries(T).map(([x,S])=>{const d=c.densities||!c.densities&&!c.widths?`${S.src}${S.srcSet.values.length>0?", "+S.srcSet.attribute:""}`:S.srcSet.attribute;return b`<source${O(d,"srcset")}${O("image/"+S.options.format,"type")}${E($)}>`})} <img${O(j.src,"src")}${E(I)}${E(j.attributes)}> </picture>`},"/Users/swe-evan/repos/barbamotion/node_modules/.pnpm/astro@4.1.1_@types+node@22.5.0_sass@1.69.6_typescript@5.3.3/node_modules/astro/components/Picture.astro",void 0),yr={service:{entrypoint:"astro/assets/services/sharp",config:{}},domains:[],remotePatterns:[]};new URL("file:///Users/swe-evan/repos/barbamotion/dist/");const ne=async e=>await ur(e,yr),gr=L(),br=N(async(e,t,r)=>{const n=e.createAstro(gr,t,r);return n.self=br,b`${w(e,"Layout",Be,{title:"About"},{default:s=>b` ${_()}<main data-barba="container" data-barba-namespace="about" class="p-4 md:p-8 bg-bgColor"> <h1 class="text-6xl md:text-8xl font-bold mb-8 text-primary">About Me</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${w(s,"BentoBox",C,{class:"md:col-span-2 row-span-2"},{default:o=>b` ${w(o,"Image",k,{width:500,height:500,src:"/portrait-1.jpeg",alt:"Profile",class:"w-full h-full object-cover rounded-lg"})} `})} ${w(s,"BentoBox",C,{},{default:o=>b` <h2 class="text-4xl font-semibold mb-2 text-platinum">Who I Am</h2> <p class="text-bgColor text-2xl">
I'm a passionate developer with a knack for creating beautiful,
          functional websites using bleeding edge technologies without
          sacrificing functionality. With years of experience in web
          technologies, I bring ideas to life through code.
</p> `})} ${w(s,"BentoBox",C,{},{default:o=>b` ${w(o,"Image",k,{width:500,height:500,src:"/scr-1.webp",alt:"Project 1",class:"w-full h-full object-cover rounded-lg"})} `})} ${w(s,"BentoBox",C,{},{default:o=>b` ${w(o,"Image",k,{width:500,height:500,src:"/scr-2.webp",alt:"Project 2",class:"w-full h-full object-cover rounded-lg"})} `})} ${w(s,"BentoBox",C,{class:"md:col-span-2"},{default:o=>b` ${w(o,"Image",k,{width:500,height:500,src:"/new-port-2.jpeg",alt:"Skills",class:"w-full h-full object-cover rounded-lg"})} `})} </div> </main> `})}`},"/Users/swe-evan/repos/barbamotion/src/pages/about.astro",void 0);function wr({logoState:e}){const t=et(Ke);ae.useState("/");const[r,n]=ae.useState(!1),s=[{name:"About",link:"/about"},{name:"Home",link:"/"},{name:"Contact",link:"/contact"},{name:"Projects",link:"/projects"}];return D.useEffect(()=>{G(window.location.pathname)},[]),g.jsxs(g.Fragment,{children:[g.jsx("div",{onMouseEnter:()=>he("navbar"),onMouseLeave:()=>he("none"),className:"md:flex gap-10 hidden list-none [&:has(.linktag:hover)>.linktag:not(:hover)>.dot]:opacity-0 [&:has(.linktag:hover)>.linktag>.dot]:opacity-100",children:s.map((o,a)=>g.jsxs(X.a,{href:o.link,onClick:()=>G(o.link),className:"text-xl linktag uppercase hover:opacity-50",children:[o.name,g.jsx("div",{transition:{duration:.5},className:`bg-primary w-10px h-10px rounded-full dot ${t===o.link?"opacity-100":"opacity-0"} transition-opacity duration-200ms ease`})]},a))}),g.jsx("div",{onClick:()=>n(!r),className:"md:hidden fixed top-5 right-10 bg-bgColor z-20 p-4 rounded-full",children:g.jsxs("svg",{className:`${r?"rotate-90":"rotate-0 "} transition-transform duration-300`,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[g.jsx("line",{x1:"3",x2:"21",y1:"6",y2:"6"}),g.jsx("line",{x1:"3",x2:"21",y1:"12",y2:"12"}),g.jsx("line",{x1:"3",x2:"21",y1:"18",y2:"18"})]})}),g.jsx(tt,{children:r?g.jsx(X.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed top-0 left-0 w-full h-full z-10 bg-bgColor",children:g.jsx("div",{className:"flex flex-col gap-8 justify-center items-center w-full h-full",children:s.map((o,a)=>g.jsx(X.a,{initial:{x:"100vw"},animate:{x:0},transition:{duration:1,type:"spring",delay:a*.1},href:o.link,onClick:()=>{G(o.link),n(!1)},className:"text-2xl linktag uppercase hover:opacity-50",children:o.name},a))})}):null})]})}function vr(){const e=D.useRef(null),[t,r]=D.useState(!1);return D.useEffect(()=>{setTimeout(()=>{r(!0)},3e3)},[]),g.jsxs("div",{ref:e,className:"flex px-10 py-5 z-10 bg-bgColor text-primary justify-between items-center",children:[g.jsx("img",{id:"logo",src:"/favicon.svg",alt:"logo",className:"w-10vw md:w-3vw"}),g.jsx(wr,{logoState:t})]})}export{vr as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
