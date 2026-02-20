//your JS code here. If required.
let cells = document.querySelectorAll('.grid-item');
let cellId = document.querySelectorAll('input')[0];
let colorId = document.querySelectorAll('input')[1];
let changeBtn = document.querySelectorAll('button')[0];
let resetBtn = document.querySelectorAll('button')[1];
 cells.forEach((c) => {
        c.style.backgroundColor = "transparent";
    });
changeBtn.addEventListener('click',()=>{
	let cellValue = cellId.value;
	let colorValue = colorId.value;

	for(let i = 1;i<=cells.length;i++){
		if(i == cellValue){
			cells[i-1].style.backgroundColor=colorValue;
			return;
		}
	}
})

resetBtn.addEventListener('click',()=>{
	cells.forEach((c)=>{
		c.style.backgroundColor="transparent"
	})
})
