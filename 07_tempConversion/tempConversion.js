const convertToCelsius = function(fahrenheit) {
  if (typeof fahrenheit !== 'number') return "ERROR"; // Handle invalid input
  // Convert Fahrenheit to Celsius and round to one decimal place
  return parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  if (typeof celsius !== 'number') return "ERROR"; // Handle invalid input
  // Convert Celsius to Fahrenheit and round to one decimal place
  return parseFloat((celsius * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
