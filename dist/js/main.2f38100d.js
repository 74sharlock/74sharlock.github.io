!function(t){function n(a){if(e[a])return e[a].exports;var i=e[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="/",n(0)}([function(t,n,e){"use strict";e(5);var a=e(6),i=e(3),o={};o.methods={config:function(){return{title:"标题",content:'文本<br><input type="text" placeholder="输入,然后查看控制台">',width:300,height:"auto",okVal:"ok",cancelVal:"cancel",cancel:function(){console.log("你点了cancel按钮")},onShow:function(){var t=this,n=this.node.querySelector("input");n.addEventListener("input",function(){t.returnValue=this.value.trim()},!1),console.log("就要显示了")},afterShow:function(){console.log("显示完成")},onClose:function(){console.log("现在要关闭了","然后输入框的值是"+this.returnValue)},afterClose:function(){console.log("已经关闭,你保存的值是"+this.returnValue)}}},d:function(){return console.log(o.components.d),o.components.d.show()},e:function(){return o.components.e.show()},f:function(){return o.components.f.show()},openAlert:function(){(0,a.tanAlert)("提示框",function(){(0,a.infoTips)("你点击了按钮!")})},openConfirm:function(){(0,a.tanConfirm)("确认框",function(){(0,a.sucTips)("你点击了确定!")},function(){(0,a.errorTips)("你点击了取消!")})},openTips:function(){(0,a.tanTips)("2秒之后关闭",2e3,function(){(0,a.primaryTips)("关闭!",2e3,function(){(0,a.warnTips)("别忘了还有这个警告弹窗样式.")})})}},o.components={d:function(){var t=(0,a.tan)(o.methods.config());return t.on("ok",function(){console.log("你点了OK按钮"),this.close()}),t}(),e:function(){var t=o.methods.config();t.in={name:"bounceInLeft"},t.out={name:"bounceOutRight"};var n=(0,a.tan)(t);return n.on("cancel",function(){console.log("自定义的关闭按钮事件")}),n}(),f:function(){var t=o.methods.config();t.in={name:"flipInX"},t.out={name:"flipOutX"};var n=(0,a.tan)(t);return n.on("afterClose",function(){console.log("自定义的关闭动作结束后事件(这里绕吗?)")}),n}()},(0,i.R)(function(){var t=(0,i.QA)("button");[].forEach.call(t,function(t){t.on("click",function(){var n=t.getAttribute("@click");o.methods[n]&&o.methods[n].call(t)})})})},function(t,n,e){n=t.exports=e(2)(),n.push([t.id,"/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */.animated{animation-duration:1s;animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{animation-duration:.75s}@keyframes bounce{0%,20%,53%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash{animation-name:flash}@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}.pulse{animation-name:pulse}@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}.rubberBand{animation-name:rubberBand}@keyframes shake{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.shake{animation-name:shake}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.headShake{animation-timing-function:ease-in-out;animation-name:headShake}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}.swing{transform-origin:top center;animation-name:swing}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.tada{animation-name:tada}@keyframes wobble{0%{transform:none}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:none}}.wobble{animation-name:wobble}@keyframes jello{0%,11.1%,to{transform:none}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{animation-name:jello;transform-origin:center}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounceIn{animation-name:bounceIn}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}.bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}.bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}.bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}.bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}.bounceOut{animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}.bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:none}}.fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:none}}.fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:none}}.fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:none}}.fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:none}}.fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:none}}.fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}.fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}.fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes flip{0%{transform:perspective(400px) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95);animation-timing-function:ease-in}to{transform:perspective(400px);animation-timing-function:ease-in}}.animated.flip{backface-visibility:visible;animation-name:flip}@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.flipInX{backface-visibility:visible!important;animation-name:flipInX}@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.flipInY{backface-visibility:visible!important;animation-name:flipInY}@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX{animation-name:flipOutX;backface-visibility:visible!important}@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY{backface-visibility:visible!important;animation-name:flipOutY}@keyframes lightSpeedIn{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg);opacity:1}to{transform:none;opacity:1}}.lightSpeedIn{animation-name:lightSpeedIn;animation-timing-function:ease-out}@keyframes lightSpeedOut{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{animation-name:lightSpeedOut;animation-timing-function:ease-in}@keyframes rotateIn{0%{transform-origin:center;transform:rotate(-200deg);opacity:0}to{transform-origin:center;transform:none;opacity:1}}.rotateIn{animation-name:rotateIn}@keyframes rotateInDownLeft{0%{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}.rotateInDownLeft{animation-name:rotateInDownLeft}@keyframes rotateInDownRight{0%{transform-origin:right bottom;transform:rotate(45deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}.rotateInDownRight{animation-name:rotateInDownRight}@keyframes rotateInUpLeft{0%{transform-origin:left bottom;transform:rotate(45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}.rotateInUpLeft{animation-name:rotateInUpLeft}@keyframes rotateInUpRight{0%{transform-origin:right bottom;transform:rotate(-90deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}.rotateInUpRight{animation-name:rotateInUpRight}@keyframes rotateOut{0%{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate(200deg);opacity:0}}.rotateOut{animation-name:rotateOut}@keyframes rotateOutDownLeft{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(45deg);opacity:0}}.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes rotateOutDownRight{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(-45deg);opacity:0}}.rotateOutDownRight{animation-name:rotateOutDownRight}@keyframes rotateOutUpLeft{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}}.rotateOutUpLeft{animation-name:rotateOutUpLeft}@keyframes rotateOutUpRight{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(90deg);opacity:0}}.rotateOutUpRight{animation-name:rotateOutUpRight}@keyframes hinge{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);transform-origin:top left;animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}.hinge{animation-name:hinge}@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:none}}.rollIn{animation-name:rollIn}@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut{animation-name:rollOut}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{animation-name:zoomIn}@keyframes zoomInDown{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutDown{animation-name:zoomOutDown}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}.zoomOutLeft{animation-name:zoomOutLeft}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}.zoomOutRight{animation-name:zoomOutRight}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutUp{animation-name:zoomOutUp}@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown{animation-name:slideInDown}@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInRight{animation-name:slideInRight}@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInUp{animation-name:slideInUp}@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}.slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}.slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}.slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.slideOutUp{animation-name:slideOutUp}",""])},function(t,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var e=this[n];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var a={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(a[o]=!0)}for(i=0;i<n.length;i++){var r=n[i];"number"==typeof r[0]&&a[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),t.push(r))}},t}},function(t,n,e){var a;(function(){!function(i,o){return a=function(){return o()}.call(n,e,n,t),!(void 0!==a&&(t.exports=a))}(this,function(){var t,n,e,a,i,o,r,s,f,m,c,l,u,d,p,h,g,y;return e=document.querySelector.bind(document),n=document.getElementById.bind(document),a=document.querySelectorAll.bind(document),t=document.createElement.bind(document),i=function(t){return document.addEventListener("DOMContentLoaded",t,!1)},y=function(){},s=function(t){return{}.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()},h=function(t){return"string"===s(t)},d=function(t){return"number"===s(t)},m=function(t){return"boolean"===s(t)},p=function(t){return"object"===s(t)},l=function(t){return"function"===s(t)},f=function(t){return"array"===s(t)},g=function(t){return"undefined"===s(t)},u=function(t){return"null"===s(t)},c=function(t){var n,e;return n={object:function(){return 0===Object.keys(t).length},string:function(){return""===t},array:function(){return 0===t.length},default:function(){return!1}},e=n[s(t)]?s(t):"default",n[e]()},Element.prototype.on=function(t,n,e){return this.addEventListener(t,n,!!m(e)&&e)},Element.prototype.off=function(t,n,e){return this.removeEventListener(t,n,!!m(e)&&e)},Element.prototype.gas=Element.prototype.getAttribute,Element.prototype.Q=function(t){return this.querySelector(t)},Element.prototype.QA=function(t){return this.querySelectorAll(t)},Element.prototype.contains||(Element.prototype.contains=function(t){return this.compareDocumentPosition(t)>19}),Element.prototype.removeClass=function(t){return this.classList.remove(t),this},Element.prototype.stopAnimation=function(){return this.isAnimating===!0&&(this.isAnimating=!1,this.removeClass("animated"),this.removeClass(this.animationName),this.animationName=null),this},Element.prototype.addClass=function(t){return this.classList.add(t),this},Element.prototype.toggleClass=function(t){return this.classList.toggle(t),this},Element.prototype.hasClass=function(t){return this.classList.contains(t)},Element.prototype.index=function(){var t,n,e,a,i,o;for(i=this.nodeName.toLowerCase(),o=this.parentNode.querySelectorAll(i),t=e=0,a=o.length;e<a;t=++e)if(n=o[t],this===n)return t},Element.prototype.data=function(t){return this.gas("data-"+t)},Element.prototype.animation=function(t){var n,e,a,i,o;if(o=function(){return this.removeClass("animated"),this.removeClass(t.name),this.isAnimating=!1,this.animationName=null,l(t.fn)&&t.fn.call(this),this.off("webkitAnimationEnd",o,!1),this.off("animationend",o,!1)},this.on("webkitAnimationEnd",o,!1),this.on("animationend",o,!1),this.animationName=t.name,"string"===s(this.animationName)&&(i=t.duration||1,e="number"!==s(t.delay)?Number(t.delay):t.delay,n=t.count||1,a=t.direction,"boolean"!==s(this.isAnimating)&&(this.isAnimating=!1),!this.isAnimating))return this.isAnimating=!0,i&&(i+="s",this.style.animationDuration=i,this.style.webkitAnimationDuration=i),e&&(e+="s",this.style.animationDelay=e,this.style.webkitAnimationDelay=e),a&&(this.style.animationDirection=a,this.style.webkitAnimationDirection=a),n&&(this.style.animationIterationCount=n,this.style.webkitAnimationIterationCount=n),this.addClass("animated"),this.addClass(t.name)},NodeList.prototype.on=function(t,n,e){var a,i,o;for(i=0,o=this.length;i<o;i++)a=this[i],a.on(t,n,!!m(e)&&e);return this},o=function(t,n){var e,a,i,o;return o=new XMLHttpRequest,a=y,e=y,o.onload=function(){return a&&a.apply(o,[p(n)&&n.needJson===!1?o.responseText:JSON.parse(o.responseText)])},o.onerror=function(){},e&&e.apply(o),i=function(n,i,r){var s,f,c,l,u,d,p;if(d=function(t){return a=t},f=function(t){return e=t},s="",o.open(n,t,!m(r)||r),o.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"),i){for(c=0,u=i.length;c<u;c++)l=i[c],p=i[l],s+=String(l)+"="+String(p)+"&";o.send(s)}else o.send();return{then:d,fail:f}},{query:function(t){return i("get",t)},save:function(t,n){return i("post",t,n)},update:function(t,n){return i("put",t,n)},remove:function(t,n){return i("delete",t,n)}}},r=function(t){var n,e,a,i,o,r;return n=0,e=[],r=y,o=y,a=function(t){return r=t},i=function(t){return o=t},t.forEach(function(a,i){var s,f,c,l,u,d,g,y,b,k;if(d="get",k=new XMLHttpRequest,p(a)&&(d=a.method,y=a.data,g=a.path,s=a.async),k.onload=function(){return n+=1,e[i]=h(k.responseText)?JSON.parse(k.responseText):k.responseText,n===t.length&&r&&r.apply(k,[e])},k.onerror=function(){return o&&o.apply(k,[a])},k.open(d,g||a,!m(s)||s),k.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"),y){for(f="",c=0,u=y.length;c<u;c++)l=y[c],b=y[l],f+=String(l)+"="+String(b)+"&";return k.send(f)}return k.send()}),{done:a,fail:i}},{Q:e,D:n,QA:a,CE:t,R:i,noop:y,getType:s,isArray:f,isBoolean:m,isEmpty:c,isFunction:l,isNull:u,isNumber:d,isObject:p,isString:h,isUndefined:g,ajax:o,ajaxAll:r}})}).call(this)},function(t,n,e){function a(t,n){for(var e=0;e<t.length;e++){var a=t[e],i=d[a.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(m(a.parts[o],n))}else{for(var r=[],o=0;o<a.parts.length;o++)r.push(m(a.parts[o],n));d[a.id]={id:a.id,refs:1,parts:r}}}}function i(t){for(var n=[],e={},a=0;a<t.length;a++){var i=t[a],o=i[0],r=i[1],s=i[2],f=i[3],m={css:r,media:s,sourceMap:f};e[o]?e[o].parts.push(m):n.push(e[o]={id:o,parts:[m]})}return n}function o(t,n){var e=g(),a=k[k.length-1];if("top"===t.insertAt)a?a.nextSibling?e.insertBefore(n,a.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),k.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function r(t){t.parentNode.removeChild(t);var n=k.indexOf(t);n>=0&&k.splice(n,1)}function s(t){var n=document.createElement("style");return n.type="text/css",o(t,n),n}function f(t){var n=document.createElement("link");return n.rel="stylesheet",o(t,n),n}function m(t,n){var e,a,i;if(n.singleton){var o=b++;e=y||(y=s(n)),a=c.bind(null,e,o,!1),i=c.bind(null,e,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=f(n),a=u.bind(null,e),i=function(){r(e),e.href&&URL.revokeObjectURL(e.href)}):(e=s(n),a=l.bind(null,e),i=function(){r(e)});return a(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;a(t=n)}else i()}}function c(t,n,e,a){var i=e?"":a.css;if(t.styleSheet)t.styleSheet.cssText=v(n,i);else{var o=document.createTextNode(i),r=t.childNodes;r[n]&&t.removeChild(r[n]),r.length?t.insertBefore(o,r[n]):t.appendChild(o)}}function l(t,n){var e=n.css,a=n.media;if(a&&t.setAttribute("media",a),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function u(t,n){var e=n.css,a=n.sourceMap;a&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([e],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var d={},p=function(t){var n;return function(){return"undefined"==typeof n&&(n=t.apply(this,arguments)),n}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,b=0,k=[];t.exports=function(t,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=h()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var e=i(t);return a(e,n),function(t){for(var o=[],r=0;r<e.length;r++){var s=e[r],f=d[s.id];f.refs--,o.push(f)}if(t){var m=i(t);a(m,n)}for(var r=0;r<o.length;r++){var f=o[r];if(0===f.refs){for(var c=0;c<f.parts.length;c++)f.parts[c]();delete d[f.id]}}}};var v=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n,e){var a=e(1);"string"==typeof a&&(a=[[t.id,a,""]]);e(4)(a,{});a.locals&&(t.exports=a.locals)},function(t,n,e){var a;(function(){!function(i,o){return a=function(){return o()}.call(n,e,n,t),!(void 0!==a&&(t.exports=a))}(this,function(){var t,n,e,a,i,o,r,s,f,m,c,l,u,d,p,h,g,y,b,k,v,w,x,O;return c=document,e=c.querySelector.bind(c),n=c.getElementById.bind(c),a=c.querySelectorAll.bind(c),t=c.createElement.bind(c),x=Object.prototype.toString,u=function(t){return x.call(t).replace("[object ","").replace("]","").toLowerCase()},p=function(t){return"function"===u(t)},h=function(){return(new Date).getTime()},o=function(t,n){return this.listeners=this.listeners||{},this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(n),this},r=function(t){var n,e,a,i;if(this.listeners)for(i=this.listeners[t],e=0,a=i.length;e<a;e++)n=i[e],this.listeners[t]&&p(n)&&n.call(this);return this},m=function(){var n,e,a,i,o,r,s,f,m,c,l,u,d;return s=t("div"),o=this.config.skin?" "+this.config.skin:"",s.className="tan-block hidden"+o,s.id=this.id,u=this.config.title!==!1?'<div class="tan-title"><span>'+this.config.title+'</span><i class="close-this">X</i></div>':"",r=this.config.content||"",m=this.config.okVal||"确定",i=this.config.cancelVal||"取消",e=(this.config.ok!==!1?'<a class="btn btn-ok">'+m+"</a>":"")+(this.config.cancel!==!1?'<a class="btn btn-cancel">'+i+"</a>":""),s.innerHTML=u+'<div class="tan-content">'+r+'</div><div class="tan-btn-area">'+e+"</div>",a=s.querySelector(".tan-content"),l=s.querySelector(".tan-title"),n=s.querySelector(".tan-btn-area"),c=(l?l.clientHeight:0)+n.clientHeight,d=this.config.width?parseInt(this.config.width,10):200,f=this.config.height?parseInt(this.config.height,10):200,s.style.marginLeft=-(d/2)+"px",s.style.marginTop=-((f+c)/2)+"px",s.style.zIndex=this.config.zIndex||"1001",s.style.top=this.config.top||"25%",s.style.left=this.config.left||"50%",a.style.width=d+"px",a.style.height=f+"px",s},f=function(){var n,e,a,i;return a=t("div"),a.id="tanMask",a.className="tan-mask",n=this.config.maskBackground||"rgba(0,0,0,.7)",e=this.config.maskTransitionTime||"1s",i="-webkit-transition: opacity "+e+" ease-in-out;-webkit-transition: opacity "+e+" ease-in-out;background:"+n,a.setAttribute("style",i),a},s=function(t){var n,e,a,i,o;if(o=function(){return this.classList.remove("animated"),this.classList.remove(t.name),this.isAnimating=!1,"function"===u(t.fn)&&t.fn.call(this),this.removeEventListener("webkitAnimationEnd",o,!1),this.removeEventListener("animationend",o,!1)},this.addEventListener("webkitAnimationEnd",o,!1),this.addEventListener("animationend",o,!1),"string"===u(t.name)&&(i=t.duration||1,e="number"===u(t.delay)?t.delay:0,n=t.count||1,a=t.direction,"boolean"!==u(this.isAnimating)&&(this.isAnimating=!1),!this.isAnimating))return this.isAnimating=!0,i&&(i+="s",this.style.animationDuration=i,this.style.webkitAnimationDuration=i),e&&(e+="s",this.style.animationDelay=e,this.style.webkitAnimationDelay=e),a&&(this.style.animationDirection=a,this.style.webkitAnimationDirection=a),1!==parseInt(n,10)&&(this.style.animationIterationCount=n,this.style.webkitAnimationIterationCount=n),this.classList.add("animated"),this.classList.add(t.name)},i=function(){function t(t){this.config=t,this.id="tan"+h(),this.isOperating=!1}return t.prototype.version="0.1.0",t.prototype.show=function(t){var e;return"boolean"!==u(t)&&(t=!0),e=this,t&&(n("tanMask")||(c.body.appendChild(f.call(this)),this.mask=n("tanMask")),this.mask.style.display="block",setTimeout(function(){return e.mask.style.opacity=1},0)),n(this.id)||(c.body.appendChild(m.call(this)),this.node=n(this.id)),p(this.config.onShow)&&this.config.onShow.call(this),this.listeners&&this.listeners.show&&r.call(this,"show"),this.node.querySelector(".btn-ok")&&this.node.querySelector(".btn-ok").addEventListener("click",function(){if(p(e.config.ok)&&e.config.ok.call(e),e.listeners&&e.listeners.ok)return r.call(e,"ok")},!1),this.node.querySelector(".btn-cancel")&&this.node.querySelector(".btn-cancel").addEventListener("click",function(){var t;return p(e.config.cancel)&&(t=e.config.cancel.call(e)),e.listeners&&e.listeners.cancel&&r.call(e,"cancel"),t===!1?t:e?e.close():void 0},!1),this.node.querySelector(".close-this")&&this.node.querySelector(".close-this").addEventListener("click",function(){return e.close()},!1),this.config.in||(this.config.in={name:"fadeInDown"}),this.config.in.fn=function(){if(p(e.config.afterShow)&&e.config.afterShow.call(e),e.listeners&&e.listeners.afterShow)return r.call(e,"afterShow")},this.node.classList.remove("hidden"),s.call(this.node,this.config.in),this},t.prototype.close=function(){var t;if(t=this,this.isOperating===!1)return this.isOperating=!0,this.mask&&(this.mask.style.opacity=0),p(this.config.onClose)&&this.config.onClose.call(this),t.listeners&&t.listeners.close&&r.call(t,"close"),this.node&&(this.config.out||(this.config.out={name:"fadeOutUp"}),this.config.out.fn=function(){if(t.node.classList.add("hidden"),p(t.config.afterClose)&&t.config.afterClose.call(t),t.listeners&&t.listeners.afterClose&&r.call(t,"afterClose"),t.isOperating=!1,t.node&&c.body.removeChild(t.node),t.mask)return c.body.removeChild(t.mask);
},s.call(this.node,this.config.out)),this},t.prototype.on=function(t,n){return o.call(this,t,n),this},t}(),b=function(t){return"object"!==u(t)&&(t={}),new i(t)},k=function(t,n,e,a){return new i({skin:"tanAlert",title:"提示",width:300,height:"auto",content:'<div class="text-center">'+t+"</div>",okVal:"确定",ok:function(){return p(n)&&n.call(this),this.close()},in:e||{name:"fadeInDown",duration:.35},out:a||{name:"fadeOutUp",duration:.35}}).show(!1)},v=function(t,n,e){return new i({skin:"tanConfirm",title:"提示",width:300,height:"auto",content:'<div class="text-center">'+t+"</div>",okVal:"确定",ok:function(){if(p(n))return n.call(this)},cancelVal:"取消",in:{name:"fadeInDown",duration:.35},out:{name:"fadeOutUp",duration:.35},cancel:function(){return p(e)&&e.call(this),this.close()}}).show()},w=function(t,n,e,a,o){return new i({skin:"tanTips "+(a||""),title:!1,top:o||"50px",width:300,height:"auto",content:'<div class="text-center">'+t+"</div>",ok:!1,cancel:!1,onShow:function(){var t;return t=this,setTimeout(function(){return t.close()},n||2e3)},in:{name:"fadeInDown",duration:.35},out:{name:"fadeOutUp",duration:.35},afterClose:function(){if(p(e))return e.call(this)}}).show(!1)},l=function(t,n,e,a){return w(t,n,e,"d",a).show(!1)},y=function(t,n,e,a){return w(t,n,e,"s",a).show(!1)},d=function(t,n,e,a){return w(t,n,e,"i",a).show(!1)},O=function(t,n,e,a){return w(t,n,e,"w",a).show(!1)},g=function(t,n,e,a){return w(t,n,e,"p",a).show(!1)},{tan:b,tanAlert:k,tanConfirm:v,tanTips:w,errorTips:l,sucTips:y,infoTips:d,warnTips:O,primaryTips:g}})}).call(this)}]);