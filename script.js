const buttons = document.getElementsByClassName("btn");
const display = document.getElementById("display");

let firstNum = null;
let operator = "";
let justCalculated = false;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const value = buttons[i].dataset.value;

    
    if (value === "AC") {
      display.value = "";
      firstNum = null;
      operator = "";
      justCalculated = false;
      return;
    }

   
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (display.value === "") return;
      firstNum = Number(display.value);
      operator = value;
      display.value = "";
      return;
    }

    if (value === "=") {
      if (operator === "" || display.value === "") return;

      const second = Number(display.value);
      let result;

      if (operator === "+") {
        result = firstNum + second;
      } else if (operator === "-") {
        result = firstNum - second;
      } else if (operator === "*") {
        result = firstNum * second;
      } else if (operator === "/") {
        if (second === 0) {
          display.value = "Error";
          firstNum = null;
          operator = "";
          justCalculated = true;
          return;
        }
        result = firstNum / second;
      }

      display.value = result;
      firstNum = null;
      operator = "";
      justCalculated = true;
      return;
    }

    
    if (justCalculated) {
      display.value = ""; 
      justCalculated = false;
    }
    display.value = display.value + value;
  });
}