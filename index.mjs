// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var n=s,r=t,m=e,a=i;var d=function(s,t){var e;return n(s)||s<=0||n(t)||t<=0?NaN:s<2?a:(e=t*t*s/(m(s-1,2)*(s-2)),r(e))};export{d as default};
//# sourceMappingURL=index.mjs.map
