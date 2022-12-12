const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // context
canvas.width = 800;
canvas.height = 800;

// rectangular
ctx.rect(650,650,100,100);
ctx.fillStyle = "tomato";
ctx.fill();
ctx.beginPath();
ctx.rect(550,650,100,100);
ctx.fillStyle = "blue"; // 색변화 없음.
ctx.stroke();
// brginPath : 포인트를 (0,0)으로 옮겨주며 이후에 설정이 이전의 설정값을 건들지 않는다.
ctx.beginPath();

// move
ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(150,150);
ctx.fill();
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(50,150);
ctx.lineTo(50,50);
ctx.stroke();
ctx.beginPath();

// Drawing Project one : house
ctx.fillStyle = "black";
ctx.fillRect(200,200,50,200);
ctx.fillRect(400,200,50,200);
ctx.fillRect(300,300,50,100);
ctx.fillRect(200,200,250,20);
ctx.moveTo(200,200);
ctx.lineTo(325,100);
ctx.lineTo(450,200);
ctx.fill();
ctx.beginPath();

// Drawing Project two : human
ctx.fillRect(185, 500 + 10, 15, 100);
ctx.fillRect(350, 500 + 10, 15, 100);
ctx.fillRect(245, 500 + 10, 60, 200);
ctx.arc(275, 450, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(255, 435, 5, 1.85 * Math.PI, 1.15 * Math.PI);
ctx.arc(295, 435, 5, 1.75 * Math.PI, 1.25 * Math.PI);
ctx.fill();