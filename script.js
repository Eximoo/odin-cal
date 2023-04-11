// display.addEventListener('click', function(e) {
//     console.log(e);
// });
// // console.log(display);
const display = document.querySelector("#display");
const equals = document.querySelector(".equals");
const btnClear = document.querySelector(".button-clear");
const btnWithNumber = document.querySelectorAll(".button-number");
const btnWithOperator = document.querySelectorAll(".button-operator");
const btnBackSpace = document.querySelector(".button-backspace");
let firstOperation = true;
let operator = "";
let firstNumber = "";
let secondNumber = "";
let finished = false;

btnClear.addEventListener("click", function () {
  reset();
});

btnWithNumber.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (display.textContent.includes(".") && btn.textContent === ".") {
      return;
    }
    if (finished) {
      reset();
      finished = false;
    }

    addNumber(btn.textContent);
  });
});

btnWithOperator.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (finished) {
      finished = false;
    }
    operatorClick(btn.textContent);
  });
});

equals.addEventListener("click", function () {
  compute();
  finished = true;
});

btnBackSpace.addEventListener("click", function () {
  removeNumber();
});

function compute() {
  firstNumber = operate(operator, firstNumber, secondNumber);
  if (firstNumber === "lmao") {
    reset();
    display.textContent = "lmao";
    return;
  }
  display.textContent = firstNumber;
  secondNumber = "";
  operator = "";
}
function operatorClick(op) {
  if (firstOperation) firstOperation = false;
  if (operator) {
    compute();
    operator = op;
    return;
  }
  operator = op;
  if (secondNumber) {
    compute();
  }
}
function removeNumber() {
  if (firstOperation) {
    if (firstNumber.length > 0) {
      firstNumber = firstNumber.slice(0, -1);
      display.textContent = firstNumber;
    }
    return;
  }
  if (secondNumber.length > 0) {
    secondNumber = secondNumber.slice(0, -1);
    display.textContent = secondNumber;
  }
}
function addNumber(number) {
  if (firstOperation) {
    firstNumber = firstNumber.toString() + number.toString();
    display.textContent = firstNumber;
    return;
  }
  secondNumber = secondNumber.toString() + number.toString();
  display.textContent = secondNumber;
}

function reset() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  firstOperation = true;
  display.textContent = "";
}
function add(a, b) {
  return +a + +b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, valueA, valueB) {
  if (operator === "/" && +valueB === 0) {
    return "lmao";
  }
  console.log(`operator ${operator} valueA ${valueA} valueB ${valueB}`);
  {
    switch (operator) {
      case "+":
        return add(valueA, valueB);
      case "-":
        return subtract(valueA, valueB);
      case "*":
        return multiply(valueA, valueB);
      case "/":
        return divide(valueA, valueB);
      default:
        break;
    }
  }
}
