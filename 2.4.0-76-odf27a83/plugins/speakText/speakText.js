"use strict";!function(){function e(e,o,t){this.context=e,this.urlList=o,this.onload=t,this.bufferList=new Array,this.loadCount=0}function o(e){for(var o in r)if(r[o].indexOf(e)>=0)return o;return"n"}function t(e){return u&&u==e||(u=e,i=n.loadAudio({a:e+"1",i:e+"2",u:e+"3",e:e+"4",o:e+"5",n:e+"6"})),i}e.prototype.loadBuffer=function(e,o){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="arraybuffer";var r=this;t.onload=function(){r.context.decodeAudioData(t.response,function(t){return t?(r.bufferList[o]=t,void(++r.loadCount==r.urlList.length&&r.onload(r.bufferList))):void alert("error decoding file data: "+e)},function(e){console.error("decodeAudioData error",e)})},t.onerror=function(){alert("BufferLoader: XHR error")},t.send()},e.prototype.load=function(){for(var e=0;e<this.urlList.length;++e)this.loadBuffer(this.urlList[e],e)};var r={a:"あかさたなはまやらわアカサタナハマヤラワがざだばぱガザダバパぁゃゎァャヮ",i:"いきしちにひみりイキシチニヒミリぎじぢびぴギジチビピぃィ",u:"うくすつぬふむゆるウクスツヌフムユルぐずづぶぷグズヅブプヴぅゥゅュ",e:"えけせてねへめれエケセテネヘメレげぜでべぺゲゼデベペぇェ",o:"おこそとのほもよろをオコソトノホモヨロヲごぞどぼぽゴゾドボポぉょォョ",slient:"っッ・！？、。（）…―「」『』　"},n=function(){var o;if(o=window.AudioContext||window.webkitAudioContext){var t=new o,r={};return!browser.isIOs&&!browser.isAndroid||window.o2WrapperNativeInjected||$("body").one("touchstart",function(e){n.playDummy()}),{playAudio:function(e){var o=r[e];if(o){var n=t.createBufferSource();n.buffer=o,n.connect(t.destination),n.start(0),n.onended=function(){n.onended=void 0,n.disconnect()}}},loadAudio:function(o){var n=Object.keys(o),i=$.Deferred(),u=new e(t,n.map(function(e){return ResourceLoader.getFullAudioPath(o[e])}),function(e){for(var o=0;o<e.length;o++)r[n[o]]=e[o];i.resolve()});return u.load(),i.promise()},playDummy:function(){var e=t.createBufferSource();e.connect(t.destination),e.start(0)}}}var i={};return{loadAudio:function(e){var o=[];for(var t in e)i[t]=new Audio,o.push(ResourceLoader.loadAudio(e[t],!1,i[t]));return $.when.apply($,o)},playAudio:function(e){var o=i[e];o&&0!=o.readyState&&(o.currentTime=0,o.play())}}}(),i=$.Deferred(),u=void 0;conductor?t("voice0"):$(o2).one("init",function(){t("voice0")}),MessageLayer.textCustomizers.speakTextCustomizer=function(e,t,r){var i=-1;this.perform=function(){for(var e=0;e<r.length;e++){var t=r[e];if(t.styles.visible&&0!=t.styles.opacity&&!(e<=i||a&&o2.skipMode!=o2.SKIP_MODE_NONE)){var u=o(t.text);n.playAudio(u),i=e}}}};var a=!1;Tag.actions.speaktext=new TagAction({rules:{enable:{type:"BOOLEAN"},ignore_skip:{type:"BOOLEAN"},prefix:{type:"STRING"}},action:function(e){var o=o2.currentMessageLayer.textCustomizers.indexOf("speakTextCustomizer");"ignore_skip"in e&&(a=e.ignore_skip);var r=this;if("enable"in e)if(e.enable){if(o==-1)return o2.currentMessageLayer.textCustomizers.push("speakTextCustomizer"),t("prefix"in e?e.prefix:"voice0").done(function(){setTimeout(function(){r.done()})}),1}else o!=-1&&o2.currentMessageLayer.textCustomizers.splice(o,1);return e.prefix?(t(e.prefix).done(function(){setTimeout(function(){r.done()})}),1):0}})}();