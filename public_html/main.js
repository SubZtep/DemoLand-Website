"use strict";function showGif(a,b){var c=document.getElementById(a);c.setAttribute("src",b),c.style.display="block"}function hideGif(a){document.getElementById(a).style.display="none"}document.addEventListener("DOMContentLoaded",function(){new Twitch.Embed("twitch-embed",{width:854,height:480,theme:"dark","font-size":"medium",channel:"subztep",autoplay:!1});var a=new ScrollMagic.Controller,b=new TimelineMax;b.fromTo("section.panel.games",1.5,{y:"100%"},{x:"0%",y:"0%",ease:Linear.easeNone}),b.fromTo("section.panel.about",1.5,{y:"100%"},{x:"0%",y:"0%",ease:Linear.easeNone});new ScrollMagic.Scene({triggerElement:".pinContainer",triggerHook:"onLeave",duration:"600%"}).setPin(".pinContainer").setTween(b).addTo(a);Array.prototype.map.call(document.getElementsByClassName("panel"),function(a){a.classList.remove("noBg"),a.firstChild.style.display="block"})});