const C = require('./test-module-1');

// console.log(arguments);
// console.log(require('module').wrapper);

const calc1 = new C();
console.log(calc1.add(2, 5));
