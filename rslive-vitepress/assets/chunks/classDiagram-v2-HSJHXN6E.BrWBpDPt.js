import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.DRdISmop.js";
import { _ as __name } from "./theme.B4YACAsY.js";
import "./chunk-FMBD7UC4.BFVF56lt.js";
import "./chunk-YZCP3GAM.Bou3Qeg9.js";
import "./chunk-55IACEB6.D0W2UMtO.js";
import "./chunk-EDXVE4YY.CDccw0Id.js";
import "./framework.68bDsMbm.js";
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
