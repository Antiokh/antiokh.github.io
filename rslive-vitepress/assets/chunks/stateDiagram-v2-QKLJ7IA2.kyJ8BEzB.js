import { s as styles_default, b as stateRenderer_v3_unified_default, a as stateDiagram_default, S as StateDB } from "./chunk-OYMX7WX6.CEfLzjBl.js";
import { _ as __name } from "./theme.Elz6nV-O.js";
import "./chunk-55IACEB6.C-ky8aPZ.js";
import "./chunk-EDXVE4YY.DRLtyL-W.js";
import "./framework.DR1NPXf6.js";
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
