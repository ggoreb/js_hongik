// import { export이름1, export이름2 } from 'OOO.js';
import { plus, minus, height, weight, Animal, color }
  from './05-15-module.js';
  
console.log(plus());
console.log(minus());

console.log(height);
console.log(weight);

const animal = new Animal('ShuShu');
console.log(animal.name);

console.log(color);



// import * from 'OOO.js';
// import * as module from './05-15-module.js';

// console.log(module.plus());
// console.log(module.minus());

// console.log(module.height);
// console.log(module.weight);

// const animal =
//   new module.Animal('ShuShu');

// console.log(animal.name);

// console.log(module.color);



// import { export이름1 as 별칭1, export이름2 as 별칭2 } 
// from 'OOO.js';
// import {
//   plus as p, minus as m, height as h, weight as w,
//   Animal as A, color as c
// } from './05-15-module.js';

// console.log(p());
// console.log(m());

// console.log(h);
// console.log(w);

// const animal = new A('ShuShu');
// console.log(animal.name);

// console.log(c);