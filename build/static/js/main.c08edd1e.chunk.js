(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(57)},29:function(e,t,n){},33:function(e,t,n){},54:function(e,t,n){e.exports=n.p+"static/media/bg.47c17fd1.webp"},55:function(e,t,n){e.exports=n.p+"static/media/bg.5affc753.jpg"},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=(n(29),n(23)),l=n(14),s=n.n(l),u=n(17),p=n(22),f=(n(33),n(18)),d=n.n(f),h=function(){d.a.init({env:"demo-ffe40"}).database().collection("books").where({publishInfo:{country:"United States"}}).get().then(function(e){console.log(e)})};var g=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),o=t[0],c=t[1];h(),Object(a.useEffect)(function(){function e(){return(e=Object(u.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/date");case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);return r.a.createElement("main",null,r.a.createElement("h1",null,"Create React App + Go API"),r.a.createElement("h2",null,"Deployed with"," ",r.a.createElement("a",{href:"https://vercel.com/docs",target:"_blank",rel:"noreferrer noopener"},"Vercel"),"!"),r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"./yoyo.jpg",type:"image/jpeg"}),r.a.createElement("img",{src:"./yoyo.jpg",alt:"Brooklyn Bridge - New York"})),r.a.createElement(function(e){var t=e.src,n=e.fallback,a=e.type,o=void 0===a?"image/webp":a,c=Object(i.a)(e,["src","fallback","type"]);return r.a.createElement("picture",null,r.a.createElement("source",{srcSet:t,type:o}),r.a.createElement("img",Object.assign({src:n,alt:"test"},c)))},{src:n(54),fallback:n(55),alt:"test"}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/zeit/now/tree/master/examples/create-react-app",target:"_blank",rel:"noreferrer noopener"},"This project")," ","was bootstrapped with"," ",r.a.createElement("a",{href:"https://facebook.github.io/create-react-app/"},"Create React App")," ","and contains three directories, ",r.a.createElement("code",null,"/public")," for static assets,"," ",r.a.createElement("code",null,"/src")," for components and content, and ",r.a.createElement("code",null,"/api")," ","which contains a serverless ",r.a.createElement("a",{href:"https://golang.org/"},"Go")," ","function. See"," ",r.a.createElement("a",{href:"/api/date"},r.a.createElement("code",null,"api/date")," for the Date API with Go"),"."),r.a.createElement("br",null),r.a.createElement("h2",null,"The date according to Go is:"),r.a.createElement("p",null,o||"Loading date..."))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){var t=new URL("",window.location.href);if(console.log(t),t.origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");m?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(t,e)}),window.addEventListener("fetch",function(e){if(/\.jpg$|.png$/.test(e.request.url)){var t=!1;if(e.request.headers.has("accept")&&(t=e.request.headers.get("accept").includes("webp")),t){var n=e.request.clone(),a=n.url.substr(0,n.url.lastIndexOf("."))+".webp";e.respondWith(fetch(a,{mode:"no-cors"}))}}})}}()}},[[24,2,1]]]);
//# sourceMappingURL=main.c08edd1e.chunk.js.map