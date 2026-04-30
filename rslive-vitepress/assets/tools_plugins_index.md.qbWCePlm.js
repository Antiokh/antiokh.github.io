import { f as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, k as createBaseVNode, a as createTextVNode, b as createBlock, w as withCtx, G as createVNode, a8 as Suspense, a7 as createStaticVNode } from "./chunks/framework.DR1NPXf6.js";
const _imports_0 = "/rslive-vitepress/logo.svg";
const __pageData = JSON.parse('{"title":"Плагины VitePress","description":"Тест подключенных расширений VitePress для RSLive.","frontmatter":{"title":"Плагины VitePress","description":"Тест подключенных расширений VitePress для RSLive.","comment":false},"headers":[],"relativePath":"tools/plugins/index.md","filePath":"tools/plugins/index.md","lastUpdated":null}');
const _sfc_main = { name: "tools/plugins/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  const _component_LiteTree = resolveComponent("LiteTree");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "плагины-vitepress",
      tabindex: "-1"
    }, [
      createTextVNode("Плагины VitePress "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#плагины-vitepress",
        "aria-label": 'Permalink to "Плагины VitePress"'
      }, "​")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "Эта страница проверяет подключенные расширения, которые будут полезны при миграции базы знаний.", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("h2", {
      id: "mermaid",
      tabindex: "-1"
    }, [
      createTextVNode("Mermaid "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#mermaid",
        "aria-label": 'Permalink to "Mermaid"'
      }, "​")
    ], -1)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-9",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20Start%5B%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D0%B0%5D%20--%3E%20Arrival%5B%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5%20%D1%88%D0%B0%D0%B3%D0%B8%5D%0A%20%20Arrival%20--%3E%20Integration%5B%D0%98%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F%5D%0A%20%20Integration%20--%3E%20Permanent%5B%D0%9F%D0%9C%D0%96%5D%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode('<h2 id="timeline" tabindex="-1">Timeline <a class="header-anchor" href="#timeline" aria-label="Permalink to &quot;Timeline&quot;">​</a></h2><div class="timeline-dot"><span class="timeline-dot-title">День 1</span><ul><li>Зарегистрировать адрес пребывания.</li><li>Проверить документы и доступы.</li></ul></div><div class="timeline-dot"><span class="timeline-dot-title">Неделя 1</span><ul><li>Открыть банковский счет.</li><li>Подать документы на нужные сервисы.</li></ul></div><h2 id="code-group-icons" tabindex="-1">Code Group Icons <a class="header-anchor" href="#code-group-icons" aria-label="Permalink to &quot;Code Group Icons&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-I6v7V" id="tab-SJjFZkd" checked><label data-title="npm" for="tab-SJjFZkd">npm</label><input type="radio" name="group-I6v7V" id="tab-_oEX-bg"><label data-title="pnpm" for="tab-_oEX-bg">pnpm</label><input type="radio" name="group-I6v7V" id="tab-Mizo9YW"><label data-title="config.ts" for="tab-Mizo9YW">config.ts</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;RSLive&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="image-viewer" tabindex="-1">Image Viewer <a class="header-anchor" href="#image-viewer" aria-label="Permalink to &quot;Image Viewer&quot;">​</a></h2><p>Клик по изображению должен открывать viewer.</p><p><img src="' + _imports_0 + '" alt="RSLive logo"></p><h2 id="litetree" tabindex="-1">LiteTree <a class="header-anchor" href="#litetree" aria-label="Permalink to &quot;LiteTree&quot;">​</a></h2>', 9)),
    createVNode(_component_LiteTree, {
      lite: "",
      data: `Инструкция по Сербии/
    Подготовка/
        Визы и документы
        Чек-лист
    Первые шаги/
        Белый картон
        Банки
    Интеграция/
        ПМЖ
  `
    })
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
