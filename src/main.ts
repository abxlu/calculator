// UMXclusive presents..
// Object Values (Initialisation)
const calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: false,
    operator: null
};

// Display - Here is a function to update the display screen
const updateScreen = () => {
const display = document.querySelector(".screen");
    display.value = calculator.displayValue;
};
updateScreen();

// Reset Display
const resetDisplay = () => {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.secondOperandPending = false;
    calculator.operator = null;
};

// Handling Key presses
const keys = document.querySelector(".keys")
keys.addEventListener("click", (event)=> {
    const {target} = event;
    if(!target.matches("button")) {
        return;
    }

    if(target.classList.contains("operator")) {
        handleOperator(target.value);
        updateScreen();
        return;
    }

    if(target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateScreen();
        return;
    }

    if(target.classList.contains("all-clear")) {
        resetDisplay();
        updateScreen();
        return;
    }

    inputDigit(target.value);
    updateScreen();
});

// Input Decimal Value
const inputDecimal = (dot) => {
    if (calculator.secondOperandPending === true) {
        calculator.displayValue = "0.";
        calculator.secondOperandPending = false;
        return;
    }
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
};

// Input Digit Value
const inputDigit = (digit) => {
    const { displayValue, secondOperandPending } = calculator;

    if(calculator.secondOperandPending === true) {
        calculator.displayValue = digit;
        calculator.secondOperandPending = false
    } 
    
    else {
        calculator.displayValue = 
        displayValue === "0" ? digit : displayValue + digit;
    }
};

// Handle Operators
const handleOperator = (nextOperator) => {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.secondOperandPending) {
        calculator.operator = nextOperator;
        return
    }
    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue
    }   else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.secondOperandPending = true;
    calculator.operator = nextOperator;

};

// Calculator Logic
const calculate = (firstOperand, secondOperand, operator) => {
    if (operator ==='+') {
        return firstOperand + secondOperand;
    }   else if (operator ==='-') {
        return firstOperand - secondOperand;
    }   else if (operator ==='*') {
        return firstOperand * secondOperand;   
    }   else if (operator ==='/') {
        return firstOperand / secondOperand;
    }
    return secondOperand;
};