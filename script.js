"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer2 = document.querySelector(".buttons2");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const cartaButton = document.querySelector(".btn--carta");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

cartaButton.classList.add("hidden");

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    resizeNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "CHIII TE AMOOO";
  buttonsContainer.classList.add("hidden");
  cartaButton.classList.remove("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function resizeNoButton() {
  const computedStyle2 = window.getComputedStyle(noButton);
  const fontSize2 = parseFloat(computedStyle2.getPropertyValue("font-size"));
  const newFontSize2 = fontSize2 / 1.6;

  noButton.style.fontSize = `${newFontSize2}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "SEGURA????",
    "Nathy por favooor",
    "Es enserio Nath :(?",
    "Se me va a romper el corazoncito :'v",
    "Voy a llorar Nath...",
    ">:'v",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.png`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
