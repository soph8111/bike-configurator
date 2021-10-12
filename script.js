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
  // Konstanter for ting der kan vælges farve på (stellet, bagjhul/forhjul)
  const frame = document.querySelector("#stel path");
  const frontWheel = document.querySelector("#forhjul path");
  const rearWheel = document.querySelector("#baghjul path");

  // Vælg farve til stellet
  document.querySelectorAll(".bikecolor").forEach(color => {
    // Klik på farve
    color.addEventListener("click", event => {
      //Sæt bikeColor til at være det klikkede elements farve
      let bikeColor = event.target.style.backgroundColor;
      setBikeColor(frame, bikeColor);
    });
  })

  // Vælg farve til hjul
  document.querySelectorAll(".wheelcolor").forEach(color => {
    // Klik på hjul
    color.addEventListener("click", event => {
      let wheelColor = event.target.style.backgroundColor;
      //Sæt wheelColor til at være det klikkede elements farve
      setWheelColor(frontWheel, rearWheel, wheelColor);
    });
  })
}

// Farver stellet efter hvilken farve der er klikket på
function setBikeColor(frame, bikeColor){
  frame.style.fill = bikeColor;
}

// Farver hjulene efter hvilken farve der er klikket på 
function setWheelColor(frontWheel, rearWheel, wheelColor){
  frontWheel.style.fill = wheelColor;
  rearWheel.style.fill = wheelColor;
}

