import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.xqv-qj6y.js";
import { _ as __name } from "./theme.LE6KTNIf.js";
import "./chunk-FMBD7UC4.C9eAiziM.js";
import "./chunk-YZCP3GAM.CgjwUxyc.js";
import "./chunk-55IACEB6.B9baqfuO.js";
import "./chunk-EDXVE4YY.BXt-YBsx.js";
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
