import { gsap } from "gsap";

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#line-1",{duration:1,x:200,alpha:0})
        .from("#line-2",{duration:1,x:-100,alpha:0,delay:1.5})
        .from("#relax-btn",{duration:1,y: -100,alpha:0,delay:2.5})

    return tl;

}

var mainTL = gsap.timeline();
mainTL.add(heroAnimation());

var heroSizeNumber = 1;
let mm= gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
    heroSizeNumber = 2;
})

mm.add("(min-width: 767px)", () => {
    heroSizeNumber = 1.25;
})

let relaxBtn = document.querySelector("#relax-btn");

var buttonAnimation = gsap.timeline({paused:true})
    buttonAnimation.to("#relax-btn",{duration:0.25,backgroundColor:"#5992fc"})
        .to("#relax-btn",{duration:1, rotation:360})
        .to("#relax-btn",{duration:0.25,backgroundColor:"#07579d"});



relaxBtn.addEventListener("mouseover", function(){
    buttonAnimation.play();

})

relaxBtn.addEventListener("mouseout", function(){
      buttonAnimation.reverse();

})