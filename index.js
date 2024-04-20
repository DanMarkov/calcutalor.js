const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");

const buttons = document.querySelectorAll(".button");

// console.log(operators);
// console.log(numbers);

console.log(buttons);



let clear = operators[0];
let backspace = operators[1];
let percentButton = operators[2];
let deleteSign = operators[3];
let multiply = operators[4];
let minus = operators[5];
let plus = operators[6];
let equal = operators[7];

let number7 = numbers[0];
let number8 = numbers[1];
let number9 = numbers[2];
let number4 = numbers[3];
let number5 = numbers[4];
let number6 = numbers[5];
let number1 = numbers[6];
let number2 = numbers[7];
let number3 = numbers[8];
let number00 = numbers[9];
let number0 = numbers[10]; 


// console.log(clear);



function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

let calc = new Calculator;

// console.log( calc.calculate("3 + 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 + 3");
// console.log( result ); 


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}


function multiplication(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function percent(a, b) {
  return a % b;
}

let a;
let operator;
let b;

function operate(a, b, operator) {
  a = +a;
  b = +b;


  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiplication(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else if (operator === "%") {
    return percent(a, b);
  }
}


// console.log(operate("2", "3", "+"));

// clear.addEventListener('click', displayNumbers);

// function displayNumbers() {
//   document.getElementById("display").innerHTML = "7 + 3";
// }



// number7.addEventListener('click', () => {
//   let a = document.getElementById("display").innerHTML = "7";
//   console.log(a);
// });


// plus.addEventListener('click', () => {
//   let operator = document.getElementById("display").innerHTML = "+";
//   console.log(operator);
// });

let operations = {
  firstNumber: 0,
  operator: "+",
  secondNumber: 0
}

// numbers.forEach(number => number.addEventListener('click', () => {
  
//     document.getElementById("display").innerHTML = number.id;
//     operations.firstNumber = number.id;
// }));

// operators.forEach(operator => operator.addEventListener('click', () => {
//     document.getElementById("display").innerHTML = operator.id;
//     operations.operator = operator.id;
// }));



// numbers.forEach(number => number.addEventListener('click', () => {
  
//     document.getElementById("display").innerHTML = number.id;
//     operations.secondNumber = number.id;
// }));


buttons.forEach(button => button.addEventListener('click', () => {
    for (i=3; i<14; i++) {
      if (button.classList.contains("operator")) {
        buttons[i].classList.toggle("secondNumberClicked");
      }
    }



    if (button.classList.contains("secondNumberClicked")) {
      if (document.getElementById("display").innerHTML === "Calculator" || !Number.isInteger(+document.getElementById("display").innerHTML) || buttons[18].classList.contains("smallBugFixer")) {
        document.getElementById("display").innerHTML = "";
        buttons[18].classList.remove("smallBugFixer");
      }

      document.getElementById("display").innerHTML += button.id;
      operations.secondNumber += button.id;

    } else if (button.classList.contains("number")) {
      if (document.getElementById("display").innerHTML === "Calculator" || !Number.isInteger(+document.getElementById("display").innerHTML) || buttons[18].classList.contains("smallBugFixer")) {
        document.getElementById("display").innerHTML = "";
        buttons[18].classList.remove("smallBugFixer");
      }

      document.getElementById("display").innerHTML += button.id;
      operations.firstNumber += button.id;

    } else if (button.classList.contains("operator")) {
      document.getElementById("display").innerHTML = button.id;
      operations.operator = button.id;
    }

    if (button.classList.contains("backspace")) {
      let displayNumber = document.getElementById("display").innerHTML;
      let removedNumber = displayNumber.substring(0, displayNumber.length-1);
      document.getElementById("display").innerHTML = removedNumber;
      if (removedNumber.length === 0) {
        document.getElementById("display").innerHTML = "";
        operations.firstNumber = 0;
        operations.operator = "+";
        operations.secondNumber = 0;
      }
    }

    if (button.classList.contains("clear")) {
      document.getElementById("display").innerHTML = "";
      operations.firstNumber = 0;
      operations.operator = "+";
      operations.secondNumber = 0;
    }

    if (button.classList.contains("equal")) {
      button.classList.add("smallBugFixer");
      document.getElementById("display").innerHTML = operate(operations.firstNumber, operations.secondNumber, operations.operator);
      console.log(operate(operations.firstNumber, operations.secondNumber, operations.operator));
      // console.log("Hello!");
    }

}));



// console.log(displayFirstNumber);


// if (typeof operations.firstNumber === "string" && typeof operations.operator === "string" && typeof operations.secondNumber === "string") {
//   // operate(displayFirstNumber, displaySecondNumber, displayOperator);
//   // console.log("Hello!");
// }




// numbers.addEventListener('click', () => {
//   let operator = document.getElementById("display").innerHTML = "+";
//   console.log(operator);
// });

// function displayNumbers() {
//   document.getElementById("display").innerHTML = "7 + 3";
// }


// const myButton = document.querySelector(".fa-bars");
// const someObject = { aProperty: "Data" };

// myButton.addEventListener("click", () => {
//   console.log(someObject.aProperty); // Expected Value: 'Data'

//   someObject.aProperty = "Data Again"; // Change the value
// });

// setInterval(() => {
//   if (typeof operations.firstNumber === "string" && typeof operations.operator === "string" && typeof operations.secondNumber === "string") {
//     // operate(displayFirstNumber, displaySecondNumber, displayOperator);
//     console.log("Hello!");
//   }

// }, 5000);
