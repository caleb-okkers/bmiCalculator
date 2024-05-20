// Declare all variables
let resultButton = document.querySelector('#resultButton');
let clearButton = document.querySelector('#clearButton');
let weightInput = document.querySelector('#weight');
let heightInput = document.querySelector('#height');
let resultDisplay = document.querySelector('#result');
let statusDisplay = document.querySelector('#status');

// Add event listeners 
resultButton.addEventListener('click', calculateBMI);
clearButton.addEventListener('click', clearInputs);

// Create function to calculate BMI
function calculateBMI() {
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        resultDisplay.textContent = 'Please enter valid numbers for height and weight.';
        return;
    }

    height /= 100;
    let bmi = weight / (height * height);
    let output;

    if (bmi <= 18.4) {
        output = "You are underweight, go eat a burger 🍔";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        output = "Well done, you are normal 🏅";
    } else if (bmi >= 25 && bmi <= 39.9) {
        output = "Eat some veggies, take a jog, you are overweight 🏃‍♂️";
    } else {
        output = "Stop being fat, obesity has you ☠️";
    }

    resultDisplay.textContent = 'Your BMI is: ' + bmi.toFixed(2) + ". ";
    statusDisplay.textContent = output;
}

// Create function to clear inputs
function clearInputs() {
    weightInput.value = "";
    heightInput.value = "";
    resultDisplay.textContent = "";
    statusDisplay.textContent = "";
}