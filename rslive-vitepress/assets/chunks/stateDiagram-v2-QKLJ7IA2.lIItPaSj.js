import { s as styles_default, b as stateRenderer_v3_unified_default, a as stateDiagram_default, S as StateDB } from "./chunk-OYMX7WX6.yQc8lGGi.js";
import { _ as __name } from "./theme.DIM7jHE4.js";
import "./chunk-55IACEB6.Z6G3-V8c.js";
import "./chunk-EDXVE4YY.BlKHQKL9.js";
import "./framework.CIANDS-T.js";
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
