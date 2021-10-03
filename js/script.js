var fans = document.querySelector('.fans');
fans.addEventListener("mouseover", function(){
fans.innerText = "123k";
});


var fish = document.querySelector('.fish');
fish.addEventListener("mouseover", function(){
    fish.innerText = "47k";
});


var pets = document.querySelector(".pets");
pets.addEventListener("mouseover", function(){
    pets.innerText = "20k";
});

var toggle = document.querySelector('#toggle');
var ball = document.querySelector(".ball");
var title = document.querySelector('h1');
var body = document.querySelector('body');

toggle.addEventListener
("click", function(){
if (body.classList.contains("light")){
body.classList.remove('light')
ball.classList.remove('move-right');
title.innerText = "Stealth Maxie"
} else {
body.classList.add('light')
ball.classList.add("move-right")
title.innerText = "Party Maxie"
}   
}

)