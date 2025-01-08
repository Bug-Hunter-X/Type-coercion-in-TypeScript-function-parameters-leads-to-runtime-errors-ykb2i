function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: both parameters must be numbers');
  }
  return a + b;
}

const result = add(1, 2); // Correct usage
console.log(result); // Output: 3

// const result2 = add("1", 2); // This will throw an error now