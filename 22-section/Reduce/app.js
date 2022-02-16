const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }

// let sum = prices.reduce((total, price) => {
//     return total + price
// })

let sum = prices.reduce((total, price) => total + price);

let minimum = prices.reduce((min, price) => {
    if(price < min) {
        return price;
    }
    return min;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

let highestRated = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score) {
        return currentMovie;
    }
    return bestMovie;
})

let oldestMovie = movies.reduce((oldMovie, currentMovie) => {
    if (currentMovie.year < oldMovie.year) {
        return currentMovie;
    }
    return oldMovie;
})

// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];

// let sumEvens = evens.reduce((total, num) => {
//     return total + num
// }, 100)

let sumEvens = evens.reduce((total, num) => total + num, 100);