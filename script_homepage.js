// Inspired by: https://codepen.io/GreenSock/pen/gOabMXv

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".frame",
      start: "20vw 35%",
      end: "bottom 85%",
      scrub: true,
      pin: true,
      markers: true,
    },
  })

  .from(".base", { y: innerHeight * 1.5 })
  .from(".saddle", { y: innerHeight * 1.5 })
  .from(".handle", { y: innerHeight * 1.5 })
  .from(".wheel1", { y: innerHeight * 1.5 })
  .from(".wheel2", { y: innerHeight * 1.5 })
  .from(".bell", { y: innerHeight * 1.5 })
  .from(".basket", { y: innerHeight * 1.5 })
  .from(".kickstand", { y: innerHeight * 1.5 });
