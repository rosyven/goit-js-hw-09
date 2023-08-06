function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let timerId = null;

start.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
  start.disabled = true;
});

stop.addEventListener('click', () => {
  clearInterval(timerId);
  start.disabled = false;
});
