// UMXclusive: Object Values (Initialisation)

const calculator = {
    displayValue: "0",
    firstOperand: false,
    secondOperand: false,
    operator: null
};

// Display - Here is a function to update the display screen

const updateScreen = () => {
const display = document.querySelector(".screen");
    display.value = calculator.displayValue;
};

updateScreen(3);

// Key press

const buttonFour = document.getElementById("button-4")

buttonFour.addEventListener("click", ()=> {
calculator.displayValue = "4";
})

const keys = document.querySelector(".keys")
keys.addEventListener("click", ()=> {
const {target} = event;
if(!target.matches("button")) {
    return;
}
});







const buttonFive = document.getElementById("button-5")


buttonFive.addEventListener("click", ()=> {
    inputScreen.value = "5";
})

const buttonSix = document.getElementById("button-6")


buttonSix.addEventListener("click", ()=> {
    inputScreen.value = "6";
})

const buttonMultiply = document.getElementById("button-x")
console.log(buttonMultiply)

buttonMultiply.addEventListener("click", ()=> {
console.log("x")
})

const buttonDivide = document.getElementById("button-÷")
console.log(buttonDivide)

buttonDivide.addEventListener("click", ()=> {
console.log("÷")
})

const buttonOne = document.getElementById("button-1")
console.log(buttonOne)

buttonOne.addEventListener("click", ()=> {
console.log("1")
})

const buttonTwo = document.getElementById("button-2")
console.log(buttonTwo)

buttonTwo.addEventListener("click", ()=> {
console.log("2")
})

const buttonThree = document.getElementById("button-3")
console.log(buttonThree)

buttonThree.addEventListener("click", ()=> {
console.log("3")
})

const buttonAdd = document.getElementById("button-+")
console.log(buttonAdd)

buttonAdd.addEventListener("click", ()=> {
console.log("+")
})

const buttonMinus = document.getElementById("button--")
console.log(buttonMinus)

buttonMinus.addEventListener("click", ()=> {
console.log("-")
})

const buttonZero = document.getElementById("button-0")
console.log(buttonZero)

buttonZero.addEventListener("click", ()=> {
console.log("0")
})





