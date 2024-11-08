/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, e as renderHead, b as createAstro, f as renderSlot, d as addAttribute, s as spreadAttributes } from './astro/server_G11spka1.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { AnimatePresence, motion } from 'framer-motion';
import 'clsx';
import { $ as $$Image } from './_astro_assets_RwqWnlfR.mjs';

const toggle = atom(false);
atom(false);
const routeName = atom("/");
const hoverValue = atom("none");
const transitionState = atom("none");
atom("none");
function handleHover(a) {
  hoverValue.set(a);
}
function handleChangeRoute(a) {
  routeName.set(a);
}

function LayoutWrapper({ children }) {
  const $toggle = useStore(toggle);
  const $transitionState = useStore(transitionState);
  const $routeName = useStore(routeName);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2e3);
  }, [$routeName]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: $toggle && /* @__PURE__ */ jsxs("div", { className: "z-10 relative", children: [
      /* @__PURE__ */ jsx(motion.div, { whileHover: { height: "30vh", transition: { duration: 1, type: "spring" } }, initial: { y: "-30vh" }, animate: { y: 0 }, exit: { y: "-30vh" }, transition: { duration: 2, type: "tween" }, className: `bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-10vh w-full fixed top-0 ${$transitionState === "exit" ? "overflow-hidden" : "overflow-clip"}` }),
      /* @__PURE__ */ jsx(motion.div, { initial: { x: "-30vh" }, animate: { x: 0 }, exit: { x: "-30vh" }, transition: { duration: 2, type: "tween" }, className: "bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-full w-10vh fixed top-0 left-0" }),
      /* @__PURE__ */ jsx(motion.div, { initial: { x: "30vh" }, animate: { x: 0 }, exit: { x: "30vh" }, transition: { duration: 2, type: "tween" }, className: "bg-bgColor drop-shadow-2xl drop-shadow-color-primary h-full w-10vh fixed top-0 right-0" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `${$toggle ? "scale-90" : "scale-100"} transition-all duration-2000 ease-[cubic-bezier(0.81, 0.15, 0.06, 0.95)] h-fit w-screen p-0`, children }),
    /* @__PURE__ */ jsx("div", { className: "-z-20 bg-primary fixed w-screen h-screen top-0" })
  ] });
}

function NavBarSelection({ logoState }) {
  const $routeName = useStore(routeName);
  React.useState("/");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navBarItems = [
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "Projects",
      link: "/projects"
    }
  ];
  useEffect(() => {
    handleChangeRoute(window.location.pathname);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onMouseEnter: () => handleHover("navbar"), onMouseLeave: () => handleHover("none"), className: "md:flex gap-10 hidden list-none [&:has(.linktag:hover)>.linktag:not(:hover)>.dot]:opacity-0 [&:has(.linktag:hover)>.linktag>.dot]:opacity-100", children: navBarItems.map((item, i) => /* @__PURE__ */ jsxs(motion.a, { href: item.link, onClick: () => handleChangeRoute(item.link), className: "text-xl linktag uppercase hover:opacity-50", children: [
      item.name,
      /* @__PURE__ */ jsx("div", { transition: { duration: 0.5 }, className: `bg-primary w-10px h-10px rounded-full dot ${$routeName === item.link ? "opacity-100" : "opacity-0"} transition-opacity duration-200ms ease` })
    ] }, i)) }),
    /* @__PURE__ */ jsx("div", { onClick: () => setIsMenuOpen(!isMenuOpen), className: `md:hidden fixed top-5 right-10 bg-bgColor z-20 p-4 rounded-full`, children: /* @__PURE__ */ jsxs("svg", { className: `${isMenuOpen ? "rotate-90" : "rotate-0 "} transition-transform duration-300`, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("line", { x1: "3", x2: "21", y1: "6", y2: "6" }),
      /* @__PURE__ */ jsx("line", { x1: "3", x2: "21", y1: "12", y2: "12" }),
      /* @__PURE__ */ jsx("line", { x1: "3", x2: "21", y1: "18", y2: "18" })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isMenuOpen ? /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed top-0 left-0 w-full h-full z-10 bg-bgColor", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-8 justify-center items-center w-full h-full", children: navBarItems.map((item, i) => /* @__PURE__ */ jsx(motion.a, { initial: {
      x: "100vw"
    }, animate: {
      x: 0
    }, transition: {
      duration: 1,
      type: "spring",
      delay: i * 0.1
    }, href: item.link, onClick: () => {
      handleChangeRoute(item.link);
      setIsMenuOpen(false);
    }, className: "text-2xl linktag uppercase hover:opacity-50", children: item.name }, i)) }) }) : null })
  ] });
}

function Navbar() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsInView(true);
    }, 3e3);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: "flex px-10 py-5 z-10 bg-bgColor text-primary justify-between items-center",
      children: [
        /* @__PURE__ */ jsx("img", { id: "logo", src: "/favicon.svg", alt: "logo", className: "w-10vw md:w-3vw" }),
        /* @__PURE__ */ jsx(NavBarSelection, { logoState: isInView })
      ]
    }
  );
}

