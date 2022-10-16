
const calculator = document.querySelector(".calculator")


let displayValue = document.querySelector(".input")
let numberInput = []
let displayString = null


function updateText () {
    displayValue.innerText = numberInput;
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "x") {
        return multiply (num1, num2)
    } else if (operator == "%") {
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



//activates if user clicks anywhere on the calculator
calculator.addEventListener("click", (e) => {
    //userinput = class of clicked element
    let userInput = (e.target.classList)

    //checks to see if a button is pressed
    let isButton = (e.target.nodeName === "BUTTON")
    if (!isButton === true) {
        return
    }
    

    //does the back and clear function
    if (userInput == "back") {
        //delete one number
        numberInput.pop()
        displayString = numberInput.join("")
        displayValue.innerText = displayString
        console.log(numberInput)
        return
        //return
    } else if (userInput == "clear") {
        //delete everything from screen
        displayValue.innerText = ""
        numberInput.length = 0
        return
        //return
    }
    

    //Calling operate function if operator is given
    if (userInput == "=" || userInput == "-" || userInput == "+" || userInput == "x" || userInput == "%") {
        console.log("works")
        operate(userInput, "")
        return
    }
    numberInput.push(userInput)
    displayString = numberInput.join("")

    displayValue.innerText = displayString
    //
    
    console.table(numberInput)
})