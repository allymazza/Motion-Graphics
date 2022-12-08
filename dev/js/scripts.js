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
        tl.from("#circle", {duration: 1, scale: 3, stroke:.2, opacity:0, ease: "elastic.out(2, 5)"})

        return tl;
}

function greenAnimation(){
        var tl = gsap.timeline();
        tl.from("#green", {opacity: 0, scaleX:-5}, "greenAnimation")
        .to("#green", {duration: .5, motionPath:{
                path: "#greenpath", align:"#greenpath", autoRotate:true,  ease: "power3.Out"
        }}, "greenAnimation") 
        .to("#green", {rotation: -180, y:-2, x:1 })

        return tl;
}

function orangeAnimation(){
        var tl = gsap.timeline();
        tl.from("#orange", {opacity: 0, scaleX:-5}, "orangeAnimation")
        .to("#orange", {duration: .5,  motionPath:{
                path: "#orangepath", align:"#orangepath", autoRotate:true
        }}, "orangeAnimation")
        .set("#orange", {rotation: -180,  y:-2, x:-2})

        return tl;
}

function magentaAnimation(){
        var tl = gsap.timeline();
        tl.from("#magenta", {opacity: 0, scaleX:-5}, "magentaAnimation")
        .to("#magenta", {duration: .5, motionPath:{
                path: "#magentapath", align:"#magentapath", autoRotate:true
        }}, "magentaAnimation")
        .set("#magenta", {rotation: -180, x: -2, y:-1})

        return tl;
}

function blueAnimation(){
        var tl = gsap.timeline();
        tl.from("#blue", {opacity: 0, scaleX:-5}, "blueAnimation")
        .to("#blue", {duration: .5, motionPath:{
                path: "#bluepath", align:"#bluepath", autoRotate:true
        }}, "blueAnimation")
        .set("#blue", {rotation: -190, x:-2, y:1})

        return tl;
}

function limeAnimation(){
        var tl = gsap.timeline();
        tl.from("#lime", {duration: .2, opacity: 0, x: -20})

        return tl;
}

function mintAnimation(){
        var tl = gsap.timeline();
        tl.from("#mint", {duration: .2, opacity: 0, y: 20})

        return tl;
}

function lightOrangeAnimation(){
        var tl = gsap.timeline();
        tl.from("#lightorange", {duration: .2, opacity: 0, x: -20})

        return tl;
}

function coralAnimation(){
        var tl = gsap.timeline();
        tl.from("#coral", {duration: .2, opacity: 0, x: -20})

        return tl;
}

function pinkAnimation(){
        var tl = gsap.timeline();
        tl.from("#pink", {duration: .2, opacity: 0, y: -20})

        return tl;
}

function purpleAnimation(){
        var tl = gsap.timeline();
        tl.from("#purple", {duration: .2, opacity: 0, x: 20})

        return tl;
}

function lightBlueAnimation(){
        var tl = gsap.timeline();
        tl.from("#lightblue", {duration: .2, opacity: 0, y: 20})

        return tl;
}

function periwinkleAnimation(){
        var tl = gsap.timeline();
        tl.from("#periwinkle", {duration: .2, opacity: 0, x: 20})

        return tl;
}

function logoMarkAnimation(){
        var tl = gsap.timeline();
        tl.to("#logo-mark", {duration: .5, roattion: 90})

        return tl;
}

function opalAnimation(){
        var tl = gsap.timeline();
        tl.from("#opal", {duration:.5, opacity:0, x:100})
        
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
.add(lightOrangeAnimation())
.add(coralAnimation())
.add(pinkAnimation())
.add(purpleAnimation())
.add(lightBlueAnimation())
.add(periwinkleAnimation())
.add(logoMarkAnimation())
.add(opalAnimation())


GSDevTools.create();