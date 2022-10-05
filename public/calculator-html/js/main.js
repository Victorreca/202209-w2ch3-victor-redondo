const initialFirstNumber = null;
const initialCurrentNumber = null;
const initialResultOperation = 0;
const initialOperation = null;

let firstNumber = initialFirstNumber;
let currentNumber = initialCurrentNumber;
let resultOperation = initialResultOperation;
let operation = initialOperation;

const resultPanel = document.getElementById("calculator-result");
const numericButtons = document.getElementsByName("calculator-button-numeric");

const captureButtonCleanResult = () => {
  resultPanel.innerText = initialResultOperation;
  firstNumber = initialFirstNumber;
  currentNumber = initialCurrentNumber;
  operation = initialResultOperation;
  resultOperation = initialResultOperation;
};

const handleClickNumericButton = (clickValue) => {
  const resultado = resultPanel.innerText;
  if (!resultado.includes(".")) {
    if (!Number(resultPanel.innerText)) {
      return (resultPanel.innerText = clickValue);
    }
  }
  resultPanel.innerText += clickValue;
  if (operation) {
    if (!Number(currentNumber)) {
      currentNumber = clickValue;
    } else {
      return (currentNumber += clickValue);
    }
    return (resultPanel.innerText = currentNumber);
  }
};

const captureNumbers = () =>
  numericButtons.forEach((numericButton) =>
    numericButton.addEventListener("click", (event) => {
      const value = event.target.innerText;
      handleClickNumericButton(value);
    })
  );

const result = () => {
  switch (operation) {
    case "+":
      resultOperation = parseFloat(firstNumber) + parseFloat(currentNumber);
      break;
    case "-":
      resultOperation = parseFloat(firstNumber) - parseFloat(currentNumber);
      break;
    case "*":
      resultOperation = parseFloat(firstNumber) * parseFloat(currentNumber);
      break;
    case "/":
      resultOperation = parseFloat(firstNumber) / parseFloat(currentNumber);
      break;

    default:
      resultOperation = 0;
  }
  resultPanel.innerText = resultOperation;
  return resultOperation;
};

const handleClickOperation = (currentOperation) => {
  if (operation && !currentNumber) return true;
  if (operation) {
    firstNumber = result();
    operation = currentOperation;
    currentNumber = initialCurrentNumber;
  } else if (!operation) {
    operation = currentOperation;
    firstNumber = resultPanel.innerText;
  }
};

const captureOperationsButtons = (operation) => {
  handleClickOperation(operation);
};

const captureButtonPlus = () => {
  captureOperationsButtons("+");
};

const captureButtonRest = () => {
  captureOperationsButtons("-");
};

const captureButtonMult = () => {
  captureOperationsButtons("*");
};

const captureButtonDiv = () => {
  captureOperationsButtons("/");
};

const captureButtonPerc = () => {
  firstNumber = parseFloat(resultPanel.innerText);
  resultPanel.innerText = Number(resultPanel.innerText) / 100;
};

const captureButtonResult = () => {
  currentNumber = parseFloat(resultPanel.innerText);
  result();
};

const captureButtondecimal = () =>
  (resultPanel.innerText = `${parseFloat(resultPanel.innerText)}.`);

const captureButtonNegativePositive = () =>
  (resultPanel.innerText = Number(resultPanel.innerText) * -1);

const calculator = () => {
  captureNumbers();
  captureButtondecimal();
  captureButtonNegativePositive();
  captureButtonCleanResult();
  captureButtonResult();
};

calculator();
