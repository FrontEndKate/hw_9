function calculator() {
    let operand1 = getNumber("Enter the first operand:");
    if (operand1 === null) return;

    let operator = getOperand();
    if (operator === null) return;

    let operand2 = null;
    if (operator !== '!' && operator !== 's') {
        operand2 = getNumber("Enter the second operand:");
        if (operand2 === null) return;
    }
    let result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        case '!':
            result = factorial(operand1);
            break;
        case 's':
            result = sumOfDigits(operand1);
            break;
        default:
            alert("Invalid operator!");
            return;
    }

    alert("The result is: " + result);
}

function getNumber(message) {
    while (true) {
        let input = prompt(message);
        if (input === null) return null;
        let number = parseFloat(input);
        if (!isNaN(number)) return number;
        alert("Invalid input. Please enter a valid number.");
    }
}

function getOperand() {
    const validOperators = ['+', '-', '*', '/', '!', 's'];
    while (true) {
        let input = prompt("Enter the operator (+, -, *, /, ! for factorial, s for sum of digits):");
        if (input === null) return null;
        if (validOperators.includes(input)) return input;
        alert("Invalid input. Please enter a valid operator.");
    }
}

function factorial(number) {
    if (number < 0) return "Invalid input for factorial";
    if (number === 0 || number === 1) return 1;
    return number * factorial(number - 1);
}

function sumOfDigits(number) {
    let sum = 0;
    number = Math.abs(number);
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

let flag = true;
while (flag) {
    calculator();
    flag = confirm("Would you like to calculate again?");
}
