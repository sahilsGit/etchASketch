const gridC = document.querySelector(".gridContainer");
const clearButton = document.querySelector(".clear");
let penColor = document.querySelector(".penColor");
let bgColor = document.querySelector(".bgColor");
let isMouseDown = false; // Variable that will help track mouse status
const applyBg = document.querySelector(".apply");
const slider = document.querySelector(".slider");
const selectedVal = document.querySelector(".selectedValue");
const gridLine = document.querySelector('.gridLine')
let cOutline = true;

function applybgColor() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = bgColor.value;
  });
}

function clearAll() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
  });
}

function startPainting(cell) {
    cell.style.backgroundColor = penColor.value;
}

// Add mouseover event listener to the entire grid container
gridC.addEventListener('mouseover', (event) => {
    if (isMouseDown) { // Check if the mouse is clicked
        const cell = event.target;
        startPainting(cell);
    }
});

applyBg.addEventListener('click', () => {
    applybgColor()
})

// Add mousedown event listener to the entire grid container
gridC.addEventListener('mousedown', () => {
    isMouseDown = true;
});

// Add mouseup event listener to the entire grid container
gridC.addEventListener('mouseup', () => {
    isMouseDown = false;
});

clearButton.addEventListener('click', () => {
    clearAll()
})

// slider.addEventListener("input", () => {
//   const value = slider.value;
//   function createGrid(value);
//   // Do something with the value
//   selectedVal.textContent = `Grid Size: ${value} x ${value}`
// })


function createGrid(gridSize) {
  // Remove extra cells if the grid size is decreasing
  const cellsToRemove = Array.from(gridC.querySelectorAll('.cell')).slice(gridSize * gridSize);
  cellsToRemove.forEach(cell => cell.remove());

  // Adjust the width of existing cells to fit the new grid size
  const cells = gridC.querySelectorAll('.cell');
  const cellWidth = `calc(100% / ${gridSize})`;
  cells.forEach(cell => cell.style.width = cellWidth);

  // Add new cells if the grid size is increasing
  const cellsToAdd = gridSize * gridSize - cells.length;
  for (let i = 0; i < cellsToAdd; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.border = 'none';
    cell.style.width = cellWidth;

    if (gridC.style.outline == 'none') {
      cell.style.outline = '1px solid black';
    }

    cell.addEventListener('click', () => {
      startPainting(cell);
    });

    cell.addEventListener('mousedown', () => {
      startPainting(cell);
    });

    gridC.appendChild(cell);
  }

  selectedVal.textContent = `Grid Size: ${gridSize} x ${gridSize}`;
}

slider.addEventListener('input', () => {
  let value = slider.value;
  createGrid(value);
});

slider.value = 16;
createGrid(16);

window.addEventListener('load', function() {
  gridLine.click();
  gridLine.click();
});

gridLine.addEventListener('click', () => {
   let cells = gridC.querySelectorAll('.cell')
  if (cOutline == true) {
    cells.forEach(cell => cell.style.outline = 'none')
    gridC.style.outline = '1px solid black';
    cOutline = false;
  }
  else {
    gridC.style.outline = 'none';
    cells.forEach(cell => cell.style.outline = '1px solid black');
    cOutline = true;
  }
});






