let equationArray = [];

const num1 = document.getElementById("1"); //Added
const num2 = document.getElementById("2"); //Added
const num3 = document.getElementById("3"); //Added
const num4 = document.getElementById("4"); //Added
const num5 = document.getElementById("5"); //Added
const num6 = document.getElementById("6"); //Added
const num7 = document.getElementById("7"); //Added
const num8 = document.getElementById("8"); //Added
const num9 = document.getElementById("9"); //Added
const num0 = document.getElementById("0"); //Added

const buttonAllClear = document.getElementById("clear"); //Added
const buttonBackspace = document.getElementById("back"); //Added
const buttonDivide = document.getElementById("divide"); //Added
const buttonMultiply = document.getElementById("multiply"); //Added
const buttonMinus = document.getElementById("minus"); //Added
const buttonPlus = document.getElementById("plus"); //Added
const buttonRandom = document.getElementById("random"); //Added
const buttonDecimal = document.getElementById("decimal"); //Added
const buttonEquals = document.getElementById("equals"); //Added

const updateScreenOutput = () => {
  const screenOutput = document.getElementById("screen-output");
  let convertEquation = equationArray.join("");
  let equation = convertEquation.split("#").join("");
  screenOutput.textContent = equation;
};

// Number buttons below.
num1.onclick = () => {
  equationArray.push("1");

  updateScreenOutput();
};
num2.onclick = () => {
  equationArray.push("2");

  updateScreenOutput();
};
num3.onclick = () => {
  equationArray.push("3");

  updateScreenOutput();
};
num4.onclick = () => {
  equationArray.push("4");

  updateScreenOutput();
};
num5.onclick = () => {
  equationArray.push("5");

  updateScreenOutput();
};
num6.onclick = () => {
  equationArray.push("6");

  updateScreenOutput();
};
num7.onclick = () => {
  equationArray.push("7");

  updateScreenOutput();
};
num8.onclick = () => {
  equationArray.push("8");

  updateScreenOutput();
};
num9.onclick = () => {
  equationArray.push("9");

  updateScreenOutput();
};
num0.onclick = () => {
  equationArray.push("0");

  updateScreenOutput();
};

// Functional buttons below

buttonAllClear.onclick = () => {
  equationArray = [];
  const screenOutput = (document.getElementById(
    "screen-output"
  ).textContent = 0);
  const screenEquation = (document.getElementById(
    "screen-equation"
  ).textContent = "");
  answer = 0;
};

buttonBackspace.onclick = () => {
  equationArray.pop();
  if (equationArray.length === 0) {
    const screenOutput = (document.getElementById(
      "screen-output"
    ).textContent = 0);
  }

  updateScreenOutput();
};

buttonDivide.onclick = () => {
  equationArray.push("#/#");

  updateScreenOutput();
};
buttonMultiply.onclick = () => {
  equationArray.push("#*#");

  updateScreenOutput();
};
buttonMinus.onclick = () => {
  equationArray.push("#-#");

  updateScreenOutput();
};
buttonPlus.onclick = () => {
  equationArray.push("#+#");

  updateScreenOutput();
};
buttonDecimal.onclick = () => {
  equationArray.push("#.#");

  updateScreenOutput();
};

const solveMultiplication = (equation) => {
  let multiplyArray = equation.split(/[+-/]/);
  let numberArray = multiplyArray.filter((item) => item.includes("*"));
  let newEquation = equation;
  for (let i = 0; i < numberArray.length; i++) {
    const tempEquationArray = numberArray[i].split("*");
    let answer = 1;
    for (let n = 0; n < tempEquationArray.length; n++) {
      answer = answer * parseFloat(tempEquationArray[n]);
    }
    newEquation = newEquation.replace(numberArray[i], answer);
  }
  return newEquation;
};

const solveDivision = (equation) => {
  let multiplyArray = equation.split(/[+-]/);
  let numberArray = multiplyArray.filter((item) => item.includes("/"));
  let newEquation = equation;
  for (let i = 0; i < numberArray.length; i++) {
    const tempEquationArray = numberArray[i].split("/");
    let answer = tempEquationArray[0];
    for (let n = 1; n < tempEquationArray.length; n++) {
      answer = answer / parseFloat(tempEquationArray[n]);
    }
    newEquation = newEquation.replace(numberArray[i], answer);
  }
  return newEquation;
};

const solveAddition = (equation) => {
  let multiplyArray = equation.split(/[-]/);
  let numberArray = multiplyArray.filter((item) => item.includes("+"));
  let newEquation = equation;
  for (let i = 0; i < numberArray.length; i++) {
    const tempEquationArray = numberArray[i].split("+");
    let answer = parseFloat(tempEquationArray[0]);
    for (let n = 1; n < tempEquationArray.length; n++) {
      answer = answer + parseFloat(tempEquationArray[n]);
    }
    newEquation = newEquation.replace(numberArray[i], answer);
  }
  return newEquation;
};

const solveSubtraction = (equation) => {
  const tempEquationArray = equation.split("-");
  let answer = parseFloat(tempEquationArray[0]);
  for (let n = 1; n < tempEquationArray.length; n++) {
    answer = answer - parseFloat(tempEquationArray[n]);
  }
  return answer;
};

const solveStringEquation = (equation) => {
  let multiplyDone = solveMultiplication(equation);
  let divideDone = solveDivision(multiplyDone);
  let addDone = solveAddition(divideDone);
  let subtractDone = solveSubtraction(addDone);

  let answer = subtractDone;
  return answer;
};

// Executes when Equals it clicked
buttonEquals.onclick = () => {
  let convertEquation = equationArray.join("");
  let equation = convertEquation.split("#").join("");

  const screenEquation = document.getElementById("screen-equation");
  const screenOutput = document.getElementById("screen-output");

  let answer = solveStringEquation(equation);

  screenEquation.textContent = equation + " = " + answer;
  screenOutput.textContent = answer;
  equationArray = [answer];

  //console.log(equation + " = ");
};

// Executes when 'R' is clicked
buttonRandom.onclick = () => {
  equationArray.push(Math.round(Math.random() * 100).toString());

  updateScreenOutput();
};
