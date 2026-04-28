import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.Bqn6y_IW.js";
import { _ as __name } from "./theme.Bu9PgXaH.js";
import "./chunk-FMBD7UC4.BY-lAxe8.js";
import "./chunk-YZCP3GAM.z48qrBmO.js";
import "./chunk-55IACEB6.CTRvmNI6.js";
import "./chunk-EDXVE4YY.Ck8B-Rg9.js";
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
