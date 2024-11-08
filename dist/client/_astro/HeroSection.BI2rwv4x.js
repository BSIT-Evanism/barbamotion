import{j as t}from"./jsx-runtime.DLzSmTp2.js";import{R as S,r as d}from"./index.CCuy3yjK.js";import{a as g,u as b}from"./use-scroll.C-occ9y9.js";import{u as T}from"./use-transform.Bq5O1NcO.js";import{u as v}from"./use-spring.RvN7xH1k.js";import{m as x}from"./motion.DoAFD8h4.js";import{A as k}from"./index.CyE_x5g_.js";import"./resolve-element.BwSRoGbS.js";const P="_cursor_1lin9_1",D="_maincursor_1lin9_7",M="_wrapper_1lin9_11",R="_hero_1lin9_23",C="_inner_1lin9_34",O="_contain_1lin9_34",F="_float_1lin9_34",X="_heroText_1lin9_34",L="_flow_1lin9_97",$="_callFloat_1lin9_100",Y="_ping_1lin9_121",U="_innerPing_1lin9_132",q="_pulse_1lin9_1",m={cursor:P,maincursor:D,wrapper:M,hero:R,inner:C,contain:O,float:F,heroText:X,flow:L,callFloat:$,ping:Y,innerPing:U,pulse:q},H="https://app.cal.com/embed/embed.js";function j(u=H){(function(l,i,f){let a=function(e,n){e.q.push(n)},r=l.document;l.Cal=l.Cal||function(){let e=l.Cal,n=arguments;if(e.loaded||(e.ns={},e.q=e.q||[],r.head.appendChild(r.createElement("script")).src=i,e.loaded=!0),n[0]===f){const s=function(){a(s,arguments)},c=n[1];s.q=s.q||[],typeof c=="string"?(e.ns[c]=e.ns[c]||s,a(e.ns[c],n),a(e,["initNamespace",c])):a(e,n);return}a(e,n)}})(window,u,"init");/*!  Copying ends here. */return window.Cal}j.toString();var E={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w;function A(){if(w)return _;w=1;var u=S,l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,a=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function e(n,s,c){var o,p={},h=null,y=null;c!==void 0&&(h=""+c),s.key!==void 0&&(h=""+s.key),s.ref!==void 0&&(y=s.ref);for(o in s)f.call(s,o)&&!r.hasOwnProperty(o)&&(p[o]=s[o]);if(n&&n.defaultProps)for(o in s=n.defaultProps,s)p[o]===void 0&&(p[o]=s[o]);return{$$typeof:l,type:n,key:h,ref:y,props:p,_owner:a.current}}return _.Fragment=i,_.jsx=e,_.jsxs=e,_}E.exports=A();var I=E.exports;I.jsx;function J(u){const l=typeof u=="string"?{embedJsUrl:u}:u??{},{namespace:i="",embedJsUrl:f}=l;return new Promise(function a(r){const e=j(f);e("init",i);const n=i?e.ns[i]:e;if(!n){setTimeout(()=>{a(r)},50);return}r(n)})}function W(){const[u,l]=d.useState({xDeg:0,yDeg:0}),i={x:g(0),y:g(0)},f=r=>{const{clientX:e,clientY:n}=r;i.x.set(e),i.y.set(n)},a=r=>{const e=r.clientX,n=r.clientY,s=window.innerWidth/2,c=window.innerHeight/2,o=(e-s)/s*10,p=(n-c)/c*10;l({xDeg:p,yDeg:o})};return d.useEffect(()=>{window.addEventListener("mousemove",f),window.addEventListener("mousemove",a)},[]),{mousePosition:i,mouseTilt:u}}function ne(){const u=d.useRef(null);d.useRef(null);const[l,i]=d.useState(!1),[f,a]=d.useState(!1),{mouseTilt:r}=W(),[e,n]=d.useState(!1),[s,c]=d.useState("initial");d.useState("");const o={x:g(0),y:g(0)};d.useEffect(()=>{(async function(){(await J({namespace:"15min"}))("ui",{styles:{branding:{brandColor:"#000000"}},hideEventTypeDetails:!1,layout:"week_view"})})()},[]);const{scrollYProgress:p}=b(),h=T(p,[0,.4],[1,.8]),y=v(o.x,{stiffness:100,damping:10}),N=v(o.y,{stiffness:100,damping:10});return d.useEffect(()=>{l?(o.x.set(r.xDeg*-1),o.y.set(r.yDeg)):(o.x.set(0),o.y.set(0))},[r.xDeg,r.yDeg]),t.jsx(t.Fragment,{children:t.jsxs(x.div,{ref:u,className:m.wrapper,style:{scale:h},onMouseEnter:()=>a(!1),onMouseLeave:()=>a(!0),transition:{duration:7.5,type:"spring",delay:.8},children:[t.jsx(x.div,{className:`${m.hero} hidden md:block`,style:{rotateX:y,rotateY:N},onMouseEnter:()=>i(!1),onMouseLeave:()=>i(!0),children:t.jsxs("div",{className:`${m.inner} hidden md:block`,children:[t.jsx("img",{src:"/showreel.gif",className:"object-cover h-full w-full rounded-inherit opacity-30 hover:opacity-100 transition-all duration-300 hidden md:block",alt:"showreel"}),t.jsx("div",{className:m.contain,children:t.jsx("div",{className:`${m.float} text-slate-500`,children:t.jsxs("h1",{className:`${m.heroText} text-4xl md:text-6xl lg:text-8xl`,children:["Evan ",t.jsx("br",{}),"Solanoy"]})})}),t.jsxs(x.div,{className:`${m.callFloat} hidden md:block`,animate:{width:s==="first"?"50%":s==="second"?"40%":"30%",height:s==="second"?"100%":"15%"},drag:"x","data-cal-namespace":"15min","data-cal-link":"evan-forkbun/15min","data-cal-config":'{"layout":"week_view"}',onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),dragConstraints:{left:0,right:0},transition:{duration:2.5,type:"spring"},children:[t.jsx("div",{className:m.ping,children:t.jsx("div",{className:m.innerPing})}),t.jsx("div",{className:"text-sm uppercase text-center h-100% w-full flex justify-center items-center",children:t.jsx(k,{mode:"sync",children:t.jsxs(x.div,{children:[t.jsx(x.h1,{className:"text-[min(11px,10vw)]",animate:{y:e?-2:10,rotateX:e?90:0},exit:{opacity:0},transition:{duration:.3,type:"tween",ease:"circOut"},children:"Have an idea already?"}),t.jsx(x.h1,{className:"text-[min(11px,10vw)]",animate:{y:e?-10:0,rotateX:e?0:-90},exit:{opacity:0},transition:{duration:.3,type:"tween",ease:"circOut"},children:"Send me a Message"})]})})})]})]})}),t.jsxs("div",{className:"md:hidden flex flex-col w-full h-70% justify-end items-end",children:[t.jsx("h1",{className:"text-7xl md:text-6xl lg:text-8xl text-primary font-bold uppercase z-10 p-6",children:"Evan Solanoy"}),t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("h1",{children:"Full Stack Developer"}),t.jsx("h1",{children:"Creative UI/UX Designer"})]}),t.jsx("img",{src:"/showreel.gif",className:"object-cover h-80% w-full rounded-inherit opacity-30 hover:opacity-100 absolute top-0 left-0 transition-all duration-300 md:hidden block",alt:"showreel"})]})]})})}export{ne as default};