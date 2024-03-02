const displayDiv = document.querySelector("#display");
const calculatorKeys = document.querySelector("#buttons");

// Function to perform calculations
function evaluateExpression(expression) {
    const tokens = expression.split(/\s+/);
    let result = parseFloat(tokens[0]);

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
                result /= nextNumber;
                break;
            case "%":
                result = parseFloat(tokens[i - 1]) / 100;
                break;
            default:
                console.error(`Invalid operator: ${operator}`);
                return "InValid Operation";
        }
    }

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


