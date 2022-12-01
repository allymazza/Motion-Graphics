import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

gsap.set("#circle",{transformOrigin: "center"});
gsap.set("#green",{transformOrigin: "center"});
gsap.set("#orange",{transformOrigin: "center"});
gsap.set("#magenta",{transformOrigin: "center"});
gsap.set("#blue",{transformOrigin: "center"});

function circleAnimation(){
        var tl = gsap.timeline();
        tl.from("#circle", {duration:2, scale: 3, stroke:.2, opacity:0, ease: "elastic.out(2, 5)"})

        return tl;
}

function greenAnimation(){
        var tl = gsap.timeline();
        tl.to("#green", {duration: 2, motionPath:{
                path: "#greenpath", align:"#greenpath"
        }})

        return tl;
}

function orangeAnimation(){
        var tl = gsap.timeline();
        tl.to("#orange", {duration: 2,  motionPath:{
                path: "#orangepath", align:"#orangepath"
        }}, "greenAnimation")

        return tl;
}

function magentaAnimation(){
        var tl = gsap.timeline();
        tl.to("#magenta", {duration: 2, motionPath:{
                path: "#magentapath", align:"#magentapath"
        }}, "orangeAnimation")

        return tl;
}

function blueAnimation(){
        var tl = gsap.timeline();
        tl.to("#blue", {duration: 2, motionPath:{
                path: "#bluepath", align:"#bluepath"
        }}, "blueAnimation")

        return tl;
}

function limeAnimation(){
        var tl = gsap.timeline();
        tl.from("#lime", {duration: .25, opacity: 0, x: -20})

        return tl;
}

function mintAnimation(){
        var tl = gsap.timeline();
        tl.from("#mint", {duration: .25, opacity: 0, x: -20})

        return tl;
}

function opalAnimation(){
        var tl = gsap.timeline();
        tl.from("#opal", {duration:1, opacity:0, x:100})
        
        return tl;
}


var mainTL = gsap.timeline();
mainTL.add(circleAnimation())
.add(greenAnimation())
.add(orangeAnimation())
.add(magentaAnimation())
.add(blueAnimation())
.add(limeAnimation())
.add(mintAnimation())
// .add(lightOrangeAnimation())
// .add(coralAnimation())
// .add(pinkAnimation())
// .add(purpleAnimation())
// .add(lightBlueAnimation())
// .add(periwinkleAnimation())
.add(opalAnimation())


GSDevTools.create();