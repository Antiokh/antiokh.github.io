import { u as useData, a9 as toRaw, x as onMounted, _ as __vitePreload, y as onUnmounted, c as createElementBlock, n as normalizeClass, q as ref, o as openBlock, S as inBrowser, aa as useUpdateHead, ab as RouterSymbol, ac as initData, ad as dataSymbol, ae as Content, af as ClientOnly, ag as siteDataRef, ah as createRouter, ai as pathToFile, aj as createSSRApp, d as defineComponent, v as watchEffect, ak as usePrefetch, al as useCopyCode, am as useCodeGroups, a3 as h } from "./chunks/framework.DR1NPXf6.js";
import { ay as mermaid_default, az as RawTheme } from "./chunks/theme.wf358emG.js";
const init = async (externalDiagrams) => {
  try {
    if (mermaid_default.registerExternalDiagrams)
      await mermaid_default.registerExternalDiagrams(externalDiagrams);
  } catch (e) {
    console.error(e);
  }
};
const render = async (id, code, config) => {
  mermaid_default.initialize(config);
  const { svg } = await mermaid_default.render(id, code);
  return svg;
};
const _hoisted_1 = ["innerHTML"];
const _sfc_main = {
  __name: "Mermaid",
  props: {
    graph: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: false,
      default: "mermaid"
    }
  },
  setup(__props) {
    const pluginSettings = ref({
      securityLevel: "loose",
      startOnLoad: false,
      externalDiagrams: []
    });
    const { page } = useData();
    const { frontmatter } = toRaw(page.value);
    const mermaidPageTheme = frontmatter.mermaidTheme || "";
    const props = __props;
    const svg = ref(null);
    let mut = null;
    onMounted(async () => {
      var _a;
      await init(pluginSettings.value.externalDiagrams);
      let settings = await __vitePreload(() => import("./chunks/virtual_mermaid-config.B4Iep5Wk.js"), true ? [] : void 0);
      if (settings == null ? void 0 : settings.default) pluginSettings.value = settings.default;
      mut = new MutationObserver(async () => await renderChart());
      mut.observe(document.documentElement, { attributes: true });
      await renderChart();
      const hasImages = ((_a = /<img([\w\W]+?)>/.exec(decodeURIComponent(props.graph))) == null ? void 0 : _a.length) > 0;
      if (hasImages)
        setTimeout(() => {
          let imgElements = document.getElementsByTagName("img");
          let imgs = Array.from(imgElements);
          if (imgs.length) {
            Promise.all(
              imgs.filter((img) => !img.complete).map(
                (img) => new Promise((resolve) => {
                  img.onload = img.onerror = resolve;
                })
              )
            ).then(async () => {
              await renderChart();
            });
          }
        }, 100);
    });
    onUnmounted(() => mut.disconnect());
    const renderChart = async () => {
      const hasDarkClass = document.documentElement.classList.contains("dark");
      let mermaidConfig = {
        ...pluginSettings.value
      };
      if (mermaidPageTheme) mermaidConfig.theme = mermaidPageTheme;
      if (hasDarkClass) mermaidConfig.theme = "dark";
      let svgCode = await render(
        props.id,
        decodeURIComponent(props.graph),
        mermaidConfig
      );
      const salt = Math.random().toString(36).substring(7);
      svg.value = `${svgCode} <span style="display: none">${salt}</span>`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        innerHTML: svg.value,
        class: normalizeClass(props.class)
      }, null, 10, _hoisted_1);
    };
  }
};
function resolveThemeExtends(theme) {
  if (theme.extends) {
    const base = resolveThemeExtends(theme.extends);
    return {
      ...base,
      ...theme,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme.enhanceApp)
          await theme.enhanceApp(ctx);
      }
    };
  }
  return theme;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Mermaid", _sfc_main);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (false) ;
      else {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
export {
  createApp
};
