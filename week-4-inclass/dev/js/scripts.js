import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#hero", {duration: 2, opacity: 0}, {opacity: 1, y: 0});

    return tl;
}
        


function historyAnimation(){
    var tl = gsap.timeline({scrollTrigger:{ 
        trigger: "#history", 
        scrub: true, 
        start:"top 60%", 
        end:"bottom bottom"}});
    

    tl.from("#history-first h1", 
            {duration:2,
            x:200,
            alpha:0})
        .from("#history-first h4", 
            {duration:1,
            x:-200,
            alpha:0})
        .from("history-first img",
            {duration:1,
            y:-200,
            rotation:360,
            alpha:0})

         .from("#history-middle", 
         {duration:1,
            y:200,
            alpha:0})

        .from("history-last", 
        {duration:1,
            y:-200, 
            alpha:0});

    return tl;
}

function skillsAnimation(){
    var tl = gsap.timeline({scrollTrigger:{ 
        trigger: "#skills", 
        scrub: true, 
        tart:"top 70%", 
        end:"bottom 30%"}});

    tl.from("#skills-content h1", 
        {duration:1, 
        y:-200, 
         alpha:0})
         .from("#skills-content h4", 
            {scale:3, 
            rotation:360,
            alpha:0})
        .from("#skills-content p", 
            {duration:1, 
            y:200,
            alpha:0})
        .from("#emotion", 
            {duration:1, 
            x:-200, 
            alpha:0})
        .from("#learning", 
            {duration:1, 
            x:200, 
            alpha:0})
        .from("#math", 
            {duration:1, 
            x:-200, 
            alpha:0})
        .from("#skills aside div",
        {duration: 1,
        scale: 3,
        alpha:0})

     return tl;

}

function hero2Animation(){
    var tl = gsap.timeline({scrollTrigger:{ 
        trigger: "#hero-2", 
        scrub: true, 
        start:"top 70%", 
        end:"bottom 10%",
        markers: false}});
    tl.from("#hero-2",
        {duration:1,
            clipPath:"inset(0 60%)"})

    return tl;
 }

 function skynetAnimation(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger: "#skynet",
        scrub: true, 
        start:"top 40%", 
        end:"bottom 10%",
        markers: false}});

    tl.from("gallery-7", {
        duration:1,
        scale:3,
        rotation:360,
        alpha:0})
        .from("gallery-1", {
            duration:1,
            x: -200,
            alpha:0})
         .from("gallery-2", {
            duration:1,
            x: 200,
            alpha:0})
        .from("gallery-3", {
            duration:1,
            y: -200,
            alpha:0})
        .from("gallery-4", {
            duration:1,
            x: -200,
            alpha:0})
        .from("gallery-5", {
            duration:1,
            y: 200,
            alpha:0})
        .from("gallery-6", {
            duration:1,
            x: 200,
            alpha:0})

    return tl;
 }

var mainTimeline = gsap.timeline();
mainTimeline.add(heroAnimation())
    .add(historyAnimation())
    .add(skillsAnimation())
    .add(hero2Animation())
    .add(skynetAnimation())
