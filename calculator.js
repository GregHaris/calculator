const displayDiv = document.querySelector("#display");
const calculatorKeys = document.querySelector("#buttons");
const decimalButton = document.querySelector("#point");
const operatorButtons = document.querySelectorAll(".operator");

displayDiv.focus()

// Allow only numertic keys
displayDiv.addEventListener("keydown", (event) => {
    // Allowed keys: numbers, operators, and control keys like backspace
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                        '+', '-', '*', '/', '.', 'Backspace', 'Shift', 'Enter',
                         'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
    
    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
        return false;
    };
});

// Function to perform calculations
function evaluateExpression(expression) {
    const tokens = expression.split(/\s+/);
    let result = parseFloat(tokens[0]);
     // To track if there is decimal point already present
    let hasDecimal = false;
    // to track if there is an operator already present
    let hasOperator = false; 

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseFloat(tokens[i + 1]);

        switch (operator) {
            case "+":
                result += nextNumber;
                break;
            case "-":
                result -= nextNumber;
                break;
            case "x":
                result *= nextNumber;
                break;
            case "/":
                switch(nextNumber) {
                    case 0:
                       return displayDiv.textContent = "invalid operation!";
                }
                result /= nextNumber;
                break;
            case "%":
                result = parseFloat(tokens[i - 1]) / 100;
                break;
            default:
                return  displayDiv.textContent = "error";
        }

        // check if it contains a point
        if (nextNumber.toString().includes(".")) {
            hasDecimal = true;
        }

        // check if it contains an operator
        if(nextNumber.toString().match(/[+\-x/%]/)) {
            hasOperator = true;
        }   
    }

    decimalButton.disabled = hasDecimal;    
    operatorButtons.forEach(button => (button.disabled = hasOperator));
    return result;
};

// Event delegation for button clicks
calculatorKeys.addEventListener("click", (event) => {
    const button = event.target;
    const buttonText = button.textContent;
    if (buttonText === "C") {
        displayDiv.value = "";
    } else if (buttonText === "=") {
        const expression = displayDiv.value;
        const result = evaluateExpression(expression);
        displayDiv.value = result;
        // backspace button to delete the last entry
    } else if (buttonText === "←") {
        displayDiv.value = displayDiv.value.slice(0, -1);
    } else {
        displayDiv.value += buttonText;
    }
});

// Handle Enter key press
displayDiv.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const expression = displayDiv.value;
        const result = evaluateExpression(expression);
        displayDiv.value = result;
    }
});


