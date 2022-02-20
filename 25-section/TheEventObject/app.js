document.querySelector('button').addEventListener('click', (e) => {
    console.log(e);
});

// const input = document.querySelector('input')
// input.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     console.log(e.code);
// })

// input.addEventListener('keyup', () => {
//     console.log('KEYUP');
// })

window.addEventListener('keydown', (e) => {
    // console.log(e.code);
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!")
    }
})