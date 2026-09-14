const repeatString = function(string, num) {
    // Check if the number is negative
  if (num < 0) {
    return '';
  }

  // Initialize an empty string to hold the result
  let result = '';
  // Loop through the number of times specified and concatenate the string
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
};


console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
