let opButtons = document.querySelectorAll('.op-button');
let buttonsNumeric = document.querySelectorAll('.num-button');
let displayDiv = document.querySelector('div.display');
let equalBtn = document.getElementById(`equals`);


function handleButtonClick(event){
    let button = event.target;
    let currentContent = displayDiv.innerHTML;
    displayDiv.innerHTML = currentContent + button.value;
}



buttonsNumeric.forEach(button =>{
    button.addEventListener(`click`, handleButtonClick);
})

opButtons.forEach(button =>{
    button.addEventListener(`click`, handleButtonClick)
})

equalBtn.addEventListener(`click`, ()=>{
    displayDiv.innerHTML = finalResult;
})

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
    return a / b;
}

let firstnumber = 0;
let secondnumber = 0;
let operator = '';

function operate(operator, a, b){
    if(operator === '+'){
        return add(a,b);
    }else if(operator === '-'){
        return subtract(a,b);
    }else if(operator === '*'){
        return multiply(a,b);
    }else if(operator === '/'){
        return divide(a,b);
    }
}


