// const myMath = {
//     PI: 3.14159,
//     square: function(num){
//         return num * num;
//     },
//     cube: function(num){
//         return num ** 3;
//     },
// }

// const moreMath = {
//     square(num) {
//         return num * num;
//     },
//     cube(num){
//         return num ** 3;
//     }
// }

const cat = {
    name: 'Milosch Hicken',
    color: 'orange',
    breed: 'short hair',
    meow(){
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWWW`);
    }
}

//"This" is not included because the function is invoked outside of meow
const meow2 = cat.meow;