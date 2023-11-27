const displayNumber= (outputNumber: number ): number => {

}

// Query Selectors
const inputScreen = document.querySelector(".screen")
console.log(screen)


const buttons = document.querySelectorAll(".buttons__operations");

// Globally Scoped Variables

let inputValue : number = 0;

const displayNumbers = () => {

inputScreen.value = inputValue;

}

displayNumbers()



// button work

const buttonFour = document.getElementById("button-4")

buttonFour.addEventListener("click", ()=> {
inputScreen.value = "4";
})

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

const buttonDel = document.getElementById("button-DEL")
console.log(buttonDel)




