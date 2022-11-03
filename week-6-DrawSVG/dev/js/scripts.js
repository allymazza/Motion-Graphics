import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){


    
 
     var leftArrow = document.querySelector("#left-arrow");
     leftArrow = leftArrow.getBBox();
 
     var rightArrow = document.querySelector("#right-arrow");
     rightArrow = rightArrow.getBBox();

    var tl = gsap.timeline()
    tl.from("#right-arrow",{scale:0, duration:0.25, drawSVG: 0, stagger:.25})
    .from("#left-arrow",{scale:0, duration:0.25, drawSVG: 0})
    .from("#up-arrow",{ scale:0, duration:0.25, stagger:0.25, drawSVG: 0})
    .from("#down-arrow",{ scale:0, duration:0.25, stagger:0.25, drawSVG: 0})
    .from("#star",{scale:4, rotation: 360, duration:0.5, drawSVG: 0})
    return tl;
    
}

function patternMotion(){
    var tl = gsap.timeline()
    tl.from(".one",{duration:1, drawSVG:0, stagger:.25, transformOrigin:"center"},"pattern")
    .fromTo(".two",{drawSVG:"0% 0%"},{duration:1, drawSVG:"0% -100%", stagger:0.25},"pattern")
    return tl;
}


function UIMotion(){
    var tl = gsap.timeline()
    tl.from("#box",{drawSVG:"100% 100%"},{duration:1, drawSVG:"50% 50%"},"drawOutline")
    .from("#bg",{duration:0.5, scaleX:0})
    .from("#upload",{duration:0.2, alpha:0, x:20, stagger: 0.2},"-=50%")
    .from("#arrow",{y: -100, duration:0.25, drawSVG:0})
    .from("#line",{y:100, duration:0.25, drawSVG:0})
    .from("#arrow",{rotation:360, duration:0.25, drawSVG:0})
    return tl;
}



var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion());



GSDevTools.create();