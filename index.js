
for(var i=0; i<7; i++){
  // used for button clicking detection
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var character= this.innerHTML;
    makeSound(character);
    buttonAnimation(character);
  });
}
 // used for keyboard key detection
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

// sound making function
function makeSound(character){
  switch (character) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
  }
};
function buttonAnimation(key){
  var ourButton=document.querySelector("."+key);
  ourButton.classList.add("pressed");
  setTimeout(function(){
    ourButton.classList.remove("pressed");
  }, 100);
}
