function convertTemperature(celsius) {
    let result = [];

    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 1.80 + 32;

    result.push(kelvin.toFixed(5));
    result.push(fahrenheit.toFixed(5));

    return result;
}

console.log(convertTemperature(36.50))