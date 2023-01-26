let cont = document.querySelector(".outer-container");

let layer = document.querySelectorAll(".layer");

cont.onscroll = function(){
    let X = cont.scrollTop;

    layer[0].style.left = X/4 + "px";
    layer[1].style.left = X/2 + "px";
}