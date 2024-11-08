import{j as e}from"./errors.XUWOsSd4.js";import{r}from"./index._83CrWW8.js";import{b as g,h as b,c as $,d as j,t as P,v as D}from"./globalStore.20-X0qsX.js";import{u as h}from"./index.lJ6MF3t_.js";import{a as f,u as S}from"./use-scroll.KK8Ye6iy.js";import{u as l}from"./use-spring.ih7qrlid.js";import{m as i}from"./motion.eGBi1l74.js";import{a as k}from"./animate.es.UHBdWz0H.js";import{A as v}from"./index.OSiLmFua.js";import"./resolve-element.cxDUm8eP.js";import"./stagger.es.nOFcvPpM.js";function T({stickyRef:s}){const o=h(g),t={x:f(0),y:f(0)},n={x:l(t.x,{damping:20,stiffness:300,mass:.5}),y:l(t.y,{damping:20,stiffness:300,mass:.5})};r.useEffect(()=>(window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}),[]);const a=c=>{const{clientX:d,clientY:m}=c,u=d-20/2,x=m-20/2;t.x.set(u),t.y.set(x)};return e.jsx(e.Fragment,{children:e.jsx(i.div,{className:"  bg-bgColor z-20 pointer-events-none rounded-full w-20px h-20px p-1 mix-blend-difference md:block hidden fixed",transition:{type:"tween",ease:"backOut"},animate:{scale:o==="navbar"?2.5:o==="footer"?3:1,opacity:o==="link"||o==="invisible"?0:1},style:{x:n.x,y:n.y}})})}function L({stickyRef:s}){const o=h(g),t={x:f(0),y:f(0)},n={x:l(t.x,{damping:20,stiffness:300,mass:.5}),y:l(t.y,{damping:20,stiffness:300,mass:.5})};l(n.x,{damping:50,stiffness:200,mass:1}),l(n.y,{damping:50,stiffness:200,mass:1}),r.useEffect(()=>(window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}),[]);const a=c=>{const{clientX:d,clientY:m}=c,u=d-10/2,x=m-10/2;t.x.set(u),t.y.set(x)};return e.jsx(i.div,{className:" w-30 h-10 rounded-lg items-center justify-center bg-secondary z-20 pointer-events-none p-1 md:flex hidden fixed",transition:{type:"tween",ease:"backOut"},animate:{scale:o==="link"?1:0,opacity:o==="invisible"?0:1},style:{x:n.x,y:n.y},children:e.jsx("p",{className:"text-white text-sm font-bold ml-4",children:"Visit"})})}function z({stickyRef:s}){const o=h(g),t={x:f(0),y:f(0)},n={x:l(t.x,{damping:20,stiffness:400,mass:.5}),y:l(t.y,{damping:20,stiffness:400,mass:.5})};r.useEffect(()=>(window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}),[]);const a=c=>{const{clientX:d,clientY:m}=c,u=d-10/2,x=m-10/2;t.x.set(u),t.y.set(x)};return e.jsx(i.div,{className:" w-8 h-8 m-1 rounded-md  bg-bgColor z-30 pointer-events-none p-1 md:flex hidden fixed",transition:{type:"tween",ease:"backOut"},animate:{scale:o==="link"?1:0,opacity:o==="invisible"?0:1},style:{x:n.x,y:n.y},children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round",className:"lucide lucide-log-in",children:[e.jsx("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),e.jsx("polyline",{points:"10 17 15 12 10 7"}),e.jsx("line",{x1:"15",x2:"3",y1:"12",y2:"12"})]})})}function W(){const s=h(P),o=h(D);r.useState("");const[t,n]=r.useState(!1),[a,c]=r.useState(new Date().getUTCHours()+":"+new Date().getUTCMinutes()),[d,m]=r.useState(new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear()),{scrollYProgress:u}=S(),x=l(u,{stiffness:100,damping:30,restDelta:.001});return r.useEffect(()=>{t?b("footer"):b("none")},[t]),r.useEffect(()=>{const y=()=>{const p=new Date,w=p.getHours(),C=p.getMinutes().toString().padStart(2,"0"),N=w>=12?"PM":"AM",M=w%12||12;c(`${M}:${C} ${N}`),m(`${p.getDate()}/${p.getMonth()+1}/${p.getFullYear()}`)};y();const E=setInterval(y,1e3);return()=>clearInterval(E)},[]),r.useEffect(()=>{k("#togglebutton",{width:s?"60vw":"20vw",height:s?"40vh":"6vh"},{duration:2,easing:[.81,.15,.06,.95]}),k("#togglebutton",{left:s?"20vw":"40vw"},{duration:2,easing:[.81,.15,.06,.95]})},[s,t]),e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(L,{}),e.jsx(z,{}),e.jsxs(i.div,{id:"togglebutton",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),className:"md:block fixed hidden z-2 bottom-10 rounded-10 p-[0.2rem] overflow-hidden",animate:{y:o?"100vw":0},transition:{duration:2,ease:[.41,.15,.06,.95]},children:[e.jsx(i.div,{style:{scaleX:x},className:"absolute w-full h-full top-0 left-0 bg-accent rounded-3xl -z-1"}),e.jsx(v,{children:t||!s&&e.jsxs(e.Fragment,{children:[e.jsx(i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute left-20% top-35%",children:a}),e.jsx(i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute left-62% top-35%",children:d})]})}),e.jsx(i.div,{className:` ${s?"border-slate":"border-black"} flex justify-around items-start h-full w-full gap-4 px-10 py-5 rounded-[2.3rem] z-5 bg-bgColor font-italic text-xl text-center transition-all duration-1000`,children:e.jsxs(v,{children:[e.jsx(i.div,{onClick:$,whileHover:{scale:1.2},animate:{rotate:s?90:0,width:t?"20px":"6px",transition:{duration:.3,type:"tween"}},layoutId:"buttonnavbar",className:`w-10px h-20px rounded-full ${s?"bg-white":"bg-black"} border-primary border-2 cursor-pointer`},"button"),t||s?e.jsxs(e.Fragment,{children:[e.jsx(i.a,{onClick:()=>j("/about"),href:"/about?name=evan",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:window.location.pathname==="/about"?"underline pointer-events-none":"",children:"About"},"nav1"),e.jsx(i.a,{onClick:()=>j("/contact"),href:"/contact",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:window.location.pathname==="/contact"?"underline pointer-events-none":"",children:"Contact"},"nav2")]}):null]})})]}),e.jsx(v,{children:s&&e.jsx(i.div,{initial:{y:"100vh"},animate:{y:0},exit:{y:"100vh"},transition:{duration:2,type:"tween",ease:"backOut"},className:"z-1 opacity-50 bg-black fixed top-0 left-0 w-full h-full overflow-hidden overscroll-none"})})]})}export{W as default};
