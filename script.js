let cont = document.querySelector("#outer-container");
let character = document.querySelector("#character_spritesheet");
let character2 = document.querySelector("#character");

userHasScrolled = false;
lastScrollTop = 0;

let layer = document.querySelectorAll(".layer");

cont.onscroll = function(){
    
    let X = cont.scrollTop;

    layer[0].style.left = X/4 + "px";
    layer[1].style.left = X/8 + "px";
    layer[2].style.left = X/1.5 + "px";


// //////////////////////////////////////////////////////////////////////// player movement
userHasScrolled = true;
  setTimeout(() => {
    userHasScrolled = false;
    character.style.animation = "none";
  }, 100);

  let currentScrollTop = cont.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    character.classList.remove("face-left");
    character.classList.add("face-right");
  } else {
    character.classList.remove("face-right");
    character.classList.add("face-left");
  }
  lastScrollTop = currentScrollTop;
  character.style.animation = "moveSpritesheet 0.1s steps(2) infinite";
};

character2.addEventListener("mouseover", function() {
    character2.style.pointerEvents = "none";
  });
  
  character2.addEventListener("mouseout", function() {
    character2.style.pointerEvents = "auto";
  });
  
  character2.addEventListener("wheel", function(e) {
    if (!scrolling) {
      e.stopPropagation();
    }
  });






// INTRO Funtion
let welkom = document.getElementById("welcomeText");
// Show the website on button click
welkom.onclick = function(){
   document.getElementById("nameText").style.bottom = "400px";
   welkom.style.display = "none";
   setTimeout(() => {
    document.getElementById("character").style.bottom = "170px";
   cont.style.overflowY = "scroll";
   }, 800);
   
};
    
