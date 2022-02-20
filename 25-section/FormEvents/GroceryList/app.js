// const form = document.querySelector('form');
// const product = document.querySelector('#product');
// const quantity = document.querySelector('#qty');
// const groceryList = document.querySelector('#list');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const productInput = product.value;
//     const quantityInput = quantity.value;
//     const listItem = document.createElement('li');
//     listItem.innerText = `${productInput} ${quantityInput}`;
//     groceryList.appendChild(listItem);
//     product.value = '';
//     quantity.value = '';
// })

// This will work after listItem definition, too
// listItem.append(`${productInput} ${quantityInput}`);
// groceryList.append(listItem);


// Syntax with additional function
const form = document.querySelector('form');
const groceryList = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = document.querySelector('#product');
    const quantity = document.querySelector('#qty');
    createListItem(product.value, quantity.value);
    product.value = '';
    quantity.value = '';
})

const createListItem = (product, quantity) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${product} ${quantity}`;
    groceryList.appendChild(listItem);
}