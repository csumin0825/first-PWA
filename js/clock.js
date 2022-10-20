const clock = document.getElementById("clock");
const date_ = document.getElementById("date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${min}:${sec}`;
}

function getDate() {
  let day_ = "MON";
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayt = String(date.getDate()).padStart(2, "0");
  const day = date.getDay();

  if (day === 1) {
    day_ = "MON";
  } else if (day === 2) {
    day_ = "TUE";
  } else if (day === 3) {
    day_ = "WEN";
  } else if (day === 4) {
    day_ = "THU";
  } else if (day === 5) {
    day_ = "FRI";
  } else if (day === 6) {
    day_ = "SAT";
  } else if (day === 7) {
    day_ = "SUN";
  }

  date_.innerText = `${year}.${month}.${dayt}.${day_}`;
}

getClock();
getDate();
setInterval(getDate, 1000);
setInterval(getClock, 1000);
