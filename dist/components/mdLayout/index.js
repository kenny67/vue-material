/*!
* Vue Material v0.8.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l():"function"==typeof define&&define.amd?define([],l):"object"==typeof exports?exports.VueMaterial=l():e.VueMaterial=l()})(this,(function(){return (function(e){function l(a){if(t[a])return t[a].exports;var m=t[a]={i:a,l:!1,exports:{}};return e[a].call(m.exports,m,m.exports,l),m.l=!0,m.exports}var t={};return l.m=e,l.c=t,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},l.p="/",l(l.s=463)})({0:function(e,l){e.exports=function(e,l,t,a,m){var n,d=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(n=e,d=e.default);var i="function"==typeof d?d.options:d;l&&(i.render=l.render,i.staticRenderFns=l.staticRenderFns),a&&(i._scopeId=a);var s;if(m?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(m)},i._ssrRegister=s):t&&(s=t),s){var o=i.functional,g=o?i.render:i.beforeCreate;o?i.render=function(e,l){return s.call(l),g(e,l)}:i.beforeCreate=g?[].concat(g,s):[s]}return{esModule:n,exports:d,options:i}}},242:function(e,l,t){"use strict";function a(e){e.component("md-layout",n.default)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=a;var m=t(243),n=(function(e){return e&&e.__esModule?e:{default:e}})(m);e.exports=l.default},243:function(e,l,t){function a(e){t(244)}var m=t(0)(t(245),null,a,null,null);e.exports=m.exports},244:function(e,l){},245:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={name:"md-layout",props:{mdTag:{type:String,default:"div"},mdRow:Boolean,mdRowXsmall:Boolean,mdRowSmall:Boolean,mdRowMedium:Boolean,mdRowLarge:Boolean,mdRowXlarge:Boolean,mdColumn:Boolean,mdColumnXsmall:Boolean,mdColumnSmall:Boolean,mdColumnMedium:Boolean,mdColumnLarge:Boolean,mdColumnXlarge:Boolean,mdHideXsmall:Boolean,mdHideSmall:Boolean,mdHideMedium:Boolean,mdHideLarge:Boolean,mdHideXlarge:Boolean,mdHideXsmallAndUp:Boolean,mdHideSmallAndUp:Boolean,mdHideMediumAndUp:Boolean,mdHideLargeAndUp:Boolean,mdHideXlargeAndUp:Boolean,mdGutter:[String,Number,Boolean],mdAlign:String,mdAlignXsmall:String,mdAlignSmall:String,mdAlignMedium:String,mdAlignLarge:String,mdAlignXlarge:String,mdVerticalAlign:String,mdVerticalAlignXsmall:String,mdVerticalAlignSmall:String,mdVerticalAlignMedium:String,mdVerticalAlignLarge:String,mdVerticalAlignXlarge:String,mdFlex:[String,Number,Boolean],mdFlexXsmall:[String,Number,Boolean],mdFlexSmall:[String,Number,Boolean],mdFlexMedium:[String,Number,Boolean],mdFlexLarge:[String,Number,Boolean],mdFlexXlarge:[String,Number,Boolean],mdFlexOffset:[String,Number,Boolean],mdFlexOffsetXsmall:[String,Number,Boolean],mdFlexOffsetSmall:[String,Number,Boolean],mdFlexOffsetMedium:[String,Number,Boolean],mdFlexOffsetLarge:[String,Number,Boolean],mdFlexOffsetXlarge:[String,Number,Boolean]},computed:{classes:function(){var e={"md-row":this.mdRow,"md-row-xsmall":this.mdRowXsmall,"md-row-small":this.mdRowSmall,"md-row-medium":this.mdRowMedium,"md-row-large":this.mdRowLarge,"md-row-xlarge":this.mdRowXlarge,"md-column":this.mdColumn,"md-column-xsmall":this.mdColumnXsmall,"md-column-small":this.mdColumnSmall,"md-column-medium":this.mdColumnMedium,"md-column-large":this.mdColumnLarge,"md-column-xlarge":this.mdColumnXlarge,"md-hide-xsmall":this.mdHideXsmall,"md-hide-small":this.mdHideSmall,"md-hide-medium":this.mdHideMedium,"md-hide-large":this.mdHideLarge,"md-hide-xlarge":this.mdHideXlarge,"md-hide-xsmall-and-up":this.mdHideXsmallAndUp,"md-hide-small-and-up":this.mdHideSmallAndUp,"md-hide-medium-and-up":this.mdHideMediumAndUp,"md-hide-large-and-up":this.mdHideLargeAndUp,"md-hide-xlarge-and-up":this.mdHideXlargeAndUp};return this.mdGutter&&("boolean"==typeof this.mdGutter?e["md-gutter"]=!0:this.mdGutter&&(e["md-gutter-"+this.mdGutter]=!0)),this.generatePropClasses("md-flex","","mdFlex",e),this.generatePropClasses("md-flex","xsmall","mdFlexXsmall",e),this.generatePropClasses("md-flex","small","mdFlexSmall",e),this.generatePropClasses("md-flex","medium","mdFlexMedium",e),this.generatePropClasses("md-flex","large","mdFlexLarge",e),this.generatePropClasses("md-flex","xlarge","mdFlexXlarge",e),this.generatePropClasses("md-flex-offset","","mdFlexOffset",e),this.generatePropClasses("md-flex-offset","xsmall","mdFlexOffsetXsmall",e),this.generatePropClasses("md-flex-offset","small","mdFlexOffsetSmall",e),this.generatePropClasses("md-flex-offset","medium","mdFlexOffsetMedium",e),this.generatePropClasses("md-flex-offset","large","mdFlexOffsetLarge",e),this.generatePropClasses("md-flex-offset","xlarge","mdFlexOffsetXlarge",e),this.generatePropClasses("md-align","","mdAlign",e),this.generatePropClasses("md-align","xsmall","mdAlignXsmall",e),this.generatePropClasses("md-align","small","mdAlignSmall",e),this.generatePropClasses("md-align","medium","mdAlignMedium",e),this.generatePropClasses("md-align","large","mdAlignLarge",e),this.generatePropClasses("md-align","xlarge","mdAlignXlarge",e),this.generatePropClasses("md-vertical-align","","mdVerticalAlign",e),this.generatePropClasses("md-vertical-align","xsmall","mdVerticalAlignXsmall",e),this.generatePropClasses("md-vertical-align","small","mdVerticalAlignSmall",e),this.generatePropClasses("md-vertical-align","medium","mdVerticalAlignMedium",e),this.generatePropClasses("md-vertical-align","large","mdVerticalAlignLarge",e),this.generatePropClasses("md-vertical-align","xlarge","mdVerticalAlignXlarge",e),e}},methods:{generatePropClasses:function(e,l,t,a){l&&(l="-"+l),this[t]&&("boolean"==typeof this[t]?this[t]?a[e+l]=!0:a[e+l+"-none"]=!0:a[e+l+"-"+this[t]]=!0)}},render:function(e){return e(this.mdTag,{staticClass:"md-layout",class:this.classes},this.$slots.default)}},e.exports=l.default},463:function(e,l,t){e.exports=t(242)}})}));