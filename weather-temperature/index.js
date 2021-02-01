//The forecast today is 293*
const kelvin = 293;
console.log(`The temperature today is ${kelvin} degrees Kelvin.`);

//Celsius is 273 - kelvin
let celsius = kelvin - 273;
console.log(`This temperature is ${celsius} degrees Celsius.`)

//Equation to calculate Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The same temperature is ${newton} degrees Newton.`)

//Equation  to calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`Or ${fahrenheit} degrees Fahrenheit.`)