let optionColor = document.querySelectorAll(".tools__color option");
let selectedColor = document.querySelector(".tools__color");
let canvas = document.querySelector(".canvas");
let eraser = document.querySelector(".tools__eraser");
let clearButton = document.querySelector(".tools__clear");
let canvasWidth = document.querySelector(".tools__columns");
let canvasHeight = document.querySelector(".tools__rows");
let createCanvasBtn = document.querySelector(".tools__create");

function createCanvas(){
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    for(i =0; i<canvasWidth.value*canvasHeight.value; i++) {
        let div = document.createElement('div');
        div.classList.add("canvas__pixel");
        div.style.width = (500 / canvasWidth.value) + "px";
        div.style.height = (500 / canvasHeight.value) + "px";
        div.addEventListener("click", paint);
        canvas.append(div);
    } 
}


for(i =0; i<optionColor.length; i++) {
    optionColor[i].style.backgroundColor = optionColor[i].value;
    optionColor[i].style.color = optionColor[i].value;
}

function paint() {
    if (eraser.checked) {
        this.style.backgroundColor = "white";
    } else {
        let selectedOption = selectedColor.options[selectedColor.selectedIndex];
        this.style.backgroundColor = selectedOption.value;
    }
}

function changeOption() {
    let selectedOption = selectedColor.options[selectedColor.selectedIndex];
    selectedColor.style.backgroundColor = selectedOption.value;
    selectedColor.style.color = selectedOption.value;
}

function clear() {
    pixel.forEach(function(item, index, array) {
        item.style.backgroundColor = "white";
      });
}

clearButton.addEventListener("click", clear);
selectedColor.addEventListener("change", changeOption);
createCanvasBtn.addEventListener("click", createCanvas);