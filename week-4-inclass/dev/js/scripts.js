import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#hero", {duration: 2, opacity: 0}, {opacity: 1, y: 0});

    return tl;
}
        
function historyAnimation(){
    var tl = gsap.timeline();
    

    tl.from("#history-first", {duration:1,
            x:200,
            alpha:0, 
            scrollTrigger:{ 
                trigger: "#history-first", 
                scrub: true, 
                start:"top 70%", 
                end:"bottom 10%"}})

         .from("#history-middle", 
         {duration:1,
            y:200,
            alpha:0, 
            scrollTrigger:{ 
                trigger: "#history-middle", 
                scrub: true, 
                start:"top 90%", 
                end:"bottom 10%"}})

        .from("history-last", 
        {duration:0.5,
            y:-200, 
            alpha:0, 
            transformOrigin: "left bottom", 
            scrollTrigger:{
                 trigger: "#history-last", 
                scrub: true, 
                start:"top 70%", 
                end:"bottom 10%"}});

    return tl;
}

function skillsAnimation(){
    var tl = gsap.timeline();
    tl.from("#emotion", 
        {duration:1, 
        x:-200, 
        alpha:0, 
        scrollTrigger:{ 
            trigger: "#emotion", 
            scrub: true, 
            tart:"top 70%", 
            end:"bottom 10%"}})
        .from("#learning", {duration:1, 
            x:200, 
            alpha:0, 
            scrollTrigger:{ 
                trigger: "#learning", 
                scrub: true, 
                start:"top 70%", 
                end:"bottom 10%"}})
        .from("#math", 
            {duration:1, 
            x:-200, 
            alpha:0, 
            scrollTrigger:{ 
                trigger: "#math", 
                scrub: true, 
                start:"top 70%", 
                end:"bottom 10%"}})
        .from("#aside",
        {duration: 1,
        scale: 3,
        alpha:0,
        scrollTrigger:{ 
            trigger: "#aside", 
            scrub: true, 
            tart:"top 70%", 
            end:"bottom 10%"}})

     return tl;

}

function hero2Animation(){
    var tl = gsap.timeline();
    tl.from("#hero-2",
        {duration:1,
            clipPath:"inset(0 60%)",
        scrollTrigger:{ 
            trigger: "#math", 
            scrub: true, 
            start:"top 70%", 
            end:"bottom 10%",
            markers: false}})

    return tl;
 }

 function skynetAnimation(){
    var tl = gsap.timeline();
    tl.from("gallery-1", {
        duration:1,
        x: -200,
        alpha:0,
        scrollTrigger:{
            trigger: "gallery-1",
            scrub: true, 
            start:"top 50%", 
            end:"bottom 10%",
            markers: false}})
         .from("gallery-2", {
            duration:1,
            x: 200,
            alpha:0,
                scrollTrigger:{
                    trigger: "gallery-2",
                    scrub: true, 
                    start:"top 50%", 
                    end:"bottom 10%",
                    markers: false}})
        .from("gallery-3", {
            duration:1,
            y: -200,
            alpha:0,
                scrollTrigger:{
                    trigger: "gallery-3",
                    scrub: true, 
                    start:"top 50%", 
                    end:"bottom 10%",
                    markers: true}})
        .from("gallery-4", {
            duration:1,
            x: -200,
            alpha:0,
                scrollTrigger:{
                    trigger: "gallery-4",
                    scrub: true, 
                    start:"top 50%", 
                    end:"bottom 10%",
                    markers: true}})
        .from("gallery-5", {
            duration:1,
            y: 200,
            alpha:0,
                scrollTrigger:{
                    trigger: "gallery-5",
                    scrub: true, 
                    start:"top 50%", 
                    end:"bottom 10%",
                    markers: true}})
        
        
                
        

    return tl;
 }

var mainTimeline = gsap.timeline();
mainTimeline.add(heroAnimation())
    .add(historyAnimation())
    .add(skillsAnimation())
    .add(hero2Animation())
    .add(skynetAnimation())
