/* Thoughts on the top rated answer on stackoverflow

* I'd prefer to have the opening curly brace on the line above, not on its own line
* Line 6: especially for a task like this, I would hope to see something surpisingly simple as
opposed to this solution, which is basically the opposite of that.
* Line 6: ok, so the function is returning a new array with a test method on (number), then a
ternary operator, value-if-true, value-if-false, then 'joining' the 0s as a string in front of the number
* Wow, ok. If that works, fine, but I prefer a more simple solution, without an array, something another
person could glance at and immediatly see how it works.

*/
var zeroFill = function(digits, num) {
  totalDigits = ('0'.repeat(digits) + num).slice(-digits);
  console.log(totalDigits);
}

// tests
zeroFill(6,5);
zeroFill(10,222223);
