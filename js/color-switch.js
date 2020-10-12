const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
}

refs.startBtn.addEventListener('click', clickStartBtn);
refs.stopBtn.addEventListener('click', clickStopBtn);

function clickStartBtn(event) {
  intervalId = setInterval(switchColor, 1000, colors);
  refs.startBtn.disabled = true;
  refs.startBtn.classList.add('disabledBtn');
}

function switchColor(colors) {
  const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = currentColor;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function clickStopBtn(event) {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.startBtn.classList.remove('disabledBtn');
}
