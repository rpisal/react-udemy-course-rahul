//import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(19, 45));
// console.log(subtract(34, 45));

// import isSenior, { isAdult, canDrink } from './person.js';
// console.log(`is adult ${ isAdult(20)}`);
// console.log(`can drink ${ isAdult(12)}`);
// console.log(`is senior ${ isSenior(70)}`);

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));