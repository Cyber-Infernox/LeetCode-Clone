// console.log("This Carousel Tutorial");

const pack = document.querySelector(".pic");
const pics = Array.from(pack.children);

// console.log(pack);
// console.log(pack.children);

const nxt = document.querySelector("#right");
const pre = document.querySelector("#left");

const Width = pics[0].getBoundingClientRect().width;
// console.log(Width);

// Arrange the pics next to one another
// pics[0].style.left = Width * 0 + 'px';
// pics[1].style.left = Width * 1 + 'px';
// pics[2].style.left = Width * 2 + 'px';

// Using Loops
pics.forEach((element, index) => {
  element.style.left = Width * index + "px";
});

// When I click left, move slides to the left
nxt.addEventListener("click", (e) => {
  const currSlide = pack.querySelector(".currSlide");
  // console.log(currSlide);
  const nxtSlide = currSlide.nextElementSibling;
  const moveBy = nxtSlide.style.left;
  // move to next slide
  pack.style.transform = "translateX(-" + moveBy + ")";
  currSlide.classList.remove("currSlide");
  nxtSlide.classList.add("currSlide");
});
// When I click right, move slides to the right
pre.addEventListener("click", (e) => {
  const currSlide = pack.querySelector(".currSlide");
  // console.log(currSlide);
  const nxtSlide = currSlide.previousElementSibling;
  const moveBy = nxtSlide.style.left;
  // move to next slide
  pack.style.transform = "translateX(-" + moveBy + ")";
  currSlide.classList.remove("currSlide");
  nxtSlide.classList.add("currSlide");
});

// Second Part
const pack1 = document.querySelector(".pic1");
const pics1 = Array.from(pack1.children);

const nxt1 = document.querySelector("#righte");
const pre2 = document.querySelector("#lefte");

const Width1 = pics[0].getBoundingClientRect().width;

pics1.forEach((element, index) => {
  element.style.left = Width1 * index + "px";
});

nxt1.addEventListener("click", (e) => {
  const currSlide = pack.querySelector(".currSlide");
  const nxtSlide = currSlide.nextElementSibling;
  const moveBy = nxtSlide.style.left;
  // move to next slide
  pack1.style.transform = "translateX(-" + moveBy + ")";
  currSlide.classList.remove("currSlide");
  nxtSlide.classList.add("currSlide");
});
// When I click right, move slides to the right
pre2.addEventListener("click", (e) => {
  const currSlide = pack.querySelector(".currSlide");
  const nxtSlide = currSlide.previousElementSibling;
  const moveBy = nxtSlide.style.left;
  // move to next slide
  pack1.style.transform = "translateX(-" + moveBy + ")";
  currSlide.classList.remove("currSlide");
  nxtSlide.classList.add("currSlide");
});
