let cont = document.querySelector("#outer-container");

let layer = document.querySelectorAll(".layer");

cont.onscroll = function(){
    let X = cont.scrollTop;

    layer[0].style.left = X/4 + "px";
    layer[1].style.left = X/2 + "px";
}






// //////////////////////////////////////////////////////////////////////// player movement

let countScroll = 1;
    
    document.getElementById("outer-container").onscroll = function(){
        if(countScroll = 1){
        document.getElementById("character_spritesheet").style.animation = "moveSpritesheet 0.5s steps(2) infinite";
        (countScroll++);
        console.log(countScroll);
    }
    setTimeout (function(){
    if(countScroll = 2){
        document.getElementById("character_spritesheet").style.animation = "none";
        (countScroll = 1);
    }}, 1000);
};