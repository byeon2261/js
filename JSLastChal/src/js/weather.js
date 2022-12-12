const API_KEY = "e320d44af818115e867f1d25fa0ac303"

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("위치", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  const city = document.querySelector("#weather-form span:first-child");
  const weather = document.querySelector("#weather-form span:last-child");
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

  // 브라우져에서 검색
  // https://api.openweathermap.org/data/2.5/weather?lat=37.5564&lon=126.9371&appid=e320d44af818115e867f1d25fa0ac303
}
function onGeoErr() {
  console.log("Sorry, we can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);