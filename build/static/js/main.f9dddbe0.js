!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/ImRubic/asteroids/build/",e(e.s=1)}([function(t,e,i){"use strict";function n(){}function o(t){try{return t.then}catch(t){return v=t,w}}function r(t,e){try{return t(e)}catch(t){return v=t,w}}function s(t,e,i){try{t(e,i)}catch(t){return v=t,w}}function a(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==n&&b(t,this)}function h(t,e,i){return new t.constructor(function(o,r){var s=new a(n);s.then(o,r),u(t,new y(e,i,s))})}function u(t,e){for(;3===t._83;)t=t._18;if(a._47&&a._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);c(t,e)}function c(t,e){p(function(){var i=1===t._83?e.onFulfilled:e.onRejected;if(null===i)return void(1===t._83?f(e.promise,t._18):d(e.promise,t._18));var n=r(i,t._18);n===w?d(e.promise,v):f(e.promise,n)})}function f(t,e){if(e===t)return d(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var i=o(e);if(i===w)return d(t,v);if(i===t.then&&e instanceof a)return t._83=3,t._18=e,void l(t);if("function"===typeof i)return void b(i.bind(e),t)}t._83=1,t._18=e,l(t)}function d(t,e){t._83=2,t._18=e,a._71&&a._71(t,e),l(t)}function l(t){if(1===t._75&&(u(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)u(t,t._38[e]);t._38=null}}function y(t,e,i){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=i}function b(t,e){var i=!1,n=s(t,function(t){i||(i=!0,f(e,t))},function(t){i||(i=!0,d(e,t))});i||n!==w||(i=!0,d(e,v))}var p=i(4),v=null,w={};t.exports=a,a._47=null,a._71=null,a._44=n,a.prototype.then=function(t,e){if(this.constructor!==a)return h(this,t,e);var i=new a(n);return u(this,new y(t,e,i)),i}},function(t,e,i){i(2),t.exports=i(9)},function(t,e,i){"use strict";"undefined"===typeof Promise&&(i(3).enable(),window.Promise=i(6)),i(7),Object.assign=i(8)},function(t,e,i){"use strict";function n(){u=!1,a._47=null,a._71=null}function o(t){function e(e){(t.allRejections||s(f[e].error,t.whitelist||h))&&(f[e].displayId=c++,t.onUnhandled?(f[e].logged=!0,t.onUnhandled(f[e].displayId,f[e].error)):(f[e].logged=!0,r(f[e].displayId,f[e].error)))}function i(e){f[e].logged&&(t.onHandled?t.onHandled(f[e].displayId,f[e].error):f[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+f[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+f[e].displayId+".")))}t=t||{},u&&n(),u=!0;var o=0,c=0,f={};a._47=function(t){2===t._83&&f[t._56]&&(f[t._56].logged?i(t._56):clearTimeout(f[t._56].timeout),delete f[t._56])},a._71=function(t,i){0===t._75&&(t._56=o++,f[t._56]={displayId:null,error:i,timeout:setTimeout(e.bind(null,t._56),s(i,h)?100:2e3),logged:!1})}}function r(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}function s(t,e){return e.some(function(e){return t instanceof e})}var a=i(0),h=[ReferenceError,TypeError,RangeError],u=!1;e.disable=n,e.enable=o},function(t,e,i){"use strict";(function(e){function i(t){s.length||(r(),a=!0),s[s.length]=t}function n(){for(;h<s.length;){var t=h;if(h+=1,s[t].call(),h>u){for(var e=0,i=s.length-h;e<i;e++)s[e]=s[e+h];s.length-=h,h=0}}s.length=0,h=0,a=!1}function o(t){return function(){function e(){clearTimeout(i),clearInterval(n),t()}var i=setTimeout(e,0),n=setInterval(e,50)}}t.exports=i;var r,s=[],a=!1,h=0,u=1024,c="undefined"!==typeof e?e:self,f=c.MutationObserver||c.WebKitMutationObserver;r="function"===typeof f?function(t){var e=1,i=new f(t),n=document.createTextNode("");return i.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}(n):o(n),i.requestFlush=r,i.makeRequestCallFromTimer=o}).call(e,i(5))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";function n(t){var e=new o(o._44);return e._83=1,e._18=t,e}var o=i(0);t.exports=o;var r=n(!0),s=n(!1),a=n(null),h=n(void 0),u=n(0),c=n("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return a;if(void 0===t)return h;if(!0===t)return r;if(!1===t)return s;if(0===t)return u;if(""===t)return c;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,i){i(t)})}return n(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,i){function n(s,a){if(a&&("object"===typeof a||"function"===typeof a)){if(a instanceof o&&a.then===o.prototype.then){for(;3===a._83;)a=a._18;return 1===a._83?n(s,a._18):(2===a._83&&i(a._18),void a.then(function(t){n(s,t)},i))}var h=a.then;if("function"===typeof h){return void new o(h.bind(a)).then(function(t){n(s,t)},i)}}e[s]=a,0===--r&&t(e)}if(0===e.length)return t([]);for(var r=e.length,s=0;s<e.length;s++)n(s,e[s])})},o.reject=function(t){return new o(function(e,i){i(t)})},o.race=function(t){return new o(function(e,i){t.forEach(function(t){o.resolve(t).then(e,i)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!==typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function r(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise(function(e,i){t.onload=function(){e(t.result)},t.onerror=function(){i(t.error)}})}function a(t){var e=new FileReader,i=s(e);return e.readAsArrayBuffer(t),i}function h(t){var e=new FileReader,i=s(e);return e.readAsText(t),i}function u(t){for(var e=new Uint8Array(t),i=new Array(e.length),n=0;n<e.length;n++)i[n]=String.fromCharCode(e[n]);return i.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&m(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=r(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?r(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=r(this);if(t)return t;if(this._bodyBlob)return h(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return x.indexOf(e)>-1?e:t}function l(t,e){e=e||{};var i=e.body;if(t instanceof l){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var i=t.split("="),n=i.shift().replace(/\+/g," "),o=i.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function b(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var i=t.split(":"),n=i.shift().trim();if(n){var o=i.join(":").trim();e.append(n,o)}}),e}function p(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],m=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=i(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=i(n)},o.prototype.forEach=function(t,e){for(var i in this.map)this.map.hasOwnProperty(i)&&t.call(e,this.map[i],i,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,i){t.push(i)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,i){t.push([i,e])}),n(t)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},f.call(l.prototype),f.call(p.prototype),p.prototype.clone=function(){return new p(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},p.error=function(){var t=new p(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];p.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new p(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=l,t.Response=p,t.fetch=function(t,e){return new Promise(function(i,n){var o=new l(t,e),r=new XMLHttpRequest;r.onload=function(){var t={status:r.status,statusText:r.statusText,headers:b(r.getAllResponseHeaders()||"")};t.url="responseURL"in r?r.responseURL:t.headers.get("X-Request-URL");var e="response"in r?r.response:r.responseText;i(new p(e,t))},r.onerror=function(){n(new TypeError("Network request failed"))},r.ontimeout=function(){n(new TypeError("Network request failed"))},r.open(o.method,o.url,!0),"include"===o.credentials&&(r.withCredentials=!0),"responseType"in r&&v.blob&&(r.responseType="blob"),o.headers.forEach(function(t,e){r.setRequestHeader(e,t)}),r.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,h=n(t),u=1;u<arguments.length;u++){i=Object(arguments[u]);for(var c in i)r.call(i,c)&&(h[c]=i[c]);if(o){a=o(i);for(var f=0;f<a.length;f++)s.call(i,a[f])&&(h[a[f]]=i[a[f]])}}return h}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(10),o=i(14);i.n(o),new n.a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=i(11),r=i(12),s=i(13),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),h=function(){function t(){n(this,t),this.ship=new r.a(150,180),this.asteroid=[],this.aCount=0,this.lazer=[],this.start=!1,this.over=!1,this.level=1,this.life=3,this.score=0,this.cooldown=0,this.input={direction:"neutral",angle:"neutral",start:!1},this.audio1=new Audio("laser.wav"),this.audio2=new Audio("rock.wav"),this.audio3=new Audio("explosion.wav"),this.backBufferCanvas=document.createElement("canvas"),this.backBufferCanvas.width=300,this.backBufferCanvas.height=330,this.backBufferContext=this.backBufferCanvas.getContext("2d"),this.screenBufferCanvas=document.createElement("canvas"),this.screenBufferCanvas.width=300,this.screenBufferCanvas.height=330,document.body.appendChild(this.screenBufferCanvas),this.screenBufferContext=this.screenBufferCanvas.getContext("2d");var e=document.createElement("div");e.id="message",e.textContent="",document.body.appendChild(e);var i=document.createElement("div");i.id="message2",i.textContent="Level: "+this.level+"       Score: "+this.score+"       Lives: "+this.life,document.body.appendChild(i),this.createAsteroid=this.createAsteroid.bind(this),this.createAsteroid2=this.createAsteroid2.bind(this),this.lostLife=this.lostLife.bind(this),this.newLevel=this.newLevel.bind(this),this.gameOver=this.gameOver.bind(this),this.control=this.control.bind(this),this.hit=this.hit.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.update=this.update.bind(this),this.render=this.render.bind(this),this.loop=this.loop.bind(this),window.onkeydown=this.handleKeyDown,window.onkeyup=this.handleKeyUp,this.interval=setInterval(this.loop,25),this.createAsteroid(10)}return a(t,[{key:"createAsteroid",value:function(t){for(var e=this,i=0;i<t;i++){var n=Math.floor(10*Math.random()),r=0;r=n<3?1:n<7?2:3,this.asteroid.push(new o.a(r)),this.aCount++}this.asteroid.forEach(function(t){e.asteroid.forEach(function(e){if(t!==e)for(;t.body.x<e.body.x+e.body.size&&t.body.x+t.body.size>e.body.x&&t.body.y<e.body.y+e.body.size&&t.body.y+t.body.size>e.body.y||t.body.x>125&&t.body.x<175||t.body.y>155&&t.body.y<205;)t.body.x=Math.floor(320*Math.random()),t.body.y=Math.floor(290*Math.random())})})}},{key:"createAsteroid2",value:function(t){var e=t.mass-1,i=t.x,n=t.y,r=t.velocityX,s=t.velocityY,a=new o.a(e),h=new o.a(e);this.asteroid.push(a),this.asteroid.push(h),this.aCount+=2,a.body.x=i,a.body.y=n,h.body.x=i+t.width,h.body.y=n+t.width,a.body.velocityX=Math.floor(r+r/5),a.body.velocityY=Math.floor(s+s/5),h.body.velocityX=Math.floor(r-r/5),a.body.velocityY=Math.floor(s-s/5)}},{key:"lostLife",value:function(){if(0===--this.life)return void this.gameOver();this.ship=new r.a(150,180),this.asteroid.forEach(function(t){for(;t.body.x>125&&t.body.x<175||t.body.y>155&&t.body.y<205;)t.body.x=Math.floor(320*Math.random()),t.body.y=Math.floor(290*Math.random())})}},{key:"newLevel",value:function(){this.level++,this.ship=new r.a(150,180),this.asteroid=[],this.createAsteroid(10+2*this.level-2),this.aCount=10+2*this.level-2}},{key:"gameOver",value:function(){var t=document.getElementById("message");t.textContent="Game Over!",t.style.color="white",this.over=!0}},{key:"hit",value:function(){var t=this,e=this.ship.getPosition();this.asteroid.forEach(function(i){e.x-3<=i.body.x+i.body.width&&e.x+3>=i.body.x&&e.y-3<=i.body.y+i.body.height&&e.y+3>=i.body.y&&(t.lostLife(),t.audio3.play())}),this.lazer.forEach(function(e){t.asteroid.forEach(function(i){e.body.x<=i.body.x+i.body.width&&e.body.x+2>=i.body.x&&e.body.y<=i.body.y+i.body.height&&e.body.y+2>=i.body.y&&(t.score+=100*i.body.width,e.destroy(),t.lazer.splice(t.lazer.indexOf(e),1),i.body.mass>1&&t.createAsteroid2(i.body),i.destroy(),t.asteroid.splice(t.asteroid.indexOf(i),1),0===--t.aCount&&t.newLevel())})});for(var i=0;i<this.asteroid.length-1;i++)for(var n=i+1;n<this.asteroid.length;n++){var o=this.asteroid[i].body,r=this.asteroid[n].body;if(o!==r&&o.x<=r.x+r.width&&o.x+o.width>=r.x&&o.y<=r.y+r.height&&o.y+o.height>=r.y){var s=o.mass,a=r.mass,h=o.velocityX,u=r.velocityX,c=o.velocityY,f=r.velocityY;o.velocityX=(s-a)/(s+a)*h+2*a/(s+a)*u,o.velocityY=(s-a)/(s+a)*c+2*a/(s+a)*f,r.velocityX=2*s/(s+a)*h+(a-s)/(s+a)*u,r.velocityY=2*s/(s+a)*c+(a-s)/(s+a)*f,this.audio2.play()}}}},{key:"control",value:function(){var t=this,e=this.ship.getPosition();this.lazer.forEach(function(e){var i=e.getPosition();(i.x<=0||i.x>=299||i.y<=30||i.y>=329)&&(e.destroy(),t.lazer.splice(t.lazer.indexOf(e),1))}),this.asteroid.forEach(function(t){t.body.x<=0?t.body.x=299:t.body.x>=299?t.body.x=0:t.body.y<=30?t.body.y=329:t.body.y>=329&&(t.body.y=30)}),e.x<=0?e.x=299:e.x>=299?e.x=0:e.y<=30?e.y=329:e.y>=329&&(e.y=30)}},{key:"handleKeyDown",value:function(t){switch(t.preventDefault(),t.key){case"a":case"ArrowLeft":this.input.angle="left";break;case"d":case"ArrowRight":this.input.angle="right";break;case"z":if(0===this.cooldown){var e=this.ship.getPosition(),i=this.ship.getAngle();this.lazer.push(new s.a(e.x,e.y,i)),this.audio1.play(),this.cooldown=10}break;case" ":this.input.direction=" "}}},{key:"handleKeyUp",value:function(t){switch(t.preventDefault(),t.key){case"a":case"ArrowLeft":"left"===this.input.angle&&(this.input.angle="neutral");break;case"d":case"ArrowRight":"right"===this.input.angle&&(this.input.angle="neutral");break;case" ":this.input.direction="neutral"}}},{key:"update",value:function(){if(!this.over){this.control(),this.hit();var t=document.getElementById("message2");t.innerText="Level: "+this.level+"       Score: "+this.score+"       Lives: "+this.life,t.style.color="white",this.ship.update(this.input.direction,this.input.angle),this.lazer.forEach(function(t){t.update()}),this.asteroid.forEach(function(t){t.update()})}}},{key:"render",value:function(){var t=this;this.backBufferContext.fillStyle="black",this.backBufferContext.fillRect(0,0,300,330),this.asteroid.forEach(function(e){e.render(t.backBufferContext)}),this.ship.render(this.backBufferContext),this.lazer.forEach(function(e){e.render(t.backBufferContext)}),this.backBufferContext.save(),this.backBufferContext.fillStyle="white",this.backBufferContext.fillRect(0,27,300,3),this.backBufferContext.restore(),this.screenBufferContext.drawImage(this.backBufferCanvas,0,0)}},{key:"loop",value:function(){this.update(),this.render(),this.cooldown>0&&this.cooldown--}}]),t}();e.a=h},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(e){for(n(this,t),this.body={x:Math.floor(290*Math.random()),y:Math.floor(290*Math.random()),mass:e,velocityX:Math.floor(20*Math.random()-10)/10,velocityY:Math.floor(20*Math.random()-10)/10,width:3*e,height:3*e};0===this.body.velocityX||0===this.body.velocityY;)this.body.velocityX=Math.floor(20*Math.random()-10)/10,this.body.velocityY=Math.floor(20*Math.random()-10)/10;for(;this.body.x>125&&this.body.x<175||this.body.y>155&&this.body.y<205;)this.body.x=Math.floor(290*Math.random()),this.body.y=Math.floor(290*Math.random());this.update=this.update.bind(this),this.render=this.render.bind(this),this.destroy=this.destroy.bind(this),this.getAsteroid=this.getAsteroid.bind(this)}return o(t,[{key:"getAsteroid",value:function(){return this.body}},{key:"update",value:function(){this.body.x+=this.body.velocityX,this.body.y+=this.body.velocityY}},{key:"destroy",value:function(){this.body={}}},{key:"render",value:function(t){t.save(),t.fillStyle="white",t.fillRect(this.body.x,this.body.y,this.body.width,this.body.height),t.restore()}}]),t}();e.a=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(e,i){n(this,t),this.body={x:e,y:i},this.width=6,this.height=6,this.velocityX=0,this.velocityY=0,this.speed=.05,this.start=!1,this.angle=0,this.update=this.update.bind(this),this.render=this.render.bind(this),this.getPosition=this.getPosition.bind(this),this.getAngle=this.getAngle.bind(this)}return o(t,[{key:"getPosition",value:function(){return this.body}},{key:"getAngle",value:function(){return this.angle}},{key:"update",value:function(t,e){switch(t){case" ":this.velocityX+=Math.sin(this.angle)*this.speed,this.velocityY-=Math.cos(this.angle)*this.speed}switch(e){case"left":this.angle-=10*Math.PI/180;break;case"right":this.angle+=10*Math.PI/180}this.body.x+=this.velocityX,this.body.y+=this.velocityY}},{key:"render",value:function(t){t.save(),t.strokeStyle="white",t.beginPath(),t.translate(this.body.x,this.body.y),t.rotate(this.angle),t.moveTo(0,-3),t.lineTo(3,3),t.lineTo(-3,3),t.closePath(),t.stroke(),t.restore()}}]),t}();e.a=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(e,i,o){n(this,t),this.body={x:e,y:i},this.width=2,this.height=2,this.speed=3,this.velocityX=Math.sin(o)*this.speed,this.velocityY=Math.cos(o)*this.speed*-1,this.update=this.update.bind(this),this.render=this.render.bind(this),this.destroy=this.destroy.bind(this),this.getPosition=this.getPosition.bind(this)}return o(t,[{key:"destroy",value:function(){this.body={},this.speed=0,this.velocityX=0,this.velocityY=0,this.width=0,this.height=0}},{key:"getPosition",value:function(){return this.body}},{key:"update",value:function(){this.body.x+=this.velocityX,this.body.y+=this.velocityY}},{key:"render",value:function(t){t.save(),t.fillStyle="white",t.fillRect(this.body.x,this.body.y,this.width,this.height),t.restore()}}]),t}();e.a=r},function(t,e){}]);
//# sourceMappingURL=main.f9dddbe0.js.map