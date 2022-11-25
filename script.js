'use strict';

// const createBooking = function (flightNum, numPassenger = 1, price = 654) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
// };

// createBooking('KH123');
// createBooking('KH123', 4, 765);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   password: 4345354376,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger;

//   if (passenger.password === 4345354376) {
//     alert('Checked in');
//   } else {
//     alert('Wrong password!');
//   }

//   console.log(flightNum);
// };
// console.log(flight);
// checkIn(flight, jonas);
// Call and apply method

// const lutfhance = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   books(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}
//     `);
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lutfhance.books(239, 'Jonas Schmedtmann');
// lutfhance.books(635, 'John Smith');
// console.log(lutfhance);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lutfhance.books;

// DOES not Work
// book(23, 'Sarah Williams');

// Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lutfhance, 239, 'Mary Cooper');
// console.log(lutfhance);

// Apply method
// const flightData = [538, 'George Cooper'];
// book.apply(eurowings, flightData);

// book.call(eurowings, ...flightData);

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => {
//   console.log('This will ALSO never run again');
// })();
