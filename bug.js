function foo(x) {
  if (x == null) {
    return 0; //This will not work as expected
  } else {
    return x * 2; 
  }
}
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(0)); // Output: 0