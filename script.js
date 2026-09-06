// Temperature Converter JavaScript

// DOM Elements
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convert-btn');
const errorMessage = document.getElementById('error-message');
const celsiusResult = document.getElementById('celsius-result');
const fahrenheitResult = document.getElementById('fahrenheit-result');
const kelvinResult = document.getElementById('kelvin-result');
const absoluteZeroWarning = document.getElementById('absolute-zero-warning');

// Absolute zero values in different units
const ABSOLUTE_ZERO = {
    celsius: -273.15,
    fahrenheit: -459.67,
    kelvin: 0
};

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return ((fahrenheit - 32) * 5/9) + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5) + 32;
}

// Validate input
function validateInput(value) {
    if (value === '' || isNaN(value)) {
        errorMessage.textContent = 'Please enter a valid number';
        return false;
    }
    errorMessage.textContent = '';
    return true;
}

// Check for absolute zero violation
function checkAbsoluteZero(value, unit) {
    const absoluteZeroValue = ABSOLUTE_ZERO[unit];
    if (value < absoluteZeroValue) {
        absoluteZeroWarning.textContent = `⚠️ Warning: Temperature is below absolute zero (${absoluteZeroValue} ${unit === 'celsius' ? '°C' : unit === 'fahrenheit' ? '°F' : 'K'})`;
        absoluteZeroWarning.classList.add('show');
        return true;
    }
    absoluteZeroWarning.classList.remove('show');
    return false;
}

// Convert temperature based on input unit
function convertTemperature(value, unit) {
    let celsius, fahrenheit, kelvin;
    
    switch(unit) {
        case 'celsius':
            celsius = value;
            fahrenheit = celsiusToFahrenheit(value);
            kelvin = celsiusToKelvin(value);
            break;
        case 'fahrenheit':
            fahrenheit = value;
            celsius = fahrenheitToCelsius(value);
            kelvin = fahrenheitToKelvin(value);
            break;
        case 'kelvin':
            kelvin = value;
            celsius = kelvinToCelsius(value);
            fahrenheit = kelvinToFahrenheit(value);
            break;
    }
    
    return { celsius, fahrenheit, kelvin };
}

// Display results
function displayResults(celsius, fahrenheit, kelvin) {
    celsiusResult.textContent = celsius.toFixed(2);
    fahrenheitResult.textContent = fahrenheit.toFixed(2);
    kelvinResult.textContent = kelvin.toFixed(2);
}

// Clear results
function clearResults() {
    celsiusResult.textContent = '--';
    fahrenheitResult.textContent = '--';
    kelvinResult.textContent = '--';
    absoluteZeroWarning.classList.remove('show');
}

// Main conversion function
function handleConversion() {
    const value = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    
    // Validate input
    if (!validateInput(value)) {
        clearResults();
        return;
    }
    
    // Check for absolute zero violation
    checkAbsoluteZero(value, unit);
    
    // Convert temperature
    const results = convertTemperature(value, unit);
    
    // Display results
    displayResults(results.celsius, results.fahrenheit, results.kelvin);
}

// Event listeners
convertBtn.addEventListener('click', handleConversion);

// Allow Enter key to trigger conversion
temperatureInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleConversion();
    }
});

// Clear error message when input changes
temperatureInput.addEventListener('input', function() {
    if (errorMessage.textContent) {
        errorMessage.textContent = '';
    }
});
