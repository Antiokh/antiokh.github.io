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
    _cache[4] || (_cache[4] = createStaticVNode("", 9)),
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
