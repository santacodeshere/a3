const readlineSync = require('readline-sync');
const Calculator = require('./calculator');

const calculator = new Calculator();

function getOperation() {
  return readlineSync.question('Enter operation (+, -, *, /): ');
}

function getNumbers() {
  const num1 = parseFloat(readlineSync.question('Enter first number: '));
  const num2 = parseFloat(readlineSync.question('Enter second number: '));
  return [num1, num2];
}

function calculate() {
  const operation = getOperation();
  const [num1, num2] = getNumbers();

  try {
    let result;
    switch (operation) {
      case '+':
        result = calculator.add(num1, num2);
        break;
      case '-':
        result = calculator.subtract(num1, num2);
        break;
      case '*':
        result = calculator.multiply(num1, num2);
        break;
      case '/':
        result = calculator.divide(num1, num2);
        break;
      default:
        console.log('Invalid operation');
        return;
    }
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

calculate();