//Declare all variables

let resultButton = document.querySelector('#resultButton')
let clearButton = document.querySelector('#clearButton')
let weightInput = document.querySelector('#weight')
let heightInput = document.querySelector('#height')
let resultDisplay = document.querySelector('#result')

//Add event listeners 

resultButton.addEventListener('click', calculateBMI)
clearButton.addEventListener('click', clearInputs)

//Create function to calculate BMI

function calculateBMI () {
    let weight = parseFloat(weightInput.value)
    let height = parseFloat(heightInput.value)

    if (isNaN(weight) || isNaN(height)) {
        resultDisplay.textContent = 'We understand you may not be all there but please enter valid numbers for height and weight darling';
        return;
        
    }
    height /= 100;
    let bmi = weight / (height * height);
    resultDisplay.textContent = 'Your BMI is: ' + bmi.toFixed(2);

}

//Create function to clear inputs
function clearInputs () {
    weightInput.value = "";
    heightInput.value = "";
    resultDisplay.textContent = "";

}
