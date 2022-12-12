const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
const colors = [
    "#FFC266", "#323838", "#FBFC67", "#FD8940"
]
let x = 810;
let y = -10;
ctx.moveTo(x, y);
let offsetCnt = 0


function onMouseMove(e) {
    // console.log(e);
    // console.log(x, y);
    ctx.moveTo(x, y);
    const color = colors[Math.floor(Math.random() * colors.length)];
    console.log(color);
    ctx.strokeStyle = color;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
}

function onClick(e) {
    offsetCnt = offsetCnt + 1;
    ctx.clearRect(0, 0, 800, 800);
    if (offsetCnt === 1) {
        x = 810;
        y = 810;
    } else if (offsetCnt === 2) {
        x = -10;
        y = 810;
    } else if (offsetCnt === 3) {
        x = -10;
        y = -10;
    } else if (offsetCnt === 4) {
        x = 810;
        y = -10;
        offsetCnt = 0;
    }
    console.log(x, y);
}

function cursor_move(event){
    x_coord = event.offsetX;
    y_coord = event.offsetY;
    ctx.beginPath();
    ctx.arc(x_coord, y_coord, 5, 0, 2*Math.PI);
    ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
    ctx.fill();
    console.log("d");
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("click", onClick);
// canvas.addEventListener("click", cursor_move);
