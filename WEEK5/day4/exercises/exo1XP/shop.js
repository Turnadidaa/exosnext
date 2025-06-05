
const products = require('./products');

// Function to find a product by name
function findProductByName(name) {
  const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
  return product ? product : `❌ Product "${name}" not found.`;
}

// Call the function with different names
console.log(findProductByName("Laptop"));
console.log(findProductByName("Running Shoes"));
console.log(findProductByName("Desk Chair"));
console.log(findProductByName("Smartphone")); // Not in the list
