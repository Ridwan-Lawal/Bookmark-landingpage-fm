"use strict";

// const nav = document.querySelector(".nav-bar");
const featuresType = document.querySelector(".features-type");

// // /////////////////// toggle menu
// const toggle = function (e, classname) {
//   e.target
//     .closest(".nav-container")
//     .nextElementSibling.classList.toggle(classname);
// };

// nav.addEventListener("click", (e) => {
//   if (e.target.closest(".hamburger-box")) {
//     e.target.closest(".hamburger").classList.toggle("is-active");
//     toggle(e, "w-0");
//     toggle(e, "w-full");
//     toggle(e, "px-8");
//     toggle(e, "overflow-hidden");
//     document.querySelector(".logo").src = `./images/logo-bookmark.svg`;
//   }
//   if (e.target.closest(".is-active")) {
//     document.querySelector(".logo").src = `/images/logo2.svg`;
//   }
// });

//######### features type
// const featureLinks = document.querySelectorAll(".feature-link");
// const featuresTabs = document.querySelectorAll(".tabs");

// featuresType.addEventListener("click", (e) => {
//   if (e.target.classList.contains("feature-link")) {
//     e.preventDefault();
//     featureLinks.forEach((link) => link.classList.remove("border-b-4"));
//     featuresTabs.forEach((tab) => tab.classList.add("hidden"));
//     e.target.classList.add("border-b-4");
//     const attrb = e.target.getAttribute("href");
//     const eachTab = document.querySelector(attrb);
//     eachTab.classList.remove("hidden");
//   }
// });

// =============== FAQ SECTION ============

const faqSection = document.querySelector(".faq-section");

const toggleAnswers = function (e, className) {
  e.target.closest(".questions").nextElementSibling.classList.toggle(className);
};
faqSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("arrow")) {
    e.target.classList.toggle("rotate-180");
    toggleAnswers(e, "h-0");
    toggleAnswers(e, "mt-7");
    toggleAnswers(e, "h-full");
  }
});
