!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",l="fp-destroyed",a="fp-enabled",c="fp-viewing",s="active",u="."+s,f="fp-completely",d="."+f,v=".section",p="fp-section",h="."+p,g=h+u,m="fp-tableCell",S="."+m,b="fp-auto-height",w="fp-normal-scroll",y="fp-nav",E="#"+y,L="fp-tooltip",x="."+L,A="fp-show-active",T=".slide",k="fp-slide",M="."+k,O=M+u,C="fp-slides",I="."+C,H="fp-slidesContainer",B="."+H,R="fp-table",z="fp-slidesNav",j="."+z,N=j+" a",P=".fp-controlArrow",D="fp-prev",V="fp-controlArrow "+D,Y=P+("."+D),F="fp-controlArrow fp-next",U=P+".fp-next";function W(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function X(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function _(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=_(e[r],o[r]))}return e}function K(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function q(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function $(e,t){var n;for(n in e=oe(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function Q(e,t,n){for(var o=e[n];o&&!Le(o,t);)o=o[n];return o}function G(e,t){return Q(e,t,"previousElementSibling")}function J(e,t){return Q(e,t,"nextElementSibling")}function Z(e){return e.previousElementSibling}function ee(e){return e.nextElementSibling}function te(e){return e[e.length-1]}function ne(e,t){e=le(e)?e[0]:e;for(var n=null!=t?X(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function oe(e){return le(e)?e:[e]}function re(e){e=oe(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ie(e){e=oe(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function le(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ae(e,t){e=oe(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ce(e,t){e=oe(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function se(e,t){t.appendChild(e)}function ue(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function fe(e,t){ue(e,t,!0)}function de(e,t){for("string"==typeof t&&(t=Ae(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function ve(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function pe(e,t){return e&&1===e.nodeType?Le(e,t)?e:pe(e.parentNode,t):null}function he(e,t){me(e,e.nextSibling,t)}function ge(e,t){me(e,e,t)}function me(e,t,n){le(n)||("string"==typeof n&&(n=Ae(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Se(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function be(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function we(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ye(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Ee(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function Le(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function xe(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Ae(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function Te(e){e=oe(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function ke(e,t,n){for(var o=e[n],r=[];o;)(Le(o,t)||null==t)&&r.push(o),o=o[n];return r}function Me(e,t){return ke(e,t,"nextElementSibling")}function Oe(e,t){return ke(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:X,deepExtend:_,hasClass:K,getWindowHeight:q,css:$,until:Q,prevUntil:G,nextUntil:J,prev:Z,next:ee,last:te,index:ne,getList:oe,hide:re,show:ie,isArrayOrList:le,addClass:ae,removeClass:ce,appendTo:se,wrap:ue,wrapAll:fe,wrapInner:de,unwrap:ve,closest:pe,after:he,before:ge,insertBefore:me,getScrollTop:Se,siblings:be,preventDefault:we,isFunction:ye,trigger:Ee,matches:Le,toggle:xe,createElementFromHTML:Ae,remove:Te,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:ke,nextAll:Me,prevAll:Oe,showError:W},function(Q,oe){var le=oe&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(oe.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1;if(!K(X("html"),a)){var ue=X("html, body"),me=X("body")[0],ke={};oe=_({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:v,slideSelector:T,v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},oe);var Ce,Ie,He,Be,Re=!1,ze=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),je="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Ne="string"==typeof Q?X(Q)[0]:Q,Pe=q(),De=!1,Ve=!0,Ye=!0,Fe=[],Ue={m:{up:!0,down:!0,left:!0,right:!0}};Ue.k=_({},Ue.m);var We,Xe,_e,Ke,qe,$e,Qe,Ge,Je=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},Ze={touchmove:"ontouchmove"in e?"touchmove":Je.move,touchstart:"ontouchstart"in e?"touchstart":Je.down},et='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',tt=_({},oe),nt=!1;Yn(),e.fp_easings=_(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),Ne&&(ke.version="3.0.2",ke.setAutoScrolling=vt,ke.setRecordHistory=pt,ke.setScrollingSpeed=ht,ke.setFitToSection=gt,ke.setLockAnchors=function(e){oe.lockAnchors=e},ke.setMouseWheelScrolling=mt,ke.setAllowScrolling=St,ke.setKeyboardScrolling=wt,ke.moveSectionUp=yt,ke.moveSectionDown=Et,ke.silentMoveTo=Lt,ke.moveTo=xt,ke.moveSlideRight=At,ke.moveSlideLeft=Tt,ke.fitToSection=Pt,ke.reBuild=kt,ke.setResponsive=Mt,ke.getFullpageData=oe,ke.destroy=function(n){vt(!1,"internal"),St(!0),bt(!1),wt(!1),ae(Ne,l),clearTimeout(Ke),clearTimeout(_e),clearTimeout(Xe),clearTimeout(qe),clearTimeout($e),e.removeEventListener("scroll",Nt),e.removeEventListener("hashchange",cn),e.removeEventListener("resize",bn),t.removeEventListener("keydown",un),t.removeEventListener("keyup",fn),["click","touchstart"].forEach(function(e){t.removeEventListener(e,Ot)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,It,!0)}),clearTimeout(Ke),clearTimeout(_e),n&&(Nn(0),X("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Ne).forEach(function(e){en(e,"src")}),X("img[data-srcset]").forEach(function(e){en(e,"srcset")}),Te(X(E+", "+j+", "+P)),$(X(h),{height:"","background-color":"",padding:""}),$(X(M),{width:""}),$(Ne,{height:"",position:"","-ms-touch-action":"","touch-action":""}),$(ue,{overflow:"",height:""}),ce(X("html"),a),ce(me,r),me.className.split(/\s+/).forEach(function(e){0===e.indexOf(c)&&ce(me,e)}),X(h+", "+M).forEach(function(e){oe.scrollOverflowHandler&&oe.scrollOverflow&&oe.scrollOverflowHandler.remove(e),ce(e,R+" "+s+" "+f);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),K(e,p)&&!nt&&e.removeAttribute("data-anchor")}),En(Ne),[S,B,I].forEach(function(e){X(e,Ne).forEach(function(e){ve(e)})}),$(Ne,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[p,k,H].forEach(function(e){ce(X("."+e),e)}))},ke.getActiveSection=function(){return new Xn(X(g)[0])},ke.getActiveSlide=function(){return Gt(X(O,X(g)[0])[0])},ke.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<X(oe.sectionSelector,Ne).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<X(oe.sectionSelector,Ne).length;t++)e.push(0);return e}(),options:oe,setAutoScrolling:vt},ke.shared={afterRenderActions:jt},e.fullpage_api=ke,oe.css3&&(oe.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}()),oe.scrollBar=oe.scrollBar||oe.hybrid,function(){if(!oe.anchors.length){var e="[data-anchor]",t=X(oe.sectionSelector.split(",").join(e+",")+e,Ne);t.length&&(nt=!0,t.forEach(function(e){oe.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!oe.navigationTooltips.length){var e="[data-tooltip]",n=X(oe.sectionSelector.split(",").join(e+",")+e,Ne);n.length&&n.forEach(function(e){oe.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){$(Ne,{height:"100%",position:"relative"}),ae(Ne,n),ae(X("html"),a),Pe=q(),ce(Ne,l),ae(X(oe.sectionSelector,Ne),p),ae(X(oe.slideSelector,Ne),k);for(var e=X(h),o=0;o<e.length;o++){var r=o,i=e[o],c=X(M,i),u=c.length;i.setAttribute("data-fp-styles",i.getAttribute("style")),Bt(i,r),Rt(i,r),u>0?Ht(i,c,u):oe.verticalCentered&&An(i)}oe.fixedElements&&oe.css3&&X(oe.fixedElements).forEach(function(e){me.appendChild(e)}),oe.navigation&&function(){var e=t.createElement("div");e.setAttribute("id",y);var n=t.createElement("ul");e.appendChild(n),se(e,me);var o=X(E)[0];ae(o,"fp-"+oe.navigationPosition),oe.showActiveTooltip&&ae(o,A);for(var r="",i=0;i<X(h).length;i++){var l="";oe.anchors.length&&(l=oe.anchors[i]),r+='<li><a href="#'+l+'"><span class="fp-sr-only">'+zt(i,"Section")+"</span><span></span></a>";var a=oe.navigationTooltips[i];void 0!==a&&""!==a&&(r+='<div class="'+L+" fp-"+oe.navigationPosition+'">'+a+"</div>"),r+="</li>"}X("ul",o)[0].innerHTML=r,$(X(E),{"margin-top":"-"+X(E)[0].offsetHeight/2+"px"});var c=X("li",X(E)[0])[ne(X(g)[0],h)];ae(X("a",c),s)}(),X('iframe[src*="youtube.com/embed/"]',Ne).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),oe.scrollOverflow&&(We=oe.scrollOverflowHandler.init(oe))}(),St(!0),bt(!0),vt(oe.autoScrolling,"internal"),wn(),Rn(),"complete"===t.readyState&&an(),e.addEventListener("load",an),oe.scrollOverflow||jt(),e.addEventListener("scroll",Nt),e.addEventListener("hashchange",cn),e.addEventListener("blur",hn),e.addEventListener("resize",bn),t.addEventListener("keydown",un),t.addEventListener("keyup",fn),["click","touchstart"].forEach(function(e){t.addEventListener(e,Ot)}),oe.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ct(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ct(e,!0)})));var ot=!1,rt=0,it=0,lt=0,at=0,ct=0,st=(new Date).getTime(),ut=0,ft=0,dt=Pe;return ke}function vt(e,t){e||Nn(0),Vn("autoScrolling",e,t);var n=X(g)[0];if(oe.autoScrolling&&!oe.scrollBar)$(ue,{overflow:"hidden",height:"100%"}),pt(tt.recordHistory,"internal"),$(Ne,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Nn(n.offsetTop);else if($(ue,{overflow:"visible",height:"initial"}),pt(!1,"internal"),$(Ne,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Jt(n.offsetTop);o.element.scrollTo(0,o.options)}}function pt(e,t){Vn("recordHistory",e,t)}function ht(e,t){Vn("scrollingSpeed",e,t)}function gt(e,t){Vn("fitToSection",e,t)}function mt(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",Xt,!1):t[n](o+r,Xt,!1)}(),Ne.addEventListener("mousedown",dn),Ne.addEventListener("mouseup",vn)):(t.addEventListener?(t.removeEventListener("mousewheel",Xt,!1),t.removeEventListener("wheel",Xt,!1),t.removeEventListener("MozMousePixelScroll",Xt,!1)):t.detachEvent("onmousewheel",Xt),Ne.removeEventListener("mousedown",dn),Ne.removeEventListener("mouseup",vn))}function St(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){Dn(e,t,"m")}):Dn(e,"all","m")}function bt(e){e?(mt(!0),function(){if(ze||je){oe.autoScrolling&&(me.removeEventListener(Ze.touchmove,Vt,{passive:!1}),me.addEventListener(Ze.touchmove,Vt,{passive:!1}));var e=X(o)[0];e&&(e.removeEventListener(Ze.touchstart,Ut),e.removeEventListener(Ze.touchmove,Yt,{passive:!1}),e.addEventListener(Ze.touchstart,Ut),e.addEventListener(Ze.touchmove,Yt,{passive:!1}))}}()):(mt(!1),function(){if(ze||je){oe.autoScrolling&&(me.removeEventListener(Ze.touchmove,Yt,{passive:!1}),me.removeEventListener(Ze.touchmove,Vt,{passive:!1}));var e=X(o)[0];e&&(e.removeEventListener(Ze.touchstart,Ut),e.removeEventListener(Ze.touchmove,Yt,{passive:!1}))}}())}function wt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){Dn(e,t,"k")}):(Dn(e,"all","k"),oe.keyboardScrolling=e)}function yt(){var e=G(X(g)[0],h);e||!oe.loopTop&&!oe.continuousVertical||(e=te(X(h))),null!=e&&qt(e,null,!0)}function Et(){var e=J(X(g)[0],h);e||!oe.loopBottom&&!oe.continuousVertical||(e=X(h)[0]),null!=e&&qt(e,null,!1)}function Lt(e,t){ht(0,"internal"),xt(e,t),ht(tt.scrollingSpeed,"internal")}function xt(e,t){var n=Mn(e);void 0!==t?On(e,t):null!=n&&qt(n)}function At(e){_t("right",e)}function Tt(e){_t("left",e)}function kt(t){if(!K(Ne,l)){De=!0,Pe=q();for(var n=X(h),o=0;o<n.length;++o){var r=n[o],i=X(I,r)[0],a=X(M,r);oe.verticalCentered&&$(X(S,r),{height:Tn(r)+"px"}),$(r,{height:Pe+"px"}),a.length>1&&mn(i,X(O,i)[0])}oe.scrollOverflow&&We.createScrollBarForAll();var c=ne(X(g)[0],h);c&&Lt(c+1),De=!1,ye(oe.afterResize)&&t&&oe.afterResize.call(Ne,e.innerWidth,e.innerHeight),ye(oe.afterReBuild)&&!t&&oe.afterReBuild.call(Ne)}}function Mt(e){var t=K(me,r);e?t||(vt(!1,"internal"),gt(!1,"internal"),re(X(E)),ae(me,r),ye(oe.afterResponsive)&&oe.afterResponsive.call(Ne,e)):t&&(vt(tt.autoScrolling,"internal"),gt(tt.autoScrolling,"internal"),ie(X(E)),ce(me,r),ye(oe.afterResponsive)&&oe.afterResponsive.call(Ne,e))}function Ot(e){var t=e.target;t&&pe(t,E+" a")?function(e){we(e);var t=ne(pe(this,E+" li"));qt(X(h)[t])}.call(t,e):Le(t,x)?function(){Ee(Z(this),"click")}.call(t):Le(t,P)?function(){var e=pe(this,h);K(this,D)?Ue.m.left&&Tt(e):Ue.m.right&&At(e)}.call(t,e):Le(t,N)||null!=pe(t,N)?function(e){we(e);var t=X(I,pe(this,h))[0],n=X(M,t)[ne(pe(this,"li"))];mn(t,n)}.call(t,e):pe(t,oe.menu+" [data-menuanchor]")&&function(e){!X(oe.menu)[0]||!oe.lockAnchors&&oe.anchors.length||(we(e),xt(this.getAttribute("data-menuanchor")))}.call(t,e)}function Ct(e,n){t["fp_"+e]=n,t.addEventListener(e,It,!0)}function It(e){e.target!=t&&oe.normalScrollElements.split(",").forEach(function(n){null!=pe(e.target,n)&&bt(t["fp_"+e.type])})}function Ht(e,n,o){var r=100*o,i=100/o,l=t.createElement("div");l.className=C,fe(n,l);var a=t.createElement("div");a.className=H,fe(n,a),$(X(B,e),{width:r+"%"}),o>1&&(oe.controlArrows&&function(e){var t=[Ae('<div class="'+V+'"></div>'),Ae('<div class="'+F+'"></div>')];he(X(I,e)[0],t),"#fff"!==oe.controlArrowColor&&($(X(U,e),{"border-color":"transparent transparent transparent "+oe.controlArrowColor}),$(X(Y,e),{"border-color":"transparent "+oe.controlArrowColor+" transparent transparent"})),oe.loopHorizontal||re(X(Y,e))}(e),oe.slidesNavigation&&function(e,t){se(Ae('<div class="'+z+'"><ul></ul></div>'),e);var n=X(j,e)[0];ae(n,"fp-"+oe.slidesNavPosition);for(var o=0;o<t;o++)se(Ae('<li><a href="javascript:void(0)"><span class="fp-sr-only">'+zt(o,"Slide")+"</span><span></span></a></li>"),X("ul",n)[0]);$(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ae(X("a",X("li",n)[0]),s)}(e,o)),n.forEach(function(e){$(e,{width:i+"%"}),oe.verticalCentered&&An(e)});var c=X(O,e)[0];null!=c&&(0!==ne(X(g),h)||0===ne(X(g),h)&&0!==ne(c))?jn(c,"internal"):ae(n[0],s)}function Bt(e,t){t||null!=X(g)[0]||ae(e,s),Be=X(g)[0],$(e,{height:Pe+"px"}),oe.paddingTop&&$(e,{"padding-top":oe.paddingTop}),oe.paddingBottom&&$(e,{"padding-bottom":oe.paddingBottom}),void 0!==oe.sectionsColor[t]&&$(e,{"background-color":oe.sectionsColor[t]}),void 0!==oe.anchors[t]&&e.setAttribute("data-anchor",oe.anchors[t])}function Rt(e,t){void 0!==oe.anchors[t]&&K(e,s)&&Ln(oe.anchors[t],t),oe.menu&&oe.css3&&null!=pe(X(oe.menu)[0],o)&&me.appendChild(X(oe.menu)[0])}function zt(e,t){return oe.navigationTooltips[e]||oe.anchors[e]||t+" "+(e+1)}function jt(){var e,t=X(g)[0];ae(t,f),tn(t),nn(t),oe.scrollOverflow&&oe.scrollOverflowHandler.afterLoad(),(!(e=Mn(sn().section))||void 0!==e&&ne(e)===ne(Be))&&ye(oe.afterLoad)&&$t("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:ne(t,h)}),ye(oe.afterRender)&&$t("afterRender")}function Nt(){var e,t,n,o;if(!oe.autoScrolling||oe.scrollBar){var r=Se(),i=function(e){var t=e>rt?"down":"up";return rt=e,ut=e,t}(r),l=0,a=r+q()/2,c=me.offsetHeight-q()===r,u=X(h);if(c)l=u.length-1;else if(r)for(var d=0;d<u.length;++d)u[d].offsetTop<=a&&(l=d);else l=0;if(t=i,n=X(g)[0].offsetTop,o=n+q(),("up"==t?o>=Se()+q():n<=Se())&&(K(X(g)[0],f)||(ae(X(g)[0],f),ce(be(X(g)[0]),f))),!K(e=u[l],s)){ot=!0;var v,p,m=X(g)[0],S=ne(m,h)+1,b=xn(e),w=e.getAttribute("data-anchor"),y=ne(e,h)+1,E=X(O,e)[0],L={activeSection:m,sectionIndex:y-1,anchorLink:w,element:e,leavingSection:S,direction:b};E&&(p=E.getAttribute("data-anchor"),v=ne(E)),Ye&&(ae(e,s),ce(be(e),s),ye(oe.onLeave)&&$t("onLeave",L),ye(oe.afterLoad)&&$t("afterLoad",L),rn(m),tn(e),nn(e),Ln(w,y-1),oe.anchors.length&&(Ce=w),In(v,p,w)),clearTimeout(qe),qe=setTimeout(function(){ot=!1},100)}oe.fitToSection&&(clearTimeout($e),$e=setTimeout(function(){oe.fitToSection&&X(g)[0].offsetHeight<=Pe&&Pt()},oe.fitToSectionDelay))}}function Pt(){Ye&&(De=!0,qt(X(g)[0]),De=!1)}function Dt(e){if(Ue.m[e]){var t="down"===e?Et:yt;if(oe.scrollOverflow){var n=oe.scrollOverflowHandler.scrollable(X(g)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!oe.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Vt(e){oe.autoScrolling&&Ft(e)&&we(e)}function Yt(t){var n=pe(t.target,h);if(Ft(t)){oe.autoScrolling&&we(t);var o=zn(t);at=o.y,ct=o.x,X(I,n).length&&Math.abs(lt-ct)>Math.abs(it-at)?!Re&&Math.abs(lt-ct)>e.innerWidth/100*oe.touchSensitivity&&(lt>ct?Ue.m.right&&At(n):Ue.m.left&&Tt(n)):oe.autoScrolling&&Ye&&Math.abs(it-at)>e.innerHeight/100*oe.touchSensitivity&&(it>at?Dt("down"):at>it&&Dt("up"))}}function Ft(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Ut(e){if(oe.fitToSection&&(Ge=!1),Ft(e)){var t=zn(e);it=t.y,lt=t.x}}function Wt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Xt(t){var n=(new Date).getTime(),o=K(X(d)[0],w);if(!Ue.m.down&&!Ue.m.up)return we(t),!1;if(oe.autoScrolling&&!He&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;Fe.length>149&&Fe.shift(),Fe.push(Math.abs(r)),oe.scrollBar&&we(t);var c=n-st;return st=n,c>200&&(Fe=[]),Ye&&Wt(Fe,10)>=Wt(Fe,70)&&a&&Dt(i<0?"down":"up"),!1}oe.fitToSection&&(Ge=!1)}function _t(e,t){var n=null==t?X(g)[0]:t,o=X(I,n)[0];if(!(null==o||Re||X(M,o).length<2)){var r=X(O,o)[0],i=null;if(null==(i="left"===e?G(r,M):J(r,M))){if(!oe.loopHorizontal)return;var l=be(r);i="left"===e?l[l.length-1]:l[0]}Re=!ke.test.isTesting,mn(o,i,e)}}function Kt(){for(var e=X(O),t=0;t<e.length;t++)jn(e[t],"internal")}function qt(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=n>ut,i=o-Pe+t,l=oe.bigSectionsDestination;return t>Pe?(r||l)&&"bottom"!==l||(o=i):(r||De&&null==ee(e))&&(o=i),ut=o,o}(e),yMovement:xn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:ne(e,h),activeSlide:X(O,e)[0],activeSection:X(g)[0],leavingSection:ne(X(g),h)+1,localIsResizing:De};if(!(i.activeSection==e&&!De||oe.scrollBar&&Se()===i.dtop&&!K(e,b))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=ne(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,ye(oe.onLeave)&&!1===$t("onLeave",i))return}oe.autoScrolling&&oe.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=function(e){return e.isMovementUp?ge(X(g)[0],Me(e.activeSection,h)):he(X(g)[0],Oe(e.activeSection,h).reverse()),Nn(X(g)[0].offsetTop),Kt(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=xn(e.element),e.leavingSection=ne(e.activeSection,h)+1,e.sectionIndex=ne(e.element,h),e}(i)),i.localIsResizing||rn(i.activeSection),oe.scrollOverflow&&oe.scrollOverflowHandler.beforeLeave(),ae(e,s),ce(be(e),s),tn(e),oe.scrollOverflow&&oe.scrollOverflowHandler.onLeave(),Ye=ke.test.isTesting,In(r,o,i.anchorLink,i.sectionIndex),function(e){if(oe.css3&&oe.autoScrolling&&!oe.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";kn(t,!0),oe.scrollingSpeed?(clearTimeout(_e),_e=setTimeout(function(){Zt(e)},oe.scrollingSpeed)):Zt(e)}else{var n=Jt(e.dtop);ke.test.top=-e.dtop+"px",Fn(n.element,n.options,oe.scrollingSpeed,function(){oe.scrollBar?setTimeout(function(){Zt(e)},30):Zt(e)})}}(i),Ce=i.anchorLink,Ln(i.anchorLink,i.sectionIndex)}}}function $t(e,t){var n,o=function(e,t){var n;return(n=oe.v2compatible?{afterRender:function(){return[Ne]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:Qt(X(g)[0]),slide:Gt(X(O,X(g)[0])[0])}},onLeave:function(){return{origin:Qt(t.activeSection),destination:Qt(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:Qt(t.section),origin:Gt(t.prevSlide),destination:Gt(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}})[e]()}(e,t);if(oe.v2compatible){if(!1===oe[e].apply(o[0],o.slice(1)))return!1}else if(Ee(Ne,e,o),!1===oe[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Qt(e){return e?new Xn(e):null}function Gt(e){return e?new _n(e):null}function Jt(t){var n={};return oe.autoScrolling&&!oe.scrollBar?(n.options=-t,n.element=X(o)[0]):(n.options=t,n.element=e),n}function Zt(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?ge(X(h)[0],e.wrapAroundElements):he(X(h)[X(h).length-1],e.wrapAroundElements),Nn(X(g)[0].offsetTop),Kt())}(e),ye(oe.afterLoad)&&!e.localIsResizing&&$t("afterLoad",e),oe.scrollOverflow&&oe.scrollOverflowHandler.afterLoad(),e.localIsResizing||nn(e.element),ae(e.element,f),ce(be(e.element),f),Ye=!0,ye(e.callback)&&e.callback()}function en(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function tn(e){oe.lazyLoading&&X("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",ln(e)).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=e.getAttribute("data-"+t);null!=n&&n&&en(e,t)}),Le(e,"source")){var t=pe(e,"video, audio");t&&t.load()}})}function nn(e){var t=ln(e);X("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),X('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&on(e),e.onload=function(){e.hasAttribute("data-autoplay")&&on(e)}})}function on(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function rn(e){var t=ln(e);X("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),X('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function ln(e){var t=X(O,e);return t.length&&(e=t[0]),e}function an(){var e=sn(),t=e.section,n=e.slide;t&&(oe.animateAnchor?On(t,n):Lt(t,n))}function cn(){if(!ot&&!oe.lockAnchors){var e=sn(),t=e.section,n=e.slide,o=void 0===Ce,r=void 0===Ce&&void 0===n&&!Re;t&&t.length&&(t&&t!==Ce&&!o||r||!Re&&Ie!=n)&&On(t,n)}}function sn(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function un(e){clearTimeout(Qe);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n=e.shiftKey,o=t.activeElement,r=pn(ln(X(g)[0]));function i(e){return we(e),r[0]?r[0].focus():null}(function(e){var n=pn(t),o=n.indexOf(t.activeElement),r=e.shiftKey?o-1:o+1,i=n[r],l=Gt(pe(i,M)),a=Qt(pe(i,h));return!l&&!a})(e)||(o?null==pe(o,g+","+g+" "+O)&&(o=i(e)):i(e),(!n&&o==r[r.length-1]||n&&o==r[0])&&we(e))}(e):Le(n,"textarea")||Le(n,"input")||Le(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!oe.keyboardScrolling||!oe.autoScrolling||([40,38,32,33,34].indexOf(o)>-1&&we(e),He=e.ctrlKey,Qe=setTimeout(function(){!function(e){var t=e.shiftKey;if(Ye||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:Ue.k.up&&yt();break;case 32:if(t&&Ue.k.up){yt();break}case 40:case 34:Ue.k.down&&Et();break;case 36:Ue.k.up&&xt(1);break;case 35:Ue.k.down&&xt(X(h).length);break;case 37:Ue.k.left&&Tt();break;case 39:Ue.k.right&&At()}}(e)},150))}function fn(e){Ve&&(He=e.ctrlKey)}function dn(e){2==e.which&&(ft=e.pageY,Ne.addEventListener("mousemove",gn))}function vn(e){2==e.which&&Ne.removeEventListener("mousemove",gn)}function pn(e){return[].slice.call(X(et,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function hn(){Ve=!1,He=!1}function gn(e){Ye&&(e.pageY<ft&&Ue.m.up?yt():e.pageY>ft&&Ue.m.down&&Et()),ft=e.pageY}function mn(e,t,n){var o,r,i=pe(e,h),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:ne(t),section:i,sectionIndex:ne(i,h),anchorLink:i.getAttribute("data-anchor"),slidesNav:X(j,i)[0],slideAnchor:Bn(t),prevSlide:X(O,i)[0],prevSlideIndex:ne(X(O,i)[0]),localIsResizing:De};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":o>r?"left":"right"),l.localIsResizing||(Ye=!1),oe.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&ye(oe.onSlideLeave)&&!1===$t("onSlideLeave",l)?Re=!1:(ae(t,s),ce(be(t),s),l.localIsResizing||(rn(l.prevSlide),tn(t)),!oe.loopHorizontal&&oe.controlArrows&&(xe(X(Y,i),0!==l.slideIndex),xe(X(U,i),null!=ee(t))),K(i,s)&&!l.localIsResizing&&In(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(oe.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";ke.test.translate3dH[t.sectionIndex]=r,$(yn(X(B,e)),Pn(r)),Ke=setTimeout(function(){n&&Sn(t)},oe.scrollingSpeed)}else ke.test.left[t.sectionIndex]=Math.round(o.left),Fn(e,Math.round(o.left),oe.scrollingSpeed,function(){n&&Sn(t)})}(e,l,!0))}function Sn(e){var t,n;t=e.slidesNav,n=e.slideIndex,oe.slidesNavigation&&null!=t&&(ce(X(u,t),s),ae(X("a",X("li",t)[n]),s)),e.localIsResizing||(ye(oe.afterSlideLoad)&&$t("afterSlideLoad",e),Ye=!0,nn(e.destiny)),Re=!1}function bn(){if(wn(),ze){var e=t.activeElement;if(!Le(e,"textarea")&&!Le(e,"input")&&!Le(e,"select")){var n=q();Math.abs(n-dt)>20*Math.max(dt,n)/100&&(Xe=setTimeout(function(){kt(!0),dt=n},navigator.userAgent.match("CriOS")?50:0))}}else clearTimeout(Xe),Xe=setTimeout(function(){kt(!0)},350)}function wn(){var t=oe.responsive||oe.responsiveWidth,n=oe.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?Mt(o||r):t?Mt(o):n&&Mt(r)}function yn(e){var t="all "+oe.scrollingSpeed+"ms "+oe.easingcss3;return ce(e,i),$(e,{"-webkit-transition":t,transition:t})}function En(e){return ae(e,i)}function Ln(e,t){var n,o;n=e,o=X(oe.menu)[0],oe.menu&&null!=o&&(ce(X(u,o),s),ae(X('[data-menuanchor="'+n+'"]',o),s)),function(e,t){oe.navigation&&null!=X(E)[0]&&(ce(X(u,X(E)[0]),s),ae(e?X('a[href="#'+e+'"]',X(E)[0]):X("a",X("li",X(E)[0])[t]),s))}(e,t)}function xn(e){var t=ne(X(g)[0],h),n=ne(e,h);return t==n?"none":t>n?"up":"down"}function An(e){if(!K(e,R)){var n=t.createElement("div");n.className=m,n.style.height=Tn(e)+"px",ae(e,R),de(e,n)}}function Tn(e){var t=Pe;if(oe.paddingTop||oe.paddingBottom){var n=e;K(n,p)||(n=pe(e,h));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=Pe-o}return t}function kn(e,t){t?yn(Ne):En(Ne),$(Ne,Pn(e)),ke.test.translate3d=e,setTimeout(function(){ce(Ne,i)},10)}function Mn(e){var t=X(h+'[data-anchor="'+e+'"]',Ne)[0];if(!t){var n=void 0!==e?e-1:0;t=X(h)[n]}return t}function On(e,t){var n=Mn(e);if(null!=n){var o=function(e,t){var n=X(M+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=X(M,t)[e]),n}(t,n);Bn(n)===Ce||K(n,s)?Cn(o):qt(n,function(){Cn(o)})}}function Cn(e){null!=e&&mn(pe(e,I),e)}function In(e,t,n,o){var r="";oe.anchors.length&&!oe.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Ie=t,Hn(r+"/"+t)):null!=e?(Ie=t,Hn(n)):Hn(n)),Rn()}function Hn(t){if(oe.recordHistory)location.hash=t;else if(ze||je)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function Bn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=ne(e);return null==t&&(t=n),t}function Rn(){var e=X(g)[0],t=X(O,e)[0],n=Bn(e),o=Bn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+c+"-[^\\s]+\\b","g");me.className=me.className.replace(i,""),ae(me,c+"-"+r)}function zn(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,je&&Ft(e)&&oe.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function jn(e,t){ht(0,"internal"),void 0!==t&&(De=!0),mn(pe(e,I),e),void 0!==t&&(De=!1),ht(tt.scrollingSpeed,"internal")}function Nn(e){var t=Math.round(e);if(oe.css3&&oe.autoScrolling&&!oe.scrollBar)kn("translate3d(0px, -"+t+"px, 0px)",!1);else if(oe.autoScrolling&&!oe.scrollBar)$(Ne,{top:-t+"px"}),ke.test.top=-t+"px";else{var n=Jt(t);Un(n.element,n.options)}}function Pn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Dn(e,t,n){"all"!==t?Ue[n][t]=e:Object.keys(Ue[n]).forEach(function(t){Ue[n][t]=e})}function Vn(e,t,n){oe[e]=t,"internal"!==n&&(tt[e]=t)}function Yn(){le||(W("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),W("error","https://github.com/alvarotrigo/fullPage.js#options.")),K(X("html"),a)?W("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(oe.continuousVertical&&(oe.loopTop||oe.loopBottom)&&(oe.continuousVertical=!1,W("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!oe.scrollOverflow||!oe.scrollBar&&oe.autoScrolling||W("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!oe.continuousVertical||!oe.scrollBar&&oe.autoScrolling||(oe.continuousVertical=!1,W("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),oe.scrollOverflow&&null==oe.scrollOverflowHandler&&(oe.scrollOverflow=!1,W("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"].forEach(function(e){oe[e]&&W("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),oe.anchors.forEach(function(e){var t=[].slice.call(X("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(X("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(W("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&W("error",'"'+e+'" is is being used by another element `id` property'),t.length&&W("error",'"'+e+'" is is being used by another element `name` property'))}))}function Fn(t,n,o,r){var i=function(t){return t.self!=e&&K(t,C)?t.scrollLeft:!oe.autoScrolling||oe.scrollBar?Se():t.offsetTop}(t),l=n-i,a=0;Ge=!0;var c=function(){if(Ge){var s=n;a+=20,o&&(s=e.fp_easings[oe.easing](a,i,l,o)),Un(t,s),a<o?setTimeout(c,20):void 0!==r&&r()}else a<o&&r()};c()}function Un(t,n){!oe.autoScrolling||oe.scrollBar||t.self!=e&&K(t,C)?t.self!=e&&K(t,C)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function Wn(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=ne(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Xn(e){Wn.call(this,e,h)}function _n(e){Wn.call(this,e,M)}Yn()}}),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){var o=new t(this[0],n);Object.keys(o).forEach(function(t){e.fn.fullpage[t]=o[t]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);