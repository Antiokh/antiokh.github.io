import { f as _export_sfc, o as openBlock, c as createElementBlock, k as createBaseVNode, a as createTextVNode } from "./chunks/framework.DR1NPXf6.js";
const __pageData = JSON.parse('{"title":"English test","description":"Minimal multilingual page.","frontmatter":{"title":"English test","description":"Minimal multilingual page."},"headers":[],"relativePath":"en/index.md","filePath":"en/index.md","lastUpdated":null}');
const _sfc_main = { name: "en/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "english-test",
      tabindex: "-1"
    }, [
      createTextVNode("English test "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#english-test",
        "aria-label": 'Permalink to "English test"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "This is a small language test page for checking navigation, URL structure, search indexing, and future translated versions of the guide.", -1)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
