// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// FUNDAMENTALS STRINGS ARRAYS




function abbrevName(name){
let initialName = name.split(' ');


let firstName = initialName[0].split('');
let surName = initialName[1].split('');
let arrayName = Array.from(initialName[0]);
let arraySurname = Array.from(initialName[1]).toUppercase();
console.log(arrayName);
console.log(arraySurname);


return `${arrayName[0]}.${arraySurname[0]}`;
// // console.log(firstName);
// initials.push(firstName[0]);
// initials.push(surName[0]);
// console.log(initials);
// // let initialsString = initials.join('.');
// console.log(typeof(initials));
// // console.log(initialsString);
// console.log(initialName);
// console.log(typeof(initialName));
// console.log(initialName[0]);
// // let initials.from(arguments);
}
// console.log(initialsString);

console.log(abbrevName("Sam Harris"));