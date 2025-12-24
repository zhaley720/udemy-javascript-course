'use strict'

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



// const friends = ['michael', 'steven', 'peter'];
// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('john');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);


// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('steven'));
// console.log(friends.indexOf('bob'));

// friends.push(23);
// console.log(friends.includes('steven'));
// console.log(friends.includes('bob'));
// console.log(friends.includes(23));

// if (friends.includes('steven')) {
//     console.log('you have a friend called steven');
// }



// const jonas = {
//     firstName: `jonas`,
//     lastName: `schmedtmann`,
//     age: 2037 - 1991,
//     job: `teacher`,
//     friends: [`michael`, `peter`, `steven`]
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas[`lastName`]);

// const nameKey = `Name`;
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);

// const interestedIn = prompt(`what do you want to know about jonas? choose between firstName, lastName, age, job, and friends`);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log`wrong request!`
// }

// jonas.location = `portugal`;
// jonas[`twitter`] = `@jonasschmedtman`;
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



// const jonas = {
//     firstName: `jonas`,
//     lastName: `schmedtmann`,
//     birthYear: 1991,
//     job: `teacher`,
//     friends: [`michael`, `peter`, `steven`],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function() {
//         // console.log(this);
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`
//     }
// };

// // console.log(jonas.calcAge(1991));
// // console.log(jonas[`calcAge`](1991));

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age); 

// console.log(jonas.getSummary());



// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
// }



// const jonas = [
//     `jonas`,
//     `schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`michael`, `peter`, `steven`],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log(`--- ONLY STRINGS ---`);
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== `string`) continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log(`--- BREAK WITH NUMBER ---`);
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === `number`) break;

//     console.log(jonas[i], typeof jonas[i]);
// }



// const jonas = [
//     `jonas`,
//     `schmedtmann`,
//     2037 - 1991,
//     `teacher`,
//     [`michael`, `peter`, `steven`],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`exercise ${exercise}: lifting weight repetition ${rep}`);
//     }
// }



let rep = 1;
while (rep <= 10) {
    console.log(`lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`loop is about to end...`);
}