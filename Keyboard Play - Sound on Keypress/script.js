var buttons = document.querySelectorAll(".key").length;

for (var i = 0; i < buttons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    var myDiv = this.firstElementChild.innerHTML;
    
    console.log(myDiv)
    audioPlay(myDiv);
    buttonAnimation(myDiv);
  });
}

document.body.addEventListener("keydown", function (e) {
  audioPlay(e.key);
  buttonAnimation(e.key);
});

function audioPlay(key) {
  switch (key.toLowerCase()) {
    case "a":
      var clap = new Audio("Audio/clap.wav");
      clap.play();
      break;
    case "s":
      var clap = new Audio("Audio/hihat.wav");
      clap.play();
      break;
    case "d":
      var clap = new Audio("Audio/kick.wav");
      clap.play();
      break;

    case "f":
      var clap = new Audio("Audio/openhat.wav");
      clap.play();
      break;
    case "g":
      var clap = new Audio("Audio/boom.wav");
      clap.play();
      break;
    case "h":
      var clap = new Audio("Audio/ride.wav");
      clap.play();
      break;
    case "j":
      var clap = new Audio("Audio/snare.wav");
      clap.play();
      break;
    case "k":
      var clap = new Audio("Audio/tom.wav");
      clap.play();
      break;
    case "l":
      var clap = new Audio("Audio/tink.wav");
      clap.play();
      break;
    default: return ;
  }
}

function buttonAnimation(key) {
  try {
    var activeKey = document.querySelector("." + key.toLowerCase());
  
    activeKey.classList.add("pressed");
    setTimeout(() => {
      activeKey.classList.remove("pressed");
    }, 100);
    
  } catch (error) {
    return
  }
}
