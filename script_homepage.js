"use strict";

window.addEventListener("DOMContenLoaded", start());

// Inspired by: https://codepen.io/GreenSock/pen/gOabMXv

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".frame",
      start: "-100px 35%",
      end: "70% 65%",
      scrub: 1,
      // markers: true,
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

  /*  steps(); */

  const properties = {
    duration: 800,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-out",
  };

  const keyframes = [{ transform: `translate(0, 1vw)` }, { tranform: `transform: translate(0,0)` }];

  const arrow = document.querySelector("#arrow");
  const animation = arrow.animate(keyframes, properties);

  arrow.addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: "#steps" });
  });
}

/* function steps() {
  const left = gsap.utils.toArray(".left");
  left.forEach((box) => {
    gsap.from(box, {
      x: -300,
      scrollTrigger: {
        trigger: box,
        scrub: true,
      },
    });
  });
  const right = gsap.utils.toArray(".right");
  console.log(window.innerWidth);
  right.forEach((box) => {
    gsap.from(box, {
      x: window.innerWidth - 1000,
      scrollTrigger: {
        trigger: box,
        scrub: true,
      },
    });
  });
} */
