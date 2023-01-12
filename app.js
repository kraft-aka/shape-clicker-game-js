const output = document.querySelector(".output");
const gameOn = { timer: 0, start: null };

// create title text
const title = document.createElement("div");
title.classList.add("title");
title.textContent = "Click to the shape";
document.body.prepend(title);

// create a shape
const shape = document.createElement("div");
shape.classList.add("shape");
output.append(shape);

shape.addEventListener("click", () => {
  shape.textContent = "";
  shape.style.display = "none";
  gameOn.timer = setTimeout(addBox, getRandomNumber(3000));
  if (!gameOn.start) {
    title.textContent = "Look for the element and click it.";
  } else {
    const timeNow = new Date().getTime();
    const duration = (timeNow - gameOn.start) / 1000;
    title.textContent = `It took you ${duration} seconds to click!`;
  }
});

// generate random numbers
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
  let color = "#";
  const chars = "ABCDEF0123456789";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)];
  }
  return color;
};

const addBox = () => {
  gameOn.start = new Date().getTime();
  const container = output.getBoundingClientRect();
  const dimention = [getRandomNumber(200) + 50, getRandomNumber(200) + 50];
  shape.style.display = "block";
  shape.style.width = `${dimention[0]}px`;
  shape.style.height = `${dimention[1]}px`;
  shape.style.backgroundColor = getRandomColor();
  shape.style.left = getRandomColor(container.width - dimention[0] + "px");
  shape.style.top = getRandomColor(container.height - dimention[1] + "px");
  shape.style.borderRadius = getRandomNumber(100) + "%";
};
