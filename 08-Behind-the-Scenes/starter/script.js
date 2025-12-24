'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const str = `oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }

//             output = 'NEW OUTPUT';
//         }
//         // console.log(str);
//         console.log(millenial);
//         // add(2,3);
//         console.log(output);
//     }
//     printAge();

//     return age;
// }

// const firstName = `jonas`;
// calcAge(1991);
// calcAge(2005);



// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = `jonas`;
// let job = `teacher`;
// const year = 1991;

// // functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// // const addExpr = function(a, b) {
// //     return a + b;
// // }

// // const addArrow = (a, b) => a + b;

// var addExpr = function(a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// // example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log(`all products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;



// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1991);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };

// jonas.calcAge();

// const matilda = {
//     year: 2017
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// // f();



// var firstName = `matilda`;

// const jonas = {
//     firstName: `jonas`,
//     year: 1991,
//     calcAge: function() {
//         // console.log(this);
//         console.log(2037 - this.year);

//         // // solution 1
//         // const self = this; // or use "that"
//         // const isMillenial = function() {
//         //     // console.log(this.year >= 1981 && this.year <= 1996);
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // };

//         // solution 2
//         const isMillenial = () => {
//             // console.log(this.year >= 1981 && this.year <= 1996);
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };

//         isMillenial();
//     },
//     greet: () => console.log(`hey ${this.firstName}`)
// };

// jonas.greet();
// console.log(this.firstName);
// jonas.calcAge();

// const addExpr = function(a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     a + b;
// }

// addArrow();



const jessica = {
    firstName: `jessica`,
    lastName: `williams`,
    age: 27
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedJessica = marryPerson(jessica);

// const marriedJessica = jessica;
// marriedJessica.lastName = `davis`;

console.log(`jessica : `, jessica);
console.log(`married jessica : `, marriedJessica);

// SHALLOW COPY
// nested this.family object is still a refference in the copied object

const jessica2 = {
    firstName: `jessica`,
    lastName: `williams`,
    age : 27,
    family: [`alice`, `bob`]
};

const jessica2Copy = {...jessica2};
jessica2Copy.lastName = `davis`;

jessica2Copy.family.push(`mary`);
jessica2Copy.family.push(`john`);

console.log(`jessica2 : `, jessica2);
console.log(`jessica2Copy : `, jessica2Copy);

// deep copy
const jessica2Clone = structuredClone(jessica2);
jessica2Clone.family.push(`hannah`);
jessica2Clone.family.push(`jimmy james`);

console.log(`original : `, jessica2);
console.log(`clone : `, jessica2Clone);