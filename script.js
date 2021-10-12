"use strict";

document.addEventListener("DOMContentLoaded", start);

const saddle1 = document.querySelector("#saddel_et path");
const saddle2 = document.querySelector("#saddel_to path");
const handle1 = document.querySelector("#styr_et path");
const handle2 = document.querySelector("#styr_to path");

async function start() {
  let response = await fetch("cykelconfiguator.svg");
  let mySvg = await response.text();
  document.querySelector("#product-preview").innerHTML = mySvg;
  chooseOptions();
}

function chooseOptions(){
  const frame = document.querySelector("#stel path");
  const frontWheel = document.querySelector("#forhjul path");
  const rearWheel = document.querySelector("#baghjul path");

  document.querySelectorAll(".bikecolor").forEach(color => {
    color.addEventListener("click", event => {
      let bikeColor = event.target.style.backgroundColor;
      setBikeColor(frame, bikeColor);
    });
  })

  document.querySelectorAll(".wheelcolor").forEach(color => {
    color.addEventListener("click", event => {
      let wheelColor = event.target.style.backgroundColor;
      setWheelColor(frontWheel, rearWheel, wheelColor);
    });
  })
}

function setBikeColor(frame, bikeColor){
  frame.style.fill = bikeColor;
}

function setWheelColor(frontWheel, rearWheel, wheelColor){
  frontWheel.style.fill = wheelColor;
  rearWheel.style.fill = wheelColor;
}

