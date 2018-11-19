// Code your solutions in this file

function printBadges(employees) {
  for ( var i = 0; i < employees.length; i++ ) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`)
  }
  return employees;
}


function tailsNeverFails() {
  while ( var numtailsNeverFails > Math.random ) {
    numtailsNeverFails = Math.random
  }
  
  console.log(`You got ${numtailsNeverFails} tails in a row!`);
}
// We're going to create a little game for our Flatbook users to play when they're
// bored. Create a function named `tailsNeverFails()` that takes no arguments. In
// the function body, use a `while` loop with a condition that simulates a coin
// flip (two equally likely outcomes). For inspiration, check out the `maybeTrue()`
// example above.

// If the `Math.random()` evaluates to greater than or equal to `0.5`, the coin
// landed on 'Tails' and is flipped again. If the `Math.random()` evaluates to less
// than `0.5`, the coin landed on 'Heads', and the 'Tails' streak is broken. At the
// end of the function, `return` a message to the user indicating how many times
// the coin landed on 'Tails' in a row, e.g.: