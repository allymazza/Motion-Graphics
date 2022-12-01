import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


gsap.registerPlugin( DrawSVGPlugin, MotionPathPlugin);


gsap.set("#badge", {x: 200})
gsap.set("#clip",{transformOrigin: "center", opacity: 0});


function badgeAnimation(){
        var tl = gsap.timeline();
        tl.from("#blue",{duration:.5, x: 200, rotation: 90, scale:.5})
        .from("#orange",{duration:.5, y: -200, rotation: 180, scale:.5})
        .from("#red",{duration:.5, y: -200, rotation: 360, scale:.5})
        .from("#cursive-s", {duration:1, drawSVG: "90% 100%"})
        .from("#clip", {duration: 1, scale:.5, x:-200, opacity: 0, transformOrigin:"50% 50%"})
        .to("#badge", {duration: 1, x:0})

        // .from("", 1, { y:-100,scale:0.85 })
        // .to(".logo-svg", 1, { opacity:1 }, 0)

        return tl; 
}

function settlementAnimation(){
        var tl = gsap.timeline();
        tl.from("#s-settle",{duration:.25, y:200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#e1-settle",{duration:.25, y:-200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#t1-settle",{duration:.25, y:200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#t2-settle",{duration:.25, y:-200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#l-settle",{duration:.25, y:-200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#e2-settle",{duration:.25, y:200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#m-ment",{duration:.25, y:-200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#e-ment",{duration:.25, y:200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#n-ment",{duration:.25, y:-200, stagger:.25, ease: "elastic.out(3, 2)"})
        .from("#t-ment",{duration:.25, y:200, stagger:.25, ease: "elastic.out(3, 2)"})  

        return tl;
}

function musicAnimation(){
        var tl = gsap.timeline();
        tl.from("#music", {duration:.3, y:200})

        return tl;
}

function schoolAnimation(){
        var tl = gsap.timeline();
        tl.from("#school", {duration:1, y:200})

        return tl;
}

var mainTL = gsap.timeline();
mainTL.add(badgeAnimation())
.add(settlementAnimation())
.add(musicAnimation())
.add(schoolAnimation())


