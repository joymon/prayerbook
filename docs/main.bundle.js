!function(e){function t(t){for(var o,s,a=t[0],c=t[1],l=t[2],p=0,d=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={0:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;i.push([0,1]),n()}([function(e,t,n){"use strict";t.__esModule=!0;var o=n(1),r=n(2),i=new o.default,s=new r.default;!function(){var e=!1;void 0!==window.__karma__&&(e=!0);return console.log("[bootstrap] isKarmaRunning - "+e+" "+typeof window.__karma__),e}()?i.register((function(){console.log("boostrap - SW started. Loading app"),s.load()})):s.load()},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(){window.addEventListener("beforeinstallprompt",(function(e){e.prompt(),e.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted to install"):console.log("User dismissed the prompt")}))})),window.addEventListener("appinstalled",(function(e){console.log("prayerBook","installed")}))}return e.prototype.register=function(e){var t=this;"serviceWorker"in navigator?(console.log("[sw-reg] ServiceWorker supported. Going to register"),navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("[sw-reg] ServiceWorker registered at scope "+e.scope)})),navigator.serviceWorker.ready.then((function(){console.log("[sw-reg]  ServiceWorker ready. Sending hi..."),t.send_message_to_sw("hi").then((function(){console.log("[sw-reg] ServiceWorker acknowledged. Start ng app"),e()})).catch((function(){console.log("[sw-reg] ServiceWorker didn't acknowledged or message not sent. Try luck by starting ng app"),e()}))})),navigator.serviceWorker.oncontrollerchange=function(e){console.log("[sw-reg] controller changed. New is "+["controller"])}):(console.log("[sw-reg] Service worker not supported. Start ng app"),e())},e.prototype.send_message_to_sw=function(e){return new Promise((function(t,n){var o=new MessageChannel;o.port1.onmessage=function(e){e.data.error?n(e.data.error):t(e.data)},null===navigator.serviceWorker.controller?(console.log("[sw-reg] controller is null. state - "+navigator.serviceWorker),n()):navigator.serviceWorker.controller.postMessage("Client says '"+e+"'",[o.port2])}))},e}();t.default=o},function(e,t,n){"use strict";t.__esModule=!0;var o=n(3);n(5);var r=n(9),i=n(11);n(13),n(18),n(19);var s=n(20),a=n(21),c=n(22),l=n(23),u=n(24),p=n(25),d=function(){function e(){}return e.prototype.load=function(){var e=o.module("prayerBook",[r,i]);e.config(["$sceDelegateProvider",function(e){e.resourceUrlWhitelist(["self","https://gasuperproxyapi.appspot.com/**"])}]),e.service("GAAPI",["$http","$sce",s.default]),e.service("PrayerService",["$http",a.default]),e.service("InternetMonitoringService",p.default),e.component("devcredits",new c.default),e.component("prayers",new l.PrayerComponent),e.component("main",new u.default),o.bootstrap(document,["prayerBook"])},e}();t.default=d},,,,,,,,,,,,,,,,function(e,t){var n,o,r,i,s,a;n=window,o=document,r="script",i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,s=o.createElement(r),a=o.getElementsByTagName(r)[0],s.async=1,s.src="//www.google-analytics.com/analytics.js",a.parentNode.insertBefore(s,a),ga("create","UA-67201930-1","auto"),ga("send","pageview")},function(e,t){var n,o,r,i,s;n=document,o="script",r="facebook-jssdk",s=n.getElementsByTagName(o)[0],n.getElementById(r)||((i=n.createElement(o)).id=r,i.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=1627179290870888",s.parentNode.insertBefore(i,s))},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e,t){this.http=e,this.sce=t}return e.prototype.getPageViews=function(){var e="https://gasuperproxyapi.appspot.com/query?id=ahFzfmdhc3VwZXJwcm94eWFwaXIVCxIIQXBpUXVlcnkYgICAgICAgAoM";return this.sce.trustAsResourceUrl(e),this.http.jsonp(e,{jsonpCallbackParam:"callback"})},e}();t.default=o},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e){this.http=e}return e.prototype.GetPrayers=function(){return this.http.get("")},e.$inject=["$http"],e}();t.default=o},function(e,t,n){"use strict";t.__esModule=!0,t.DevCreditsController=void 0;var o=function(){this.templateUrl="./views/modals/devCredits.html",this.controller=r,this.bindings={modalInstance:"<"}};t.default=o;var r=function(){function e(){}return e.prototype.ok=function(){this.modalInstance.close()},e.prototype.cancel=function(){this.modalInstance.dismiss()},e}();t.DevCreditsController=r},function(e,t,n){"use strict";t.__esModule=!0,t.PrayerComponent=t.PrayerController=void 0;var o=function(){function e(e,t,n){this.prayerSvc=e,this.http=t,this.sce=n,this.prayers=[],this.load()}return e.prototype.load=function(){var e=this;this.http.get("data/prayers.json").then((function(t){console.log("[prayers.component] Obtained "+t.data.length+" prayers from server. Getting content for individual prayers"),e.prayers=t.data.map((function(e,t){return e.id=t,e})),t.data.forEach((function(t){e.downloadPrayerContent(t)}))}))},e.prototype.downloadPrayerContent=function(e){var t="data/"+e.path;this.http.get(t).then((function(t){e.content=t.data}))},e.prototype.renderHTML=function(e){return void 0!==e&&"string"!=typeof e&&(e=e.join("")),this.sce.trustAsHtml(e)},e.$inject=["PrayerService","$http","$sce"],e}();t.PrayerController=o;var r=function(){this.templateUrl="./views/prayers.component.html",this.controller=o};t.PrayerComponent=r},function(e,t,n){"use strict";t.__esModule=!0,t.MainController=void 0;var o=function(){this.templateUrl="./views/main.component.html",this.controller=r};t.default=o;var r=function(){function e(e,t,n,o){var r=this;this.$scope=e,this.$modal=t,this.GAAPI=n,this.internetMonitoringService=o,this.isOnline=this.internetMonitoringService.isConnected,this.GAAPI.getPageViews().then((function(e){r.pageviews=e.data.rows[0][0]})),this.internetMonitoringService.subscribe((function(e){r.isOnline=e,r.$scope.$apply()}))}return e.prototype.showCredits=function(){var e={component:"devcredits",animation:!0,size:"lg",resolve:{},windowClass:"show"},t=this.$modal.open(e);t.rendered.then((function(){return console.log(" modal redered")})),t.opened.then((function(e){return console.log(" modal opened")})),t.result.then((function(e){console.log("something selected")}),(function(e){console.log("Error - "+e)}))},e.$inject=["$scope","$uibModal","GAAPI","InternetMonitoringService"],e}();t.MainController=r},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(){var e=this;this.isConnected=navigator.onLine,this.subscribers=[],window.addEventListener("offline",(function(t){e.publish(!1)})),window.addEventListener("online",(function(t){e.publish(!0)}))}return e.prototype.publish=function(e){this.subscribers.forEach((function(t){t(e)}))},e.prototype.subscribe=function(e){this.subscribers.push(e)},e}();t.default=o}]);