import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.CIANDS-T.js";
const __pageData = JSON.parse('{"title":"Srpski test","description":"Minimal multilingual page.","frontmatter":{"title":"Srpski test","description":"Minimal multilingual page."},"headers":[],"relativePath":"sr/index.md","filePath":"sr/index.md","lastUpdated":null}');
const _sfc_main = { name: "sr/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "srpski-test",
      tabindex: "-1"
    }, [
      createTextVNode("Srpski test "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#srpski-test",
        "aria-label": 'Permalink to "Srpski test"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Ovo je mala test stranica za proveru višejezične navigacije, URL strukture, pretrage i budućih prevoda vodiča.", -1)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
