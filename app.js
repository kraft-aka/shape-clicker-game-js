const output = document.querySelector(".output");
const msg = document.querySelector(".info");
msg.classList.add("info");
document.body.prepend(msg);
const gameOn = { timer: 0, start: null };
let counter = 0;

// create title text
const title = document.createElement("div");
title.classList.add("title");
title.textContent = "Click on the shape";
document.body.prepend(title);

// create a shape
const shape = document.createElement("div");
shape.classList.add("shape");
output.append(shape);

// fires en event
shape.addEventListener("click", () => {
  counter++;
  shape.textContent = "";
  shape.style.display = "none";
  gameOn.timer = setTimeout(addBox, getRandomNumber(3000));
  if (!gameOn.start) {
    title.textContent = "Look for the element and click it.";
  } else {
    const timeNow = new Date().getTime();
    const duration = (timeNow - gameOn.start) / 1000;
    title.textContent = `It took you ${duration} seconds to click! You clicked it ${counter} times!`;
  }
});

// generate random numbers
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

// generates random colors
const getRandomColor = () => {
  let color = "#";
  const chars = "ABCDEF0123456789";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)];
  }
  return color;
};
