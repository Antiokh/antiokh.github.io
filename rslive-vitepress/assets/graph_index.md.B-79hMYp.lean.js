import { f as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, k as createBaseVNode, a as createTextVNode, G as createVNode } from "./chunks/framework.DR1NPXf6.js";
const __pageData = JSON.parse('{"title":"Схема миграции в Сербию","description":"Тест Mermaid-графа.","frontmatter":{"title":"Схема миграции в Сербию","description":"Тест Mermaid-графа."},"headers":[],"relativePath":"graph/index.md","filePath":"graph/index.md","lastUpdated":null}');
const _sfc_main = { name: "graph/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MermaidGraph = resolveComponent("MermaidGraph");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "схема-миграции-в-сербию",
      tabindex: "-1"
    }, [
      createTextVNode("Схема миграции в Сербию "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#схема-миграции-в-сербию",
        "aria-label": 'Permalink to "Схема миграции в Сербию"'
      }, "​")
    ], -1)),
    createVNode(_component_MermaidGraph),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createTextVNode("Это отдельный тест для страниц, где в DokuWiki сейчас встречается "),
      createBaseVNode("code", null, "graph"),
      createTextVNode(". Если Mermaid зайдёт, такие схемы лучше переносить как исходный текст, а не как вставленный SVG.")
    ], -1))
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
