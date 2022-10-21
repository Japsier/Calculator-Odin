
const calculator = document.querySelector(".calculator")


let displayValue = document.querySelector(".input")
let numberInput = []
let displayString = null
let numbers = []
let operators = []
let inputGiven = false
let operatorGiven = false



function updateText () {
    displayValue.innerText = numberInput;
}

function operate() {
    let result = numbers[0]
    for (let i = 0; i < operators.length; i++) {
        let num = i + 1
        
        if (operators[i] == "+") {
            result = add(result, num);
        } else if (operators[i] == "-") {
            result = subtract(result, num);
        } else if (operators[i] == "x") {
            result = multiply (result, num)
        } else if (operators[i] == "%") {
            result = divide(result, num)
        } else {
            console.log("problem with operator")
        }
    }
    return result

}
function add (result, num) {
    result += numbers[num]
    console.log(result)
    return result
}
function subtract(result, num) {
    result -= numbers[num]
    console.log(result)
    return result
}
function multiply (result, num) {
    result *= numbers[num]
    console.log(result, num)
    return result
}
function divide (result, num) {
    result /=  numbers[num]
    console.log(result)
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
        numbers.length = 0
        operators.length = 0
        return
        //return
    }
    

    //Calling operate function if operator is given
    if (userInput == "-" || userInput == "+" || userInput == "x" || userInput == "%") {
        if (inputGiven == true) {
            numbers.push(parseFloat(displayString))//bug
        }
        if (operatorGiven == false) {
            operators.push(userInput)
        }

        console.table(numbers)
        console.table(operators)
        numberInput.length = 0
        displayValue.innerText = ""
        operatorGiven = true
        inputGiven = false
        return
    }
    if (userInput == "=") {
        // = function

        //calls operate function 
        numbers.push(parseFloat(displayString))
        console.table(numbers)
        console.table(operators)
        let result = operate()
        numberInput.length = 0
        numberInput[0] = result
        numbers.length = 0
        numbers[0] = result
        operators.length = 0
        inputGiven = false
        operatorGiven = false
        displayValue.innerText = result
        return
    }
    numberInput.push(userInput)
    displayString = numberInput.join("")

    displayValue.innerText = displayString
    inputGiven = true
    operatorGiven = false
    console.log(inputGiven)
    //
    
    //console.table(numberInput)
})