let equationArray = [];

const updateScreen = (input) => {
  document.getElementById("screen-output").textContent = input;
};

const updateEquationScreen = (input) => {
  document.getElementById("screen-equation").textContent = input;
};

const updateScreenOutput = () => {
  let convertEquation = equationArray.join("");
  let equation = convertEquation.split("#").join("");
  updateScreen(equation);
};

const buttonAllClear = document.getElementById("clear");
buttonAllClear.onclick = () => {
  equationArray = [];
  updateScreen(0);
  updateEquationScreen("");
};

const buttonBackspace = document.getElementById("back");
buttonBackspace.onclick = () => {
  equationArray.pop();
  if (equationArray.length === 0) {
    updateScreen(0);
  }
  updateScreenOutput();
};

const numberButtons = document.getElementsByClassName("number-button");
Array.from(numberButtons).forEach((btn) => {
  btn.onclick = () => {
    equationArray.push(btn.textContent);
    updateScreenOutput();
  };
});

const operationButtons = document.getElementsByClassName("operation-button");
Array.from(operationButtons).forEach((btn) => {
  btn.onclick = () => {
    equationArray.push(`#${btn.value}#`);
    updateScreenOutput();
  };
});

const buttonEquals = document.getElementById("equals");
buttonEquals.onclick = () => {
  let convertEquation = equationArray.join("");
  let equation = convertEquation.split("#").join("");

  let answer = MathOperations.solveStringEquation(equation);

  updateEquationScreen(equation + " = " + answer);
  updateScreen(answer);
  equationArray = [answer];
};

const buttonRandom = document.getElementById("random");
buttonRandom.onclick = () => {
  equationArray.push(Math.round(Math.random() * 100).toString());
  updateScreenOutput();
};
