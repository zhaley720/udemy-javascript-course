'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  
  // Data needed for first part of the section
  const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  }
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  
  // openingHours: {
    //   thu: {
      //     open: 12,
      //     close: 22,
      //   },
      //   fri: {
        //     open: 11,
        //     close: 23,
        //   },
        //   sat: {
          //     open: 0, // Open 24 hours
          //     close: 24,
          //   },
          // },
          
  order(starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

const rest1 = {
  name : `capri`,
  numGuests: 0
};

const rest2 = {
  name: `la piazza`,
  owner: `giovanni rossi`
};



// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// // const [p, q, r] = [8, 9];
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);



// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Via del Sole, 21`,
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: `Via del Sole, 21`,
//   starterIndex: 1
// });



// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = `jonas`;
// const letters = [...str, ` `, `s.`];
// console.log(letters);
// console.log(...str);

// // real world example
// const ingredients = [prompt(`let's make pasta! ingredient 1?`), prompt(`ingredient 2?`), prompt(`ingredient 3?`)];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // objects
// const newRestaraunt = { foundedIn: 1998, ...restaurant, founder: `guiseppe` };
// console.log(newRestaraunt);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = `ristorante roma`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);



// // spread, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// // rest, becouse on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // functions
// const add = function(...numbers) {
  //   let total = 0;
  //   for (let i = 0; i < numbers.length; i++) {
    //     total += numbers[i];
    //   }
    //   console.log(total);
    // };
    
    // add(2, 3);
    // add(5, 3, 7, 2);
    // add(8, 2, 5, 3, 2, 1, 4);
    
    // const x = [23, 5, 7];
    // add(...x);
    
    // restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
    
    
    
    // console.log(`--- OR ---`);
    // console.log(3 || `jonas`);
// console.log(`` || `jonas`);
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || `` || `hello` || 23 || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`--- AND ---`);
// console.log(0 && `jonas`);
// console.log(7 && `jonas`);
// console.log(`hello` && 23 && null && `jonas`);

// if (restaurant.orderPizza) {
  //   restaurant.orderPizza(`mushrooms`, `spinach`);
  // }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);



// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);



// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or ondefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && `<ANONYMOUS>`;
// // rest2.owner = rest2.owner && `<ANONYMOUS>`;
// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;


// console.log(rest1);
// console.log(rest2);



// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // console.log([...menu.entries()]); 



// console.log(restaurant);



// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // without optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`the restaurant opens at ${open} on ${day}`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? `method does not exist`);

// console.log(restaurant.orderRisotto?.(0, 1) ?? `method does not exist`);

// // arrays
// const users = [{name: `jonas`, email: `hello@jonas.io`}];

// console.log(users[0].name ?? `users array empty`);



// // property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // property values
// const values = Object.values(openingHours);
// console.log(values);

// // entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// console.log(`--------------------`);

// for (const [key, {open, close}] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }



// const ordersSet = new Set([
//   `pasta`,
//   `pizza`,
//   `pizza`,
//   `risotto`,
//   `pasta`,
//   `pizza`
// ]);
// console.log(ordersSet);

// console.log(new Set(`jonas`));

// console.log(ordersSet.size);
// console.log(ordersSet.has(`pizza`));
// console.log(ordersSet.has(`bread`));

// ordersSet.add(`garlic bread`);
// ordersSet.add(`garlic bread`);
// ordersSet.delete(`risotto`);
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);
// console.log(new Set('jonasschmedtmann').size);



// // NEW SET OPERATIONS AS OF ES2025!!!
// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('intersection :', commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = mexicanFoods.union(mexicanFoods);
// console.log('union :', italianMexicanFusion);

// // console.log([...italianFoods, ...mexicanFoods]);
// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('difference italian :', uniqueItalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('difference mexican :', uniqueMexicanFoods);

// const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));



// const rest = new Map();
// rest.set('name', 'classico italiano');
// rest.set(1, 'firenze, italy');
// console.log(rest.set(2, 'lisbon, portugal'));

// rest
//   .set('categories', ['italian', 'pizzeria', 'vegetarian', 'organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get('1'));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// // rest.set([1, 2], 'test');
// const arr = [1, 2];
// rest.set(arr, 'test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// // console.log(rest.get([1, 2]));
// console.log(rest.get(arr));



// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'correct!'],
//   [false, 'try again!']
// ]);

// console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// // convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());



// const airline =  `TAP Air Portugal`;
// const plane = `A320`;

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('you got the middle seat');
//   else console.log('you got lucky');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));



// const airline = `TAP Air Portugal`;

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// // fix capitalization in name
// const passenger = `jOnAS`;
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // comparing emails
// const email = `hello@jonas.io`;
// const loginEmail = `   Hello@Jonas.Io \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = `288,97£`;
// const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23. Boarding door 23!`;

// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// const plane = `Airbus A320neo`;
// console.log(plane.includes(`A320`));
// console.log(plane.includes(`Boeing`));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the NEW Airbus family');

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) console.log('You are NOT allowed on board!');
//   else console.log('Welcome aboard!');
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and a camera');
// checkBaggage('Got some snacks and a gun for protection');



console.log(`a+very+nice+string`.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastname] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
capitalizeName('zachary haley');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(77826915));
console.log(maskCreditCard(54497542494348484612));
console.log(maskCreditCard('6784662464842498464642468464333'));

// repeat
const message2 = 'bad weather... all departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);