// add function
function add(a, b) {
    return a + b;
};

// subtract function
function subtract (a, b) {
    return a - b;
};

// multiply function
function multiply (a, b) {
    return a * b;
};

// divide function
function divide (a, b) {
    return a / b;
};

let firstNumber;
let secondNumber;
let operator = "";

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
};

let displayDiv = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".numBtn");
const cancelBtn = document.querySelector("#cancelBtn");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayDiv.value += button.textContent;
    });
});

cancelBtn.addEventListener("click", () => {
    displayDiv.value = "";
});