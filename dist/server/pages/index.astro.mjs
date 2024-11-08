/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_G11spka1.mjs';
import { $ as $$Layout } from '../chunks/about_C7bxnGkG.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Evan Solanoy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="indexpage" data-barba="container" data-barba-container="home" class="p-0.5px -z-2 bg-bgColor relative"> <div class="md:sticky md:top-20vh -z-1 -mb-100vh"> ${renderComponent($$result2, "HeroSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/HeroSection/HeroSection", "client:component-export": "default" })} <svg aria-hidden="true"${addAttribute(cn(
    "pointer-events-none absolute -z-1 inset-0 top-0 h-screen w-full fill-neutral-400/80 -translate-y-1/8 opacity-50 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
  ), "class")}> <defs> <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse"> <circle cx="3" cy="3" r="1.5" fill="currentColor"></circle> </pattern> </defs> <rect width="100%" height="100%" fill="url(#dotPattern)"></rect> </svg> <div class="w-10 h-21 animate-bounce absolute top-30% right-0 flex-shrink-0 text-[#0F2C59]"> <svg width="20" height="176" viewBox="0 0 20 176" fill="#0F2C59" xmlns="http://www.w3.org/2000/svg"> <path d="M2.46924 6.10254C2.2915 6.10254 2.12223 6.06868 1.96143 6.00098C1.80485 5.92904 1.66732 5.83594 1.54883 5.72168C1.43034 5.60319 1.33724 5.46566 1.26953 5.30908C1.20182 5.14827 1.16797 4.979 1.16797 4.80127V2.19873C1.16797 2.021 1.20182 1.85384 1.26953 1.69727C1.33724 1.53646 1.43034 1.39893 1.54883 1.28467C1.66732 1.16618 1.80485 1.07308 1.96143 1.00537C2.12223 0.933431 2.2915 0.897461 2.46924 0.897461H6.88721C7.06494 0.897461 7.2321 0.933431 7.38867 1.00537C7.54948 1.07308 7.68913 1.16618 7.80762 1.28467C7.92611 1.39893 8.01921 1.53646 8.08691 1.69727C8.15462 1.85384 8.18848 2.021 8.18848 2.19873V3.37305H6.88721V2.19873H2.46924V4.80127H6.88721C7.06494 4.80127 7.2321 4.83512 7.38867 4.90283C7.54948 4.97054 7.68913 5.06364 7.80762 5.18213C7.92611 5.30062 8.01921 5.44027 8.08691 5.60107C8.15462 5.75765 8.18848 5.9248 8.18848 6.10254V8.69873C8.18848 8.87646 8.15462 9.04574 8.08691 9.20654C8.01921 9.36312 7.92611 9.50065 7.80762 9.61914C7.68913 9.73763 7.54948 9.83073 7.38867 9.89844C7.2321 9.96615 7.06494 10 6.88721 10H2.34229C2.16455 10 1.99528 9.96615 1.83447 9.89844C1.6779 9.83073 1.54036 9.73763 1.42188 9.61914C1.30339 9.50065 1.21029 9.36312 1.14258 9.20654C1.07487 9.04574 1.04102 8.87646 1.04102 8.69873V7.53076H2.34229V8.69873H6.88721V6.10254H2.46924ZM1.16797 21.1987C1.16797 21.021 1.20182 20.8538 1.26953 20.6973C1.33724 20.5365 1.43034 20.3989 1.54883 20.2847C1.66732 20.1662 1.80485 20.0731 1.96143 20.0054C2.12223 19.9334 2.2915 19.8975 2.46924 19.8975H7.40771C7.58545 19.8975 7.7526 19.9334 7.90918 20.0054C8.06999 20.0731 8.20964 20.1662 8.32812 20.2847C8.44661 20.3989 8.53971 20.5365 8.60742 20.6973C8.67513 20.8538 8.70898 21.021 8.70898 21.1987V22.373H7.40771V21.1987H2.46924V27.6987H7.40771V26.5308H8.70898V27.6987C8.70898 27.8765 8.67513 28.0457 8.60742 28.2065C8.53971 28.3631 8.44661 28.5007 8.32812 28.6191C8.20964 28.7376 8.06999 28.8307 7.90918 28.8984C7.7526 28.9661 7.58545 29 7.40771 29H2.46924C2.2915 29 2.12223 28.9661 1.96143 28.8984C1.80485 28.8307 1.66732 28.7376 1.54883 28.6191C1.43034 28.5007 1.33724 28.3631 1.26953 28.2065C1.20182 28.0457 1.16797 27.8765 1.16797 27.6987V21.1987ZM8.35986 42.1475C8.35986 43.417 7.8182 44.1406 6.73486 44.3184L8.44873 48H7.00781L5.31934 44.3628H2.46924V48H1.16797V38.8975H6.15088C7.62354 38.8975 8.35986 39.6359 8.35986 41.1128V42.1475ZM2.46924 43.0615H6.08105C6.42806 43.0615 6.67773 42.9854 6.83008 42.833C6.98242 42.6807 7.05859 42.431 7.05859 42.084V41.1763C7.05859 40.8293 6.98242 40.5796 6.83008 40.4272C6.67773 40.2749 6.42806 40.1987 6.08105 40.1987H2.46924V43.0615ZM8.96924 65.6987C8.96924 65.8765 8.93538 66.0457 8.86768 66.2065C8.79997 66.3631 8.70687 66.5007 8.58838 66.6191C8.46989 66.7376 8.33024 66.8307 8.16943 66.8984C8.01286 66.9661 7.8457 67 7.66797 67H2.46924C2.2915 67 2.12223 66.9661 1.96143 66.8984C1.80485 66.8307 1.66732 66.7376 1.54883 66.6191C1.43034 66.5007 1.33724 66.3631 1.26953 66.2065C1.20182 66.0457 1.16797 65.8765 1.16797 65.6987V59.1987C1.16797 59.021 1.20182 58.8538 1.26953 58.6973C1.33724 58.5365 1.43034 58.3989 1.54883 58.2847C1.66732 58.1662 1.80485 58.0731 1.96143 58.0054C2.12223 57.9334 2.2915 57.8975 2.46924 57.8975H7.66797C7.8457 57.8975 8.01286 57.9334 8.16943 58.0054C8.33024 58.0731 8.46989 58.1662 8.58838 58.2847C8.70687 58.3989 8.79997 58.5365 8.86768 58.6973C8.93538 58.8538 8.96924 59.021 8.96924 59.1987V65.6987ZM2.46924 59.1987V65.6987H7.66797V59.1987H2.46924ZM2.46924 76.8975V84.6987H7.14746V86H1.16797V76.8975H2.46924ZM2.46924 95.8975V103.699H7.14746V105H1.16797V95.8975H2.46924Z" fill="#0F2C59"></path> <rect x="15" y="33" width="5" height="143" fill="#0F2C59"></rect> <path d="M15 176L0.277569 117.5H15L15 176Z" fill="#0F2C59"></path> </svg> </div> <div class="h-100vh"></div> </div> <div class="z-20 bg-secondary rounded-t-10vh pt-20 min-h-200vh md:min-h-400vh w-full pb-20"> ${renderComponent($$result2, "MarqueeComp", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/MarqueeComp/MarqueeComp", "client:component-export": "default" })} <div class="flex flex-col md:flex-row justify-center items-center"> <div class="w-full flex justify-center items-center"> ${renderComponent($$result2, "FixedImageReact", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/FixedImageReact", "client:component-export": "default" })} </div> <div class="w-full"> ${renderComponent($$result2, "FadingText", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/FadingText", "client:component-export": "default" })} </div> </div> <div class="md:min-h-320vh min-h-100vh w-full flex flex-col items-center px-4 md:px-0"> <h1 class="text-center text-16px md:text-20px font-semibold mt-10 md:mt-20 pt-10 md:pt-20 border-t-2 text-white opacity-50 border-t-white">
A new tech doesn't always mean a new problem nor a new solution, it's
          an investment for the future.
</h1> <div class="h-50vh w-full flex justify-center p-6 gap-10 text-platinum justify-evenly items-center"> <div class="w-1/4"> <h2 class="text-4xl text-bgColor font-bold mb-6">Skills & Tools</h2> <p class="text-white opacity-50 text-lg text-justify">
I mainly focus on fullstack development and creative design. Not
              scared of new technologies and always ready to learn something new
              or even old ones.
</p> </div> <div class="grid w-1/3 grid-cols-2 md:grid-cols-5 gap-4"> ${[
    { name: "Next.js", category: "Fullstack" },
    { name: "Remix", category: "Fullstack" },
    { name: "React", category: "Frontend" },
    { name: "Vue", category: "Frontend" },
    { name: "Astro", category: "Fullstack" },
    { name: "Laravel", category: "Backend" },
    { name: "Nuxt", category: "Fullstack" },
    { name: "Express", category: "Backend" },
    { name: "Go", category: "Backend" },
    { name: "Rust", category: "Backend" },
    { name: "UI/UX Design", category: "Design" },
    { name: "Figma", category: "Design" },
    { name: "Docker", category: "Development" },
    { name: "CI/CD", category: "Development" },
    { name: "Git", category: "Development" }
  ].map((tech) => renderTemplate`<div class="bg-bgColor rounded-lg p-4 text-center transform transition duration-300 hover:scale-105 hover:bg-opacity-80"> <span class="text-sm font-medium">${tech.name}</span> <span class="block text-xs mt-1 text-gray-400"> ${tech.category} </span> </div>`)} </div> </div> ${renderComponent($$result2, "PositionButton", null, { "client:only": "react", "text": "Know more about me?", "link": "/about", "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/Position-Button", "client:component-export": "PositionButton" })} ${renderComponent($$result2, "ProjectScroll", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/ProjectScroll", "client:component-export": "ProjectScroll" })} </div> </div> ${renderComponent($$result2, "MidSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/MidSection", "client:component-export": "default" })} <div id="contact" class="w-full min-h-100vh md:rounded-t-10vh rounded-t-0vh mt-20 md:-mt-100vh bg-primary z-1"> <div class="min-h-80vh flex justify-center items-center flex-col gap-4 md:gap-8 px-4 md:px-0"> <h1 class="text-white text-center text-4xl md:text-8xl font-semibold">
Have a project in mind?
</h1> <p class="text-white text-center text-lg md:text-2xl">
I'm currently available for freelance work.
</p> ${renderComponent($$result2, "PositionButton", null, { "client:only": "react", "text": "Contact Me", "link": "/contact", "client:component-hydration": "only", "client:component-path": "/Users/swe-evan/repos/barbamotion/src/components/Position-Button", "client:component-export": "PositionButton" })} </div> <div class="bg-bgColor min-h-20vh rounded-t-10vh flex justify-center bottom-0 items-center sticky"> <div class="w-full md:w-80vw flex flex-col md:flex-row gap-4 md:gap-10 justify-between items-center px-4 md:px-10 py-4 md:py-0"> <div class="flex flex-wrap justify-center md:justify-start gap-2"> <a href="https://linkedin.com/in/john-evan-solanoy-72b829262" target="_blank" class="text-sm md:text-md w-20 text-center">LinkedIn</a> <p class="hidden md:block">-</p> <a href="https://facebook.com/evan.solanoy.1/" target="_blank" class="text-sm md:text-md w-20 text-center">Facebook</a> <p class="hidden md:block">-</p> <a href="https://github.com/BSIT-Evanism" target="_blank" class="text-sm md:text-md w-20 text-center">Github</a> <p class="hidden md:block">-</p> <a href="https://t.me/evansolanoy" target="_blank" class="text-sm md:text-md w-20 text-center">Telegram</a> </div> <p class="text-center md:text-justify text-sm md:text-base w-full md:w-30%">
Designed and Developed by Evan Solanoy <br>
©2024 – All Rights Reserved <br> <a href="mailto:evansolanoy@gmail.com">evansolanoy@gmail.com</a> </p> </div> </div> </div> </main> ` })} `;
}, "/Users/swe-evan/repos/barbamotion/src/pages/index.astro", void 0);

const $$file = "/Users/swe-evan/repos/barbamotion/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
