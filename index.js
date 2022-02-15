var drumtotal = document.querySelectorAll("button").length;

for (var i = 0; i < drumtotal; i++){
  document.querySelectorAll("button")[i].addEventListener("click", addsound);

  function addsound(){
    var btnclick = this.innerHTML;
    makesound (btnclick);
    BtnAnime(btnclick);
    
  }
}

document.addEventListener("keydown", function(event){
  makesound(event.key);
  BtnAnime(event.key);
});

function makesound (key){
  switch (key) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;
      case "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;
      case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;
      case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;

      default:

    }
}

function BtnAnime(Currentpress){
  var active = document.querySelector("." + Currentpress);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed");
  }, 200);
}