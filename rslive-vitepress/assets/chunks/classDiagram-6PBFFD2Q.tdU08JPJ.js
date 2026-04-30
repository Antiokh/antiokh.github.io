import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.BLDITjsL.js";
import { _ as __name } from "./theme.Elz6nV-O.js";
import "./chunk-FMBD7UC4.CElBXknx.js";
import "./chunk-YZCP3GAM.CRE2MotB.js";
import "./chunk-55IACEB6.C-ky8aPZ.js";
import "./chunk-EDXVE4YY.DRLtyL-W.js";
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
