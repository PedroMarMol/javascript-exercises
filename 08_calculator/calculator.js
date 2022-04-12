const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const sum = array => array.reduce((a,b) => a+b, 0);

const multiply = array => (array.length ? array.reduce((a,b) => a*b) : 0);

const power = (a,b) =>  Math.pow(a,b);

const factorial = function(number) {
	var factorialTotal = 1;
  for (var i=number; i>0; i--){
    factorialTotal *= i;
  }
  return factorialTotal;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
