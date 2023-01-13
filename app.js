const output = document.querySelector(".output");
const msg = document.querySelector('.info')
const container = document.querySelector('.container')
msg.classList.add('info')
document.body.prepend(msg)
const gameOn = { timer: 0, start: null };
let counter = 0;

// create title text
const title = document.createElement("div");
title.classList.add("title");
title.textContent = "Click to the shape";
document.body.prepend(title);

// create a shape
const shape = document.createElement("div");
shape.classList.add("shape");
output.append(shape);

//fires an event
shape.addEventListener("click", () => {
  counter++
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

// generates new modifyed shapes
const addBox = () => {
  gameOn.start = new Date().getTime();
  const container = output.getBoundingClientRect();
  const dimention = [getRandomNumber(200) + 50, getRandomNumber(200) + 50];
  shape.style.display = "block";
  shape.style.width = `${dimention[0]}px`;
  shape.style.height = `${dimention[1]}px`;
  shape.style.backgroundColor = getRandomColor();
  shape.style.left = getRandomNumber(container.width - dimention[0] + "px");
  shape.style.top = getRandomNumber(container.height - dimention[1] + "px");
  shape.style.borderRadius = getRandomNumber(100) + "%";
  msg.innerHTML = `Shape's <li> width is: ${shape.style.width}</li>
                           <li> height is: ${shape.style.height}</li>  
                           <li> color is: ${shape.style.backgroundColor}</li> `
};
