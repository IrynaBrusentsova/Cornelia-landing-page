"use strict";

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  observer.observe(elm);
}

document.getElementById("btnChoose").onclick = function () {
  window.location.href = "#banner";
};

console.log(document.getElementById("btnChoose"));

console.log(document.getElementById("btnEachDetail"));

console.log(document.getElementById("bthUnicornExit"));
