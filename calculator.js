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
        case "x":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
};

let displayDiv = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".numBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const operatorBtn = document.querySelectorAll(".operator");
const percentageBtn = document.querySelector("#percentageBtn");

displayDiv.focus();

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayDiv.value += button.textContent;
    });
});

operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        displayDiv.value += button.textContent;
    });
});

function percentage(num) {
    return displayDiv.value = (num/100);
}

percentageBtn.addEventListener("click", () => {
    const firstNumber = parseFloat(displayDiv.value);
    const percentValue = percentage(firstNumber);
    displayDiv.value = percentValue;
});

const equalsBtn = document.querySelector("#equalsToBtn");
equalsBtn.addEventListener("click", () => {
    const input = displayDiv.value;
    const [firstStr, operator, secondStr] = input.split(/([+\-%x/])/); // split by operators

    const firstNumber = parseFloat(firstStr);
    const secondNumber = parseFloat(secondStr);

    if(operator === "%") {
        percentageBtn.click()
    } else if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const result = operate(firstNumber, operator, secondNumber);
        displayDiv.value = result;
    } else {
        displayDiv.value = "Error";
    };
});


displayDiv.addEventListener("keypress", () => {
    if(event.key === "Enter") {
        equalsBtn.click()
    };
});

cancelBtn.addEventListener("click", () => {
    displayDiv.value = "";
});