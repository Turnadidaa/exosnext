
function returnNumbers(str) {
  const matches = str.match(/\d/g);
  if (!matches) return "";
  return matches.join('');
}

// 🔽 Test de la fonction
console.log(returnNumbers("k5k3q2g5z6x9bn")); // ➤ 532569
console.log(returnNumbers("abc"));           // ➤ ""
console.log(returnNumbers("abc123def456"));  // ➤ 123456
