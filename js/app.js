const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingCon = document.querySelector("greetingCon");
const reset = document.querySelector("#reset");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintName(username);
}

function paintName(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  reset.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `WELCOME! ${username}!`;
}

function onClickX(event) {
  removeUser(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  reset.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  loginInput.value = null;
}

function removeUser(username_key) {
  localStorage.removeItem(username_key);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintName(savedUsername);
}

reset.addEventListener("click", onClickX);
