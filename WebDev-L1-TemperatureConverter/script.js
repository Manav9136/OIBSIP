const temperature = document.getElementById("temperature");
const unit = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const errorMessage = document.getElementById("errorMessage");

convertBtn.addEventListener("click", function () {

    let temp = parseFloat(temperature.value);
    let selectedUnit = unit.value;

    errorMessage.textContent = "";

    if (temperature.value === "") {
        errorMessage.textContent = "Please enter a temperature.";
        return;
    }

    if (isNaN(temp)) {
        errorMessage.textContent = "Please enter a valid number.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (selectedUnit) {

        case "celsius":

            if (temp < -273.15) {
                errorMessage.textContent = "Temperature cannot be below absolute zero.";
                return;
            }

            celsius = temp;
            fahrenheit = (temp * 9 / 5) + 32;
            kelvin = temp + 273.15;
            break;

        case "fahrenheit":

            if (temp < -459.67) {
                errorMessage.textContent = "Temperature cannot be below absolute zero.";
                return;
            }

            fahrenheit = temp;
            celsius = (temp - 32) * 5 / 9;
            kelvin = celsius + 273.15;
            break;

        case "kelvin":

            if (temp < 0) {
                errorMessage.textContent = "Temperature cannot be below absolute zero.";
                return;
            }

            kelvin = temp;
            celsius = temp - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;
            break;

    }

    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";

});