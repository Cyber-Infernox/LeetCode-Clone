function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progressBar").style.width = `${value}%`;
}

const pBar = document.querySelector(".prog");
setTimeout(() => {
  updateProgressBar(pBar, 77.8);
}, 1000);

function updateProgressBar1(progressBar1, value1) {
  value1 = Math.round(value1);
  progressBar1.querySelector(".progressBar1").style.width = `${value1}%`;
}

const pBar1 = document.querySelector(".prog1");
setTimeout(() => {
  updateProgressBar1(pBar1, 52.8);
}, 1000);

function updateProgressBar2(progressBar2, value2) {
  value2 = Math.round(value2);
  progressBar2.querySelector(".progressBar2").style.width = `${value2}%`;
}

const pBar2 = document.querySelector(".prog2");
setTimeout(() => {
  updateProgressBar2(pBar2, 46.8);
}, 1000);
