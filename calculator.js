const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const validate = (num1, num2, operation) => {

    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        throw new TypeError('Numbers must be numbers')

    if (num1 === null || num2 === null)
        throw new TypeError('Numbers must be provided')

    if(operation === null) throw new TypeError('Operation must be provided');

    if (operation!== '+' && operation!== '-' && operation!== '*' && operation!== '/')
        throw new TypeError('Operation must be +, -, *, or /');

}

const operate = (num1 = null, num2 = null, operation = null) => {

    validate(num1, num2, operation);

    switch (operation) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 0;
    }
};

module.exports = { operate, add, subtract, multiply, divide };