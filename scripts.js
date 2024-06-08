let opButtons = document.querySelectorAll('.op-button');
let buttonsNumeric = document.querySelectorAll('.num-button');
let displayDiv = document.querySelector('div.display');
let equalBtn = document.getElementById(`equals`);
let clearBtn = document.getElementById(`clear`);
let decimalBtn = document.getElementById(`decimal`);

let firstnumber = 0;
let secondnumber = 0;
let operator = '';

function handleButtonClick(event){
    button = event.target;
    currentContent = displayDiv.innerHTML;
    displayDiv.innerHTML = currentContent + button.value;
}

function parseAndRound(str) {
    let num = parseFloat(str);
    if (isNaN(num)) {
        return NaN;
    }
    return parseFloat(num.toFixed(3));
}

function handleOpButtonClick(event){
    let currentContent = displayDiv.innerHTML;
    firstnumber = parseAndRound(currentContent);
    console.log('First number:', firstnumber); // Add this
    operator = event.target.value;
    console.log('Operator:', operator); // And this
    displayDiv.innerHTML = '';
}


function handleEqualButtonClick(event){
    let currentContent = displayDiv.innerHTML;
    secondnumber = parseAndRound(currentContent);
    console.log('Second number:', secondnumber); // Add this
    let result = operate(operator, firstnumber, secondnumber);
    console.log('Result:', result); // And this
    displayDiv.innerHTML = result;
}


function handledecimalButtonClick(event){
    let currentContent = displayDiv.innerHTML;
    displayDiv.innerHTML = currentContent + '.';

}


decimalBtn.addEventListener(`click`, handledecimalButtonClick);


function clearDisplay(){
    displayDiv.innerHTML = '';
}

clearBtn.addEventListener(`click`, clearDisplay);

buttonsNumeric.forEach(button =>{
    button.addEventListener(`click`, handleButtonClick);
})

opButtons.forEach(button =>{
    button.addEventListener(`click`, handleOpButtonClick)
})

equalBtn.addEventListener(`click`, handleEqualButtonClick)

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b == 0){
        return 'Error';
    }
    return a / b;
}

function operate(operator, a, b){
    if(operator == '+'){
        return add(a,b);
    }else if(operator == '-'){
        return subtract(a,b);
    }else if(operator == '*'){
        return multiply(a,b);
    }else if(operator == '/'){
        return divide(a,b);
    }
}





// design  a function when numeric button is clicked 
// display the number in the display div and if operator button is clicked it should save the number as a variable


