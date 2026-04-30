import { b as baseFlatten, a as baseEach, c as baseIteratee, d as arrayMap, i as isSymbol } from "./baseUniq.BrHxlDK5.js";
import { aB as isArrayLike, aC as isArray, aD as identity } from "./theme.wf358emG.js";
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array) : [];
}
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
function baseLt(value, other) {
  return value < other;
}
function baseExtremum(array, iteratee, comparator) {
  var index = -1, length = array.length;
  while (++index < length) {
    var value = array[index], current = iteratee(value);
    if (current != null && (computed === void 0 ? current === current && !isSymbol(current) : comparator(current, computed))) {
      var computed = current, result = value;
    }
  }
  return result;
}
function min(array) {
  return array && array.length ? baseExtremum(array, identity, baseLt) : void 0;
}
export {
  baseLt as a,
  baseExtremum as b,
  baseMap as c,
  min as d,
  flatten as f,
  map as m
};
