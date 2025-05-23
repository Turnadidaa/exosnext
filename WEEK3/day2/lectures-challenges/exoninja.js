// <!-- check whether a string is blank or not -->

function isBlank(str) {
  return str.trim() === '';
}

// Tests
console.log(isBlank(''));        // true
console.log(isBlank('   '));     // true (des espaces seulement)
console.log(isBlank('abc'));     // false
console.log(isBlank(' abc '));   // false
