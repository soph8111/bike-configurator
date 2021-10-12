"use strict";

document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("cykelconfiguator.svg");
  let mySvg = await response.text();
  document.querySelector("#product-preview").innerHTML = mySvg;
  chooseColor();
}

function chooseColor() {
  const frontWheel = document.querySelector("#forhjul");
  const rearWheel = document.querySelector("#baghjul");
  const frame = document.querySelector("#stel");
  const saddle1 = document.querySelector("#saddel_et");
  const saddle2 = document.querySelector("#saddel_to");
  const handle1 = document.querySelector("#styr_et");
  const handle2 = document.querySelector("#styr_to");

  document.querySelectorAll(".bikecolor").forEach((color) => {
    let bikeColor = color.style.backgroundColor;
    color.addEventListener("click", setBikeColor(color, bikeColor));
  });
}

function setBikeColor(color, bikeColor) {
  color.style.backgroundColor = bikeColor;
}
