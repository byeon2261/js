// 크리스마스 D-day 프로그램.
// 첫번째 구상. 올해첫날부터 현재 날짜까지 전체 더한값으로 올해 크리스마스까지 전체 더한값을 뺀다.(10월 5일 = 305일(대충계산한 값) )
// 두번쩨 구상. 하드코딩. 년, 월을 이중if문에 넣어서 특정 값에서 뺀 일자를 출력한다.(월만 if문을 돌리면 된다.)
// 세번째. 인터넷에서 검색된 D-day코드. 크리스마스날짜를 현재날짜로 뺀값을 시,분,초로 각각 나눠서 표현한다.
const clockTitle = document.querySelector(".js-clock");



const xMasDate = new Date("2022-12-25T00:00:00+0900");

console.log(xMasDate.getMonth() + 1);
console.log(xMasDate.getFullYear());
console.log(xMasDate.getDate());
console.log(xMasDate.getMinutes());
console.log(xMasDate.getSeconds());
console.dir(xMasDate);

// 인터넷 검색하여 구성한 함수. 노마드코더에서 사용한 방식과는 조금 다르다.
function handleSetTime_1() {
    const now = new Date();
    const distance = xMasDate.getTime() - now.getTime();

    const day = Math.floor(distance/(1000*60*60*24));
    const hours = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2, 0);
    const minutes = String(Math.floor((distance % (1000*60*60))/(1000*60))).padStart(2, 0);
    const seconds = String(Math.floor((distance % (1000*60))/1000)).padStart(2, 0);
    console.log(String(day), hours, minutes, seconds);
    console.log(distance % (1000*60*60*24));
    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`
}

handleSetTime_1();
setInterval(handleSetTime_1, 1000)
