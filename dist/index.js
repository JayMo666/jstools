parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uc/H":[function(require,module,exports) {
module.exports={name:"js-expand-tool",version:"0.1.21",description:"javascript 工具函数包",main:"index.js",scripts:{start:"parcel index.js",build:"parcel build index.js",test:"react-scripts test --env=jsdom",lint:"eslint libs --fix","lint:create":"eslint --init",sh:"publish.sh",release:"npm run lint && npm run build && npm run sh"},repository:{type:"git",url:"https://github.com/JayMo666/js-expand-tool.git"},keywords:["jsExpandTool","js-expand-tool","common","commonJS","common-js","util","utils","lib","libs","javascript"],author:"jaymo",license:"ISC",devDependencies:{eslint:"^5.16.0"},directories:{test:"test"},dependencies:{}};
},{}],"jcwa":[function(require,module,exports) {
"use strict";function r(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function e(r,e){return o(r)||n(r,e)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(r,e){var t=[],n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done)&&(t.push(a.value),!e||t.length!==e);n=!0);}catch(f){o=!0,i=f}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return t}function o(r){if(Array.isArray(r))return r}function i(r){return f(r)||u(r)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function f(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.findPathByLeafId=exports.orderBy=exports.deepClone=void 0;var c=function r(e){if(null===e)return e;if(e instanceof Array)return e.map(function(e){return r(e)});if(e instanceof Object){var t={};return Object.keys(e).forEach(function(n){e[n]instanceof Date?t[n]=new Date(e[n].getTime()):t[n]=r(e[n])}),t}return e};exports.deepClone=c;var l=function(r,t,n){return i(r).sort(function(r,o){return t.reduce(function(t,i,a){if(0===t){var u=e(n&&"desc"===n[a]?[o[i],r[i]]:[r[i],o[i]],2),f=u[0],c=u[1];t=f>c?1:f<c?-1:0}return t},0)})};exports.orderBy=l;var s=function e(t,n,o){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=0;u<o.length;u++){var f,c=i(a);if(n==o[u][t])return c;if(c.push((r(f={},t,o[u][t]),r(f,"value",o[u].name),f)),o[u].children){var l=e(t,n,o[u].children,c);if(l)return l}}};exports.findPathByLeafId=s;
},{}],"QOLq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.flat=exports.unique=exports.uniqueBy=void 0;var r=function(r,e){return r.filter(function(r,n,t){return t.findIndex(function(n){return n[e]===r[e]})===n})};exports.uniqueBy=r;var e=function(r){r.filter(function(r,e,n){return n.indexOf(r)===e})};exports.unique=e;var n=function(r){for(;r.some(function(r){return Array.isArray(r)});)r=[].concat.apply([],r);return r};exports.flat=n;
},{}],"ouKC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttle=void 0;var t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,o=null,r=!0;clearTimeout(o),r&&(r=!1,t.call(this,arguments)),o=setTimeout(function(){return r=!0},e)};exports.throttle=t;
},{}],"i504":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$isFunction=exports.$isArray=exports.$isRegExp=exports.$isObject=exports.$isSymbol=exports.$isString=exports.$isNumber=exports.$isBoolean=exports.$isUndefined=exports.$isNull=void 0;var t=function(t){return"[object Null]"==Object.prototype.toString.call(t)};exports.$isNull=t;var e=function(t){return"[object Undefined]"==Object.prototype.toString.call(t)};exports.$isUndefined=e;var o=function(t){return"[object Boolean]"==Object.prototype.toString.call(t)};exports.$isBoolean=o;var r=function(t){return"[object Number]"==Object.prototype.toString.call(t)};exports.$isNumber=r;var n=function(t){return"[object String]"==Object.prototype.toString.call(t)};exports.$isString=n;var i=function(t){return"[object Symbol]"==Object.prototype.toString.call(t)};exports.$isSymbol=i;var c=function(t){return"[object Object]"==Object.prototype.toString.call(t)};exports.$isObject=c;var p=function(t){return"[object RegExp]"==Object.prototype.toString.call(t)};exports.$isRegExp=p;var s=function(t){return"[object Array]"==Object.prototype.toString.call(t)};exports.$isArray=s;var l=function(t){return"[object Function]"==Object.prototype.toString.call(t)};exports.$isFunction=l;
},{}],"trYz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.URLSearchParams=exports.Url=void 0;var e=require("./types"),r=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.replace(/:([a-zA-Z0-9_]{1,})/g,function(n,t){var o=encodeURIComponent(r[t]);return void 0===o&&new Error("URL ".concat(e," not find ").concat(t)),o})};exports.Url=r;var n=function(r){if((0,e.$isObject)(r))return Object.keys(r).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(JSON.stringify(r[e])))}).join("&");if((0,e.$isString)(r)){var n={};return r.replace(/^.[^\?]*\?/g,"").split("&").forEach(function(e){var r=decodeURIComponent(e).split("=");n[r[0]+""]=decodeURIComponent(r[1])}),n}};exports.URLSearchParams=n;
},{"./types":"i504"}],"cF+e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toDecimalMark=exports.sumBy=exports.sum=exports.round=exports.randomNum=void 0;var r=function(r,t){return Math.floor(Math.random()*(t-r+1))+r};exports.randomNum=r;var t=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Number("".concat(Math.round("".concat(r,"e").concat(t)),"e-").concat(t))};exports.round=t;var n=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return[].concat(t).reduce(function(r,t){return r+t},0)};exports.sum=n;var o=function(r,t){return r.map("function"==typeof t?t:function(r){return r[t]}).reduce(function(r,t){return r+t},0)};exports.sumBy=o;var e=function(r){return r.toLocaleString("en-US")};exports.toDecimalMark=e;
},{}],"aXX2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.underlineToCamelCase=exports.camelCaseToUnderLine=exports.randomHexColorCode=exports.mask=void 0;var e=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";return(""+e).slice(0,-r).replace(/./g,o)+(""+e).slice(-r)};exports.mask=e;var r=function(){var e=(1048575*Math.random()|0).toString(16);return"#"+(6!==e.length?(15*Math.random()|0).toString(16)+e:e)};exports.randomHexColorCode=r;var o=function(e){if("string"!=typeof e)throw TypeError("传入参数不正确, 要求为字符串类型");return e.replace(/[A-Z]/g,function(e,r){var o=e.toLowerCase();return 0===r?o:"_"+o})};exports.camelCaseToUnderLine=o;var t=function(e){if("string"!=typeof e)throw TypeError("传入参数不正确, 要求为字符串类型");return e.replace(/_([a-z|A-Z])/g,function(e,r,o){return o>0?r.toUpperCase():e})};exports.underlineToCamelCase=t;
},{}],"jAV6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatHMS=exports.formatTime=void 0;var e=function(e,t){if(t){var o,n={"M+":(o=e instanceof Date?e:new Date(e)).getMonth()<9?"0"+(o.getMonth()+1):o.getMonth()+1,"d+":o.getDate()<10?"0"+o.getDate():o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds()<10?"0"+o.getSeconds():o.getSeconds(),"q+":Math.floor((o.getMonth()+3)/3),"S+":o.getMilliseconds(),"D+":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"][o.getDay()]};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,"".concat(o.getFullYear()).substr(4-RegExp.$1.length))),n)new RegExp("(".concat(r,")")).test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:"\n00".concat(n[r]).substr("".concat(n[r]).length)));return t}var a=new Date(e);return a.getFullYear()+"-"+(a.getMonth()+1>9?a.getMonth()+1:"0"+(a.getMonth()+1))+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()};exports.formatTime=e;var t=function(e){return e>3600?Math.floor(e/3600)+"h"+Math.floor(e%3600/60)+"m"+e%60+"s":e>60?Math.floor(e/60)+"m"+e%60+"s":e%60+"s"};exports.formatHMS=t;
},{}],"5GKo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rgb2Hex=exports.genUid=exports.sleep=exports.getRate=void 0;var e=function(e){return"★★★★★☆☆☆☆☆".slice(5-e,10-e)};exports.getRate=e;var t=function(e){return new Promise(function(t){setTimeout(t,e)})};exports.sleep=t;var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1?arguments[1]:void 0,r=(t=t||"!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length,o=[],n=0;n<e;n++)o[n]=t.charAt(Math.random()*r);return o.join("")};exports.genUid=r;var o=function(e){for(var t=e.toString().match(/\d+/g),r="#",o=0,n=t.length;o<n;++o)r+=("0"+Number(t[o]).toString(16)).slice(-2);return r};exports.rgb2Hex=o;
},{}],"f59V":[function(require,module,exports) {
String.prototype.match_all=function(t){for(var r=[],n="";null!=(n=t.exec(this));)r.push(n[1]);return r};
},{}],"Focm":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],r=f(require("./package.json")),t=a(require("./libs/object")),i=a(require("./libs/array")),n=a(require("./libs/function")),o=a(require("./libs/url")),u=a(require("./libs/types")),l=a(require("./libs/number")),b=a(require("./libs/string")),c=a(require("./libs/date")),s=a(require("./libs/other"));function a(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};i.get||i.set?Object.defineProperty(r,t,i):r[t]=e[t]}return r.default=e,r}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(r){y(e,r,t[r])})}return e}function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}require("./libs/prototype");var O=p({},t,i,c,n,b,l,u,o,s,{version:r.default.version});for(var j in e.jst=O,O)exports[j]=O[j];
},{"./package.json":"uc/H","./libs/object":"jcwa","./libs/array":"QOLq","./libs/function":"ouKC","./libs/url":"trYz","./libs/types":"i504","./libs/number":"cF+e","./libs/string":"aXX2","./libs/date":"jAV6","./libs/other":"5GKo","./libs/prototype":"f59V"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map