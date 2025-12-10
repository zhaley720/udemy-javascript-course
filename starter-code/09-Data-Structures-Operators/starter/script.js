'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

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



