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
        resetCalculator();
        updateScreen();
        return;
    }

    inputDigit(target.value);
    updateScreen();
});

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

// Reset Calculator
const resetCalculator = () => {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.secondOperandPending = false;
    calculator.operator = null;
};