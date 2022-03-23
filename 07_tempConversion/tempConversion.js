const ftoc = function(tempInFahrenheit) {
 return Math.round((tempInFahrenheit - 32) * (5/9) * 10) / 10;
};

const ctof = function(tempInCelsius) {
 return Math.round((tempInCelsius * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
