"use strict";

window.addEventListener("DOMContenLoaded", start());

// Inspired by: https://codepen.io/GreenSock/pen/gOabMXv

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".frame",
      start: "top 35%",
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

function start() {
  console.log("start");
  const properties = {
    duration: 800,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-out",
  };

  const keyframes = [{ transform: `translate(0, 1vw)` }, { tranform: `transform: translate(0,0)` }];

  const arrow = document.querySelector("#arrow");
  const animation = arrow.animate(keyframes, properties);
}
