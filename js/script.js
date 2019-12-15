
// 1ci variant
// var bodyColor = document.body;

// function setRandomColor() {
//     $(bodyColor).css("background-color", getRandomColor());
// }

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


// 2ci variant;

let btn=document.querySelector(".colorBtn");
let bodyBc=document.body;
let colors=["yellow", "green", "red", "blue", "tomato"];
btn.addEventListener("click", changeColor);

function changeColor(){
    let random=Math.floor(Math.random()*colors.length)
    bodyBc.style.backgroundColor=colors[random];

}

