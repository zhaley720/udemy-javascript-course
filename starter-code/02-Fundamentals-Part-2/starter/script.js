// function logger() {
//     console.log(`my name is zak`);
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);



// // able to hoist function declarations
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const calcAge2 = function (birthYear) {
//     return 2037 = birthYear;
// }
// // unable to hoist function expressions
// const age2 = calcAge2(1991);

// console.log(age1, age2);



// // function expression
// const calcAge3 = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow function
// const calcAge4 = birthYear => 2037 - birthYear;
// const age4 = calcAge4(1991);
// console.log(age4);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, `zak`));
// console.log(yearsUntilRetirement(1985, `sam`));



// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3)); 



// const friend1= `michael`;
// const friend2 = `steven`;
// const friend3 = `peter`;

// const friends = [`michael`, `steven`, `peter`];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `jay`;
// console.log(friends);

// const firstName = `jonas`;
// const jonas = [firstName, `schmedtmann`, 2037 - 1991, `teacher`, friends];
// console.log(jonas);