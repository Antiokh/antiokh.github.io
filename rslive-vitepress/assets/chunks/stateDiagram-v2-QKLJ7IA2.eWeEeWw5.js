import { s as styles_default, b as stateRenderer_v3_unified_default, a as stateDiagram_default, S as StateDB } from "./chunk-OYMX7WX6.C9ZAt6_m.js";
import { _ as __name } from "./theme.DsH25rUQ.js";
import "./chunk-55IACEB6.B9QIBYxo.js";
import "./chunk-EDXVE4YY.S9_O7qqN.js";
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
