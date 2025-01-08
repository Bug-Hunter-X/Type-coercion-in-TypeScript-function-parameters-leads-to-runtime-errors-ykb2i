# Type Coercion Bug in TypeScript

This repository demonstrates a common error in TypeScript where type coercion can lead to unexpected runtime errors.

The `add` function is declared to accept two numbers and return their sum. However, the code allows for a string to be passed as an argument, causing type coercion at runtime which could result in an incorrect sum or a runtime exception.

## How to reproduce

1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the compiled JavaScript code using `node bug.js`.
4. Observe the runtime error.

## Solution

The solution is to be more careful with the input validation and use appropriate type guards or assertions. See the `bugSolution.ts` file for example. 

## Lessons Learned

* Type safety in TypeScript does not eliminate the possibility of runtime errors. 
* Type coercion can lead to unexpected behaviour and errors. Input validation is crucial to avoid this.