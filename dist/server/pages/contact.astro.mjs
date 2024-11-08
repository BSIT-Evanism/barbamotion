/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_G11spka1.mjs';
import { $ as $$Layout } from '../chunks/about_C7bxnGkG.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="contactpage" class="p-4 bg-bgColor" data-barba="container" data-barba-namespace="contact"> <div class="h-100vh w-full"> <h1 class="text-8xl font-bold" id="titlehome">Contact</h1> <div class="flex flex-col items-center justify-center min-h-screen text-primary"> <h2 class="text-4xl md:text-6xl font-bold mb-8 text-center">
Let's Connect
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"> <div class="space-y-6"> <div> <h3 class="text-2xl md:text-4xl font-semibold mb-2">Email</h3> <a href="mailto:contact@example.com" class="text-xl md:text-2xl hover:underline">evanismsolanoy@gmail.com</a> </div> <div> <h3 class="text-2xl md:text-4xl font-semibold mb-2">Phone</h3> <a href="tel:+1234567890" class="text-xl md:text-2xl hover:underline">+63 992 737 0926</a> </div> </div> <div class="space-y-6"> <div> <h3 class="text-2xl md:text-4xl font-semibold mb-2">Location</h3> <p class="text-xl md:text-2xl">Legazpi City, Philippines</p> </div> <div> <h3 class="text-2xl md:text-4xl font-semibold mb-2">Social</h3> <div class="flex space-x-4"> <a href="https://linkedin.com/in/john-evan-solanoy-72b829262" class="text-3xl hover:text-gray-400"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> </a> <a href="https://github.com/BSIT-Evanism" class="text-3xl hover:text-gray-400"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> </a> </div> </div> </div> </div> <div class="mt-12 w-full max-w-2xl"> <h3 class="text-3xl md:text-5xl font-bold mb-6 text-center">
Send a Message
</h3> <a href="https://linkedin.com/in/john-evan-solanoy-72b829262" target="_blank" rel="noopener noreferrer" class="block w-full max-w-xs mx-auto"> <div class="relative overflow-hidden rounded-full bg-primary text-bgColor hover:bg-opacity-90 transition-all duration-300"> <div class="px-6 py-3 text-center"> <span class="text-lg font-semibold uppercase">Connect on LinkedIn</span> </div> </div> </a> </div> </div> </div> </main> ` })} `;
}, "/Users/swe-evan/repos/barbamotion/src/pages/contact.astro", void 0);

const $$file = "/Users/swe-evan/repos/barbamotion/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
