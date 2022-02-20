const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!")
}

function scream() {
    console.log('AAAAAAHHHHHH');
    console.log('STOP TOUCHING ME!');
}

btn.onmouseenter = scream;

// onclick should be assigned TO a function, not to execute the function itself
document.querySelector('h1').onclick = () => {
    console.log("WHY DID YOU CLICK AN H1???");
}


// addEventListener is best. (MDN reference for event types)
const btn3 = document.querySelector('#v3');

// btn3.addEventListener('click', () => {
//     console.log('WOOHOO ADD EVENT LISTENER WORKED!');
// })

// btn3.addEventListener('mousedown', () => {
//     console.log('Don\'t let go!!!')
// })

// btn3.addEventListener('mouseup', () => {
//     console.log('Why did you let go???')
// })

// you can also pass in defined functions
btn3.addEventListener('click', scream);

function twist(){
    console.log('TWIST')
}
function shout(){
    console.log('SHOUT')
}

const tasButton = document.querySelector('#tas');

// this will not work - only returns shout
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// addEventListener allows multiple events to run simultaneously
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)

// options can be passed in to affect the events
tasButton.addEventListener('click', twist, {once: true})
tasButton.addEventListener('click', shout)