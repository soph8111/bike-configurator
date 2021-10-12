"use strict";

document.addEventListener("DOMContentLoaded", start);

const addOnFeatures = {
  bell: false,
  basket: false,
  light: false,
  kickstand: false
};

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

  // STEL
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

  // HJUL
  // Vælg farve til hjul
  document.querySelectorAll(".wheelcolor").forEach(color => {
    // Klik på hjul
    color.addEventListener("click", event => {
      let wheelColor = event.target.style.backgroundColor;
      //Sæt wheelColor til at være det klikkede elements farve
      setWheelColor(frontWheel, rearWheel, wheelColor);
    });
  })

  // ADD ONS
  document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleAddOns));
}

function toggleAddOns(event){
  const target = event.currentTarget;
  const addOn = target.dataset.feature;
  
  // Toggle addOn true/false
  if (addOn) {
    addOnFeatures[addOn] = !addOnFeatures[addOn];
  }

  // Hvis addOn er on
  if (addOnFeatures[addOn]){
    console.log(`${addOn} is on`);

    // Marker valgte addON
    target.classList.add(".chosen");

    //Fjerne hide fra product view - så addOn vises
    document.querySelector(`[data-feature='${addOn}']`).classList.remove("hide");

    // Lav addOn element og tilføj til selected items liste
    const addOnElement = createAddOnElement(addOn);
    document.querySelector("#selected ul").append(addOnElement);

  }

  // Hvis addOn er off
  else {
    console.log(`${addOn} is off`);

    //Fjerne markering af valgte addON
    target.classList.remove(".chosen");

    //Sætte hide på product view - skjule addOn
    document.querySelector(`[data-feature='${addOn}']`).classList.add("hide");

    // Find addOn element og fjern fra selected items liste
    document.querySelector(`#selected [data-feature='${addOn}']`).remove();
  }
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

// Lav addOn element
function createAddOnElement(addOn){
  const li = document.createElement("li");
  li.dataset.feature = addOn;

  const img = document.createElement("img");
  img.src = `${addOn}.png`;

  li.append(img);

  return li;
}
