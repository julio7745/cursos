
const mod1  = require('./mod1')

console.log(mod1);


console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', '..', '..'))
 