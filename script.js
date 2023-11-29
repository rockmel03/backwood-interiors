
animations()
function animations() {

gsap.from(".hero-left",{
    y : "-1000",
    duration : 1,
})
gsap.from(".hero-right",{
    y : "1000",
    duration : 1,
})

gsap.from("#services-text",{
    x : "-100%",
    scrollTrigger: {
        scroller : "body",
        trigger: "#services-text",
        // markers : true,
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
    }
})
gsap.from("#services img",{
    x : "100%",
    scrollTrigger: {
        scroller : "body",
        trigger: "#services img",
        // markers : true,
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
    }
})
gsap.from("#products-text",{
    x: "-100%",
    duration: .2,
    scrollTrigger: {
        scroller: "body",
        trigger: "#products-text",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 3,
    }
})
gsap.from("#products-img",{
    x: "100%",
    duration: .2,
    scrollTrigger: {
        scroller: "body",
        trigger: "#products-text",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 3,
    }
})
}



const container = document.getElementById("products-img");
// where "container" is the id of the container
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 100;
      e.preventDefault();
// prevenDefault() will help avoid worrisome 
// inclusion of vertical scroll 
    }
    else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });