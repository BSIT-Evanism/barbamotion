import{j as t}from"./errors.2Yo2ovm5.js";import{r as n}from"./index.UCAuQZPX.js";import{u as o}from"./index.drYr360b.js";import{t as l,f as d,r as m}from"./globalStore.kNrtANdh.js";import{A as p}from"./index.wvB1z6Xh.js";import{m as e}from"./motion.cW9GjXZd.js";function w({children:r}){const i=o(l),a=o(d),s=o(m);return n.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0)},2e3)},[s]),t.jsxs(t.Fragment,{children:[t.jsx(p,{children:i&&t.jsxs("div",{className:"z-10 relative",children:[t.jsx(e.div,{whileHover:{height:"30vh",transition:{duration:1,type:"spring"}},initial:{y:"-30vh"},animate:{y:0},exit:{y:"-30vh"},transition:{duration:2,type:"tween"},className:`bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-10vh w-full fixed top-0 ${a==="exit"?"overflow-hidden":"overflow-clip"}`}),t.jsx(e.div,{initial:{x:"-30vh"},animate:{x:0},exit:{x:"-30vh"},transition:{duration:2,type:"tween"},className:"bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-full w-10vh fixed top-0 left-0"}),t.jsx(e.div,{initial:{x:"30vh"},animate:{x:0},exit:{x:"30vh"},transition:{duration:2,type:"tween"},className:"bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-full w-10vh fixed top-0 right-0"})]})}),t.jsx("div",{className:`${i?"scale-90":"scale-100"} transition-all duration-2000 ease-[cubic-bezier(0.81, 0.15, 0.06, 0.95)] h-fit w-full`,children:r}),t.jsx("div",{className:"-z-20 bg-primary fixed w-screen h-screen top-0"})]})}export{w as default};
