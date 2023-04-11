// const display = document.querySelector('#display');

// display.addEventListener('click', function(e) {
//     console.log(e);
// });

// // console.log(display);

function add(a, b) {
  return a + b;
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
  {
    switch (operator) {
      case "+":
        add(valueA, valueB);
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;

      default:
        break;
    }
  }
}
