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
        tl.from("#circle", {duration:1, scale: 3, stroke:.5, ease: "elastic.out(2, 5)"})

        return tl;
}

function greenAnimation(){
        var tl = gsap.timeline();
        tl.from("#green", {duration:1, scale: .5, transformOrigin:"center"})

        return tl;
}


var mainTL = gsap.timeline();
mainTL.add(circleAnimation())
.add(greenAnimation())
// .add(orangeAnimation())
// .add(magentaAnimation())
// .add(blueAnimation())
// .add(limeAnimation())
// .add(mintAnimation())
// .add(lightOrangeAnimation())
// .add(coralAnimation())
// .add(pinkAnimation())
// .add(purpleAnimation())
// .add(lightBlueAnimation())
// .add(periwinkleAnimation())
// .add(textAnimation())


GSDevTools.create();