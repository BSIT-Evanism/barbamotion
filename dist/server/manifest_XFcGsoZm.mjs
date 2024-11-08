import { g as decodeKey } from './chunks/astro/server_G11spka1.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D4keFBl7.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/swe-evan/repos/barbamotion/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.10_@types+node@22.5.0_rollup@4.9.4_sass@1.69.6_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.O0XSsUBF.js"}],"styles":[{"type":"external","src":"/_astro/about.BAOk-NpL.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C3dWlimF.js"}],"styles":[{"type":"external","src":"/_astro/about.BAOk-NpL.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.O0XSsUBF.js"}],"styles":[{"type":"external","src":"/_astro/about.BAOk-NpL.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Co-Dy5Pv.js"}],"styles":[{"type":"external","src":"/_astro/about.BAOk-NpL.css"},{"type":"inline","content":"._cursor_1lin9_1{height:20vh;width:20vw;background:red}._maincursor_1lin9_7{mix-blend-mode:difference}._wrapper_1lin9_11{display:flex;width:80vw;height:90vh;justify-content:center;margin-bottom:1rem;margin-top:8vh;margin-left:12vw;transform-style:preserve-3d;perspective:1000px;z-index:20}._wrapper_1lin9_11 ._hero_1lin9_23{width:fit-content;height:fit-content;margin-top:.5rem;display:flex;justify-content:flex-end;transform-origin:center;perspective-origin:center;transform-style:preserve-3d;transform:rotateX(var(--rotateX)) rotateY(var(--rotateY))}._wrapper_1lin9_11 ._hero_1lin9_23:not(:hover)>._inner_1lin9_34>._contain_1lin9_34>._float_1lin9_34>._heroText_1lin9_34{transform:translate(100%);color:rgb(36 36 35/var(--un-text-opacity))}._wrapper_1lin9_11 ._hero_1lin9_23:has(:hover)>._inner_1lin9_34:before{content:\"\";border:#102c57 solid 2px;position:absolute;inset:-1.75rem;border-radius:80px;opacity:1;filter:blur(1px)}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34{position:relative;width:50vw;min-width:35vw;height:30vw;min-height:5rem;border-radius:50px;background:#fff;box-shadow:5px 5px 20px #f8f0e5}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34:before{content:\"\";border:#102c57 solid 2px;position:absolute;inset:-.75rem;border-radius:60px;filter:blur(1px);opacity:.5;transition:all .6s cubic-bezier(.68,-.57,.265,1.53)}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34 ._contain_1lin9_34{position:absolute;top:10%;left:-20%;width:30%;height:80%;z-index:10}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34 ._contain_1lin9_34 ._float_1lin9_34{position:absolute;border-radius:40px;width:100%;height:90%;z-index:10;backface-visibility:hidden;transition:.5s ease;transform-origin:center;transform:translateZ(550px) perspective(1000px);display:flex;justify-content:center;align-items:center}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34 ._contain_1lin9_34 ._float_1lin9_34 ._heroText_1lin9_34{position:absolute;text-transform:uppercase;opacity:1;font-size:min(200px,5vw);transition:.5s ease;font-weight:700}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34 ._contain_1lin9_34 ._flow_1lin9_97{transform:rotateY(-180deg)}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34 ._callFloat_1lin9_100{position:absolute;border-radius:50px;bottom:-10%;right:15%;width:30%;height:15%;box-shadow:5px 5px 20px #f8f0e5;--webkit-backface-visibility: hidden;background:#fff;z-index:10;overflow:hidden}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34 ._callFloat_1lin9_100:before{content:\"\";border:#102c57 solid 2px;position:absolute;inset:.4rem;border-radius:60px;opacity:.5}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34 ._callFloat_1lin9_100 ._ping_1lin9_121{background:#fff;position:absolute;top:10px;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:50px}._wrapper_1lin9_11 ._hero_1lin9_23 ._inner_1lin9_34 ._callFloat_1lin9_100 ._ping_1lin9_121 ._innerPing_1lin9_132{width:15px;height:15px;border-radius:2rem;background:green;animation:1.5s cubic-bezier(.76,0,.55,.75) .5s infinite _pulse_1lin9_1}@keyframes _pulse_1lin9_1{0%{transform:scale(1);opacity:1}to{transform:scale(1.5);opacity:0}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/swe-evan/repos/barbamotion/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/swe-evan/repos/barbamotion/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/swe-evan/repos/barbamotion/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/swe-evan/repos/barbamotion/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.10_@types+node@22.5.0_rollup@4.9.4_sass@1.69.6_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/Users/swe-evan/repos/barbamotion/node_modules/.pnpm/astro@4.16.10_@types+node@22.5.0_rollup@4.9.4_sass@1.69.6_typescript@5.3.3/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_XFcGsoZm.mjs","/Users/swe-evan/repos/barbamotion/node_modules/.pnpm/@astrojs+react@3.6.2_@types+react-dom@18.2.18_@types+react@18.2.46_react-dom@18.2.0_react@18._gsyofi6dmqo4mf6klodfnypwh4/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","/Users/swe-evan/repos/barbamotion/src/components/MarqueeComp/MarqueeComp":"_astro/MarqueeComp.Bi49n3hq.js","/Users/swe-evan/repos/barbamotion/src/components/FadingText":"_astro/FadingText.Cwr3HaD1.js","/Users/swe-evan/repos/barbamotion/src/components/Position-Button":"_astro/Position-Button.CHCdAKDo.js","/Users/swe-evan/repos/barbamotion/src/components/MidSection":"_astro/MidSection.CySXrPTT.js","/Users/swe-evan/repos/barbamotion/src/components/ProjectScroll":"_astro/ProjectScroll.D5Jske3-.js","/astro/hoisted.js?q=0":"_astro/hoisted.C3dWlimF.js","/Users/swe-evan/repos/barbamotion/src/components/HeroSection/HeroSection":"_astro/HeroSection.BI2rwv4x.js","/Users/swe-evan/repos/barbamotion/src/components/ViewControl":"_astro/ViewControl.Djvy0yFN.js","/Users/swe-evan/repos/barbamotion/src/components/ToggleBottomBar":"_astro/ToggleBottomBar.D9OAB2Q0.js","/Users/swe-evan/repos/barbamotion/src/components/FixedImageReact":"_astro/FixedImageReact.CSF-ZqdZ.js","@astrojs/react/client.js":"_astro/client.BYbdJLkD.js","/Users/swe-evan/repos/barbamotion/src/components/Navbar":"_astro/Navbar.A85dRqxc.js","/Users/swe-evan/repos/barbamotion/src/components/LayoutWrapper":"_astro/LayoutWrapper.Dgz-ul2A.js","/astro/hoisted.js?q=1":"_astro/hoisted.Co-Dy5Pv.js","/astro/hoisted.js?q=2":"_astro/hoisted.O0XSsUBF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.BAOk-NpL.css","/Portrait.jpg","/favicon.svg","/meta-img.png","/new-port-2.jpeg","/new-port.jpeg","/portrait-1.jpeg","/portrait-2.jpeg","/scr-1.webp","/scr-2.webp","/scr-3.webp","/showreel.gif","/_astro/FadingText.Cwr3HaD1.js","/_astro/FixedImageReact.CSF-ZqdZ.js","/_astro/HeroSection.BI2rwv4x.js","/_astro/LayoutWrapper.Dgz-ul2A.js","/_astro/MarqueeComp.Bi49n3hq.js","/_astro/MidSection.CySXrPTT.js","/_astro/Navbar.A85dRqxc.js","/_astro/Position-Button.CHCdAKDo.js","/_astro/ProjectScroll.D5Jske3-.js","/_astro/ToggleBottomBar.D9OAB2Q0.js","/_astro/ViewControl.Djvy0yFN.js","/_astro/about.BejfpsUv.css","/_astro/animate.es.B1E36Da7.js","/_astro/client.BYbdJLkD.js","/_astro/globalStore.CEGIqPQe.js","/_astro/hoisted.C3dWlimF.js","/_astro/hoisted.Co-Dy5Pv.js","/_astro/hoisted.O0XSsUBF.js","/_astro/index.CATRFj4A.js","/_astro/index.CCuy3yjK.js","/_astro/index.CyE_x5g_.js","/_astro/index.Ux_0wSrk.js","/_astro/jsx-runtime.DLzSmTp2.js","/_astro/motion.DoAFD8h4.js","/_astro/resolve-element.BwSRoGbS.js","/_astro/stagger.es.D5VqDT9Q.js","/_astro/use-scroll.C-occ9y9.js","/_astro/use-spring.RvN7xH1k.js","/_astro/use-transform.Bq5O1NcO.js","/_astro/astro/assets-service.Bl5cjzfF.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"lS2XWl8MGTV2TBPMzWKdrjNaLTpA/tQ+8vY3d74qzLU=","experimentalEnvGetSecretEnabled":false});

export { manifest };
