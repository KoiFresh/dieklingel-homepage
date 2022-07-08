(function(){"use strict";var e={6835:function(e,t,n){var o=n(9242),r=n(3396),i=n.p+"img/logo_2500x500_free.0ed03221.png";const a=e=>((0,r.dD)("data-v-7d05327c"),e=e(),(0,r.Cn)(),e),c={class:"app"},l={class:"header"},u=a((()=>(0,r._)("img",{class:"logo",src:i},null,-1))),d={class:"navbar"},s=(0,r.Uk)(" die"),f=a((()=>(0,r._)("i",{class:"icon-logo-inverted"},null,-1))),p=(0,r.Uk)("Klingel "),h=(0,r.Uk)("contact"),v={class:"body"},m={class:"footer"},g=a((()=>(0,r._)("div",null,[(0,r._)("span",null,[(0,r.Uk)(" directed by "),(0,r._)("a",{href:"#",class:"link"},"Kai Mayer"),(0,r.Uk)(" and "),(0,r._)("a",{href:"#",class:"link"},"Sven Schoch")])],-1))),y={class:"navbar"},b=(0,r.Uk)("credit notes"),w=(0,r.Uk)("privacy policy");function k(e,t,n,o,i,a){const k=(0,r.up)("router-link"),_=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",l,[u,(0,r._)("div",d,[(0,r.Wm)(k,{to:"/"},{default:(0,r.w5)((()=>[s,f,p])),_:1}),(0,r.Wm)(k,{to:"/contact"},{default:(0,r.w5)((()=>[h])),_:1})])]),(0,r._)("div",v,[(0,r.Wm)(_)]),(0,r._)("div",m,[g,(0,r._)("div",y,[(0,r.Wm)(k,{to:"/credit-notes",class:"link"},{default:(0,r.w5)((()=>[b])),_:1}),(0,r.Wm)(k,{to:"/privacy-policy",class:"link"},{default:(0,r.w5)((()=>[w])),_:1})])])])}var _=n(6520),j=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let O=class extends _.w3{};O=j([(0,_.Ei)({})],O);var C=O,E=n(89);const S=(0,E.Z)(C,[["render",k],["__scopeId","data-v-7d05327c"]]);var A=S,T=n(678);const P={class:"container"},x=(0,r.uE)('<p class="text" data-v-5948d20a><a href="#" data-v-5948d20a> die<i class="icon-logo" data-v-5948d20a></i>Klingel </a> is a project under the direction of Kai Mayer and Sven Schoch. The idea of the project is it, to build a lightweight doorbell, with a bunch of features like viedo calling or unlock the door from all over the world. And this for a fraction, of what it normaly costs. dieKlingel is not a ready-to-use plug and pray product ;). Furthermore with some settings it intergrates into your smarthome system like <a href="https://fhem.de/" data-v-5948d20a> fhem </a> . What if you wan&#39;t connect from all over the world? Easy one, than don&#39;t set it up. Do i have to use the app? No! the app is an implementation of the API, on which the doorbell is build on top of. And before you ask, it is mostly <a href="https://de.wikipedia.org/wiki/MQTT" data-v-5948d20a>mqtt</a> . Over all, it is a mixture of mqtt, <a href="https://de.wikipedia.org/wiki/WebRTC" data-v-5948d20a>webrtc</a> and some kind of <a href="https://de.wikipedia.org/wiki/JavaScript_Object_Notation" data-v-5948d20a> json </a> . And straight ahead, we also do signaling over mqtt. If you are interested, then keep this website in mind. Here you will publish information about the project. </p>',1),N=[x];function D(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",P,N)}var U=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let M=class extends _.w3{};M=U([(0,_.Ei)({})],M);var R=M;const W=(0,E.Z)(R,[["render",D],["__scopeId","data-v-5948d20a"]]);var K=W;const q=[{path:"/",name:"home",component:K},{path:"/contact",name:"contact",component:()=>n.e(749).then(n.bind(n,7749))},{path:"/credit-notes",name:"credit-notes",component:()=>n.e(447).then(n.bind(n,7447))},{path:"/privacy-policy",name:"privacy-policy",component:()=>n.e(907).then(n.bind(n,3907))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e(323).then(n.bind(n,6323))}],F=(0,T.p7)({history:(0,T.r5)(),routes:q});var I=F;(0,o.ri)(A).use(I).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var c=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{323:"80c5482e",447:"6a63ca1c",749:"e2829a0d",907:"e21a94e7"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{323:"5cd969be",447:"2e4302c2",749:"9b098c4f",907:"d76d1f2b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dieklingel-homepage:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==t+i){c=s;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[r];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=c,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),c=n.p+a;if(t(a,c))return r();e(o,c,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={323:1,447:1,749:1,907:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),c=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var d=l(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkdieklingel_homepage"]=self["webpackChunkdieklingel_homepage"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6835)}));o=n.O(o)})();
//# sourceMappingURL=app.1fe77087.js.map