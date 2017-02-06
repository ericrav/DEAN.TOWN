!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=7)}([function(e,n,t){"use strict";for(var o=t(4),r=!1,i=111,a=60/i/4*1e3,u=381,s=document.getElementById("bass"),d={},_=0;_<u;_++)d["note"+_]=[_*a,a];d.rest=[u*a,162e3];var l=new o.Howl({src:["../audio/deantown.mp3"],preload:!0,sprite:d}),f=function(){l.stop(),p=0,r=!1,s.style.width="200px",s.className=""},c=function(){l.play("rest"),r=!0,s.style.width="450px",s.className="spin",setTimeout(f,162e3)},p=0,m=void 0,v=function(){if(clearTimeout(m),p>=u||r)return void(r||c());var e=g(p);return p>8&&e<107.5?(p=0,void(s.style.width="200px")):(l.play("note"+p),p++,s.style.width=200*(1+p/100)+"px",void(m=setTimeout(f,500)))};s.addEventListener("click",v);var h=0,y=0,g=function(e){var n=(new Date).getTime();if(y=n,0===e)return h=n,111;var t=6e4*e/(n-h)/4;return t}},function(e,n,t){var o=t(2);"string"==typeof o&&(o=[[e.i,o,""]]);t(5)(o,{});o.locals&&(e.exports=o.locals)},function(e,n,t){n=e.exports=t(3)(),n.push([e.i,"html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nbody {\n  background-color: #9BBDE0; }\n\n.container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n#bass {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 200px;\n  -moz-transition: width 0.1s ease-in;\n  -webkit-transition: width 0.1s ease-in;\n  transition: width 0.1s ease-in; }\n  #bass img {\n    width: 100%;\n    height: auto;\n    -moz-transition: -moz-transform 0.2s;\n    -webkit-transition: -webkit-transform 0.2s;\n    transition: transform 0.2s; }\n    #bass img:hover {\n      -moz-transform: scale(1.01, 1.01);\n      -webkit-transform: scale(1.01, 1.01);\n      transform: scale(1.01, 1.01); }\n    #bass img:active {\n      -moz-transform: scale(0.99, 0.99);\n      -webkit-transform: scale(0.99, 0.99);\n      transform: scale(0.99, 0.99); }\n\n.spin img {\n  -moz-animation: spin 2.162s infinite;\n  -webkit-animation: spin 2.162s infinite;\n  animation: spin 2.162s infinite; }\n\n@-moz-keyframes spin {\n  from {\n    -moz-transform: rotate(0deg); }\n  to {\n    -moz-transform: rotate(360deg); } }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n",""])},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(e,n,t){(function(t){var o,r;/*!
 *  howler.js v2.0.2
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
!function(){"use strict";var i=function(){this.init()};i.prototype={init:function(){var e=this||a;return e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var n=this||a;if(e=parseFloat(e),n.ctx||p(),"undefined"!=typeof e&&e>=0&&e<=1){if(n._volume=e,n._muted)return n;n.usingWebAudio&&(n.masterGain.gain.value=e);for(var t=0;t<n._howls.length;t++)if(!n._howls[t]._webAudio)for(var o=n._howls[t]._getSoundIds(),r=0;r<o.length;r++){var i=n._howls[t]._soundById(o[r]);i&&i._node&&(i._node.volume=i._volume*e)}return n}return n._volume},mute:function(e){var n=this||a;n.ctx||p(),n._muted=e,n.usingWebAudio&&(n.masterGain.gain.value=e?0:n._volume);for(var t=0;t<n._howls.length;t++)if(!n._howls[t]._webAudio)for(var o=n._howls[t]._getSoundIds(),r=0;r<o.length;r++){var i=n._howls[t]._soundById(o[r]);i&&i._node&&(i._node.muted=!!e||i._muted)}return n},unload:function(){for(var e=this||a,n=e._howls.length-1;n>=0;n--)e._howls[n].unload();return e.usingWebAudio&&e.ctx&&"undefined"!=typeof e.ctx.close&&(e.ctx.close(),e.ctx=null,p()),e},codecs:function(e){return(this||a)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||a;if(e.state=e.ctx?e.ctx.state||"running":"running",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var n=new Audio;"undefined"==typeof n.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var n=new Audio;n.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||a,n=null;try{n="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!n||"function"!=typeof n.canPlayType)return e;var t=n.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),r=o&&parseInt(o[0].split("/")[1],10)<33;return e._codecs={mp3:!(r||!t&&!n.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!n.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!n.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(n.canPlayType("audio/x-m4a;")||n.canPlayType("audio/m4a;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(n.canPlayType("audio/x-mp4;")||n.canPlayType("audio/mp4;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(n.canPlayType("audio/x-flac;")||n.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_enableMobileAudio:function(){var e=this||a,n=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator&&e._navigator.userAgent),t=!!("ontouchend"in window||e._navigator&&e._navigator.maxTouchPoints>0||e._navigator&&e._navigator.msMaxTouchPoints>0);if(!e._mobileEnabled&&e.ctx&&(n||t)){e._mobileEnabled=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var o=function(){var n=e.ctx.createBufferSource();n.buffer=e._scratchBuffer,n.connect(e.ctx.destination),"undefined"==typeof n.start?n.noteOn(0):n.start(0),n.onended=function(){n.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchend",o,!0)}};return document.addEventListener("touchend",o,!0),e}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&"undefined"!=typeof e.ctx.suspend&&a.usingWebAudio){for(var n=0;n<e._howls.length;n++)if(e._howls[n]._webAudio)for(var t=0;t<e._howls[n]._sounds.length;t++)if(!e._howls[n]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&"undefined"!=typeof e.ctx.resume&&a.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.state="resuming",e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var a=new i,u=function(e){var n=this;return e.src&&0!==e.src.length?void n.init(e):void console.error("An array of source files must be passed with any new Howl.")};u.prototype={init:function(e){var n=this;return a.ctx||p(),n._autoplay=e.autoplay||!1,n._format="string"!=typeof e.format?e.format:[e.format],n._html5=e.html5||!1,n._muted=e.mute||!1,n._loop=e.loop||!1,n._pool=e.pool||5,n._preload="boolean"!=typeof e.preload||e.preload,n._rate=e.rate||1,n._sprite=e.sprite||{},n._src="string"!=typeof e.src?e.src:[e.src],n._volume=void 0!==e.volume?e.volume:1,n._duration=0,n._state="unloaded",n._sounds=[],n._endTimers={},n._queue=[],n._onend=e.onend?[{fn:e.onend}]:[],n._onfade=e.onfade?[{fn:e.onfade}]:[],n._onload=e.onload?[{fn:e.onload}]:[],n._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],n._onpause=e.onpause?[{fn:e.onpause}]:[],n._onplay=e.onplay?[{fn:e.onplay}]:[],n._onstop=e.onstop?[{fn:e.onstop}]:[],n._onmute=e.onmute?[{fn:e.onmute}]:[],n._onvolume=e.onvolume?[{fn:e.onvolume}]:[],n._onrate=e.onrate?[{fn:e.onrate}]:[],n._onseek=e.onseek?[{fn:e.onseek}]:[],n._onresume=[],n._webAudio=a.usingWebAudio&&!n._html5,"undefined"!=typeof a.ctx&&a.ctx&&a.mobileAutoEnable&&a._enableMobileAudio(),a._howls.push(n),n._autoplay&&n._queue.push({event:"play",action:function(){n.play()}}),n._preload&&n.load(),n},load:function(){var e=this,n=null;if(a.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var t=0;t<e._src.length;t++){var o,r;if(e._format&&e._format[t])o=e._format[t];else{if(r=e._src[t],"string"!=typeof r){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}o=/^data:audio\/([^;,]+);/i.exec(r),o||(o=/\.([^.]+)$/.exec(r.split("?",1)[0])),o&&(o=o[1].toLowerCase())}if(a.codecs(o)){n=e._src[t];break}}return n?(e._src=n,e._state="loading","https:"===window.location.protocol&&"http:"===n.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new s(e),e._webAudio&&_(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,n){var t=this,o=null;if("number"==typeof e)o=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if("undefined"==typeof e){e="__default";for(var r=0,i=0;i<t._sounds.length;i++)t._sounds[i]._paused&&!t._sounds[i]._ended&&(r++,o=t._sounds[i]._id);1===r?e=null:o=null}}var u=o?t._soundById(o):t._inactiveSound();if(!u)return null;if(o&&!e&&(e=u._sprite||"__default"),"loaded"!==t._state&&!t._sprite[e])return t._queue.push({event:"play",action:function(){t.play(t._soundById(u._id)?u._id:void 0)}}),u._id;if(o&&!u._paused)return n||setTimeout(function(){t._emit("play",u._id)},0),u._id;t._webAudio&&a._autoResume();var s=Math.max(0,u._seek>0?u._seek:t._sprite[e][0]/1e3),d=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-s),_=1e3*d/Math.abs(u._rate);u._paused=!1,u._ended=!1,u._sprite=e,u._seek=s,u._start=t._sprite[e][0]/1e3,u._stop=(t._sprite[e][0]+t._sprite[e][1])/1e3,u._loop=!(!u._loop&&!t._sprite[e][2]);var l=u._node;if(t._webAudio){var f=function(){t._refreshBuffer(u);var e=u._muted||t._muted?0:u._volume;l.gain.setValueAtTime(e,a.ctx.currentTime),u._playStart=a.ctx.currentTime,"undefined"==typeof l.bufferSource.start?u._loop?l.bufferSource.noteGrainOn(0,s,86400):l.bufferSource.noteGrainOn(0,s,d):u._loop?l.bufferSource.start(0,s,86400):l.bufferSource.start(0,s,d),_!==1/0&&(t._endTimers[u._id]=setTimeout(t._ended.bind(t,u),_)),n||setTimeout(function(){t._emit("play",u._id)},0)},c="running"===a.state;"loaded"===t._state&&c?f():(t.once(c?"load":"resume",f,c?u._id:null),t._clearTimer(u._id))}else{var p=function(){l.currentTime=s,l.muted=u._muted||t._muted||a._muted||l.muted,l.volume=u._volume*a.volume(),l.playbackRate=u._rate,setTimeout(function(){l.play(),_!==1/0&&(t._endTimers[u._id]=setTimeout(t._ended.bind(t,u),_)),n||t._emit("play",u._id)},0)},m="loaded"===t._state&&(window&&window.ejecta||!l.readyState&&a._navigator.isCocoonJS);if(4===l.readyState||m)p();else{var v=function(){p(),l.removeEventListener(a._canPlayEvent,v,!1)};l.addEventListener(a._canPlayEvent,v,!1),t._clearTimer(u._id)}}return u._id},pause:function(e){var n=this;if("loaded"!==n._state)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var t=n._getSoundIds(e),o=0;o<t.length;o++){n._clearTimer(t[o]);var r=n._soundById(t[o]);if(r&&!r._paused&&(r._seek=n.seek(t[o]),r._rateSeek=0,r._paused=!0,n._stopFade(t[o]),r._node))if(n._webAudio){if(!r._node.bufferSource)return n;"undefined"==typeof r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var t=this;if("loaded"!==t._state)return t._queue.push({event:"stop",action:function(){t.stop(e)}}),t;for(var o=t._getSoundIds(e),r=0;r<o.length;r++){t._clearTimer(o[r]);var i=t._soundById(o[r]);if(i&&(i._seek=i._start||0,i._rateSeek=0,i._paused=!0,i._ended=!0,t._stopFade(o[r]),i._node))if(t._webAudio){if(!i._node.bufferSource)return n||t._emit("stop",i._id),t;"undefined"==typeof i._node.bufferSource.stop?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),t._cleanBuffer(i._node)}else isNaN(i._node.duration)&&i._node.duration!==1/0||(i._node.currentTime=i._start||0,i._node.pause());i&&!n&&t._emit("stop",i._id)}return t},mute:function(e,n){var t=this;if("loaded"!==t._state)return t._queue.push({event:"mute",action:function(){t.mute(e,n)}}),t;if("undefined"==typeof n){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var o=t._getSoundIds(n),r=0;r<o.length;r++){var i=t._soundById(o[r]);i&&(i._muted=e,t._webAudio&&i._node?i._node.gain.setValueAtTime(e?0:i._volume,a.ctx.currentTime):i._node&&(i._node.muted=!!a._muted||e),t._emit("mute",i._id))}return t},volume:function(){var e,n,t=this,o=arguments;if(0===o.length)return t._volume;if(1===o.length||2===o.length&&"undefined"==typeof o[1]){var r=t._getSoundIds(),i=r.indexOf(o[0]);i>=0?n=parseInt(o[0],10):e=parseFloat(o[0])}else o.length>=2&&(e=parseFloat(o[0]),n=parseInt(o[1],10));var u;if(!("undefined"!=typeof e&&e>=0&&e<=1))return u=n?t._soundById(n):t._sounds[0],u?u._volume:0;if("loaded"!==t._state)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,o)}}),t;"undefined"==typeof n&&(t._volume=e),n=t._getSoundIds(n);for(var s=0;s<n.length;s++)u=t._soundById(n[s]),u&&(u._volume=e,o[2]||t._stopFade(n[s]),t._webAudio&&u._node&&!u._muted?u._node.gain.setValueAtTime(e,a.ctx.currentTime):u._node&&!u._muted&&(u._node.volume=e*a.volume()),t._emit("volume",u._id));return t},fade:function(e,n,t,o){var r=this,i=Math.abs(e-n),u=e>n?"out":"in",s=i/.01,d=s>0?t/s:t;if(d<4&&(s=Math.ceil(s/(4/d)),d=4),"loaded"!==r._state)return r._queue.push({event:"fade",action:function(){r.fade(e,n,t,o)}}),r;r.volume(e,o);for(var _=r._getSoundIds(o),l=0;l<_.length;l++){var f=r._soundById(_[l]);if(f){if(o||r._stopFade(_[l]),r._webAudio&&!f._muted){var c=a.ctx.currentTime,p=c+t/1e3;f._volume=e,f._node.gain.setValueAtTime(e,c),f._node.gain.linearRampToValueAtTime(n,p)}var m=e;f._interval=setInterval(function(e,t){s>0&&(m+="in"===u?.01:-.01),m=Math.max(0,m),m=Math.min(1,m),m=Math.round(100*m)/100,r._webAudio?("undefined"==typeof o&&(r._volume=m),t._volume=m):r.volume(m,e,!0),m===n&&(clearInterval(t._interval),t._interval=null,r.volume(m,e),r._emit("fade",e))}.bind(r,_[l],f),d)}}return r},_stopFade:function(e){var n=this,t=n._soundById(e);return t&&t._interval&&(n._webAudio&&t._node.gain.cancelScheduledValues(a.ctx.currentTime),clearInterval(t._interval),t._interval=null,n._emit("fade",e)),n},loop:function(){var e,n,t,o=this,r=arguments;if(0===r.length)return o._loop;if(1===r.length){if("boolean"!=typeof r[0])return t=o._soundById(parseInt(r[0],10)),!!t&&t._loop;e=r[0],o._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var i=o._getSoundIds(n),a=0;a<i.length;a++)t=o._soundById(i[a]),t&&(t._loop=e,o._webAudio&&t._node&&t._node.bufferSource&&(t._node.bufferSource.loop=e,e&&(t._node.bufferSource.loopStart=t._start||0,t._node.bufferSource.loopEnd=t._stop)));return o},rate:function(){var e,n,t=this,o=arguments;if(0===o.length)n=t._sounds[0]._id;else if(1===o.length){var r=t._getSoundIds(),i=r.indexOf(o[0]);i>=0?n=parseInt(o[0],10):e=parseFloat(o[0])}else 2===o.length&&(e=parseFloat(o[0]),n=parseInt(o[1],10));var u;if("number"!=typeof e)return u=t._soundById(n),u?u._rate:t._rate;if("loaded"!==t._state)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,o)}}),t;"undefined"==typeof n&&(t._rate=e),n=t._getSoundIds(n);for(var s=0;s<n.length;s++)if(u=t._soundById(n[s])){u._rateSeek=t.seek(n[s]),u._playStart=t._webAudio?a.ctx.currentTime:u._playStart,u._rate=e,t._webAudio&&u._node&&u._node.bufferSource?u._node.bufferSource.playbackRate.value=e:u._node&&(u._node.playbackRate=e);var d=t.seek(n[s]),_=(t._sprite[u._sprite][0]+t._sprite[u._sprite][1])/1e3-d,l=1e3*_/Math.abs(u._rate);!t._endTimers[n[s]]&&u._paused||(t._clearTimer(n[s]),t._endTimers[n[s]]=setTimeout(t._ended.bind(t,u),l)),t._emit("rate",u._id)}return t},seek:function(){var e,n,t=this,o=arguments;if(0===o.length)n=t._sounds[0]._id;else if(1===o.length){var r=t._getSoundIds(),i=r.indexOf(o[0]);i>=0?n=parseInt(o[0],10):(n=t._sounds[0]._id,e=parseFloat(o[0]))}else 2===o.length&&(e=parseFloat(o[0]),n=parseInt(o[1],10));if("undefined"==typeof n)return t;if("loaded"!==t._state)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,o)}}),t;var u=t._soundById(n);if(u){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var s=t.playing(n)?a.ctx.currentTime-u._playStart:0,d=u._rateSeek?u._rateSeek-u._seek:0;return u._seek+(d+s*Math.abs(u._rate))}return u._node.currentTime}var _=t.playing(n);_&&t.pause(n,!0),u._seek=e,u._ended=!1,t._clearTimer(n),_&&t.play(n,!0),!t._webAudio&&u._node&&(u._node.currentTime=e),t._emit("seek",n)}return t},playing:function(e){var n=this;if("number"==typeof e){var t=n._soundById(e);return!!t&&!t._paused}for(var o=0;o<n._sounds.length;o++)if(!n._sounds[o]._paused)return!0;return!1},duration:function(e){var n=this,t=n._duration,o=n._soundById(e);return o&&(t=n._sprite[o._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,n=e._sounds,t=0;t<n.length;t++){n[t]._paused||(e.stop(n[t]._id),e._emit("end",n[t]._id)),e._webAudio||(n[t]._node.src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=",n[t]._node.removeEventListener("error",n[t]._errorFn,!1),n[t]._node.removeEventListener(a._canPlayEvent,n[t]._loadFn,!1)),delete n[t]._node,e._clearTimer(n[t]._id);var o=a._howls.indexOf(e);o>=0&&a._howls.splice(o,1)}var r=!0;for(t=0;t<a._howls.length;t++)if(a._howls[t]._src===e._src){r=!1;break}return d&&r&&delete d[e._src],a.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,t,o){var r=this,i=r["_on"+e];return"function"==typeof n&&i.push(o?{id:t,fn:n,once:o}:{id:t,fn:n}),r},off:function(e,n,t){var o=this,r=o["_on"+e],i=0;if(n){for(i=0;i<r.length;i++)if(n===r[i].fn&&t===r[i].id){r.splice(i,1);break}}else if(e)o["_on"+e]=[];else{var a=Object.keys(o);for(i=0;i<a.length;i++)0===a[i].indexOf("_on")&&Array.isArray(o[a[i]])&&(o[a[i]]=[])}return o},once:function(e,n,t){var o=this;return o.on(e,n,t,1),o},_emit:function(e,n,t){for(var o=this,r=o["_on"+e],i=r.length-1;i>=0;i--)r[i].id&&r[i].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,t)}.bind(o,r[i].fn),0),r[i].once&&o.off(e,r[i].fn,r[i].id));return o},_loadQueue:function(){var e=this;if(e._queue.length>0){var n=e._queue[0];e.once(n.event,function(){e._queue.shift(),e._loadQueue()}),n.action()}return e},_ended:function(e){var n=this,t=e._sprite,o=!(!e._loop&&!n._sprite[t][2]);if(n._emit("end",e._id),!n._webAudio&&o&&n.stop(e._id,!0).play(e._id),n._webAudio&&o){n._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=a.ctx.currentTime;var r=1e3*(e._stop-e._start)/Math.abs(e._rate);n._endTimers[e._id]=setTimeout(n._ended.bind(n,e),r)}return n._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,n._clearTimer(e._id),n._cleanBuffer(e._node),a._autoSuspend()),n._webAudio||o||n.stop(e._id),n},_clearTimer:function(e){var n=this;return n._endTimers[e]&&(clearTimeout(n._endTimers[e]),delete n._endTimers[e]),n},_soundById:function(e){for(var n=this,t=0;t<n._sounds.length;t++)if(e===n._sounds[t]._id)return n._sounds[t];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new s(e)},_drain:function(){var e=this,n=e._pool,t=0,o=0;if(!(e._sounds.length<n)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&t++;for(o=e._sounds.length-1;o>=0;o--){if(t<=n)return;e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),t--)}}},_getSoundIds:function(e){var n=this;if("undefined"==typeof e){for(var t=[],o=0;o<n._sounds.length;o++)t.push(n._sounds[o]._id);return t}return[e]},_refreshBuffer:function(e){var n=this;return e._node.bufferSource=a.ctx.createBufferSource(),e._node.bufferSource.buffer=d[n._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.value=e._rate,n},_cleanBuffer:function(e){var n=this;if(n._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}}return e.bufferSource=null,n}};var s=function(e){this._parent=e,this.init()};s.prototype={init:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._muted=n._muted,e._rate=n._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=Math.round(Date.now()*Math.random()),n._sounds.push(e),e.create(),e},create:function(){var e=this,n=e._parent,t=a._muted||e._muted||e._parent._muted?0:e._volume;return n._webAudio?(e._node="undefined"==typeof a.ctx.createGain?a.ctx.createGainNode():a.ctx.createGain(),e._node.gain.setValueAtTime(t,a.ctx.currentTime),e._node.paused=!0,e._node.connect(a.masterGain)):(e._node=new Audio,e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(a._canPlayEvent,e._loadFn,!1),e._node.src=n._src,e._node.preload="auto",e._node.volume=t*a.volume(),e._node.load()),e},reset:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._muted=n._muted,e._rate=n._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=Math.round(Date.now()*Math.random()),e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorListener,!1)},_loadListener:function(){var e=this,n=e._parent;n._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(n._sprite).length&&(n._sprite={__default:[0,1e3*n._duration]}),"loaded"!==n._state&&(n._state="loaded",n._emit("load"),n._loadQueue()),e._node.removeEventListener(a._canPlayEvent,e._loadFn,!1)}};var d={},_=function(e){var n=e._src;if(d[n])return e._duration=d[n].duration,void c(e);if(/^data:[^;]+;base64,/.test(n)){for(var t=atob(n.split(",")[1]),o=new Uint8Array(t.length),r=0;r<t.length;++r)o[r]=t.charCodeAt(r);f(o.buffer,e)}else{var i=new XMLHttpRequest;i.open("GET",n,!0),i.responseType="arraybuffer",i.onload=function(){var n=(i.status+"")[0];return"0"!==n&&"2"!==n&&"3"!==n?void e._emit("loaderror",null,"Failed loading audio file with status: "+i.status+"."):void f(i.response,e)},i.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete d[n],e.load())},l(i)}},l=function(e){try{e.send()}catch(n){e.onerror()}},f=function(e,n){a.ctx.decodeAudioData(e,function(e){e&&n._sounds.length>0&&(d[n._src]=e,c(n,e))},function(){n._emit("loaderror",null,"Decoding audio data failed.")})},c=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},p=function(){try{"undefined"!=typeof AudioContext?a.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?a.ctx=new webkitAudioContext:a.usingWebAudio=!1}catch(e){a.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(a._navigator&&a._navigator.platform),n=a._navigator&&a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=n?parseInt(n[1],10):null;if(e&&t&&t<9){var o=/safari/.test(a._navigator&&a._navigator.userAgent.toLowerCase());(a._navigator&&a._navigator.standalone&&!o||a._navigator&&!a._navigator.standalone&&!o)&&(a.usingWebAudio=!1)}a.usingWebAudio&&(a.masterGain="undefined"==typeof a.ctx.createGain?a.ctx.createGainNode():a.ctx.createGain(),a.masterGain.gain.value=1,a.masterGain.connect(a.ctx.destination)),a._setup()};o=[],r=function(){return{Howler:a,Howl:u}}.apply(n,o),!(void 0!==r&&(e.exports=r)),n.Howler=a,n.Howl=u,"undefined"!=typeof window?(window.HowlerGlobal=i,window.Howler=a,window.Howl=u,window.Sound=s):"undefined"!=typeof t&&(t.HowlerGlobal=i,t.Howler=a,t.Howl=u,t.Sound=s)}(),/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.2
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var t=n._howls.length-1;t>=0;t--)n._howls[t].stereo(e);return n},HowlerGlobal.prototype.pos=function(e,n,t){var o=this;return o.ctx&&o.ctx.listener?(n="number"!=typeof n?o._pos[1]:n,t="number"!=typeof t?o._pos[2]:t,"number"!=typeof e?o._pos:(o._pos=[e,n,t],o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]),o)):o},HowlerGlobal.prototype.orientation=function(e,n,t,o,r,i){var a=this;if(!a.ctx||!a.ctx.listener)return a;var u=a._orientation;return n="number"!=typeof n?u[1]:n,t="number"!=typeof t?u[2]:t,o="number"!=typeof o?u[3]:o,r="number"!=typeof r?u[4]:r,i="number"!=typeof i?u[5]:i,"number"!=typeof e?u:(a._orientation=[e,n,t,o,r,i],a.ctx.listener.setOrientation(e,n,t,o,r,i),a)},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._stereo=n.stereo||null,t._pos=n.pos||null,t._pannerAttr={coneInnerAngle:"undefined"!=typeof n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:"undefined"!=typeof n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:"undefined"!=typeof n.coneOuterGain?n.coneOuterGain:0,distanceModel:"undefined"!=typeof n.distanceModel?n.distanceModel:"inverse",maxDistance:"undefined"!=typeof n.maxDistance?n.maxDistance:1e4,panningModel:"undefined"!=typeof n.panningModel?n.panningModel:"HRTF",refDistance:"undefined"!=typeof n.refDistance?n.refDistance:1,rolloffFactor:"undefined"!=typeof n.rolloffFactor?n.rolloffFactor:1},t._onstereo=n.onstereo?[{fn:n.onstereo}]:[],t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,t){var o=this;if(!o._webAudio)return o;if("loaded"!==o._state)return o._queue.push({event:"stereo",action:function(){o.stereo(n,t)}}),o;var r="undefined"==typeof Howler.ctx.createStereoPanner?"spatial":"stereo";if("undefined"==typeof t){if("number"!=typeof n)return o._stereo;o._stereo=n,o._pos=[n,0,0]}for(var i=o._getSoundIds(t),a=0;a<i.length;a++){var u=o._soundById(i[a]);if(u){if("number"!=typeof n)return u._stereo;u._stereo=n,u._pos=[n,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",u._panner&&u._panner.pan||e(u,r),"spatial"===r?u._panner.setPosition(n,0,0):u._panner.pan.value=n),o._emit("stereo",u._id)}}return o},Howl.prototype.pos=function(n,t,o,r){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"pos",action:function(){i.pos(n,t,o,r)}}),i;if(t="number"!=typeof t?0:t,o="number"!=typeof o?-.5:o,"undefined"==typeof r){if("number"!=typeof n)return i._pos;i._pos=[n,t,o]}for(var a=i._getSoundIds(r),u=0;u<a.length;u++){var s=i._soundById(a[u]);if(s){if("number"!=typeof n)return s._pos;s._pos=[n,t,o],s._node&&(s._panner&&!s._panner.pan||e(s,"spatial"),s._panner.setPosition(n,t,o)),i._emit("pos",s._id)}}return i},Howl.prototype.orientation=function(n,t,o,r){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"orientation",action:function(){i.orientation(n,t,o,r)}}),i;if(t="number"!=typeof t?i._orientation[1]:t,o="number"!=typeof o?i._orientation[2]:o,"undefined"==typeof r){if("number"!=typeof n)return i._orientation;i._orientation=[n,t,o]}for(var a=i._getSoundIds(r),u=0;u<a.length;u++){var s=i._soundById(a[u]);if(s){if("number"!=typeof n)return s._orientation;s._orientation=[n,t,o],s._node&&(s._panner||(s._pos||(s._pos=i._pos||[0,0,-.5]),e(s,"spatial")),s._panner.setOrientation(n,t,o)),i._emit("orientation",s._id)}}return i},Howl.prototype.pannerAttr=function(){var n,t,o,r=this,i=arguments;if(!r._webAudio)return r;if(0===i.length)return r._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return o=r._soundById(parseInt(i[0],10)),o?o._pannerAttr:r._pannerAttr;n=i[0],"undefined"==typeof t&&(r._pannerAttr={coneInnerAngle:"undefined"!=typeof n.coneInnerAngle?n.coneInnerAngle:r._coneInnerAngle,coneOuterAngle:"undefined"!=typeof n.coneOuterAngle?n.coneOuterAngle:r._coneOuterAngle,coneOuterGain:"undefined"!=typeof n.coneOuterGain?n.coneOuterGain:r._coneOuterGain,distanceModel:"undefined"!=typeof n.distanceModel?n.distanceModel:r._distanceModel,maxDistance:"undefined"!=typeof n.maxDistance?n.maxDistance:r._maxDistance,panningModel:"undefined"!=typeof n.panningModel?n.panningModel:r._panningModel,refDistance:"undefined"!=typeof n.refDistance?n.refDistance:r._refDistance,rolloffFactor:"undefined"!=typeof n.rolloffFactor?n.rolloffFactor:r._rolloffFactor})}else 2===i.length&&(n=i[0],t=parseInt(i[1],10));for(var a=r._getSoundIds(t),u=0;u<a.length;u++)if(o=r._soundById(a[u])){var s=o._pannerAttr;s={coneInnerAngle:"undefined"!=typeof n.coneInnerAngle?n.coneInnerAngle:s.coneInnerAngle,coneOuterAngle:"undefined"!=typeof n.coneOuterAngle?n.coneOuterAngle:s.coneOuterAngle,coneOuterGain:"undefined"!=typeof n.coneOuterGain?n.coneOuterGain:s.coneOuterGain,distanceModel:"undefined"!=typeof n.distanceModel?n.distanceModel:s.distanceModel,maxDistance:"undefined"!=typeof n.maxDistance?n.maxDistance:s.maxDistance,panningModel:"undefined"!=typeof n.panningModel?n.panningModel:s.panningModel,refDistance:"undefined"!=typeof n.refDistance?n.refDistance:s.refDistance,rolloffFactor:"undefined"!=typeof n.rolloffFactor?n.rolloffFactor:s.rolloffFactor};var d=o._panner;d?(d.coneInnerAngle=s.coneInnerAngle,d.coneOuterAngle=s.coneOuterAngle,d.coneOuterGain=s.coneOuterGain,d.distanceModel=s.distanceModel,d.maxDistance=s.maxDistance,d.panningModel=s.panningModel,d.refDistance=s.refDistance,d.rolloffFactor=s.rolloffFactor):(o._pos||(o._pos=r._pos||[0,0,-.5]),e(o,"spatial"))}return r},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this),n._stereo?t.stereo(n._stereo):n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this)}}(Sound.prototype.reset);var e=function(e,n){n=n||"spatial","spatial"===n?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.panningModel=e._pannerAttr.panningModel,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.value=e._stereo),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id)}}()}).call(n,t(6))},function(e,n){function t(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=f[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(s(o.parts[i],n))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(s(o.parts[i],n));f[o.id]={id:o.id,refs:1,parts:a}}}}function o(e){for(var n=[],t={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],u=r[2],s=r[3],d={css:a,media:u,sourceMap:s};t[i]?t[i].parts.push(d):n.push(t[i]={id:i,parts:[d]})}return n}function r(e,n){var t=m(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),y.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function i(e){e.parentNode.removeChild(e);var n=y.indexOf(e);n>=0&&y.splice(n,1)}function a(e){var n=document.createElement("style");return n.type="text/css",r(e,n),n}function u(e){var n=document.createElement("link");return n.rel="stylesheet",r(e,n),n}function s(e,n){var t,o,r;if(n.singleton){var s=h++;t=v||(v=a(n)),o=d.bind(null,t,s,!1),r=d.bind(null,t,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=u(n),o=l.bind(null,t),r=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),o=_.bind(null,t),r=function(){i(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}function d(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function _(e,n){var t=n.css,o=n.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function l(e,n){var t=n.css,o=n.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([t],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var f={},c=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},p=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=c(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0,y=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},"undefined"==typeof n.singleton&&(n.singleton=p()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var r=o(e);return t(r,n),function(e){for(var i=[],a=0;a<r.length;a++){var u=r[a],s=f[u.id];s.refs--,i.push(s)}if(e){var d=o(e);t(d,n)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var _=0;_<s.parts.length;_++)s.parts[_]();delete f[s.id]}}}};var g=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){t(0),e.exports=t(1)}]);