let output = "";
let expression = "";
let temp = "";
let dCounter = 1;
let mem1 = "";

// INPUT NUMBERS FUNCTION
function addToOutput(value) {
  expression += value;

  document.getElementById("expression").value = expression;

  expression = document.getElementById("expression").value;
}
// ADDITION FUNCTION
function addition() {
  if (expression != "") {
    if (
      expression.endsWith("+") ||
      expression.endsWith("-") ||
      expression.endsWith("/") ||
      expression.endsWith("*") ||
      expression.endsWith("%")
    ) {
      // DO NOTHING
    } else {
      document.getElementById("expression").value = expression + "+";
      document.getElementById("result").value = "";
      expression = document.getElementById("expression").value;
      dCounter = 1;
    }
  } else {
    // DO NOTHING
  }
}
// SUBTRACTION FUNCTION
function subtraction() {
  if (expression != "") {
    if (
      expression.endsWith("+") ||
      expression.endsWith("-") ||
      expression.endsWith("/") ||
      expression.endsWith("*") ||
      expression.endsWith("%")
    ) {
      // DO NOTHING
    } else {
      document.getElementById("result").value = "";
      document.getElementById("expression").value = expression + "-";
      expression = document.getElementById("expression").value;
      dCounter = 1;
    }
  } else {
    // DO NOTHING
  }
}
// MULTIPLICATION FUNCTION
function multiplication() {
  if (expression != "") {
    if (
      expression.endsWith("+") ||
      expression.endsWith("-") ||
      expression.endsWith("/") ||
      expression.endsWith("*") ||
      expression.endsWith("%")
    ) {
      // DO NOTHING
    } else {
      document.getElementById("result").value = "";
      document.getElementById("expression").value = expression + "*";
      expression = document.getElementById("expression").value;
      dCounter = 1;
    }
  } else {
    // DO NOTHING
  }
}
// DIVISION FUNCTION
function division() {
  if (expression != "") {
    if (
      expression.endsWith("+") ||
      expression.endsWith("-") ||
      expression.endsWith("/") ||
      expression.endsWith("*") ||
      expression.endsWith("%")
    ) {
      // DO NOTHING
    } else {
      document.getElementById("result").value = "";
      document.getElementById("expression").value = expression + "/";
      expression = document.getElementById("expression").value;
      dCounter = 1;
    }
  } else {
    // DO NOTHING
  }
}
//  EQUALS FUNCTION
function calculate() {
  var x = document.getElementById("result").value;
  x = eval(expression);
  output = x;
  document.getElementById("result").value = output;
  output = document.getElementById("result").value;
  expression = output;
}
// CLEAR ALL FUNCTION
function clearValues() {
  output = "";
  expression = "";
  temp = "";
  dCounter = 1;
  document.getElementById("result").value = "";
  document.getElementById("expression").value = "";
}
// SQUARE ROOT FUNCTION
function getSquareRoot() {
  if (expression != "") {
    temp = expression;
    x = eval(expression);
    expression = Math.sqrt(x);
    document.getElementById("result").value = expression;
    document.getElementById("expression").value = "√" + "(" + temp + ")";
    output = document.getElementById("result").value;

    expression = output;
  } else {
    // DO NOTHING
  }
}
// POSITIVE NEGATIVE CONVERT FUNCTION
function positiveNegative() {
  if (expression != "") {
    if (expression.includes("-")) {
      document.getElementById("expression").value = expression.replace("-", "");
      expression = document.getElementById("expression").value;
    } else {
      document.getElementById("expression").value = expression.replace("", "-");
      expression = document.getElementById("expression").value;
    }
  } else {
    document.getElementById("result").value = output;
  }
}
// SECOND POWER FUNCTION
function secondPower() {
  if (expression != "") {
    if (expression.startsWith("-")) {
      var x;
      temp = expression;

      expression = "(" + temp + ")" + "**2";
      x = eval(expression);
      document.getElementById("result").value = x;
      document.getElementById("expression").value = temp + "²";
      output = document.getElementById("result").value;
      expression = output;
    } else {
      var x;
      temp = expression;

      expression = temp + "**2";
      x = eval(expression);
      document.getElementById("result").value = x;
      document.getElementById("expression").value = temp + "²";
      output = document.getElementById("result").value;
      expression = output;
    }
  } else {
    // DO NOTHING
  }
}
// DELETE FUNCTION
function backSpace() {
  var exText = document.getElementById("expression").value;
  document.getElementById("expression").value = exText.substr(
    0,
    exText.length - 1
  );
  expression = document.getElementById("expression").value;
  if (expression.includes(".")) {
    // DO NOTHING
  } else {
    dCounter = 1;
  }
}
// 1/X FUNCTION
function oneOverX() {
  temp = expression;
  var oneOver = "";
  oneOver = 1 / expression;
  document.getElementById("result").value = oneOver;
  document.getElementById("expression").value = "1/" + temp;
  output = document.getElementById("result").value;
  expression = output;
}
// CE FUNCTION
function clearElement() {
  var inputField = expression;
  var inputValue = inputField;

  var regex = /[\+\-\*\/]?[0-9]*\.?[0-9]+$/;
  var newValue = inputValue.replace(regex, "");

  inputField = newValue;
  expression = newValue;
  document.getElementById("expression").value = expression;
}
// DECIMAL FUNCTION
function decimalInput() {
  if (expression.includes(".")) {
    // DO NOTHING
  } else {
    dCounter = 1;
  }
  var inputField = expression;

  if (dCounter == 1) {
    inputField += ".";
    dCounter = 0;
  }
  document.getElementById("expression").value = inputField;
  expression = inputField;
}
// MODULUS FUNCTION
function modulus() {
  if (expression != "") {
    if (
      expression.endsWith("+") ||
      expression.endsWith("-") ||
      expression.endsWith("/") ||
      expression.endsWith("*") ||
      expression.endsWith("%")
    ) {
      // DO NOTHING
    } else {
      document.getElementById("result").value = "";
      document.getElementById("expression").value = expression + "%";
      expression = document.getElementById("expression").value;
      dCounter = 1;
    }
  } else {
    // DO NOTHING
  }
}
// MEMORY FUNCTIONS
function memStore() {
  mem1 = output;
  document.getElementById("memoryID").value = mem1;
}
function memClear() {
  mem1 = "";
  document.getElementById("memoryID").value = "";
}
function memRecall() {
  expression = mem1;
  document.getElementById("expression").value = expression;
  document.getElementById("result").value = expression;
  output = expression;
}
function memPlus() {
  mem1 = parseFloat(mem1) + parseFloat(output);
  document.getElementById("memoryID").value = mem1;
}
function memMinus() {
  mem1 = parseFloat(mem1) - parseFloat(output);
  document.getElementById("memoryID").value = mem1;
}
function memoryPlus1() {
  mem1 = parseFloat(mem1) + parseFloat(output);
  document.getElementById("memoryID").value = mem1;
}
function memoryMinus1() {
  mem1 = parseFloat(mem1) - parseFloat(output);
  document.getElementById("memoryID").value = mem1;
}
function memoryClear1() {
  mem1 = "";
  document.getElementById("memoryID").value = "";
}
