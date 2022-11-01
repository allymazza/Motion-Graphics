import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){
    var tl = gsap.timeline()
    tl.from("#right-arrow",{scale:0, duration:0.25, drawSVG: 0})
    .from("#left-arrow",{scale:0, duration:0.25, drawSVG: 0})
    .from("#right-arrow",{x:100, duration:0.25, drawSVG: 0})
    .from("#left-arrow",{x:-100, duration:0.25, drawSVG: 0})
    .from("#up-arrow",{ scale:0, duration:0.25, stagger:0.25, drawSVG: 0})
    .from("#down-arrow",{ scale:0, duration:0.25, stagger:0.25, drawSVG: 0})
    .from("#star",{scale:4, duration:0.25, drawSVG: 0})
    
}





function patternMotion(){
    var tl = gsap.timeline()
    tl.from(".odd",{duration:1, drawSVG:0, stagger:.25, transformOrigin:"center"},"pattern")
    .fromTo(".even",{drawSVG:"0% 0%"},{duration:1, drawSVG:"0% -100%", stagger:0.25,},"pattern")
    return tl;
}


function UIMotion(){

}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion());



GSDevTools.create();