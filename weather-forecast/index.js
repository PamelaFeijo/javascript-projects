const kelvin = 293;
console.log(`The temperature is ${kelvin} degrees Kelvin.`);

// Convert to Celsius
const celsius = kelvin - 273;
console.log(`In Celsius, the temperature is ${celsius} degrees.`);

// Convert to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`Which is ${fahrenheit} degrees Fahrenheit.`)

// Convert to Newton
let newton = celsius * (33/100)
// Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);