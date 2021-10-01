let section = [
  document.querySelector(".about-section"),
  document.querySelector(".motto-section"),
];

let screenPosition = window.innerHeight / 7;
function visibleOnScroll() {
  intro1 = section[0].getBoundingClientRect().top;
  intro2 = section[1].getBoundingClientRect().top;
  console.log(intro1);
  if (intro1 < screenPosition) {
    section[0].classList.add("visible-on-scroll");
  }

  if (intro2 < screenPosition) {
    section[1].classList.add("visible-on-scroll");
  }

  console.log(intro2, intro1);
}

window.addEventListener("mouseover", visibleOnScroll);
window.addEventListener("mouseup", visibleOnScroll);
