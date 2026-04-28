import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.Xt9iPMoj.js";
import { _ as __name } from "./theme.DkxJa446.js";
import "./chunk-FMBD7UC4.YTPm-my0.js";
import "./chunk-YZCP3GAM.BMf1vyWm.js";
import "./chunk-55IACEB6.CAWtuVm2.js";
import "./chunk-EDXVE4YY.DwGIJlb0.js";
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
