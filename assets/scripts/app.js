const defaultValue = 0;
let currentValue = defaultValue;

function getInputNumber() {
  return parseInt(userInput.value);
}

function getDescription(operator, currentVal, userVal) {
  return `${currentVal}  ${operator}  ${userVal}`;
}
function add() {
  let getUserInputNumber = getInputNumber();
  let storeCurrentValue = currentValue;
  let calDescription = getDescription(
    "+",
    storeCurrentValue,
    getUserInputNumber
  );
  currentValue = currentValue + getUserInputNumber;
  outputResult(currentValue, calDescription);
}

function sub() {
  let getUserInputNumber = getInputNumber();
  let storeCurrentValue = currentValue;
  let calDescription = getDescription(
    "-",
    storeCurrentValue,
    getUserInputNumber
  );
  currentValue = currentValue - getUserInputNumber;
  outputResult(currentValue, calDescription);
}

function multiply() {
  let getUserInputNumber = getInputNumber();
  let storeCurrentValue = currentValue;
  let calDescription = getDescription(
    "*",
    storeCurrentValue,
    getUserInputNumber
  );
  currentValue = currentValue * getUserInputNumber;
  outputResult(currentValue, calDescription);
}

function divide() {
  let getUserInputNumber = getInputNumber();
  let storeCurrentValue = currentValue;
  let calDescription = getDescription(
    "/",
    storeCurrentValue,
    getUserInputNumber
  );
  currentValue = currentValue / getUserInputNumber;
  outputResult(currentValue, calDescription);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
