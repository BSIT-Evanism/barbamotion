import{j as t}from"./jsx-runtime.DLzSmTp2.js";import{r as n}from"./index.CCuy3yjK.js";import{u as e}from"./index.CATRFj4A.js";import{t as l,f as d,r as m}from"./globalStore.CEGIqPQe.js";import{A as p}from"./index.CyE_x5g_.js";import{m as o}from"./motion.DoAFD8h4.js";function w({children:r}){const i=e(l),a=e(d),s=e(m);return n.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0)},2e3)},[s]),t.jsxs(t.Fragment,{children:[t.jsx(p,{children:i&&t.jsxs("div",{className:"z-10 relative",children:[t.jsx(o.div,{whileHover:{height:"30vh",transition:{duration:1,type:"spring"}},initial:{y:"-30vh"},animate:{y:0},exit:{y:"-30vh"},transition:{duration:2,type:"tween"},className:`bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-10vh w-full fixed top-0 ${a==="exit"?"overflow-hidden":"overflow-clip"}`}),t.jsx(o.div,{initial:{x:"-30vh"},animate:{x:0},exit:{x:"-30vh"},transition:{duration:2,type:"tween"},className:"bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-full w-10vh fixed top-0 left-0"}),t.jsx(o.div,{initial:{x:"30vh"},animate:{x:0},exit:{x:"30vh"},transition:{duration:2,type:"tween"},className:"bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-full w-10vh fixed top-0 right-0"})]})}),t.jsx("div",{className:`${i?"scale-90":"scale-100"} transition-all duration-2000 ease-[cubic-bezier(0.81, 0.15, 0.06, 0.95)] h-fit w-screen p-0`,children:r}),t.jsx("div",{className:"-z-20 bg-primary fixed w-screen h-screen top-0"})]})}export{w as default};
