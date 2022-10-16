
const calculator = document.querySelector(".calculator")


let displayValue = document.querySelector(".input")
let numberInput = []
let displayString = null


function updateText () {
    displayValue.innerText = numberInput;
}

function operate(operator) {
    if (operator == "+") {
        return add();
    } else if (operator == "-") {
        return subtract();
    } else if (operator == "x") {
        return multiply ()
    } else if (operator == "%") {
        return divide()
    } else {
        console.log("problem with operator")
    }
}
function add () {
    let result = "temp"
    console.log("add")
    return result
}
function subtract () {
    let result =  "temp"
    console.log("sub")
    return result
}
function multiply () {
    let result =  "temp"
    console.log("mult")
    return result
}
function divide () {
    let result =  "temp"
    console.log("div")
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