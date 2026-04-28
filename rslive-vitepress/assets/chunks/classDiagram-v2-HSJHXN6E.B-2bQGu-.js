import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.B4AYXe65.js";
import { _ as __name } from "./theme.C2xeFaFd.js";
import "./chunk-FMBD7UC4.BEC-H4vI.js";
import "./chunk-YZCP3GAM.C2-0u8rr.js";
import "./chunk-55IACEB6.U8ducN2I.js";
import "./chunk-EDXVE4YY.BVSyVkW8.js";
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
