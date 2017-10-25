/*!
* Vue Material v0.8.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=476)})({0:function(e,t){e.exports=function(e,t,n,r,o){var u,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(u=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=d):n&&(d=n),d){var f=a.functional,c=f?a.render:a.beforeCreate;f?a.render=function(e,t){return d.call(t),c(e,t)}:a.beforeCreate=c?[].concat(c,d):[d]}return{esModule:u,exports:s,options:a}}},1:function(e,t,n){"use strict";function r(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||r(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return r(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},376:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-subheader",s.default),e.material.styles.push(a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(377),s=r(u),i=n(381),a=r(i);e.exports=t.default},377:function(e,t,n){function r(e){n(378)}var o=n(0)(n(379),n(380),r,null,null);e.exports=o.exports},378:function(e,t){},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r);t.default={name:"md-subheader",mixins:[o.default]},e.exports=t.default},380:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return"md-list"===e.$parent.$options._componentTag?n("li",{staticClass:"md-subheader",class:[e.themeClass]},[e._t("default")],2):n("div",{staticClass:"md-subheader",class:[e.themeClass]},[e._t("default")],2)},staticRenderFns:[]}},381:function(e,t){e.exports=".THEME_NAME.md-subheader.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-subheader.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-subheader.md-warn{color:WARN-COLOR}\n"},476:function(e,t,n){e.exports=n(376)}})}));