'use strict';

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // // ES5 version of adding default values
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {flightNum, numPassengers, price};
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);



// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 24739479284) {
//         alert('check in');
//     } else{
//         alert('wrong passport!');
//     }
// }

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);



// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function() {
//     console.log('🖐️');
// };

// document.body.addEventListener('click', high5);
// ['jonas', 'martha', 'adam'].forEach(high5);



// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// };

// const greeterHey = greet('Hey');

// greeterHey('jonas');
// greeterHey('steven');

// greet('hello')('david');

// const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// greet2(`what's up`)('trey');



const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'jonas schmedtmann');
lufthansa.book(639, 'john smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

};

const book = lufthansa.book;

// does NOT work
// book(23, 'sarah williams');

book.call(eurowings, 23, 'sarah williams');
console.log(eurowings);

book.call(lufthansa, 293, 'mary cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
};

book.call(swiss, 583, 'mary cooper');
console.log(swiss);

// apply method
const flightData = [583, 'george cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// apply is not used frequently anymore because you can just do this
book.call(swiss, ...flightData);