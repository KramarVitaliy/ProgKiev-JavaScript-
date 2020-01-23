const number1 = +prompt('Enter number1');
const number2 = +prompt('Enter number2');
const operation = prompt('Enter operation');

function add(number1 , number2) {
  return number1 + number2;
}
function sub(number1 , number2) {
  return number1 - number2;
}
function multiple(number1 , number2) {
  return number1 * number2;
}
function division(number1 , number2) {
  return number1 / number2;
}

function calculate(number1 = 0 , number2 = 0 , callBackFunction) {
  if (number2 == 0) {
    console.error('Na 0 division is wrong');
    return;
  }
  let result = callBackFunction(number1 , number2);
  document.write('Result operation: ' + result);
}

switch (operation) {
  case 'add':
    calculate(number1 , number2, add);
  break;
  case 'sub':
    calculate(number1 , number2, sub);
  break;
  case 'multiple':
    calculate(number1 , number2, multiple);
  break;
  case 'division':
    calculate(number1 , number2, division);
  break;

  default:
    alert('Operation is wrong!!!')
    break;
}
