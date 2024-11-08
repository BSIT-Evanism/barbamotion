const ee={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},te={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(e,t,r,i)=>`Unable to render \`${e}\`.

${i>0?`There ${r?"are":"is"} ${i} renderer${r?"s":""} configured in your \`astro.config.mjs\` file,
but ${r?"none were":"it was not"} able to server-side render \`${e}\`.`:`No valid renderer was found ${t?`for the \`.${t}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`},re={name:"NoClientEntrypoint",title:"No client entrypoint specified in renderer.",message:(e,t,r)=>`\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${r}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},ie={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},se={name:"NoMatchingImport",title:"No import found for component.",message:e=>`Could not render \`${e}\`. No matching import has been found for \`${e}\`.`,hint:"Please make sure the component is properly imported."},ne={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},ae={name:"ImageMissingAlt",title:'Image missing required "alt" property.',message:'Image missing "alt" property. "alt" text is required to describe important images on the page.',hint:'Use an empty string ("") for decorative images.'},oe={name:"InvalidImageService",title:"Error while loading image service.",message:"There was an error loading the configured image service. Please see the stack trace for more information."},b={name:"MissingImageDimension",title:"Missing image dimensions",message:(e,t)=>`Missing ${e==="both"?"width and height attributes":`${e} attribute`} for ${t}. When using remote images, both dimensions are always required in order to avoid CLS.`,hint:"If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets)."},v={name:"UnsupportedImageFormat",title:"Unsupported image format",message:(e,t,r)=>`Received unsupported format \`${e}\` from \`${t}\`. Currently only ${r.join(", ")} are supported by our image services.`,hint:"Using an `img` tag directly instead of the `Image` component might be what you're looking for."},R={name:"UnsupportedImageConversion",title:"Unsupported image conversion",message:"Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."},S={name:"ExpectedImage",title:"Expected src to be an image.",message:(e,t,r)=>`Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${e}\` (type: \`${t}\`).

Full serialized options received: \`${r}\`.`,hint:"This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."},ce={name:"ExpectedImageOptions",title:"Expected image options.",message:e=>`Expected getImage() parameter to be an object. Received \`${e}\`.`},O={name:"IncompatibleDescriptorOptions",title:"Cannot set both `densities` and `widths`",message:"Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",hint:"Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."},I={name:"LocalImageUsedWrongly",title:"Local images must be imported.",message:e=>`\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${e}\`.`,hint:"If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections) See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."},me={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},le={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files. Check the pattern for typos.`},T={name:"MissingSharp",title:"Could not find Sharp.",message:"Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.",hint:"See Sharp's installation instructions for more information: https://sharp.pixelplumbing.com/install. If you are not relying on `astro:assets` to optimize, transform, or process any images, you can configure a passthrough image service instead of installing Sharp. See https://docs.astro.build/en/reference/errors/missing-sharp for more information.\n\nSee https://docs.astro.build/en/guides/images/#default-image-service for more information on how to migrate to another image service."};function x(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function N(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const r=x(e).split(`
`).map(s=>s.replace(/\t/g,"  ")),i=[];for(let s=-2;s<=2;s++)r[t.line+s]&&i.push(t.line+s);let n=0;for(const s of i){let a=`> ${s}`;a.length>n&&(n=a.length)}let o="";for(const s of i){const a=s===t.line-1;o+=a?"> ":"  ",o+=`${s+1} | ${r[s]}
`,a&&(o+=`${Array.from({length:n}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return o}class g extends Error{loc;title;hint;frame;type="AstroError";constructor(t,r){const{name:i,title:n,message:o,stack:s,location:a,hint:d,frame:u}=t;super(o,r),this.title=n,this.name=i,o&&(this.message=o),this.stack=s||this.stack,this.loc=a,this.hint=d,this.frame=u}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,r){this.frame=N(t,r)}static is(t){return t.type==="AstroError"}}const C="modulepreload",_=function(e){return"/"+e},$={},q=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link");n=Promise.all(r.map(s=>{if(s=_(s),s in $)return;$[s]=!0;const a=s.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!i)for(let c=o.length-1;c>=0;c--){const m=o[c];if(m.href===s&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":C,a||(h.as="script",h.crossOrigin=""),h.href=s,document.head.appendChild(h),a)return new Promise((c,m)=>{h.addEventListener("load",c),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}return n.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},M=["jpeg","jpg","png","tiff","webp","gif","svg","avif"],E="webp",j=["src","width","height","format","quality"];function k(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function D(e){return e.startsWith("/")?e.substring(1):e}function F(e){return e.replace(/^\/|\/$/g,"")}function H(e){return typeof e=="string"||e instanceof String}function z(...e){return e.filter(H).map((t,r)=>r===0?k(t):r===e.length-1?D(t):F(t)).join("/")}function U(e){return/^(http|ftp|https|ws):?\/\//.test(e)||e.startsWith("data:")}function p(e){return typeof e=="object"}function he(e){return typeof e=="string"}function G(e,t){return V(e,t.protocol)&&L(e,t.hostname,!0)&&B(e,t.port)&&Q(e,t.pathname,!0)}function B(e,t){return!t||t===e.port}function V(e,t){return!t||t===e.protocol.slice(0,-1)}function L(e,t,r){if(t){if(!r||!t.startsWith("*"))return t===e.hostname;if(t.startsWith("**.")){const i=t.slice(2);return i!==e.hostname&&e.hostname.endsWith(i)}else if(t.startsWith("*.")){const i=t.slice(1);return e.hostname.replace(i,"").split(".").filter(Boolean).length===1}}else return!0;return!1}function Q(e,t,r){if(t){if(!r||!t.endsWith("*"))return t===e.pathname;if(t.endsWith("/**")){const i=t.slice(0,-2);return i!==e.pathname&&e.pathname.startsWith(i)}else if(t.endsWith("/*")){const i=t.slice(0,-1);return e.pathname.replace(i,"").split("/").filter(Boolean).length===1}}else return!0;return!1}function J(e,{domains:t=[],remotePatterns:r=[]}){if(!U(e))return!1;const i=new URL(e);return t.some(n=>L(i,n))||r.some(n=>G(i,n))}function de(e){return e?"transform"in e:!1}function K(e){let t=parseInt(e);return Number.isNaN(t)?e:t}const f={propertiesToHash:j,validateOptions(e){if(!e.src||typeof e.src!="string"&&typeof e.src!="object")throw new g({...S,message:S.message(JSON.stringify(e.src),typeof e.src,JSON.stringify(e,(t,r)=>r===void 0?null:r))});if(p(e.src)){if(!M.includes(e.src.format))throw new g({...v,message:v.message(e.src.format,e.src.src,M)});if(e.widths&&e.densities)throw new g(O);if(e.src.format==="svg"&&(e.format="svg"),e.src.format==="svg"&&e.format!=="svg"||e.src.format!=="svg"&&e.format==="svg")throw new g(R)}else{if(e.src.startsWith("/@fs/")||!U(e.src)&&!e.src.startsWith("/"))throw new g({...I,message:I.message(e.src)});let t;if(!e.width&&!e.height?t="both":!e.width&&e.height?t="width":e.width&&!e.height&&(t="height"),t)throw new g({...b,message:b.message(t,e.src)})}return e.format||(e.format=E),e.width&&(e.width=Math.round(e.width)),e.height&&(e.height=Math.round(e.height)),e},getHTMLAttributes(e){const{targetWidth:t,targetHeight:r}=A(e),{src:i,width:n,height:o,format:s,quality:a,densities:d,widths:u,formats:h,...c}=e;return{...c,width:t,height:r,loading:c.loading??"lazy",decoding:c.decoding??"async"}},getSrcSet(e){const t=[],{targetWidth:r}=A(e),{widths:i,densities:n}=e,o=e.format??E;let s=e.width,a=1/0;p(e.src)&&(s=e.src.width,a=s);const{width:d,height:u,...h}=e,c=[];if(n){const m=n.map(l=>typeof l=="number"?l:parseFloat(l)),y=m.sort().map(l=>Math.round(r*l));c.push(...y.map((l,P)=>({maxTargetWidth:Math.min(l,a),descriptor:`${m[P]}x`})))}else i&&c.push(...i.map(m=>({maxTargetWidth:Math.min(m,a),descriptor:`${m}w`})));for(const{maxTargetWidth:m,descriptor:y}of c){const l={...h};m!==s?l.width=m:e.width&&e.height&&(l.width=e.width,l.height=e.height),t.push({transform:l,descriptor:y,attributes:{type:`image/${o}`}})}return t},getURL(e,t){const r=new URLSearchParams;if(p(e.src))r.append("href",e.src.src);else if(J(e.src,t))r.append("href",e.src);else return e.src;return Object.entries({w:"width",h:"height",q:"quality",f:"format"}).forEach(([o,s])=>{e[s]&&r.append(o,e[s].toString())}),`${z("/","/_image")}?${r}`},parseURL(e){const t=e.searchParams;return t.has("href")?{src:t.get("href"),width:t.has("w")?parseInt(t.get("w")):void 0,height:t.has("h")?parseInt(t.get("h")):void 0,format:t.get("f"),quality:t.get("q")}:void 0}};function A(e){let t=e.width,r=e.height;if(p(e.src)){const i=e.src.width/e.src.height;r&&!t?t=Math.round(r*i):t&&!r?r=Math.round(t/i):!t&&!r&&(t=e.src.width,r=e.src.height)}return{targetWidth:t,targetHeight:r}}let w;const W={low:25,mid:50,high:80,max:100};async function X(){let e;try{e=(await q(()=>import("../index.oSgY-W7l.js").then(t=>t.i),__vite__mapDeps([0,1]))).default}catch{throw new g(T)}return e}const Y={validateOptions:f.validateOptions,getURL:f.getURL,parseURL:f.parseURL,getHTMLAttributes:f.getHTMLAttributes,getSrcSet:f.getSrcSet,async transform(e,t,r){w||(w=await X());const i=t;if(i.format==="svg")return{data:e,format:"svg"};const n=w(e,{failOnError:!1,pages:-1,limitInputPixels:r.service.config.limitInputPixels});if(n.rotate(),i.height&&!i.width?n.resize({height:Math.round(i.height)}):i.width&&n.resize({width:Math.round(i.width)}),i.format){let a;if(i.quality){const d=K(i.quality);typeof d=="number"?a=d:a=i.quality in W?W[i.quality]:void 0}n.toFormat(i.format,{quality:a})}const{data:o,info:s}=await n.toBuffer({resolveWithObject:!0});return{data:o,format:s.format}}};var Z=Y;const ge=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{g as A,j as D,ce as E,ne as I,ee as M,se as N,q as _,me as a,le as b,ie as c,te as d,re as e,S as f,de as g,he as h,p as i,oe as j,ae as k,ge as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/index.oSgY-W7l.js","_astro/index._83CrWW8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}