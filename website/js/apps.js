const num1_input = document.getElementById('num1');
const num2_input = document.getElementById('num2');
const result_input = document.getElementById('result');

function add(num1, num2){
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2){
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

function divide(num1, num2){
    let result = num1 / num2;
    return result;
}

function modulus(num1, num2){
    let result = num1 % num2;
    return result;
}

function getNum1() {
    return parseFloat(num1_input.value);
}

function getNum2() {
    return parseFloat(num2_input.value);
}

function addClick() {
    let x = getNum1();
    let y = getNum2();
    let result = add(x, y);
    result_input.value = result;
}

function subClick() {
    let x = getNum1();
    let y = getNum2();
    let result = subtract(x, y);
    result_input.value = result;
}

function multClick() {
    let x = getNum1();
    let y = getNum2();
    let result = multiply(x, y);
    result_input.value = result;
}

function divClick() {
    let x = getNum1();
    let y = getNum2();
    let result = divide(x, y);
    result_input.value = result;
}

function modClick() {
    let x = getNum1();
    let y = getNum2();
    let result = modulus(x, y);
    result_input.value = result;
}