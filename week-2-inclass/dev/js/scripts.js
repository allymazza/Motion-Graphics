
import { gsap } from "gsap";

// Sets
gsap.set("#hero h1 span",{alpha:0.25})


gsap.from("#line-1",{duration:1,alpha:0, y:-100});
gsap.from("#line-2",{duration:2,alpha:0, y:-100, delay:0.5});
gsap.from("#relax-btn",{duration:1,y:100, alpha:0, delay:0.5});
gsap.from("#relax-btn i",{duration:1,rotation:90, alpha:0, delay:0.75, transformOrigin: "left bottom"});

let relaxBtn = document.querySelector("#relax-btn");

relaxBtn.addEventListener("mouseover",function(){
    gsap.to("#relax-btn",{duration:0.25,scale:2, backgroundColor:"#07579d" });
    gsap.to("#line-1",{duration:0.25, alpha:0, y:50});
    gsap.to("#line-2",{duration:0.25, alpha:0, y:20});
    gsap.to("#relax-btn i",{duration:0.25, rotateY:360, delay:0.15});
})

relaxBtn.addEventListener("mouseout",function(){
    gsap.to("#relax-btn",{duration: 1, scale:1, backgroundColor: "#0baada"});
    gsap.to("#line-1",{duration:0.5, alpha:1, y:0});
    gsap.to("#line-2",{duration:0.5, alpha:1, y:0});
    gsap.to("#relax-btn i",{duration:0.5, rotateY:-360});
})