// axios.get("https://swapi.dev/api/people/1").then(res => {
//     console.log("RESPONSE: ", res);
// })
// .catch(err => {
//     console.log("ERROR!", err);
// })

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (err) {
//         console.log("ERROR: ", err);
//     }
// };

// getStarWarsPerson(2);
// getStarWarsPerson(11);



// REQUEST HEADERS WITH AXIOS

const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke
    } catch (err) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}

button.addEventListener('click', addNewJoke);