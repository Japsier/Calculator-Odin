
const calculator = document.querySelector(".calculator")


let displayValue = document.querySelector(".input")
let numberInput = []


function updateText () {
    displayValue.innerText = numberInput;
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply (num1, num2)
    } else if (operator == "/") {
        return divide(num1, num2)
    } else {
        console.log("problem with operator")
    }
}
function add (num1, num2) {
    let result = (num1 + num2)
    return result
}
function subtract (num1, num2) {
    let result =  (num1 - num2)
    return result
}
function multiply (num1,num2) {
    let result =  (num1 * num2)
    return result
}
function divide (num1, num2) {
    let result =  (num1 / num2)
    return result
}




calculator.addEventListener("click", (e) => {
    let userInput = (e.target.classList)
    let isButton = (e.target.nodeName === "BUTTON")
    if (!isButton === true) {
        return
    }
    console.log(userInput)
    displayValue.innerText += userInput
    numberInput.push(userInput) 
})