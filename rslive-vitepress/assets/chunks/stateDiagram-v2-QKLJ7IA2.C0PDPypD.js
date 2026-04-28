import { s as styles_default, b as stateRenderer_v3_unified_default, a as stateDiagram_default, S as StateDB } from "./chunk-OYMX7WX6.Bc-euVUS.js";
import { _ as __name } from "./theme.B4YACAsY.js";
import "./chunk-55IACEB6.D0W2UMtO.js";
import "./chunk-EDXVE4YY.CDccw0Id.js";
import "./framework.68bDsMbm.js";
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
