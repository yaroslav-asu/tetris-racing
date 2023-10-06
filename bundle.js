(()=>{var e={807:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var r=i(81),s=i.n(r),o=i(645),a=i.n(o),n=i(667),d=i.n(n),l=new URL(i(503),i.b),c=a()(s()),h=d()(l);c.push([e.id,`@font-face{font-family:defaultFont;src:url(${h})}*{font-family:defaultFont,sans-serif;padding:0;margin:0}.cross{filter:invert(100%) sepia(0%) saturate(0%) hue-rotate(80deg) brightness(107%) contrast(101%);width:50px}.game_buttons{display:flex;flex-direction:column;gap:10px}.game_buttons .row{justify-content:center;gap:20px}.game_buttons .row .col p{font-size:14px;text-align:center;color:#fff}body{height:100dvh;align-items:center;background-color:#0055c6;display:flex;justify-content:center}.interface{display:flex;flex-direction:column;padding:20px;gap:20px}.interface .interface_text{font-size:25px}.interface .pause--inactive{opacity:.3}.control_button{width:60px;height:60px;border-radius:50%;border:none;position:relative;cursor:pointer;background:#f8d000;background:radial-gradient(circle, rgb(248, 208, 0) 0%, rgb(214, 190, 67) 100%);-webkit-box-shadow:-16px 21px 56px -1px rgba(0,0,0,.49);-moz-box-shadow:-16px 21px 56px -1px rgba(0,0,0,.49);box-shadow:-16px 21px 56px -1px rgba(0,0,0,.49)}.control_button::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);left:-2px;top:-2px;background-color:#d6be43;border-radius:inherit;z-index:-1}.control_button::after{content:"";position:absolute;width:calc(100% + 6px);height:calc(100% + 6px);border:1px solid #453a1c;background-color:#453a1c;opacity:.4;z-index:-2;border-radius:inherit;left:-3px;bottom:-3px}.control_button.control_button--active{transform:scale(0.92)}.control_button.control_button--active::before{background-color:#dec140;-webkit-box-shadow:0px 0px 58px -18px rgba(214,190,67,.77);-moz-box-shadow:0px 0px 58px -18px rgba(214,190,67,.77);box-shadow:0px 0px 58px -18px rgba(214,190,67,.77)}.control_button.control_button--active:after{transform:scale(1.1)}.game_screen{display:flex;flex-direction:column;gap:40px}.buttons_row{gap:20px;align-items:center;justify-content:center}.border{display:flex;flex-direction:column}.row{display:flex}.col{display:flex;flex-direction:column}.window_wrapper{display:flex;gap:40px}#field{display:grid}#field.field--two_lined{grid-template-columns:repeat(6, 30px)}#field.field--three_lined{grid-template-columns:repeat(9, 30px)}.game{display:flex;background-color:#8fb460;padding:10px}.game_wrapper{display:flex;border:4px solid #000}.blank_line{display:grid;grid-template-columns:30px}.main_wrapper{gap:20px}.decorative_blocks{display:flex;flex-direction:column;gap:18px}.decorative_blocks .o{display:grid;grid-template-columns:repeat(2, 30px);grid-template-rows:repeat(2, 30px)}.decorative_blocks .l{display:grid;grid-template-columns:repeat(1, 30px);grid-template-rows:repeat(4, 30px)}.decorative_blocks .s{display:grid;grid-template-columns:repeat(2, 30px);grid-template-rows:repeat(3, 30px)}.decorative_blocks .j{display:grid;grid-template-columns:repeat(2, 30px);grid-template-rows:repeat(3, 30px)}.decorative_blocks .t{display:grid;grid-template-columns:repeat(2, 30px);grid-template-rows:repeat(3, 30px)}.decorative_blocks .z{display:grid;grid-template-columns:repeat(2, 30px);grid-template-rows:repeat(3, 30px)}.block{width:30px;height:30px;position:relative;background-color:#8fb460}.block::before{content:"";position:absolute;top:2px;left:2px;width:calc(100% - 8px);height:calc(100% - 8px);background-color:rgba(0,0,0,0)}.block::after{content:"";position:absolute;top:50%;transform:translate(-50%, -50%);left:50%;width:calc(100% - 16px);height:calc(100% - 16px)}.block.decorative{background-color:rgba(0,0,0,0)}.block.decorative::before{border:2px solid #fff}.block.decorative::after{background-color:#fff}.block.block--active::before{border:2px solid #000}.block.block--active::after{background-color:#000}.block.block--inactive::before{border:2px solid #7cae52}.block.block--inactive::after{background-color:#7cae52}#border{display:grid;grid-template-columns:30px}`,""]);const p=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",r=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),r&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),r&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,r,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var n=0;n<this.length;n++){var d=this[n][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},607:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>b});var r=i(379),s=i.n(r),o=i(795),a=i.n(o),n=i(569),d=i.n(n),l=i(565),c=i.n(l),h=i(216),p=i.n(h),u=i(589),f=i.n(u),m=i(807),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(m.Z,g);const b=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{"use strict";var t=[];function i(e){for(var i=-1,r=0;r<t.length;r++)if(t[r].identifier===e){i=r;break}return i}function r(e,r){for(var o={},a=[],n=0;n<e.length;n++){var d=e[n],l=r.base?d[0]+r.base:d[0],c=o[l]||0,h="".concat(l," ").concat(c);o[l]=c+1;var p=i(h),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=s(u,r);r.byIndex=n,t.splice(n,0,{identifier:h,updater:f,references:1})}a.push(h)}return a}function s(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,s){var o=r(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var n=i(o[a]);t[n].references--}for(var d=r(e,s),l=0;l<o.length;l++){var c=i(o[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=d}}},569:e=>{"use strict";var t={};e.exports=function(e,i){var r=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(i)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var r="";i.supports&&(r+="@supports (".concat(i.supports,") {")),i.media&&(r+="@media ".concat(i.media," {"));var s=void 0!==i.layer;s&&(r+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),r+=i.css,s&&(r+="}"),i.media&&(r+="}"),i.supports&&(r+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},693:()=>{class e{endShown=!1;isOn=!0;speed=150;endAnimationSpeed=50;score=-1;height=24;width=2;activeChar="■";loop=null;lastSpeedChangeScore=-1;speedUp=!1;constructor(){this.field=new s(this),this.border=new i(this),this.blankLine=new r(this),this.interface=new t(this),this.start()}start(){this.loop=setInterval((()=>{this.update(),this.render()}),this.speed)}updateSpeed(e){this.speed=e,clearInterval(this.loop),this.loop=setInterval((()=>{this.update(),this.render()}),this.speed)}pause(){clearInterval(this.loop),this.loop=null}changeWidth(e){this.width=e,this.field.init(),this.field.fieldWidth=3*this.width,this.field.update(),this.field.render()}render(){this.field.render(),this.border.render(),this.blankLine.render(),this.isOn&&this.interface.render()}update(){this.endShown||this.isOn||(this.endGame(),this.endShown=!0),this.isOn&&(30===this.score?this.changeWidth(3):this.score>=1e3&&alert("icp{7h3_c4k3_15_4_l13}"),this.lastSpeedChangeScore!==this.score&&this.score%100==0&&this.speed>=45&&(this.updateSpeed(this.speed-10),this.lastSpeedChangeScore=this.score),this.field.update(),this.border.update())}endGame(){this.updateSpeed(this.endAnimationSpeed),this.field.endGame(),this.border.endGame(),this.blankLine.endGame()}}class t{constructor(e){this.game=e,this.render()}render(){document.getElementById("score").innerHTML=("0000"+this.game.score.toString()).slice(-5),document.getElementById("speed").innerHTML=("0000"+Math.trunc((150-this.game.speed)/10).toString()).slice(-5)}}class i{border=[];borderChar="■";constructor(e){this.game=e;for(let e=0;e<this.game.height/4;e++)this.border.push(0),this.border.push(this.borderChar),this.border.push(this.borderChar),this.border.push(this.borderChar)}update(){for(let e=this.game.height-1;e>=0;e--)this.border[e+1]=this.border[e];0===this.border[4]&&(this.border[0]=0,this.border[1]=this.borderChar,this.border[2]=this.borderChar,this.border[3]=this.borderChar)}render(){let e=document.getElementsByClassName("border");for(let t of e){t.innerHTML="";for(let e=4;e<this.game.height;e++)if(this.border[e]===this.borderChar){let e=document.createElement("td");e.setAttribute("class","block block--active"),t.appendChild(e)}else{let e=document.createElement("td");e.setAttribute("class","block block--inactive"),t.appendChild(e)}}}endGame(){for(let e=this.game.height-1;e>=0;e--)setTimeout((()=>{this.border[e]=this.borderChar}),24*this.game.endAnimationSpeed-e*this.game.endAnimationSpeed);setTimeout((()=>{for(let e=this.game.height-1;e>=0;e--)setTimeout((()=>{this.border[e]=0}),e*this.game.endAnimationSpeed)}),24*this.game.endAnimationSpeed+2*this.game.endAnimationSpeed)}}class r{blocks=[];constructor(e){this.game=e;for(let e=0;e<this.game.height;e++)this.blocks.push(0)}render(){let e=document.getElementsByClassName("blank_line");for(let t=0;t<e.length;t++){e[t].innerHTML="";for(let i=4;i<this.game.height;i++)if(0===this.blocks[i]){let i=document.createElement("td");i.setAttribute("class","block block--inactive"),e[t].appendChild(i)}else{let i=document.createElement("td");i.setAttribute("class","block block--active"),e[t].appendChild(i)}}}endGame(){for(let e=this.game.height-1;e>=0;e--)setTimeout((()=>{this.blocks[e]=this.game.activeChar}),this.game.height*this.game.endAnimationSpeed-e*this.game.endAnimationSpeed);setTimeout((()=>{for(let e=this.game.height-1;e>=0;e--)setTimeout((()=>{this.blocks[e]=0}),e*this.game.endAnimationSpeed)}),this.game.height*this.game.endAnimationSpeed+2*this.game.endAnimationSpeed)}}class s{blockChar="■";field=[];carLine=0;carsRowsGap=0;constructor(e){this.game=e,this.fieldWidth=3*this.game.width,this.init(),this.generateCar(),this.createMainCar()}init(){for(let e=0;e<this.game.height;e++){this.field[e]=[];for(let t=0;t<this.fieldWidth;t++)this.field[e][t]=0}}checkCollision(e=3*this.carLine){return[this.field[this.game.height-4][e+1],this.field[this.game.height-3][e],this.field[this.game.height-3][e+1],this.field[this.game.height-3][e+2],this.field[this.game.height-2][e+1],this.field[this.game.height-1][e],this.field[this.game.height-1][e+2]].includes(this.blockChar)}update(){let e=document.getElementById("field");""===e.className&&e.setAttribute("class","field--two_lined"),"field--two_lined"===e.className&&this.game.width>2&&(console.log("three"),e.setAttribute("class","field--three_lined")),this.deleteCar(this.game.height-1,3*this.carLine+1);for(let e=this.game.height-1;e>0;e--)for(let t=0;t<this.fieldWidth;t++)this.field[e][t]=this.field[e-1][t];this.field[0]=[];for(let e=0;e<this.fieldWidth;e++)this.field[0][e]=0;this.game.isOn=!this.checkCollision(),this.addCar(this.game.height-1,3*this.carLine+1),this.carsRowsGap++,14===this.carsRowsGap&&(this.carsRowsGap=0,this.generateCar())}generateCar(){if(this.game.width>2)if(Math.random()>.5){let e=3*Math.floor(Math.random()*this.game.width)+1;this.addCar(3,e),this.addCar(3,e-3)}else this.addCar(3,3*Math.floor(Math.random()*this.game.width)+1);else this.addCar(3,3*Math.floor(Math.random()*this.game.width)+1);this.game.score++}createMainCar(){this.addCar(this.game.height-1,1)}addCar(e,t){this.field[e-3][t]=this.blockChar,this.field[e-2][t-1]=this.blockChar,this.field[e-2][t]=this.blockChar,this.field[e-2][t+1]=this.blockChar,this.field[e-1][t]=this.blockChar,this.field[e][t-1]=this.blockChar,this.field[e][t+1]=this.blockChar}deleteCar(e,t){this.field[e-3][t]=0,this.field[e-2][t-1]=0,this.field[e-2][t]=0,this.field[e-2][t+1]=0,this.field[e-1][t]=0,this.field[e][t-1]=0,this.field[e][t+1]=0}moveCarLeft(){if(0===this.carLine||!this.game.isOn)return;let e=!this.game.field.checkCollision(3*(this.game.field.carLine-1));this.deleteCar(this.game.height-1,3*this.carLine+1),this.carLine--,this.addCar(this.game.height-1,3*this.carLine+1),this.game.isOn=e}moveCarRight(){if(this.carLine+1===this.game.width||!this.game.isOn)return;let e=!this.game.field.checkCollision(3*(this.game.field.carLine+1));this.deleteCar(this.game.height-1,3*this.carLine+1),this.carLine++,this.addCar(this.game.height-1,3*this.carLine+1),this.game.isOn=e}endGame(){for(let e=this.game.height-1;e>=0;e--)setTimeout((()=>{for(let t=0;t<this.fieldWidth;t++)this.field[e][t]=this.blockChar}),24*this.game.endAnimationSpeed-e*this.game.endAnimationSpeed);setTimeout((()=>{for(let e=this.game.height-1;e>=0;e--)setTimeout((()=>{for(let t=0;t<this.fieldWidth;t++)this.field[e][t]=0}),e*this.game.endAnimationSpeed)}),24*this.game.endAnimationSpeed+2*this.game.endAnimationSpeed)}print(){this.game.isOn?this.update():this.endShown||(this.endGame(),this.endShown=!0);for(let e=0;e<this.game.height;e++)console.log(this.field[e].join(" "),"                        ",e)}render(){let e=document.getElementById("field");e.innerHTML="";for(let t=4;t<this.game.height;t++)for(let i=0;i<this.fieldWidth;i++)if(this.field[t][i]===this.blockChar){let t=document.createElement("td");t.setAttribute("class","block block--active"),e.appendChild(t)}else{let t=document.createElement("td");t.setAttribute("class","block block--inactive"),e.appendChild(t)}}}window.onload=function(){let t=new e,i=document.getElementById("left"),r=document.getElementById("right"),s=document.getElementById("down"),o=document.getElementById("up");document.addEventListener("keydown",(a=>{"ArrowLeft"===a.code?(i.classList.add("control_button--active"),t.field.moveCarLeft()):"ArrowRight"===a.code?(r.classList.add("control_button--active"),t.field.moveCarRight()):"ArrowDown"===a.code?(s.classList.add("control_button--active"),t.pause(),t=new e,document.getElementById("field").setAttribute("class","field--two_lined"),t.render()):"ArrowUp"===a.code?(o.classList.add("control_button--active"),t.speedUp||(t.updateSpeed(t.speed-20),t.speedUp=!0)):"Space"===a.code&&(document.getElementById("pause").classList.toggle("pause--inactive"),t.loop?t.pause():t.start())}),!1),document.addEventListener("keyup",(e=>{"ArrowUp"===e.code?(t.speedUp&&(t.updateSpeed(t.speed+20),t.speedUp=!1),o.classList.remove("control_button--active")):"ArrowLeft"===e.code?i.classList.remove("control_button--active"):"ArrowRight"===e.code?r.classList.remove("control_button--active"):"ArrowDown"===e.code&&s.classList.remove("control_button--active")})),i.addEventListener("click",(()=>{t.field.moveCarLeft()})),r.addEventListener("click",(()=>{t.field.moveCarRight()})),s.addEventListener("click",(()=>{t.pause(),t=new e,document.getElementById("field").setAttribute("class","field--two_lined"),t.render()})),o.addEventListener("mouseup",(()=>{t.updateSpeed(t.speed+20),t.speedUp=!1})),o.addEventListener("mousedown",(()=>{t.speedUp||(t.updateSpeed(t.speed-20),t.speedUp=!0)})),o.addEventListener("touchstart",(()=>{t.speedUp||(t.updateSpeed(t.speed-20),t.speedUp=!0)})),o.addEventListener("touchend",(()=>{t.updateSpeed(t.speed+20),t.speedUp=!1}))},window.Game=e,window.Field=s,window.BlankLine=r,window.Interface=t},678:(e,t,i)=>{"use strict";e.exports=i.p+"8a30e94e6b40409c1f02.svg"},503:(e,t,i)=>{"use strict";e.exports=i.p+"e31840ef10fa937e10a8.ttf"}},t={};function i(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,i),o.exports}i.m=e,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.b=document.baseURI||self.location.href,i.nc=void 0,i(693),i(607),i(503),i(678)})();