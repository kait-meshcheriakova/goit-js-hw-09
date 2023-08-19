const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let intervalId = null;

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startChangingColor() {
startBtn.disabled = true;
intervalId = setInterval(() => {
document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
}

function stopChangingColor() {
startBtn.disabled = false; 
clearInterval(intervalId);
}

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);

