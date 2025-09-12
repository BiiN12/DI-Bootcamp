const resetButton = document.getElementById("resetButton");
const colorGrid = document.getElementById("colorGrid");
const colorPalette = document.getElementById("colorPalette");
let colorBlocks = document.querySelectorAll("#colorPalette > *");

// create a 120x120 grid
const createDrawingPad = function () {
  // const arr = [];
  for (i = 0; i <= 120; i++) {
    for (j = 0; j <= 120; j++) {
      const div = document.createElement("div");
      colorGrid.append(div);
    }
  }
};

createDrawingPad();

let currentColor;
let mousedown = false;

// add event listeners to color palette
colorPalette.addEventListener("click", function (e) {
  currentColor = e.target.id;
  // remove "selected" class to all color
  for (color of colorBlocks) {
    if (color.classList.contains("color-box", "selected"))
      color.classList.remove("color-box", "selected");
  }

  // add "selected" class to current color
  if (!e.target.classList.contains("color-palette"))
    e.target.classList.add("color-box", "selected");
});

// add a mouse event listeners to grid
colorGrid.addEventListener("mousedown", function (e) {
  mousedown = true;
  e.target.style.background = currentColor;
  e.target.nextElementSibling.style.background = currentColor;
});

// to stop the mouseover
colorGrid.addEventListener("mouseup", function (e) {
  mousedown = false;
});

// a mouse event listener to draw
colorGrid.addEventListener("mouseover", function (e) {
  if (mousedown) {
    e.target.style.background = currentColor;
    e.target.nextElementSibling.style.background = currentColor;
  }
});

// to clear the grid
resetButton.addEventListener("click", function () {
  colorGrid.innerHTML = "";
  createDrawingPad();
});
