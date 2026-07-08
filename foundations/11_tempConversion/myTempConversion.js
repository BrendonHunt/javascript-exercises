function celciusToFahrenheit(celsius) {
    let Fahrenheit = (celsius *1.8)+32
    return Fahrenheit
}
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    celsius = Math.round(celsius * 10) / 10;
    return celsius;
}

module.exports = {
    celciusToFahrenheit: () => console.log(celciusToFahrenheit(0)),
    fahrenheitToCelsius: () => console.log(fahrenheitToCelsius(32))
};