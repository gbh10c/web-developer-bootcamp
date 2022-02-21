// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('change', (e) => {
//     console.log('whatever');
// })

// input.addEventListener('input', (e) => {
//     console.log('input event!');
// })

// Updates the h1 as we type into the input.
// input.addEventListener('input', (e) => {
//     h1.innerText = input.value
// })

const h1 = document.querySelector('h1');
const input = document.querySelector('input[type="text"]');

input.addEventListener('input', (e) => {
    h1.innerText = `Welcome, ${input.value}`;
    if (input.value === '') {
        h1.innerText = 'Enter Your Username';
    }
})

