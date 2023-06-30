const gridC = document.querySelector(".gridContainer")
const clearButton = document.querySelector(".clear")
let penColor = document.querySelector(".penColor")
let bgColor = document.querySelector(".bgColor") 
let isMouseDown = false; // Variable that will help track mouse status
const applyBg = document.querySelector(".apply")
const slider = document.querySelector(".slider");
const selectedVal = document.querySelector(".selectedValue")

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

slider.addEventListener("input", () => {
    const value = slider.value;
    // Do something with the value
    selectedVal.textContent = `Grid Size: ${value} x ${value}`;
});
  
for (let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';    
    gridC.appendChild(cell);

    cell.addEventListener('click', () => {
        startPainting(cell);
    });

    cell.addEventListener('mousedown', () => {
        startPainting(cell);
    });
}

