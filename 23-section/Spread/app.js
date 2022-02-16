const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
console.log(nums); //returns entire array
console.log(...nums); //returns each individual number from the array
console.log(Math.max(...nums));
console.log(Math.min(...nums));
console.log('hello')
console.log(...'hello') //returns each individual character from the string

// SPREAD IN ARRAYS
const cats = ['Blue', 'Scout', 'Rocket'];
const copy = [...cats];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs] //returns all elements in a third array

const greeting = [...'hello']

// SPREAD IN OBJECTS
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const newObject = {...feline, color: 'black'}

const catDog = {...feline, ...canine, family: 'Hicken'} //order matters! Canine family is copied because it's listed last (or 'Hicken)

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
//make copy and add new key/value pairs
const newUser = {...dataFromForm, id: 2345, isAdmin: false}
