let optionColor = document.querySelectorAll(".tools__color option");
let selectedColor = document.querySelector(".tools__color");
let pixel = document.querySelectorAll(".canvas__pixel");
let eraser = document.querySelector(".tools__eraser");
let clearButton = document.querySelector(".tools__clear");

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

pixel.forEach(function(item, index, array) {
    item.addEventListener("click", paint);
  });
  clearButton.addEventListener("click", clear);
selectedColor.addEventListener("change", changeOption);