let opButtons = document.querySelectorAll('.op-button');
let buttonsNumeric = document.querySelectorAll('.num-button');
let displayDiv = document.querySelector('div.display');


function divion (){}

function multiplication(){}

function subtraction(){}

function equal (){}

function addition (){}

function decmial(){}


// Add click event listener to each button
buttonsNumeric.forEach(button => {
    button.addEventListener('click', () => {
        let currentContent = displayDiv.innerHTML;
        displayDiv.innerHTML = currentContent + button.value;
    });
});