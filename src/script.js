"use strict";

const nav = document.querySelector(".nav-bar");

// /////////////////// toggle menu
const toggle = function (e, classname) {
  e.target
    .closest(".nav-container")
    .nextElementSibling.classList.toggle(classname);
};

nav.addEventListener("click", (e) => {
  if (e.target.closest(".hamburger-box")) {
    e.target.closest(".hamburger").classList.toggle("is-active");
    toggle(e, "w-0");
    toggle(e, "w-full");
    toggle(e, "px-8");
    toggle(e, "overflow-hidden");
    document.querySelector(".logo").src = `./images/logo-bookmark.svg`;
  }
  if (e.target.closest(".is-active")) {
    document.querySelector(".logo").src = `/images/logo2.svg`;
  }
});
