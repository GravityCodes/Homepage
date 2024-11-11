(()=>{"use strict";var n={332:(n,t,e)=>{e.d(t,{A:()=>s});var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());i.push([n.id,"/*  \n*  Disables standard content-box sizing.\n*\n*/\n\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n\n/*  \n*  Removes all default margin sets the line height to meet WCAG criteria.\n*\n*/\n\n* {\n    margin: 0;\n    line-height: calc(1em + 0.5rem);\n}\n\n\n/*\n* Removes default inline display for media and fits media to its container.\n*\n*/\n\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n* Form controls will use parent's font.\n*\n*/\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\n/*\n* Allows paragraphs to break words and add hyphens were necessary.\n*\n*/\n\np {\n  overflow-wrap: break-word;\n  hyphens: auto;\n}",""]);const s=i},106:(n,t,e)=>{e.d(t,{A:()=>f});var o=e(601),r=e.n(o),a=e(314),i=e.n(a),s=e(417),c=e.n(s),l=new URL(e(205),e.b),p=i()(r()),d=c()(l);p.push([n.id,`@font-face {\n    font-family: 'roboto-mono';\n    src: url(${d}) format('woff2-variations');\n    font-weight: 100 700;\n    font-display: swap;\n}\n\n:root {\n    --color-1: #fff12d;\n    --color-2: #dfab4b;\n    --color-3: #f44e72;\n    --color-4: #b0394d;\n    --color-5: #832a39;\n    --color-6: rgb(50, 50, 50);\n    --color-7: #FFFFFF;\n}\n\nbody {\n    font-family: roboto-mono;\n    background-color: var(--color-6);\n}\n\n#hero {\n\n    width: 100%;\n    position: relative;\n    height: 980px;\n\n}\n\n#hero::before {\n    content: "";\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    top: -40%;\n    box-shadow: 0px 0px 10px var(--color-5) ;\n    transform: skew(0deg, -5deg);\n    background-image: linear-gradient(var(--color-4), var(--color-3) 150% );\n    position: absolute;\n}\n\n#hero .wrapper {\n    padding: 50px;\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    max-width: 1239px;\n    margin: 0 auto;\n}\n\n.about-me {\n    background-image: linear-gradient(153deg, var(--color-3) 27%, var(--color-4) 100%);\n    box-shadow: 0px 0px 10px var(--color-5);\n    width: min(100vw - 40px, 600px);\n    align-self: center;\n    padding: 20px;\n    position: relative;\n    flex-direction: column;\n}\n\n\n.about-me::before {\n    content: "";\n    height: 90%;\n    width: 98%;\n    top: 12px;\n    left: 0px;\n    position: absolute;\n    transform: translateZ(-1px);\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    background-color: var(--color-6);\n    \n}\n\n\n.about-me .about-me-text-container {\n    transform: translateZ(1px);\n    border-bottom: 2px solid var(--color-5);\n    margin-bottom: 10px;\n}\n\n\n.about-me-text-container h1 {\n    color: var(--color-1);\n    text-shadow: 0px 1px 3px var(--color-3);\n    font-size: 50px;\n    overflow: hidden;\n    white-space: nowrap;\n    border-right: 2px solid var(--color-1);\n    width: 272px;\n    animation: typing 1s steps(9),\n               cursor 1s step-end infinite;\n}\n\n\n@keyframes typing {\n    from {\n        width: 0;\n    }\n}\n\n@keyframes cursor {\n    50% {\n        border-color: transparent;\n    }\n}\n\n.about-me p {\n    color: var(--color-7);\n    width: 100%;\n    transform: translateZ(1px);\n    animation: shine 1s linear;\n    opacity: 0;\n    animation-delay: 1s;\n    animation-fill-mode: forwards;\n    font-size: 1.1em;\n}\n\n@keyframes shine {\n    from {\n        opacity: 0;\n    }\n    90% {\n        text-shadow: 0px 0px 5px var(--color-7);\n    }\n    to {\n        opacity: 100%;\n        \n    }\n}\n\n.wave-emoji {\n    display: inline-block;\n    user-select: none;\n    padding-right: 4px;\n    \n}\n\n.wave-emoji:hover {\n    animation: wave .3s ease-in;\n    transform: rotate(0) scale(1);\n    animation-iteration-count: 5;\n    transform-origin: bottom center;\n    \n}\n\n@keyframes wave {\n   from {\n        transform: rotate(0deg) scale(1.2);\n   }\n   50% {\n        transform: rotate(20deg) scale(1.2);\n   }\n   to {\n        transform: rotate(0deg) scale(1.2);\n   }\n}\n\n\n\n.icons {\n    transform: translateZ(1px);\n    gap: 20px;\n    padding: 10px;\n    display: flex;\n    justify-content: end;\n    align-items: end;\n}\n\n.icons img {\n    height: 30px;\n}\n\n.portrait-container {\n    box-shadow: 0px 0px 10px var(--color-5) ;\n    height: 400px;\n    width: 400px;\n    position: relative;\n    float: left;\n    align-self: center;\n}\n\n.portrait-container img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n.portrait-container h2 {\n    color: var(--color-1);\n    bottom: 0px;\n    left: 15%;\n    text-shadow: 0px 1px 3px var(--color-3);\n    white-space: nowrap;\n    font-size: 3rem;\n    opacity: 50%;\n    user-select: none;\n    transform: translateZ(1px);\n    position: absolute;\n}\n\n.portrait-container h2:hover {\n    opacity: 100%;\n}\n\n.down-arrows {\n    margin-top: auto;\n    position: relative;\n}\n\n.down-arrows img:first-child {\n    height: 100px;\n    position: absolute;\n    right: 20px;\n    top: -5px;\n    opacity: 0;\n    animation: arrow-breath 3s ease-in-out infinite;\n}\n\n.down-arrows img:nth-child(2) {\n    height: 140px;\n    opacity: 0;\n    animation: arrow-breath 3s ease-in-out infinite;\n    animation-delay: .3s;\n    \n}\n\n@keyframes arrow-breath {\n    50%{\n        opacity: 50%;\n    }\n}\n\n/* My Work Section */\n\n#my-work-section {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    flex-direction: column;\n    padding: 0px 10%;\n\n}\n\n#my-work-section h2 {\n    font-size: 50px;\n    color: var(--color-1);\n    text-shadow: 0px 1px 3px var(--color-3);\n    align-self: flex-start;\n}\n\n.my-work-container {\n    display: grid;\n    height: 90%;\n    width: 100%;\n    grid-template-columns: repeat(3, minmax(150px, 1fr));\n    grid-template-rows: repeat(2, minmax(150px, 400px));\n    justify-items: center;\n    gap: 40px;\n    padding: 50px 0px;\n}\n\n.project-container {\n    height: 100%;\n    width: 90%;\n    background: rgb(131,42,57);\n    background: linear-gradient(130deg, rgba(131,42,57,1) 0%, rgba(176,57,77,1) 35%, rgba(244,78,114,1) 100%);\n    transform: translateY(-50px);\n\n    transition: box-shadow 1s;\n}\n\n.project-container:hover {\n    box-shadow: 0px 0px 10px var(--color-1);\n}\n\n\n.fall-in-place {\n    animation: fallInPlace 1.2s cubic-bezier(.5,.96,.76,1.28) 1;\n    animation-fill-mode: forwards;\n}\n\n@keyframes fallInPlace {\n    from{\n        opacity: 0;\n    }\n    70% {\n        transform: translateY(10px);\n    }\n    80%{\n        transform: translateY(-10px);\n    }\n    90% {\n        transform: translateY(10px);\n    }\n    to{\n        transform: translateY(0px);\n        opacity: 100%;\n    }\n}\n\n.fall-out-place {\n    animation: fallOutPlace 0.5s ease-in-out 1;\n    animation-fill-mode: forwards;\n}\n\n@keyframes fallOutPlace {\n    from{\n        opacity: 1;\n        transform: translateY(20px);\n    }\n    to{\n        transform: translateY(-40px);\n        opacity: 0;\n    }\n}\n\n\n\n.project-container img {\n    height: 50%;\n    width: 100%;\n    object-fit: cover;\n}\n\n.project-details {\n    padding: 5%;\n}\n\n.project-details p {\n    font-size: 14px;\n    color: var(--color-7);\n}\n\n.project-title {\n    display: flex;\n    justify-content: space-between;\n   \n}\n\n.project-title h3 {\n    color: var(--color-1);\n}\n\n.project-links a {\n    width: 25px;\n    display: inline-block;\n}\n\n/* Footer */\n\nfooter {\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--color-4);\n    padding: 50px 10%;\n    height: max(100vh,100% - 722.656px);\n}\n\nfooter h2 {\n    font-size: 50px;\n    color: var(--color-1);\n    text-shadow: 0px 1px 3px var(--color-3);\n}\n\nfooter p {\n    font-size: 18px;\n    color: var(--color-7);\n    \n}\n\n\nfooter form {\n    background-color: var(--color-3);\n    max-width: 500px;\n    display: flex;\n    flex-direction: column;\n    padding: 40px 50px;\n    gap: 20px;\n    box-shadow: 0px 0px 22px var(--color-5);\n}\n\n.form-left {\n    display: flex;\n    flex-direction: column;\n    \n    width: 50%;\n    gap: 20px;\n}\n\n.form-field {\n    display: flex;\n    flex-direction: column;\n    \n}\n\n.form-field label {\n    color: white;\n    font-size: 1.2rem;\n\n}\n\n.form-field textarea {\n    resize: none;\n}\n\n.form-field button {\n    border: none;\n    background-color: var(--color-1);\n    color: black;\n    font-weight: 700;\n    padding: 10px 0px;\n    width: 100%;\n    align-self: center;\n    cursor: pointer;\n}\n\nfooter .icons {\n    display: flex;\n    gap: 20px;\n    justify-content: start;\n}\n\n.form-right {\n    width: 50%;\n    margin-left: 1rem;\n}\n\n.form-right img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n@media (max-width: 1391px){\n\n    .project-container img {\n        height: 50%;\n    }\n\n}\n\n@media (max-width: 1307px) {\n    .project-container img {\n        height: 40%;\n    }\n\n    .project-title {\n        font-size: .9em;\n    }\n}\n\n\n\n@media (max-width:1160px) {\n\n    #hero {\n        height: 900px;\n    }\n\n    .about-me {\n        margin: 0 auto;\n        margin-top: 150px;\n        width: min(100vw - 40px, 650px);\n        \n    }\n\n    .about-me::before {\n        left: 6px;\n        border-radius: 10px;\n    }\n\n    #hero .wrapper {\n        display: block;\n        \n    }\n\n    .down-arrows {\n        width: 140px;\n        margin: 0 auto;\n    }\n\n\n    .my-work-container {\n        grid-template-columns: repeat(2, minmax(150px, 1fr));\n        grid-template-rows: repeat(3, 300px);\n        justify-items: center;\n    }\n\n    .portrait-container {\n        height: 300px;\n        width: 300px;\n        float: left;\n        margin-right: 1rem;\n        z-index: 1;\n    }\n\n    .portrait-container h2 {\n        top: 80px;\n        left: 250px;\n        font-size: 3rem;\n    }\n\n    .form-right img {\n        height: 100%;\n        width: 100%;\n        object-fit: cover ;\n        margin-left: 1rem;\n    }\n}\n\n\n@media (max-width:900px) {\n    .portrait-container {\n        width: 100%;\n        margin-top: 0px;\n        margin-right: 0px;\n        z-index: 0;\n    }\n\n    \n    \n    #hero .wrapper {\n        display: flex;\n        flex-direction: column;\n        justify-content: start;\n        padding-left: 50px;\n        flex-wrap: nowrap;\n    }\n\n    .project-title {\n        font-size: .8em;\n    }\n    \n    .portrait-container h2 {\n        top: 80%;\n        left: calc(50% - 100px);\n        font-size: 2rem;\n    }\n\n    .my-work-container {\n        grid-template-columns: repeat(1, minmax(150px, 1fr));\n        grid-template-rows: repeat(6, 300px);\n        justify-items: center;\n    }\n\n    .about-me {\n        margin: 0;\n        width: 100%;\n        text-align: center;\n        background-image: none;\n        box-shadow: none;\n    }\n\n    .about-me-text-container h1  {\n        font-size: 2em;\n        width: 180px;\n        margin: 0 auto;\n    }\n\n    .about-me::before {\n        visibility: hidden;\n    }\n\n    .icons {\n        margin-top: 20px;\n        justify-content: center;\n    }\n\n    footer {\n        display: block;\n        padding: 0;\n    }\n\n    footer p {\n        padding: 0px 15%;\n        \n    }\n\n    footer form {\n        padding: 30px;\n    }\n\n    .form-left {\n        width: 100%;\n    }\n    .form-right {\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .form-left * {\n        margin: 0 auto;\n    }\n\n    .form-field:last-child {\n        margin: 0;\n    }\n    \n    .form-right img {\n        margin-left: 0;\n    }\n    \n    #my-work-section h2 {\n\n        align-self: center;\n    }\n}`,""]);const f=p},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var f=e(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var h=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=o(n,r),l=0;l<a.length;l++){var p=e(a[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},205:(n,t,e)=>{n.exports=e.p+"2003415ce076bb911ac5.woff2"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var o=e(72),r=e.n(o),a=e(825),i=e.n(a),s=e(659),c=e.n(s),l=e(56),p=e.n(l),d=e(540),f=e.n(d),m=e(113),h=e.n(m),u=e(332),x={};x.styleTagTransform=h(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=f(),r()(u.A,x),u.A&&u.A.locals&&u.A.locals;var g=e(106),w={};w.styleTagTransform=h(),w.setAttributes=p(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=f(),r()(g.A,w),g.A&&g.A.locals&&g.A.locals;const b=document.querySelector("#my-work-section"),v=document.querySelectorAll(".project-container");new IntersectionObserver((n=>{console.log(n[0]),1==n[0].isIntersecting?v.forEach((n=>{n.classList.remove("fall-out-place"),n.classList.add("fall-in-place")})):v.forEach((n=>{n.classList.remove("fall-in-place"),n.classList.add("fall-out-place")}))}),{root:null,rootMargin:"0px",threshold:.1}).observe(b)})();