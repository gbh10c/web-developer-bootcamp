// const add = function(x,y) {
//     return x + y;
// }

// const add = (x,y) => {
//     return x + y;
// }

const square = (x) => {
    return x * x;
}

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]


// const films = movies.map(function(movie){
//     return `${movie.title} - ${movie.score/10}/10`
// })

// With implicit return
const films = movies.map(movie => (
    `${movie.title} - ${movie.score/10}/10`
))

// Single line with implicit return
// const films = movies.map(movie => `${movie.title} - ${movie.score/10}/10`);

// IMPLICIT RETURN - one value very clearly expected to be returned

// const rollDie = () => {
//     return Math.ceil(Math.random() * 6);
// }

//Use parentheses to invoke implicit return
const rollDie = () => (
    Math.ceil(Math.random() * 6)
)

//For short functions, no parentheses and place on the same line
const add = (a, b) => a + b

// const isEven = (x) => (
//     x % 2 === 0
// )
//or
const isEven = (x) => x % 2 === 0
