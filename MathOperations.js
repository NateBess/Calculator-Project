const MathOperations = (() => {
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

  return { solveStringEquation };
})();
