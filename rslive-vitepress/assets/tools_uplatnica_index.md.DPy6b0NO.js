import { f as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, k as createBaseVNode, a as createTextVNode, G as createVNode } from "./chunks/framework.DR1NPXf6.js";
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
    createVNode(_component_UplatnicaGenerator, {
      payer: "Иван Иванов, Београд, Булевар краља Александра 1",
      subject: "Републичка административна такса",
      recipient: "Министарство унутрашњих послова Републике Србије\nБулевар Михајла Пупина број 2",
      code: "153",
      sum: "1950.00",
      account: "840-1848-16",
      model: "97",
      target: "500160123456789"
    })
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
