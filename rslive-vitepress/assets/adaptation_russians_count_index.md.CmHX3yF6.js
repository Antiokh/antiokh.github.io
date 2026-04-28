import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.CIANDS-T.js";
const __pageData = JSON.parse('{"title":"Демография диаспоры","description":"Тест визуализации статистики из DokuWiki achart.","frontmatter":{"title":"Демография диаспоры","description":"Тест визуализации статистики из DokuWiki achart."},"headers":[],"relativePath":"adaptation/russians/count/index.md","filePath":"adaptation/russians/count/index.md","lastUpdated":null}');
const _sfc_main = { name: "adaptation/russians/count/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DiasporaChart = resolveComponent("DiasporaChart");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "демография-диаспоры",
      tabindex: "-1"
    }, [
      createTextVNode("Демография диаспоры "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#демография-диаспоры",
        "aria-label": 'Permalink to "Демография диаспоры"'
      }, "​")
    ], -1)),
    createVNode(_component_DiasporaChart),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, [
      createTextVNode("Данные перенесены из блока "),
      createBaseVNode("code", null, "achart"),
      createTextVNode(" оригинальной страницы. Для прототипа график сделан как SSR-friendly SVG: он индексируется, не ломает страницу без JavaScript и подходит для дальнейшей замены на ECharts/ApexCharts, если понадобится интерактивность.")
    ], -1))
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
