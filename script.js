"use strict";

document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("cykelconfiguator.svg");
  let mySvg = await response.text();
  document.querySelector("section").innerHTML = mySvg;
}
