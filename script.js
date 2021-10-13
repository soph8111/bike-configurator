"use strict";

document.addEventListener("DOMContentLoaded", start);

const addOnFeatures = {
  bell: false,
  basket: false,
  light: false,
  kickstand: false
};

const saddleFeatures = {
  saddle1: true,
  saddle2: false
};

const handleFeatures = {
  handle1: true,
  handle2: false
};


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
  const saddle1 = document.querySelector("#saddel_et path");
  const saddle2 = document.querySelector("#saddel_to path");
  const handle1 = document.querySelector("#styr_et path");
  const handle2 = document.querySelector("#styr_to path");

  // Sætter start-farver for cykel
  setBikeColor(frame, "#D6E5E8");
  setWheelColor(frontWheel, rearWheel, "#ffffff");
  setLeatherColor(saddle1, saddle2, handle1, handle2, "#b14e2c");

  // Vælg farve til stellet
  document.querySelectorAll(".bikecolor").forEach(color => {
    // Klik på farve
    color.addEventListener("click", event => {
      //Sæt bikeColor til at være det klikkede elements farve
      let bikeColor = event.target.style.backgroundColor;
      setBikeColor(frame, bikeColor);
    });
  });

  // Vælg saddel
  document.querySelectorAll(".saddle_option").forEach(option => option.addEventListener("click", toggleSaddle));

  // Vælg håndtag
  document.querySelectorAll(".handle_option").forEach(option => option.addEventListener("click", toggelHandle));
    

   //Vælg farve på håndtag og sadel
   document.querySelectorAll(".leathercolor").forEach(color => {
    // Klik på læder
    color.addEventListener("click", event => {
      let leatherColor = event.target.style.backgroundColor;
      //Sæt wheelColor til at være det klikkede elements farve
      setLeatherColor(saddle1, saddle2, handle1, handle2, leatherColor);
    });
});

  // HJUL
  // Vælg farve til hjul
  document.querySelectorAll(".wheelcolor").forEach(color => {
    // Klik på hjul
    color.addEventListener("click", event => {
      let wheelColor = event.target.style.backgroundColor;
      //Sæt wheelColor til at være det klikkede elements farve
      setWheelColor(frontWheel, rearWheel, wheelColor);
    });
  });

  // ADD ONS
  document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleAddOns));
}

function toggleSaddle(event){
  const target = event.currentTarget;
  const saddle = target.dataset.feature;

   // Toggle saddle true/false
   if (saddle) {
    saddleFeatures[saddle] = !saddleFeatures[saddle];
  }

  // Hvis saddel er on
  if (saddleFeatures[saddle]){
    console.log(`${saddle} is on`);

    // Marker valgte saddel
    target.classList.add("chosen");

    //Fjern anden valgt saddel

    //Fjerne hide fra product view - så addOn vises
    document.querySelector(`[data-feature='${saddle}']`).classList.remove("hide");

    // Sæt hide på anden saddel i productview

    // Lav addOn element og tilføj til selected items liste
    const saddleElement = createAddOnElement(saddle);
    document.querySelector("#selected ul").append(saddleElement);

    // Animation på tilføj til selected items
    animateAdd(target, saddleElement);
  }

  // Hvis saddel er off
  else {
    console.log(`${saddle} is off`);

    //Fjerne markering af valgte addON
    target.classList.remove("chosen");

    //Sætte hide på product view - skjule addOn
    document.querySelector(`[data-feature='${saddle}']`).classList.add("hide");

    // Find addOn element og fjern fra selected items liste
    const saddleElement = document.querySelector(`#selected [data-feature='${saddle}']`);

    // Animation på fjern fra selected items
    animateRemove(target, saddleElement);
  }
}

