function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}let t; let r; let n; let i; let o; let a; let s; let c; let u; let l; let d; let f; const p=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{};function h(e){return e&&e.__esModule?e.default:e}const g={}; const m={}; let v=p.parcelRequire3a11;v==null&&((v=function(e){if(e in g)return g[e].exports;if(e in m){const t=m[e];delete m[e];const r={id:e,exports:{}};return g[e]=r,t.call(r.exports,r,r.exports),r.exports}const n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){m[e]=t},p.parcelRequire3a11=v),v.register("27Lyk",function(t,r){"use strict";e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>i,e=>i=e);let n; let i; const o={};n=function(e){for(let t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){const t=o[e];if(t==null)throw Error("Could not resolve bundle with id "+e);return t}}),v("27Lyk").register(JSON.parse('{"f9fpV":"index.37849db5.js","eyyUD":"icons.c14567a0.svg"}'));let y={}; let _={}; const b=function(e){return e&&e.Math==Math&&e};_=b(typeof globalThis==="object"&&globalThis)||b(typeof window==="object"&&window)||b(typeof self==="object"&&self)||b(typeof p==="object"&&p)||Function("return this")();"use strict";let w={}; let k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7});const E={}.propertyIsEnumerable; const S=Object.getOwnPropertyDescriptor;r=S&&!E.call({1:2},1)?function(e){const t=S(this,e);return!!t&&t.enumerable}:E;let $={};$=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};let L={}; let x={}; let F={}; const O={}.toString;F=function(e){return O.call(e).slice(8,-1)};const M="".split;x=k(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return F(e)=="String"?M.call(e,""):Object(e)}:Object;let j={};j=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e},L=function(e){return x(j(e))};let P={}; let T={};T=function(e){return typeof e==="object"?e!==null:typeof e==="function"},P=function(e,t){let r,n;if(!T(e))return e;if(t&&typeof(r=e.toString)==="function"&&!T(n=r.call(e))||typeof(r=e.valueOf)==="function"&&!T(n=r.call(e))||!t&&typeof(r=e.toString)==="function"&&!T(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")};let q={}; const H={}.hasOwnProperty;q=function(e,t){return H.call(e,t)};let N={}; let I={}; const R=_.document; const A=T(R)&&T(R.createElement);I=function(e){return A?R.createElement(e):{}},N=!w&&!k(function(){return Object.defineProperty(I("div"),"a",{get:function(){return 7}}).a!=7});const C=Object.getOwnPropertyDescriptor;t=w?C:function(e,t){if(e=L(e),t=P(t,!0),N)try{return C(e,t)}catch(e){}if(q(e,t))return $(!r.call(e,t),e[t])};let D={}; let W={};W=function(e){if(!T(e))throw TypeError(String(e)+" is not an object");return e};const U=Object.defineProperty;n=w?U:function(e,t,r){if(W(e),t=P(t,!0),W(r),N)try{return U(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e},D=w?function(e,t,r){return n(e,t,$(1,r))}:function(e,t,r){return e[t]=r,e};let z={}; let G={};G=function(e,t){try{D(_,e,t)}catch(r){_[e]=t}return t};let J={}; let V={}; const Y="__core-js_shared__";V=_[Y]||G(Y,{});const B=Function.toString;typeof V.inspectSource!=="function"&&(V.inspectSource=function(e){return B.call(e)}),J=V.inspectSource;let Q={}; let K={}; const X=_.WeakMap;K=typeof X==="function"&&/native code/.test(J(X));let Z={}; let ee={}; let et={};et=!1,(ee=function(e,t){return V[e]||(V[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:et?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"});let er={}; let en=0; const ei=Math.random();er=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++en+ei).toString(36)};const eo=ee("keys");Z=function(e){return eo[e]||(eo[e]=er(e))};let ea={};ea={};const es=_.WeakMap;if(K){const ec=new es; const eu=ec.get; const el=ec.has; const ed=ec.set;i=function(e,t){return ed.call(ec,e,t),t},o=function(e){return eu.call(ec,e)||{}},a=function(e){return el.call(ec,e)}}else{const ef=Z("state");ea[ef]=!0,i=function(e,t){return D(e,ef,t),t},o=function(e){return q(e,ef)?e[ef]:{}},a=function(e){return q(e,ef)}}const ep=(Q={set:i,get:o,has:a,enforce:function(e){return a(e)?o(e):i(e,{})},getterFor:function(e){return function(t){let r;if(!T(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}).get; const eh=Q.enforce; const eg=String(String).split("String");(z=function(e,t,r,n){const i=!!n&&!!n.unsafe; let o=!!n&&!!n.enumerable; const a=!!n&&!!n.noTargetGet;if(typeof r==="function"&&(typeof t!=="string"||q(r,"name")||D(r,"name",t),eh(r).source=eg.join(typeof t==="string"?t:"")),e===_){o?e[t]=r:G(t,r);return}i?!a&&e[t]&&(o=!0):delete e[t],o?e[t]=r:D(e,t,r)})(Function.prototype,"toString",function(){return typeof this==="function"&&ep(this).source||J(this)});let em={}; let ev={}; let ey={}; let e_={};e_=_;const eb=function(e){return typeof e==="function"?e:void 0};ey=function(e,t){return arguments.length<2?eb(e_[e])||eb(_[e]):e_[e]&&e_[e][t]||_[e]&&_[e][t]};let ew={}; let ek={}; let eE={}; const eS=Math.ceil; const e$=Math.floor;eE=function(e){return isNaN(e=+e)?0:(e>0?e$:eS)(e)};const eL=Math.min;ek=function(e){return e>0?eL(eE(e),9007199254740991):0};let ex={}; const eF=Math.max; const eO=Math.min;ex=function(e,t){const r=eE(e);return r<0?eF(r+t,0):eO(r,t)};const eM=function(e){return function(t,r,n){let i; const o=L(t); const a=ek(o.length); let s=ex(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}}; const ej={includes:eM(!0),indexOf:eM(!1)}.indexOf;ew=function(e,t){let r; const n=L(e); let i=0; const o=[];for(r in n)!q(ea,r)&&q(n,r)&&o.push(r);for(;t.length>i;)q(n,r=t[i++])&&(~ej(o,r)||o.push(r));return o};const eP=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");s=Object.getOwnPropertyNames||function(e){return ew(e,eP)},c=Object.getOwnPropertySymbols,ev=ey("Reflect","ownKeys")||function(e){const t=s(W(e));return c?t.concat(c(e)):t},em=function(e,r){for(let i=ev(r),o=0;o<i.length;o++){const a=i[o];q(e,a)||n(e,a,t(r,a))}};let eT={}; const eq=/#|\.prototype\./; const eH=function(e,t){const r=eI[eN(e)];return r==eA||r!=eR&&(typeof t==="function"?k(t):!!t)}; var eN=eH.normalize=function(e){return String(e).replace(eq,".").toLowerCase()}; var eI=eH.data={}; var eR=eH.NATIVE="N"; var eA=eH.POLYFILL="P";eT=eH,y=function(e,r){let n; let i; let o; let a; let s; const c=e.target; const u=e.global; const l=e.stat;if(n=u?_:l?_[c]||G(c,{}):(_[c]||{}).prototype)for(i in r){if(a=r[i],o=e.noTargetGet?(s=t(n,i))&&s.value:n[i],!eT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a===typeof o)continue;em(a,o)}(e.sham||o&&o.sham)&&D(a,"sham",!0),z(n,i,a,e)}};let eC={}; let eD={}; let eW={};eW=function(e){if(typeof e!=="function")throw TypeError(String(e)+" is not a function");return e},eD=function(e,t,r){if(eW(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}};let eU={};eU=ey("document","documentElement");let ez={}; let eG={};eG=ey("navigator","userAgent")||"",ez=/(iphone|ipod|ipad).*applewebkit/i.test(eG);const eJ=_.location; let eV=_.setImmediate; let eY=_.clearImmediate; const eB=_.process; const eQ=_.MessageChannel; const eK=_.Dispatch; let eX=0; const eZ={}; const e0="onreadystatechange"; const e1=function(e){if(eZ.hasOwnProperty(e)){const t=eZ[e];delete eZ[e],t()}}; const e2=function(e){return function(){e1(e)}}; const e7=function(e){e1(e.data)}; const e9=function(e){_.postMessage(e+"",eJ.protocol+"//"+eJ.host)};eV&&eY||(eV=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return eZ[++eX]=function(){(typeof e==="function"?e:Function(e)).apply(void 0,t)},u(eX),eX},eY=function(e){delete eZ[e]},F(eB)=="process"?u=function(e){eB.nextTick(e2(e))}:eK&&eK.now?u=function(e){eK.now(e2(e))}:eQ&&!ez?(d=(l=new eQ).port2,l.port1.onmessage=e7,u=eD(d.postMessage,d,1)):!_.addEventListener||typeof postMessage!=="function"||_.importScripts||k(e9)||eJ.protocol==="file:"?u=e0 in I("script")?function(e){eU.appendChild(I("script"))[e0]=function(){eU.removeChild(this),e1(e)}}:function(e){setTimeout(e2(e),0)}:(u=e9,_.addEventListener("message",e7,!1))),eC={set:eV,clear:eY},y({global:!0,bind:!0,enumerable:!0,forced:!_.setImmediate||!_.clearImmediate},{setImmediate:eC.set,clearImmediate:eC.clear});const e3=function(e){"use strict";let t; const r=Object.prototype; const n=r.hasOwnProperty; const i=typeof Symbol==="function"?Symbol:{}; const o=i.iterator||"@@iterator"; const a=i.asyncIterator||"@@asyncIterator"; const s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,r,n,i){let o; const a=Object.create((r&&r.prototype instanceof g?r:g).prototype); const s=new L(i||[]);return a._invoke=(o=d,function(r,i){if(o===f)throw Error("Generator is already running");if(o===p){if(r==="throw")throw i;return F()}for(s.method=r,s.arg=i;;){const a=s.delegate;if(a){const c=function e(r,n){const i=r.iterator[n.method];if(i===t){if(n.delegate=null,n.method==="throw"){if(r.iterator.return&&(n.method="return",n.arg=t,e(r,n),n.method==="throw"))return h;n.method="throw",n.arg=TypeError("The iterator does not provide a 'throw' method")}return h}const o=l(i,r.iterator,n.arg);if(o.type==="throw")return n.method="throw",n.arg=o.arg,n.delegate=null,h;const a=o.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,n.method!=="return"&&(n.method="next",n.arg=t),n.delegate=null,h):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,h)}(a,s);if(c){if(c===h)continue;return c}}if(s.method==="next")s.sent=s._sent=s.arg;else if(s.method==="throw"){if(o===d)throw o=p,s.arg;s.dispatchException(s.arg)}else s.method==="return"&&s.abrupt("return",s.arg);o=f;const u=l(e,n,s);if(u.type==="normal"){if(o=s.done?p:"suspendedYield",u.arg===h)continue;return{value:u.arg,done:s.done}}u.type==="throw"&&(o=p,s.method="throw",s.arg=u.arg)}}),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart"; var f="executing"; var p="completed"; var h={};function g(){}function m(){}function v(){}let y={};y[o]=function(){return this};const _=Object.getPrototypeOf; const b=_&&_(_(x([])));b&&b!==r&&n.call(b,o)&&(y=b);const w=v.prototype=g.prototype=Object.create(y);function k(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){let r;this._invoke=function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){const c=l(e[i],e,o);if(c.type==="throw")s(c.arg);else{const u=c.arg; const d=u.value;return d&&typeof d==="object"&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(d).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}}function S(e){const t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){const t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e){const r=e[o];if(r)return r.call(e);if(typeof e.next==="function")return e;if(!isNaN(e.length)){let i=-1; const a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:t,done:!0}}return m.prototype=w.constructor=v,v.constructor=m,m.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){const t=typeof e==="function"&&e.constructor;return!!t&&(t===m||(t.displayName||t.name)==="GeneratorFunction")},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);const a=new E(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},k(w),c(w,s,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){const t=[];for(const r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){const n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(const r in this)r.charAt(0)==="t"&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;const e=this.tryEntries[0].completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;const r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(let o=this.tryEntries.length-1;o>=0;--o){const a=this.tryEntries[o]; var s=a.completion;if(a.tryLoc==="root")return i("end");if(a.tryLoc<=this.prev){const c=n.call(a,"catchLoc"); const u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(let r=this.tryEntries.length-1;r>=0;--r){const i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&(e==="break"||e==="continue")&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);const a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&t&&(this.next=t),h},finish:function(e){for(let t=this.tryEntries.length-1;t>=0;--t){const r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),h}},catch:function(e){for(let t=this.tryEntries.length-1;t>=0;--t){const r=this.tryEntries[t];if(r.tryLoc===e){const n=r.completion;if(n.type==="throw"){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},this.method==="next"&&(this.arg=t),h}},e}({});try{regeneratorRuntime=e3}catch(e){Function("r","regeneratorRuntime = r")(e3)}const e4="https://forkify-fvelk.ondigitalocean.app/api/v1/recipes"; const e5=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e); const n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]); const i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}}; const e8={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]}; const e6=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}}; const te=async function(e){try{const t=await e5(`${e4}/${e}`);e8.recipe=e6(t),e8.bookmarks.some(t=>t.id===e)?e8.recipe.bookmarked=!0:e8.recipe.bookmarked=!1,console.log(e8.recipe)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}; const tt=async function(e){try{e8.search.query=e;const t=await e5(`${e4}?search=${e}`);console.log(t),e8.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),e8.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}; const tr=function(e=e8.search.page){e8.search.page=e;const t=(e-1)*e8.search.resultsPerPage; const r=e*e8.search.resultsPerPage;return e8.search.results.slice(t,r)}; const tn=function(e){e8.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/e8.recipe.servings}),e8.recipe.servings=e}; const ti=function(){localStorage.setItem("bookmarks",JSON.stringify(e8.bookmarks))}; const to=function(e){e8.bookmarks.push(e),e.id===e8.recipe.id&&(e8.recipe.bookmarked=!0),ti()}; const ta=function(e){const t=e8.bookmarks.findIndex(t=>t.id===e);e8.bookmarks.splice(t,1),e===e8.recipe.id&&(e8.recipe.bookmarked=!1),ti()};!function(){const e=localStorage.getItem("bookmarks");e&&(e8.bookmarks=JSON.parse(e))}();const ts=async function(){try{const e=Object.entries(newRecipe).filter(e=>e[0].startsWith("ingredient")&&e[1]!=="").map(e=>{const t=e[1].split(",").map(e=>e.trim());if(t.length!==3)throw Error("Wrong ingredient fromat! Please use the correct format :)");const[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}); const t={title:newRecipe.title,source_url:newRecipe.sourceUrl,image_url:newRecipe.image,publisher:newRecipe.publisher,cooking_time:+newRecipe.cookingTime,servings:+newRecipe.servings,ingredients:e}; const r=await e5(`${e4}`,t);e8.recipe=e6(r),to(e8.recipe)}catch(e){throw e}};let tc={};tc=new URL(v("27Lyk").resolve("eyyUD"),import.meta.url).toString();class tu{_data;render(e,t=!0){if(!e||Array.isArray(e)&&e.length===0)return this.renderError();this._data=e;const r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;const t=this._generateMarkup(); const r=document.createRange().createContextualFragment(t); const n=Array.from(r.querySelectorAll("*")); const i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{const r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`
      <div class="spinner">
        <svg>
          <use href="${h(tc)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}

renderError(e=this._errorMessage){const t=`
      <div class="error">
        <div>
          <svg>
            <use href="${h(tc)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}

renderMessage(e=this._message){const t=`
      <div class="message">
        <div>
          <svg>
            <use href="${h(tc)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)typeof e==="number"&&typeof t==="number"?(this.numerator=e,this.denominator=t):typeof e==="string"&&typeof t==="string"&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if(typeof(num=e)==="number")this.numerator=num,this.denominator=1;else if(typeof num==="string"){let r; let n; const i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if(typeof r==="string"&&r.match("/")){const o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if(typeof r==="string"&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if(this.denominator==="NaN")return"NaN";const e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator); const t=this.numerator%this.denominator; const r=this.denominator; const n=[];return e!=0&&n.push(e),t!=0&&n.push((e===0?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){const t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){const t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){const t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if(typeof e!=="number")return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){const t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if(typeof e!=="number")return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));const t=this.clone().normalize(); var e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=function(){const e=function(e){return typeof e==="number"&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)}; const t=function(e,t){if(!t)return Math.round(e);const r=Math.pow(10,t);return Math.round(e*r)/r};return function(){if(e(this.denominator)){var r=t(this.denominator,9); var n=Math.pow(10,r.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(e(this.numerator)){var r=t(this.numerator,9); var n=Math.pow(10,r.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}const i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}}(),Fraction.gcf=function(e,t){const r=[]; const n=Fraction.primeFactors(e); const i=Fraction.primeFactors(t);return(n.forEach(function(e){const t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),r.length===0)?1:function(){let e; let t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return t!=1&&r.push(t),r},f=Fraction;class tl extends tu{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){const r=t.target.closest(".btn--update-servings");if(!r)return;const{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){const r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${h(tc)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${h(tc)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${h(tc)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${h(tc)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${h(tc)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${h(tc)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
      </div>
    `}

_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${h(tc)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new f(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}const tf=new tl;class tp{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}const th=new tp; const tg=new class extends tu{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${h(tc)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class tm extends tu{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>tg.render(e,!1)).join("")}}const tv=new tm;class ty extends tu{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.goto;e(n)})}_generateMarkup(){const e=this._data.page; const t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return e===1&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${h(tc)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${h(tc)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${h(tc)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${h(tc)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}const t_=new ty;class tb extends tu{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>tg.render(e,!1)).join("")}}const tw=new tb;class tk extends tu{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();const r=[...new FormData(this)]; const n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}const tE=new tk;const tS=async function(){try{const e=window.location.hash.slice(1);if(!e)return;tf.renderSpinner(),tv.update(tr()),tw.update(e8.bookmarks),await te(e),tf.render(e8.recipe)}catch(e){tf.renderError(),console.error(e)}}; const t$=async function(){try{tv.renderSpinner();const e=th.getQuery();if(!e)return;await tt(e),tv.render(tr()),t_.render(e8.search)}catch(e){console.log(e)}}; const tL=async function(e){try{tE.renderSpinner(),await ts(e),console.log(e8.recipe),tf.render(e8.recipe),tE.renderMessage(),tw.render(e8.bookmarks),window.history.pushState(null,"",`#${e8.recipe.id}`),setTimeout(function(){tE.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),tE.renderError(e.message)}};tw.addHandlerRender(function(){tw.render(e8.bookmarks)}),tf.addHandlerRender(tS),tf.addHandlerUpdateServings(function(e){tn(e),tf.update(e8.recipe)}),tf.addHandlerAddBookmark(function(){e8.recipe.bookmarked?ta(e8.recipe.id):to(e8.recipe),tf.update(e8.recipe),tw.render(e8.bookmarks)}),th.addHandlerSearch(t$),t_.addHandlerClick(function(e){tv.render(tr(e)),t_.render(e8.search)}),tE.addHandlerUpload(tL);
// # sourceMappingURL=index.37849db5.js.map