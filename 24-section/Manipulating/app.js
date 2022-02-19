// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.innerText = 'I AM A LINK!!!'
// }

//.innerHTML actually changes the markup through the DOM
// document.querySelector('h1').innerHTML = '<i>Silkie Chickens</i>'

// += adds to the existing element, while = overwrites everything
// document.querySelector('h1').innerHTML += '<sup>asdo;fij</sup>'

// inline style changes are not ideal, but can be done
// const links = document.querySelectorAll('a')
// for(let link of links){
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }


// classList will show what classes apply and it allows manipulation/toggling of classes

// This is how to access information about the styles you see on a webpage
// window.getComputedStyle(h1)

// Toggle classes with 
// element.classList.toggle


// PARENT-CHILDREN-SIBLING elements

// element.parentElement moves upwards
// an element can only have one parent elements
// however, an element can have many children


// CREATING DOM ELEMENTS document.createElement()
// const newImage = document.createElement('img')
// newImage.src = 'https://images.unsplash.com/photo-1645259769643-fce73f46491b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
// document.body.appendChild(newImage)
// newImage.classList.add('square')

// const newH3 = document.createElement('h3')
// newH3.textContent = 'I\'M A NEW H3'
// document.body.appendChild(newH3)

// ANOTHER OPTION Element.append() or Element.prepend() places element at the beginning
// you can just add text directly into the element, rather than creating a new element
// p.append('I AM NEW TEXT')

// const boldTag = document.createElement('b')
// boldTag.append('Hi!!!!!')
// p.prepend(boldTag)

// INSERT DOM ELEMENT AS ADJACENT SIBLING Element.insertAdjacentElement()
// const h2 = document.createElement('h2')
// h2.append('Good looking chickens!')
// h1 = document.querySelector('h1')
// h1.insertAdjacentElement('afterend', h2)

// INSERT AFTER element.after() (no support on IE)
// const h3 = document.createElement('h3')
// h3.innerText = 'I am h3'
// h1.after(h3) 

// element.before() does the same thing before, still no support on IE


// Button solution - (parent element only required before .appendChild())
// for (let i = 0; i < 100; i++){
//     const button = docuement.createElement('button');
//     button.innerText = 'Hey!';
//     const container = document.querySelector('div');
//     container.appendChild(button);
// }


// REMOVING ELEMENTS .removeChild() and .remove()
// const firstLi = document.querySelector('li')
// const ul = firstLi.parentElement
// ul.removeChild(firstLi)
// -or- (shorter)
// const b = document.querySelector('b')
// b.parentElement.removeChild(b)

// .remove() is more efficient
// const img = document.querySelector('img')
// img.remove()