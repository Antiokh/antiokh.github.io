import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.D9wJXY_r.js";
import { _ as __name } from "./theme.DIM7jHE4.js";
import "./chunk-FMBD7UC4.BJTgngvP.js";
import "./chunk-YZCP3GAM.FYZiXlsl.js";
import "./chunk-55IACEB6.Z6G3-V8c.js";
import "./chunk-EDXVE4YY.BlKHQKL9.js";
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
