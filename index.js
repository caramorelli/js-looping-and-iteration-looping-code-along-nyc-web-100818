// Code your solutions in this file

function printBadges(employees) {
  for ( var i = 0; i < employees.length; i++ ) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`)
  }
  return employees;
}


function tailsNeverFails() {
  var count = 0
  var numtailsNeverFails = 1;
  while ( numtailsNeverFails >= 0.5 ) {
    numtailsNeverFails = Math.random(0, 1);
    count += 1;
  }
  return `You got ${count - 1} tails in a row!`;
}