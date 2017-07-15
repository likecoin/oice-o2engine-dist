"use strict";!function(){function e(e,t,o){this.context=e,this.urlList=t,this.onload=o,this.bufferList=new Array,this.loadCount=0}function t(e){for(var t in r)if(r[t].indexOf(e)>=0)return t;return"n"}function o(e){return u&&u==e||(u=e,i=n.loadAudio({a:e+"1",i:e+"2",u:e+"3",e:e+"4",o:e+"5",n:e+"6"})),i}e.prototype.loadBuffer=function(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer";var r=this;o.onload=function(){r.context.decodeAudioData(o.response,function(o){return o?(r.bufferList[t]=o,void(++r.loadCount==r.urlList.length&&r.onload(r.bufferList))):void alert("error decoding file data: "+e)},function(e){console.error("decodeAudioData error",e)})},o.onerror=function(){alert("BufferLoader: XHR error")},o.send()},e.prototype.load=function(){for(var e=0;e<this.urlList.length;++e)this.loadBuffer(this.urlList[e],e)};var r={a:"あかさたなはまやらわアカサタナハマヤラワがざだばぱガザダバパぁゃゎァャヮ",i:"いきしちにひみりイキシチニヒミリぎじぢびぴギジチビピぃィ",u:"うくすつぬふむゆるウクスツヌフムユルぐずづぶぷグズヅブプヴぅゥゅュ",e:"えけせてねへめれエケセテネヘメレげぜでべぺゲゼデベペぇェ",o:"おこそとのほもよろをオコソトノホモヨロヲごぞどぼぽゴゾドボポぉょォョ",slient:"っッ・！？、。（）…―「」『』　"},n=function(){var t;if(t=window.AudioContext||window.webkitAudioContext){var o=new t,r={};return!browser.isIOs&&!browser.isAndroid||window.nativeInjected||$("body").one("touchstart",function(e){n.playDummy()}),{playAudio:function(e){var t=r[e];if(t){var n=o.createBufferSource();n.buffer=t,n.connect(o.destination),n.start(0),n.onended=function(){n.onended=void 0,n.disconnect()}}},loadAudio:function(t){var n=Object.keys(t),i=$.Deferred(),u=new e(o,n.map(function(e){return ResourceLoader.getFullAudioPath(t[e])}),function(e){for(var t=0;t<e.length;t++)r[n[t]]=e[t];i.resolve()});return u.load(),i.promise()},playDummy:function(){var e=o.createBufferSource();e.connect(o.destination),e.start(0)}}}var i={};return{loadAudio:function(e){var t=[];for(var o in e)i[o]=new Audio,t.push(ResourceLoader.loadAudio(e[o],!1,i[o]));return $.when.apply($,t)},playAudio:function(e){var t=i[e];t&&0!=t.readyState&&(t.currentTime=0,t.play())}}}(),i=$.Deferred(),u=void 0;o("voice0"),MessageLayer.textCustomizers.speakTextCustomizer=function(e,o,r){var i=-1;this.perform=function(){for(var e=0;e<r.length;e++){var o=r[e];if(o.styles.visible&&0!=o.styles.opacity&&!(e<=i||a&&o2.skipMode!=o2.SKIP_MODE_NONE)){var u=t(o.text);n.playAudio(u),i=e}}}};var a=!1;Tag.actions.speaktext=new TagAction({rules:{enable:{type:"BOOLEAN"},ignore_skip:{type:"BOOLEAN"},prefix:{type:"STRING"}},action:function(e){var t=o2.currentMessageLayer.textCustomizers.indexOf("speakTextCustomizer");"ignore_skip"in e&&(a=e.ignore_skip);var r=this;if("enable"in e)if(e.enable){if(t==-1)return o2.currentMessageLayer.textCustomizers.push("speakTextCustomizer"),o("prefix"in e?e.prefix:"voice0").done(function(){setTimeout(function(){r.done()})}),1}else t!=-1&&o2.currentMessageLayer.textCustomizers.splice(t,1);return e.prefix?(o(e.prefix).done(function(){setTimeout(function(){r.done()})}),1):0}})}();