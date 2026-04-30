import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.zW6N4-hL.js";
import { _ as __name } from "./theme.wf358emG.js";
import "./chunk-FMBD7UC4.DzdIB2d9.js";
import "./chunk-YZCP3GAM.BODRooHM.js";
import "./chunk-55IACEB6.D6ATp4yu.js";
import "./chunk-EDXVE4YY.B0Gzw98e.js";
import "./framework.DR1NPXf6.js";
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