const $$Preloader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-whrugjgn> <div class="h-screen fixed bg-secondary w-screen flex justify-center items-center pointer-events-none font-italic" id="preloader" data-astro-cid-whrugjgn> <h1 id="title" class="text-4xl text-white" data-astro-cid-whrugjgn>Welcome</h1> </div> </main>  `;
}, "/Users/swe-evan/repos/barbamotion/src/components/Preloader.astro", void 0);

const $$Transition = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed flex justify-center items-center top-0 bg-black z-10 pointer-events-none w-full h-full" id="transitiondiv" data-astro-cid-j2fjyzmd> <div class="staggertext h-screen w-80px bg-black text-white font-bold text-2xl fixed left-0 top-0 z-20 flex flex-col items-center justify-between py-10" data-astro-cid-j2fjyzmd> <h1 data-astro-cid-j2fjyzmd>E</h1> <h1 data-astro-cid-j2fjyzmd>V</h1> </div> <div class="staggertext h-screen w-80px bg-black text-white font-bold text-2xl fixed right-0 top-0 z-20 flex flex-col items-center justify-between py-10" data-astro-cid-j2fjyzmd> <h1 data-astro-cid-j2fjyzmd>S</h1> <h1 data-astro-cid-j2fjyzmd>O</h1> </div> </div> <div class="w-full h-full absolute top-0 flex justify-center items-center pointer-events-none z-10" data-astro-cid-j2fjyzmd> <h1 class="pointer-events-none text-white text-4xl font-italic fixed top-45vh underline-dotted underline-white" id="navigateLabel" data-astro-cid-j2fjyzmd></h1> </div>  `;
}, "/Users/swe-evan/repos/barbamotion/src/components/Transition.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  Astro2.props;
  return renderTemplate(_a || (_a = __template([`<head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- <meta name="generator" content={Astro.generator} /> --><script src="https://code.jquery.com/jquery-3.7.0.min.js"><\/script><!-- HTML Meta Tags --><title>Evan Solanoy - Software Developer and Designer</title><meta name="description" content="Welcome to my portfolio website. I'm a software developer with a passion for creating innovative solutions and building beautiful user experiences."><meta property="image" content="/meta-img.png"><!-- Facebook Meta Tags --><meta property="og:url" content="https://portfolio.evansolanoy.studio"><meta property="og:type" content="website"><meta property="og:title" content="Evan Solanoy - Software Developer and Designer"><meta property="og:description" content="Welcome to my portfolio website. I'm a software developer with a passion for creating innovative solutions and building beautiful user experiences."><meta property="og:image" content="/meta-img.png"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="portfolio.evansolanoy.studio"><meta property="twitter:url" content="https://portfolio.evansolanoy.studio"><meta name="twitter:title" content="Evan Solanoy - Software Developer and Designer"><meta name="twitter:description" content="Welcome to my portfolio website. I'm a software developer with a passion for creating innovative solutions and building beautiful user experiences."><meta name="twitter:image" content="/meta-img.png"><!-- Meta Tags Generated via https://www.opengraph.xyz --><!-- <ViewTransitions /> -->`, '</head> <body id="smooth-wrapper" data-barba="wrapper"> ', " ", " ", " ", " ", "  </body>"])), renderHead(), renderComponent($$result, "ToggleBottomBar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/ToggleBottomBar", "client:component-export": "default" }), renderComponent($$result, "Transition", $$Transition, {}), renderComponent($$result, "Preloader", $$Preloader, {}), renderComponent($$result, "ViewControl", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/ViewControl", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/Navbar", "client:component-export": "default" })} ` }), renderComponent($$result, "LayoutWrapper", LayoutWrapper, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/LayoutWrapper", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }));
}, "/Users/swe-evan/repos/barbamotion/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$BentoBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BentoBox;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-secondary p-4 rounded-lg shadow-lg ${className}`, "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/swe-evan/repos/barbamotion/src/components/BentoBox.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-barba="container" data-barba-namespace="about" class="p-4 md:p-8 bg-bgColor"> <h1 class="text-6xl md:text-8xl font-bold mb-8 text-primary">About Me</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${renderComponent($$result2, "BentoBox", $$BentoBox, { "class": "md:col-span-2 row-span-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "width": 500, "height": 500, "src": "/portrait-1.jpeg", "alt": "Profile", "class": "w-full h-full object-cover rounded-lg" })} ` })} ${renderComponent($$result2, "BentoBox", $$BentoBox, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-4xl font-semibold mb-2 text-platinum">Who I Am</h2> <p class="text-bgColor text-2xl">
I'm a passionate developer with a knack for creating beautiful,
          functional websites using bleeding edge technologies without
          sacrificing functionality. With years of experience in web
          technologies, I bring ideas to life through code.
</p> ` })} ${renderComponent($$result2, "BentoBox", $$BentoBox, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "width": 500, "height": 500, "src": "/scr-1.webp", "alt": "Project 1", "class": "w-full h-full object-cover rounded-lg" })} ` })} ${renderComponent($$result2, "BentoBox", $$BentoBox, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "width": 500, "height": 500, "src": "/scr-2.webp", "alt": "Project 2", "class": "w-full h-full object-cover rounded-lg" })} ` })} ${renderComponent($$result2, "BentoBox", $$BentoBox, { "class": "md:col-span-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "width": 500, "height": 500, "src": "/new-port-2.jpeg", "alt": "Skills", "class": "w-full h-full object-cover rounded-lg" })} ` })} </div> </main> ` })}`;
}, "/Users/swe-evan/repos/barbamotion/src/pages/about.astro", void 0);

const $$file = "/Users/swe-evan/repos/barbamotion/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _page as _ };
