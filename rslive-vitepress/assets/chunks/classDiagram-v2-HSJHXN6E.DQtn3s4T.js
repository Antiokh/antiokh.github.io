import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.C6ySat8_.js";
import { _ as __name } from "./theme.CVcN0eR7.js";
import "./chunk-FMBD7UC4.cUhx-nWi.js";
import "./chunk-YZCP3GAM.Bfgy89Ud.js";
import "./chunk-55IACEB6.DpSoNlkS.js";
import "./chunk-EDXVE4YY.BVMU4yAL.js";
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
