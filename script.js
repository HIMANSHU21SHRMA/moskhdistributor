
gsap.to("#nav", {
  backgroundColor: "#fff",
  TextColor: "#fff",
  
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -60%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#fff",

  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -50%",
    end: "top -70%",
    scrub: 2,
  },
});


