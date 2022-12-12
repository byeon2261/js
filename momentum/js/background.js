//// 6.1 에 생성
/* 6.1 background */
var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
]

var chosenImage = images[Math.floor(Math.random() * images.length)];

var bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);

console.log("image >>> ", bgImage);
