import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.D0ODkv6s.js";
import { _ as __name } from "./theme.Bqji57aX.js";
import "./chunk-FMBD7UC4.CeSnZA4M.js";
import "./chunk-YZCP3GAM.DWZyUDHa.js";
import "./chunk-55IACEB6.CTwRL3Vy.js";
import "./chunk-EDXVE4YY.DVBgSear.js";
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
