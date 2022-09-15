const defaultValue = 0;
let currentValue = defaultValue;

function getInputNumber() {
  return parseInt(userInput.value);
}

function add() {
  let getUserInputNumber = getInputNumber();
  let calDescription = `${currentValue} + ${getUserInputNumber}`;
  currentValue = currentValue + getUserInputNumber;
  outputResult(currentValue, calDescription);
}

function sub() {
  currentValue = currentValue - parseInt(userInput.value);
  outputResult(currentValue, "This is subtraction result");
}

function multiply() {
  currentValue = currentValue * parseInt(userInput.value);
  outputResult(currentValue, "This is multiply result");
}

function divide() {
  currentValue = currentValue / parseInt(userInput.value);
  outputResult(currentValue, "This is division result");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
