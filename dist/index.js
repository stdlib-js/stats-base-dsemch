"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=s(function(w,n){
var f=require('@stdlib/stats-base-dvariancech/dist').ndarray,h=require('@stdlib/math-base-special-sqrt/dist');function p(e,r,i,a,y){return h(f(e,r,i,a,y)/e)}n.exports=p
});var q=s(function(z,v){
var x=require('@stdlib/strided-base-stride2offset/dist'),j=t();function l(e,r,i,a){return j(e,r,i,a,x(e,a))}v.exports=l
});var o=s(function(A,d){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),_=t();R(c,"ndarray",_);d.exports=c
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),u,m=O(E(__dirname,"./native.js"));b(m)?u=g:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
