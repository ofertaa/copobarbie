(()=>{var e={8015:e=>{var t="https://easy-redirects.shopcircle.co";t="https://easy-redirects.shopcircle.co",e.exports={api_base_url:t}}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(8015),t=window.location.hash;if(console.log(t),-1!==t.indexOf("#erid")){"pushState"in history?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="";var r=new XMLHttpRequest;r.open("GET",e.api_base_url+"/api/redirect-hit?shop="+Shopify.shop+"&id="+t.replace("#erid","")),r.send()}else{var a=new XMLHttpRequest;a.open("GET",e.api_base_url+"/api/redirect-hit?shop="+Shopify.shop+"&path="+window.location.pathname),a.onload=function(){var e=JSON.parse(a.responseText);e.target&&window.location.replace(e.target)},a.send()}})()})();
