// const add = function(x,y) {
//     return x + y;
// }

const add = (x,y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

const rollDie = () => {
    return Math.ceil(Math.random() * 6);
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

const titles = movies.map((movie) => {
    return movie.title;
})


// IMPLICIT RETURN





