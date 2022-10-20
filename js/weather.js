const API_KEY = "f3490219860d57d8e5757bc9ff1c05db";

function onGeoError() {
  weather.innerText = "Can't find you. No weather for you.";
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const loca = document.querySelector("#location span:nth-child(1)");
      const temp = document.querySelector("#location span:nth-child(2)");
      const weather = document.querySelector("#location span:nth-child(3)");

      const loca_ = data.name;
      const temp_ = Math.round(data.main.temp);
      let weather_ = String(data.weather[0].main);

      if (weather_ === "Clear") {
        weather_ = "🌞";
      } else if (weather_ === "Rain") {
        weather_ = "☔";
      } else if (weather_ === "Clouds") {
        weather_ = "☁";
      } else if (weather_ === "Snow") {
        weather_ = "⛄";
      }

      loca.innerText = `${loca_} / `;
      temp.innerText = `${temp_}℃ / `;
      weather.innerText = `${weather_}`;
    });
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
