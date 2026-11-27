const buttons = document.getElementsByClassName("btn");
const display = document.getElementById("display");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const value = buttons[i].dataset.value;
    if (value === "AC") {
      display.value = "";
      return;
    }
    else if(value==="="){
        function calculate(expression) {

        expression=display.value
        let tokens = expression.match(/\d+\.?\d*|[()+\-*/]/g)
        tokens = tokens.map(token => {
        return isNaN(token) ? token : Number(token);
                                     });
        let position = 0;

        function nextToken() {
        return tokens[position++];
                             }
    

    function factor() {
    let token = nextToken();

    if (token === "(") {
      let result = expressionParser();
      nextToken();
      return result;
    }
      if (token === "-") {
    return -factor();   
    }
      if (token === "+") {
    return factor();    
    }

    return Number(token);
    }


    function term() {
    let result = factor();

    while (tokens[position] === "*" || tokens[position] === "/") {
      let operator = nextToken();
      let nextValue = factor();

      if (operator === "*") {
        result *= nextValue;
      } else {
        result /= nextValue;
      }
    }

    return result;
    }
    function expressionParser() {
    let result = term();

    while (tokens[position] === "+" || tokens[position] === "-") {
      let operator = nextToken();
      let nextValue = term();

      if (operator === "+") {
        result += nextValue;
      } else {
        result -= nextValue;
      }
    }

    return result;
  }
    let answer = expressionParser();
    return answer;


    }
    display.value=calculate()
    return ;
}

    display.value=display.value+value;
})}