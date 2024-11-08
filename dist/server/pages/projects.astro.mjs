/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_G11spka1.mjs';
import { $ as $$Layout } from '../chunks/about_C7bxnGkG.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-barba="container" data-barba-namespace="projects" class="p-4 md:p-8 bg-bgColor"> <div class="flex flex-col items-center justify-center min-h-screen text-center p-4"> <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 text-primary">
Under Maintenance
</h1> <p class="text-2xl md:text-4xl lg:text-6xl mb-8 text-secondary">
We're working hard to bring you new projects. Stay tuned!
</p> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-construction"><rect x="2" y="6" width="20" height="8" rx="1"></rect><path d="M17 14v7"></path><path d="M7 14v7"></path><path d="M17 3v3"></path><path d="M7 3v3"></path><path d="M10 14 2.3 6.3"></path><path d="m14 6 7.7 7.7"></path><path d="m8 6 8 8"></path></svg> <a href="/" class="bg-primary text-white px-8 py-4 rounded-full text-2xl font-semibold">
Go Back Home
</a> </div> </main> ` })}`;
}, "/Users/swe-evan/repos/barbamotion/src/pages/projects.astro", void 0);

const $$file = "/Users/swe-evan/repos/barbamotion/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
