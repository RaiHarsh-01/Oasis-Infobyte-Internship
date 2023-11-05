document.addEventListener('DOMContentLoaded', function () {
    const inputTemperature = document.getElementById('inputTemperature');
    const unit = document.getElementById('unit');
    const convertButton = document.getElementById('convertButton');
    const convertedTemperature = document.getElementById('convertedTemperature');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(inputTemperature.value);
        if (isNaN(temperature)) {
            convertedTemperature.innerText = 'Please enter a valid temperature.';
            return;
        }

        const selectedUnit = unit.value;
        let result = '';

        if (selectedUnit === 'celsius') {
            const fahrenheitValue = (temperature * 9/5) + 32;
            result = ` ${fahrenheitValue.toFixed(2)}°F`;
        } else if (selectedUnit === 'fahrenheit') {
            const celsiusValue = (temperature - 32) * 5/9;
            result = ` ${celsiusValue.toFixed(2)}°C`;
        }

        convertedTemperature.value = result;
    });
});

