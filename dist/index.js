"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(x,t){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-sqrt/dist'),q=require('@stdlib/math-base-special-pow/dist'),o=require('@stdlib/constants-float64-pinf/dist');function c(e,r){var i;return u(e)||e<=0||u(r)||r<=0?NaN:e<2?o:(i=r*r*e/(q(e-1,2)*(e-2)),v(i))}t.exports=c
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
