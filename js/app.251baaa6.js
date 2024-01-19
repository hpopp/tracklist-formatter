(function(){"use strict";var t={8936:function(t,n,r){var e=r(9242),a=r(3396);function i(t,n,r,e,i,o){const u=(0,a.up)("AppHeader"),c=(0,a.up)("MainView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u),(0,a.Wm)(c)],64)}var o=r.p+"img/stormdrain.368eda59.jpg";const u={class:"navbar"},c=(0,a._)("img",{src:o,width:"44"},null,-1),s=(0,a._)("span",{class:"navbar-text"},"Tracklist Formatter",-1),l=(0,a._)("span",{class:"navbar-text gray"},"v0.2.1",-1),p=[c,s,l];function f(t,n,r,e,i,o){return(0,a.wg)(),(0,a.iD)("nav",u,p)}var d={name:"AppHeader"},v=r(89);const h=(0,v.Z)(d,[["render",f]]);var m=h,k=r(7139);const w=t=>((0,a.dD)("data-v-2f376842"),t=t(),(0,a.Cn)(),t),T={class:"main"},b={class:"flex-container"},x={class:"flex-item"},g=w((()=>(0,a._)("h3",null,"Input",-1))),_=w((()=>(0,a._)("span",null," Open your exported tracklist in any text editor of your choice and copypaste the contents here. Supported export formats: Pioneer Rekordbox TXT, Denon Engine DJ CSV, and VirtualDJ CSV. ",-1))),y={class:"flex-item"},O=w((()=>(0,a._)("h3",null,"Output",-1))),j={class:"textbox output"},V=w((()=>(0,a._)("span",null,' Formatted tracklist will show up here as a list of "Artist - Title". ',-1)));function A(t,n,r,i,o,u){return(0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",b,[(0,a._)("div",x,[g,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":n[0]||(n[0]=t=>o.inputTracklist=t),placeholder:"Paste a CSV...",class:"textbox"},null,512),[[e.nr,o.inputTracklist]]),_]),(0,a._)("div",y,[O,(0,a._)("p",j,(0,k.zw)(u.outputTracklist),1),V])])])}var D=r(6026),C=r.n(D);function H(t){let n=M(t),r=C().parse(n,{header:!0});return r.errors.length>0?P(r.errors):r.data.map((t=>S(t))).join("\n")}function M(t){return t.trim().replace(/^(sep=,\n)/,"")}function P(t){return t.map((t=>`Track ${t["row"]}: ${t["message"]}`)).join("\n")}function S(t){return""==t["Artist"]?t["Title"]||t["Track Title"]:`${t["Artist"]} - ${t["Title"]||t["Track Title"]}`}var $={name:"MainView",data(){return{inputTracklist:""}},computed:{outputTracklist(){return""===this.inputTracklist?"":H(this.inputTracklist)}}};const F=(0,v.Z)($,[["render",A],["__scopeId","data-v-2f376842"]]);var Z=F,E={name:"App",components:{AppHeader:m,MainView:Z}};const I=(0,v.Z)(E,[["render",i]]);var J=I;(0,e.ri)(J).mount("#app")}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(n,e,a,i){if(!e){var o=1/0;for(l=0;l<t.length;l++){e=t[l][0],a=t[l][1],i=t[l][2];for(var u=!0,c=0;c<e.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[c])}))?e.splice(c--,1):(u=!1,i<o&&(o=i));if(u){t.splice(l--,1);var s=a();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,a,i]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var a,i,o=e[0],u=e[1],c=e[2],s=0;if(o.some((function(n){return 0!==t[n]}))){for(a in u)r.o(u,a)&&(r.m[a]=u[a]);if(c)var l=c(r)}for(n&&n(e);s<o.length;s++)i=o[s],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},e=self["webpackChunktracklist_formatter"]=self["webpackChunktracklist_formatter"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(8936)}));e=r.O(e)})();
//# sourceMappingURL=app.251baaa6.js.map