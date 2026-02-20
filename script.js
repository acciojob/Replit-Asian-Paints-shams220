let cells = document.querySelectorAll('.grid-item');

let blockInput = document.getElementById('block_id');
let colorInput = document.getElementById('colour_id');

let changeBtn = document.getElementById('change_button');
let resetBtn = document.getElementById('reset_button');


// Reset all cells initially
cells.forEach(cell => {
    cell.style.backgroundColor = "transparent";
});


// Change button logic
changeBtn.addEventListener('click', () => {

    let blockValue = blockInput.value;
    let colorValue = colorInput.value;

    // reset all first
    cells.forEach(cell => {
        cell.style.backgroundColor = "transparent";
    });

    // apply new color
    let selectedCell = document.getElementById(blockValue);

    if(selectedCell){
        selectedCell.style.backgroundColor = colorValue;
    }

});


// Reset button logic
resetBtn.addEventListener('click', () => {

    cells.forEach(cell => {
        cell.style.backgroundColor = "transparent";
    });

});