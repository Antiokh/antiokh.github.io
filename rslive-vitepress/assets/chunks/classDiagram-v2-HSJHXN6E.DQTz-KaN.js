import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.Dyq_kVtv.js";
import { _ as __name } from "./theme.BgTVt-UR.js";
import "./chunk-FMBD7UC4.BEZW2NpD.js";
import "./chunk-YZCP3GAM.CNOzBg3J.js";
import "./chunk-55IACEB6.CZOyzhVs.js";
import "./chunk-EDXVE4YY.C5PAOCNy.js";
import "./framework.CIANDS-T.js";
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
