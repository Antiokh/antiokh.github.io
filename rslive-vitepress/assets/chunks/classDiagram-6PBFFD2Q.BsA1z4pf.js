import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK._ZGOMsud.js";
import { _ as __name } from "./theme.DsH25rUQ.js";
import "./chunk-FMBD7UC4.B_bxL6ov.js";
import "./chunk-YZCP3GAM.1uo1fJYs.js";
import "./chunk-55IACEB6.B9QIBYxo.js";
import "./chunk-EDXVE4YY.S9_O7qqN.js";
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
