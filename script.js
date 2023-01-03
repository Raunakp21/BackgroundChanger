"use strict";

const body = document.querySelector("body");
const changeButton = document.querySelector("#change");

changeButton.addEventListener("click", function () {
  const colorStr = `rgb(${getRandomInt(0, 256)},${getRandomInt(
    0,
    256
  )},${getRandomInt(0, 256)})`;
  body.style.background = colorStr;
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
