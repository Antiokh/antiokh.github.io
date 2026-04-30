import { f as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, k as createBaseVNode, a as createTextVNode, G as createVNode, w as withCtx } from "./chunks/framework.DR1NPXf6.js";
const __pageData = JSON.parse('{"title":"Steps","description":"Тест пошагового компонента в VitePress.","frontmatter":{"title":"Steps","description":"Тест пошагового компонента в VitePress."},"headers":[],"relativePath":"tools/steps/index.md","filePath":"tools/steps/index.md","lastUpdated":null}');
const _sfc_main = { name: "tools/steps/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Steps = resolveComponent("Steps");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "steps",
      tabindex: "-1"
    }, [
      createTextVNode("Steps "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#steps",
        "aria-label": 'Permalink to "Steps"'
      }, "​")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "В default theme VitePress нет готового аналога Starlight Steps, зато Markdown-страницы умеют использовать Vue-компоненты. Ниже тест собственного компонента.", -1)),
    createVNode(_component_Steps, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("ol", null, [
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "Подготовить документы")
            ]),
            createBaseVNode("p", null, "Собрать паспорта, свидетельства, апостили и переводы.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "Въехать в Сербию")
            ]),
            createBaseVNode("p", null, "Получить белый картон и проверить сроки пребывания.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "Подать на боравак")
            ]),
            createBaseVNode("p", null, "Заполнить заявление, оплатить пошлины и приложить основание пребывания.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "Следить за продлениями")
            ]),
            createBaseVNode("p", null, "Хранить даты, квитанции и подтверждения подач в одном месте.")
          ])
        ], -1)
      ])]),
      _: 1
    })
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
