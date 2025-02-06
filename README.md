# Incorrect Handling of Null and Undefined Values using Loose Comparison
This repository demonstrates a common JavaScript error related to the loose comparison operator (==) and its unexpected behavior when dealing with null and undefined values.

## Bug Description
The provided JavaScript code uses loose comparison (==) to check if the input parameter 'x' is null.  However, this comparison does not accurately distinguish between null, undefined, and 0.  This leads to unexpected outputs when the function is called with undefined or 0, both of which evaluate to false in the loose comparison with null.

## Solution
The solution uses strict equality (===) to explicitly check for null and undefined values, fixing the unintended behavior.

## How to run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a code editor.
3. Run the files in a JavaScript environment (e.g., Node.js or a browser's console).