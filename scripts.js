let opButtons = document.querySelectorAll('.op-button');
let buttonsNumeric = document.querySelectorAll('.num-button');
let displayDiv = document.querySelector('div.display');
let equalBtn = document.getElementById(`equals`);


function handleButtonClick(event){
    let button = event.target;
    let currentContent = displayDiv.innerHTML;
    displayDiv.innerHTML = currentContent + button.value;
}

function handleOperationButton{
    
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

function finalResult {

}