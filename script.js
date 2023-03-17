"use strict";

const shareIcon = document.querySelector(".share-icon");
const shareBox = document.querySelector(".share-box");
shareIcon.addEventListener("click", () => {
  shareBox.classList.toggle("hidden");
});
