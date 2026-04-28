import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.68bDsMbm.js";
const __pageData = JSON.parse('{"title":"Таблицы и API","description":"Тест сортировки, фильтрации и загрузки данных из API.","frontmatter":{"title":"Таблицы и API","description":"Тест сортировки, фильтрации и загрузки данных из API."},"headers":[],"relativePath":"tools/tables/index.md","filePath":"tools/tables/index.md","lastUpdated":null}');
const _sfc_main = { name: "tools/tables/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TablesBakeoff = resolveComponent("TablesBakeoff");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "таблицы-и-api",
      tabindex: "-1"
    }, [
      createTextVNode("Таблицы и API "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#таблицы-и-api",
        "aria-label": 'Permalink to "Таблицы и API"'
      }, "​")
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "Проверочная страница для двух сценариев: таблица из inline-данных и таблица, загружаемая из JSON API. Это закрывает кейсы вроде “Турист vs РВП vs ВНЖ vs Гражданство” и будущего экспорта менячниц из SQLite-плагина.", -1)),
    createVNode(_component_TablesBakeoff)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
