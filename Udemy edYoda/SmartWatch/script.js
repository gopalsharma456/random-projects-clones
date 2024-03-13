let timeBlock = document.getElementById("timeBlock");
let timeBtn = document.getElementById("time");
let hrBtn = document.getElementById("hRate");
let hrBlock = document.getElementById("HRBlock");
let HeartRate = document.getElementById("HeartRate");

setInterval(function () {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let second = date.getSeconds();
  if (second < 10) {
    second = "0" + second;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  timeBlock.textContent = `${hrs}:${mins}:${second}`;
}, 1000);

hrBtn.addEventListener("click", function () {
  timeBlock.style.display = "none";
  hrBlock.style.display = "inline-block";
  setInterval(() => {
    let randomNumber = Math.floor(Math.random() * (80 - 75) + 75);
    HeartRate.textContent = randomNumber;
  }, 2000);
});


timeBtn.addEventListener("click", function () {
  timeBlock.style.display = "inline-block";
  hrBlock.style.display = "none";
});

blue.addEventListener("click", function () {
  color.setAttribute("src", "./images/blue.png");
});

black.addEventListener("click", function () {
  color.setAttribute("src", "./images/black.png");
});

pink.addEventListener("click", function () {
  color.setAttribute("src", "./images/pink.png");
});

purple.addEventListener("click", function () {
  color.setAttribute("src", "./images/purple.png");
});

red.addEventListener("click", function () {
  color.setAttribute("src", "./images/red.png");
});
