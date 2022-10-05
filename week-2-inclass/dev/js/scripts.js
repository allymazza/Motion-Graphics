import { gsap } from "gsap";

gsap.set("relax-btn i",{scaleX: 0, transformOrigin:"left center"});

gsap.from("#line-1",{duration:1,x:200,alpha:0});
gsap.from("#line-2",{duration:1,x:-100,alpha:0,delay:1.5});

gsap.from("#relax-btn",{duration:1,y: -100,alpha:0,delay:2.5});

let relaxBtn = document.querySelector("#relax-btn");

relaxBtn.addEventListener("mouseover", function(){

    gsap.to("#relax-btn",{duration:0.25,backgroundColor:"#5992fc"});
    gsap.to("#relax-btn",{duration:1, rotation:360});
 
 
})

relaxBtn.addEventListener("mouseout", function(){
    gsap.to("#relax-btn",{duration:0.25,backgroundColor:"#07579d"});

})