let cont = document.querySelector("#outer-container");

let layer = document.querySelectorAll(".layer");

userHasScrolled = false;

cont.onscroll = function(){
    
    let X = cont.scrollTop;

    layer[0].style.left = X/4 + "px";
    layer[1].style.left = X/8 + "px";
    layer[2].style.left = X/1.5 + "px";


// //////////////////////////////////////////////////////////////////////// player movement
userHasScrolled = true;
                    setTimeout(() => {
                userHasScrolled = false;
                document.getElementById("character_spritesheet").style.animation = "none";
                    }, 500); 
                {
                document.getElementById("character_spritesheet").style.animation = "moveSpritesheet 0.5s steps(2) infinite";
                }};


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
    
