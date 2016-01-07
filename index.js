var sc = document.createElement("script");
sc.type = "text/javascript";
sc.innerHTML = "var myPlatForm=function(){return \"iphone\";};if (Object.defineProperty){Object.defineProperty(navigator, \"platform\", {get: myPlatForm});} else if(Object.prototype.__defineGetter__){navigator.__defineGetter__(\"platform\", myPlatForm);}";
var html = document.getElementsByTagName("html");
html[0].appendChild(sc);

