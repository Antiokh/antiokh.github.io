import { f as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, a7 as createStaticVNode, G as createVNode, w as withCtx, a as createTextVNode, b as createBlock, a8 as Suspense } from "./chunks/framework.DR1NPXf6.js";
const __pageData = JSON.parse('{"title":"Инструкция по созданию контента","description":"Шпаргалка по Markdown, Vue-компонентам и подключенным плагинам VitePress для RSLive.","frontmatter":{"title":"Инструкция по созданию контента","description":"Шпаргалка по Markdown, Vue-компонентам и подключенным плагинам VitePress для RSLive.","comment":true},"headers":[],"relativePath":"tools/content-guide/index.md","filePath":"tools/content-guide/index.md","lastUpdated":null}');
const _sfc_main = { name: "tools/content-guide/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Step = resolveComponent("Step");
  const _component_Steps = resolveComponent("Steps");
  const _component_Mermaid = resolveComponent("Mermaid");
  const _component_LiteTree = resolveComponent("LiteTree");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createStaticVNode("", 20)),
    createVNode(_component_Steps, null, {
      default: withCtx(() => [
        createVNode(_component_Step, { title: "Подготовить документы" }, {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createTextVNode(" Проверьте паспорт, страховку и подтверждение адреса. ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_Step, { title: "Подать заявление" }, {
          default: withCtx(() => [..._cache[1] || (_cache[1] = [
            createTextVNode(" Заполните форму и приложите сканы документов. ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_Step, { title: "Проверить результат" }, {
          default: withCtx(() => [..._cache[2] || (_cache[2] = [
            createTextVNode(" Сохраните подтверждение и добавьте дату следующего действия. ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }),
    _cache[5] || (_cache[5] = createStaticVNode("", 3)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-60",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20Entry%5B%D0%92%D1%8A%D0%B5%D0%B7%D0%B4%5D%20--%3E%20Karton%5B%D0%91%D0%B5%D0%BB%D1%8B%D0%B9%20%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D0%BD%5D%0A%20%20Karton%20--%3E%20Boravak%5B%D0%92%D0%9D%D0%96%5D%0A%20%20Boravak%20--%3E%20Stalni%5B%D0%9F%D0%9C%D0%96%5D%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[3] || (_cache[3] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[6] || (_cache[6] = createStaticVNode("", 9)),
    createVNode(_component_LiteTree, {
      lite: "",
      data: `Инструкция/
    Подготовка/
        Визы
        Документы
    Переезд/
        Белый картон
        Банки
    Интеграция/
        ПМЖ
  `
    }),
    _cache[7] || (_cache[7] = createStaticVNode("", 26))
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
