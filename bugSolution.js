function add(a, b) {
  // Type checking before performing the operation.
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Error: Invalid input types";
  }
}

function subtract(a, b) {
  if (typeof a === 'number' && typeof b === 'number'){
    return a - b;
  } else {
    return "Error: Invalid input types";
  }
}

function multiply(a, b) {
  if (typeof a === 'number' && typeof b === 'number'){
    return a * b;
  } else {
    return "Error: Invalid input types";
  }
}

function divide(a, b) {
  if (typeof a === 'number' && typeof b === 'number' && b !== 0) {
    return a / b;
  } else {
    return "Error: Invalid input types or division by zero";
  }
}

console.log(add(1, "1")); // Output: Error: Invalid input types
console.log(subtract(1, "1")); // Output: Error: Invalid input types
console.log(multiply(1, "1")); // Output: Error: Invalid input types
console.log(divide(1, "1")); // Output: Error: Invalid input types