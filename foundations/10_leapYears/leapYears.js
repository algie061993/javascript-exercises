const leapYears = function(year) {
return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};


console.log(leapYears(2000)); // true
console.log(leapYears(1900)); // false
console.log(leapYears(2004)); // true
console.log(leapYears(2001)); // false

// Do not edit below this line
module.exports = leapYears;
