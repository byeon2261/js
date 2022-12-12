///// 5.0에 생성
//// 5 clock
/* 5.2 padstart */
const clock = document.querySelector("h2#clock");

function getClock(){
    var date = new Date();
    var Hour = String(date.getHours()).padStart(2, "0");
    var Minute = String(date.getMinutes()).padStart(2, "0");
    var Second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${Hour}:${Minute}:${Second}`;
}

getClock();
setInterval(() => {
    getClock();
}, 1000);