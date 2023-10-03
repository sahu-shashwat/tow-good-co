
function locomotiveAnimaton(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
locomotiveAnimaton()

function navbarAnimation(){
    gsap.to("#nav1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });
    gsap.to("#nav2 #links", {
        transform: "translateY(-100%)",
        opacity:0,
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });
}
navbarAnimation()

function videoconanimation(){
    var videocon=document.querySelector("#video-container")
    var playbtn=document.querySelector("#play")
    
    videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            scale:1,
            opacity:1
        })
    })
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        })
    })
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
           left:dets.x-60,
           top:dets.y+190
        })
    })
}
videoconanimation()


function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
}
loadinganimation()


function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#corsor",{
            left:dets.x,
            top:dets.y
        })
    })
    cosorcolor=document.querySelector("#corsor")
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
          // cosorcolor.style.backgroundColor="red"
          gsap.to("#corsor", {
            transform: "translate(-50%,-50%) scale(1)",
          });
        });
        elem.addEventListener("mouseleave", function () {
          gsap.to("#corsor", {
            transform: "translate(-50%,-50%) scale(0)",
          });
        });
      });
}
cursorAnimation()


innernav= document.querySelector(".elem .dets")

innernav.addEventListener("mouseenter",function(){
   
})
