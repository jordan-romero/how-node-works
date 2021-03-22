const C = require('./test-module-1');
// const calc2 = require('./test-module-2');
const { add, multiply } = require('./test-module-2');
// console.log(arguments);
// console.log(require('module').wrapper);

const calc1 = new C();
console.log(calc1.add(2, 5));

//exports

// console.log(calc2.multiply(2, 5));

console.log(add(100, 10));

//caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
