import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.CTBQRFhE.js";
const __pageData = JSON.parse('{"title":"Уплатница","description":"Тестовый генератор сербской платёжки как встроенный VitePress/Vue-компонент.","frontmatter":{"title":"Уплатница","description":"Тестовый генератор сербской платёжки как встроенный VitePress/Vue-компонент."},"headers":[],"relativePath":"tools/uplatnica/index.md","filePath":"tools/uplatnica/index.md","lastUpdated":null}');
const _sfc_main = { name: "tools/uplatnica/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UplatnicaGenerator = resolveComponent("UplatnicaGenerator");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "уплатница",
      tabindex: "-1"
    }, [
      createTextVNode("Уплатница "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#уплатница",
        "aria-label": 'Permalink to "Уплатница"'
      }, "​")
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "Тестовая страница показывает, как в статическую базу знаний можно встроить интерактивный генератор платёжки без DokuWiki custom syntax.", -1)),
    createVNode(_component_UplatnicaGenerator)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
