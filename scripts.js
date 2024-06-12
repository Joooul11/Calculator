let opButtons = document.querySelectorAll('.op-button');
let buttonsNumeric = document.querySelectorAll('.num-button');
let displayDiv = document.querySelector('div.display');
let equalBtn = document.getElementById(`equals`);
let clearBtn = document.getElementById(`clear`);
let decimalBtn = document.getElementById(`decimal`);
let backspaceBtn = document.getElementById(`backspace`);

let firstnumber = NaN;
let secondnumber = NaN;
let operator = '';
let result = NaN

function handleButtonClick(event){
    button = event.target;
    currentContent = displayDiv.innerHTML;
    displayDiv.innerHTML = currentContent + button.value;
}

function handleBackspaceButtonClick(event){
    let currentContent = displayDiv.innerHTML;
    displayDiv.innerHTML = currentContent.slice(0, -1);
}

function handleOpButtonClick(event){
    
        let currentContent = displayDiv.innerHTML;
        firstnumber = parseAndRound(currentContent);
        console.log('First number:', firstnumber); // Add this
        operator = event.target.value;
        console.log('Operator:', operator); // And this
        displayDiv.innerHTML = `${currentContent} ${operator} `;
        return;
    

}

function handleEqualButtonClick(event){
    let currentContent = displayDiv.innerHTML;
    secondnumber = parseAndRound(savesecondnumber(currentContent));
    console.log('Second number:', secondnumber); // Add this
    result = parseAndRound(operate(operator, firstnumber, secondnumber));
    console.log('Result:', result); // And this
    displayDiv.innerHTML = ` ${currentContent} = ${result} `;
    firstnumber = result;
}




function savesecondnumber() {
    let string1 = displayDiv.innerHTML;
    let string2 = ''
    console.log('String1:', string1); // Add this
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] == '+' || string1[i] == '-' || string1[i] == '*' || string1[i] == '/') {
            string2 = string1.slice(i+1, string1.length);
            secondnumber = parseFloat(string2);
        }
    }
    console.log('String2:', string2); // And this
    console.log('Second number:', secondnumber); // And this
    
    return secondnumber;
}

function parseAndRound(str) {
    let num = parseFloat(str);
    if (isNaN(num)) {
        return NaN;
    }
    return parseFloat(num.toFixed(3));
}




function handledecimalButtonClick(event){
    let currentContent = displayDiv.innerHTML;
    displayDiv.innerHTML = currentContent + '.';

}


decimalBtn.addEventListener(`click`, handledecimalButtonClick);


function clearDisplay(){
    displayDiv.innerHTML = '';
    firstnumber = 0;
    secondnumber = 0;
}

clearBtn.addEventListener(`click`, clearDisplay);

buttonsNumeric.forEach(button =>{
    button.addEventListener(`click`, handleButtonClick);
})

opButtons.forEach(button =>{
    button.addEventListener(`click`, handleOpButtonClick)
})

equalBtn.addEventListener(`click`, handleEqualButtonClick)

backspaceBtn.addEventListener(`click`, handleBackspaceButtonClick);

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





