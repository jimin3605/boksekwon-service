const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots button");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

prev.addEventListener("click", () => {
  let index = currentIndex - 1;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
});

next.addEventListener("click", () => {
  let index = currentIndex + 1;
  if (index >= slides.length) index = 0;
  showSlide(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

setInterval(() => {
  let index = currentIndex + 1;
  if (index >= slides.length) index = 0;
  showSlide(index);
}, 5000);
