import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var heroTL = gsap.timeline({paused:true});
    heroTL.to("#hero", {duration: 2, opacity: 0}, {opacity: 1, y: 0});



function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#hero", {duration: 2, opacity: 0}, {opacity: 1, y: 0});

    return tl;
}
        
function historyAnimation(){
    var tl = gsap.timeline();
    tl.from("#history-first", {duration:1,x:200,alpha:0, scrollTrigger:{ trigger: "#history-first"}})
        .from("#history-middle", {duration:1,y:200,alpha:0, scrollTrigger:{ trigger: "#history-middle"}})
        .from("history-last", {duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom", scrollTrigger:{ trigger: "#history-last"}});

    return tl;
}

// function skillsAnimation(){
//     var tl = gsap.timeline();
//     tl.from("#emotion", {duration:1, x:200, alpha:0, scrollTrigger: { trigger: "#emotion"}})

var mainTimeline = gsap.timeline();
mainTimeline.add(heroAnimation())
    .add(historyAnimation())
    // .add(skillsAnimation())
    // .add(galleryAnimation())
