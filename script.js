const numbers= document.querySelectorAll(".number")
console.log(numbers);
  

numbers.forEach((number) => {
    console.log(number);
})


numbers.forEach((number) => {
    number.addEventListener ("click", () => {
        console.log ("number is pressed");
    })
})

numbers.forEach((number) => {
    number.addEventListener ("click", (event) => {
        console.log (event.target.value);
    })
})

const calculatorscreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorscreen.value = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let calculationOperator =''
let currentNumber ='0'

const inputNumber = (number) => {
    currentNumber = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach ((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber =''
}

operators.forEach ((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalsign = document.querySelector('.equal-sign')

equalsign.addEventListener('click', () => {
    console.log('equal button is pressed')
})

const calculate = () => {
    let result = ''
    switch(calculatoionOperator) {
        case "+":
            result = prevNumber + currentNumber
            break
        case "-":
            result = prevNumber + currentNumber
            break
        case "*":
            result = prevNumber + currentNumber
            break
        case "/":
            result = prevNumber + currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equalSign')

equalsign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
    }
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}


clearBtn.addEventListener('click', () => {
    clearAll ()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal') 

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
})

inputDecimal = (dot) => {
    currentNumber += dot
}


decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