function toggelHandle(event){
  const target = event.currentTarget;
  const handle = target.dataset.feature;

   // Toggle saddle true/false
   if (handle) {
    handleFeatures[handle] = !handleFeatures[handle];
  }

  // Hvis saddel er on
  if (handleFeatures[handle]){
    console.log(`${handle} is on`);

    // Marker valgte saddel
    target.classList.add("chosen");

    //Fjern anden valgt saddel

    //Fjerne hide fra product view - så addOn vises
    document.querySelector(`[data-feature='${handle}']`).classList.remove("hide");

    // Sæt hide på anden saddel i productview

    // Lav addOn element og tilføj til selected items liste
    const handleElement = createAddOnElement(handle);
    document.querySelector("#selected ul").append(handleElement);

    // Animation på tilføj til selected items
    animateAdd(target, handleElement);
  }

  // Hvis saddel er off
  else {
    console.log(`${handle} is off`);

    //Fjerne markering af valgte addON
    target.classList.remove("chosen");

    //Sætte hide på product view - skjule addOn
    document.querySelector(`[data-feature='${handle}']`).classList.add("hide");

    // Find addOn element og fjern fra selected items liste
    const handleElement = document.querySelector(`#selected [data-feature='${handle}']`);

    // Animation på fjern fra selected items
    animateRemove(target, handleElement);
    
  }
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
    target.classList.add("chosen");

    //Fjerne hide fra product view - så addOn vises
    document.querySelector(`[data-feature='${addOn}']`).classList.remove("hide");

    // Lav addOn element og tilføj til selected items liste
    const addOnElement = createAddOnElement(addOn);
    document.querySelector("#selected ul").append(addOnElement);

    // Animation på tilføj til selected items
    animateAdd(target, addOnElement);
  }

  // Hvis addOn er off
  else {
    console.log(`${addOn} is off`);

    //Fjerne markering af valgte addON
    target.classList.remove("chosen");

    //Sætte hide på product view - skjule addOn
    document.querySelector(`[data-feature='${addOn}']`).classList.add("hide");

    // Find addOn element og fjern fra selected items liste
    const addOnElement = document.querySelector(`#selected [data-feature='${addOn}']`);

    // Animation på fjern fra selected items
    animateRemove(target, addOnElement);
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

//Farver styr + sadel efter hvilken læderfarver der er klikket på
function setLeatherColor(saddle1, saddle2, handle1, handle2, leatherColor) {
  saddle1.style.fill = leatherColor;
  saddle2.style.fill = leatherColor;
  handle1.style.fill = leatherColor;
  handle2.style.fill = leatherColor;
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
  
// Animation

function animateAdd(target, featureElement){
  // create FLIP-animation to animate featureElement from img in target, to its intended position. Do it with normal animation or transition class!
    const clickFrame = target.getBoundingClientRect();
    const addedFrame = featureElement.getBoundingClientRect();

    const deltaX = clickFrame.left - addedFrame.left;
    const deltaY = clickFrame.top - addedFrame.top;
    // const deltaWidth = clickFrame.width / addedFrame.width;
    // const deltaHeight = clickFrame.height / addedFrame.height;

    featureElement.animate(
      [
        { transformOrigin: "top left", transform: `translateX(${deltaX}px) translateY(${deltaY}px)` },
        { transformOrigin: "top left", transfrom: "none" }
      ],
      {
        duration: 1000,
        easing: "ease-in-out"
      }
    );
}

function animateRemove(target, featureElement){
  // - create FLIP-animation to animate featureElement to img in target
  const clickFrame = target.getBoundingClientRect();
  const addedFrame = featureElement.getBoundingClientRect();

  const deltaX = clickFrame.left - addedFrame.left;
  const deltaY = clickFrame.top - addedFrame.top;
  console.log(deltaY);

  const remove = featureElement.animate(
    [
      { transformOrigin: "top left", transfrom: "none" },
      { transformOrigin: "top left", transform: `translateX(${deltaX}px) translateY(${deltaY}px)` }
    ],
    {
      duration: 1000,
      easing: "ease-in-out"
    }
  );

  // - when animation is complete, remove featureElement from the DOM
  remove.onfinish = () => {
    featureElement.remove();
  }
}
