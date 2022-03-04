
//MUST 'REQUIRE' PATH OTHER FILE, BUT EXPORTS NEED TO BE EXPLICIT IN THE OTHER FILE
const math = require('./math');

// Can also destructure to utilize specific elements from aother file. (math. not required when doing this)
// const {PI, square} = require('./math');

console.log(math.PI);
console.log(math.square(9));