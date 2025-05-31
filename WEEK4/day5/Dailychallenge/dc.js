function isAnagram(str1, str2) {

  const normalize = str => str.replace(/\s+/g, '').toLowerCase();

  const formattedStr1 = normalize(str1);
  const formattedStr2 = normalize(str2);

  // Anagrams must have the same letters in any order
  // So we sort the letters and compare the results
  const sortedStr1 = formattedStr1.split('').sort().join('');
  const sortedStr2 = formattedStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}
console.log(isAnagram("Astronomer", "Moon starer"));     // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("Hello", "Olelh"));                 // true
console.log(isAnagram("Hi there", "Bye there"));          // false
