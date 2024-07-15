function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operator'
    }
    return result;
}


console.log(calculator(2, 2, '+'));
console.log(calculator(8, 2, '-'));
console.log(calculator(5, 5, '*'));
console.log(calculator(10, 2, '/'));
console.log(calculator(1, 2, 'x'));