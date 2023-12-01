"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(w,u){
var p=require('@stdlib/stats-base-dvariancech/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,i){return y(p(e,r,a,i)/e)}u.exports=x
});var c=s(function(z,v){
var f=require('@stdlib/stats-base-dvariancech/dist').ndarray,j=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,i,h){return j(f(e,r,a,i,h)/e)}v.exports=l
});var o=s(function(A,d){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=n(),_=c();R(q,"ndarray",_);d.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),t,m=O(E(__dirname,"./native.js"));b(m)?t=g:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
