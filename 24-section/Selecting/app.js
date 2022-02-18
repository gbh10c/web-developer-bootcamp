//document.getElementById() (only gets one thing)
// const banner = document.getElementById('banner');
// const toc = document.getElementById('toc');

//document.getElementsByTagName()
const allImages = document.getElementsByTagName('img');
// allImages[0]; //banner image
// allImages.length; //4
// for (let img of allImages) {
//     img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// }

//document.getElementsByClassName()
const squareImages = document.getElementsByClassName('square')
// for (let img of squareImages) {
//     img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// }


// document.querySelector() can select first occurence of any CSS style selctor
document.querySelector('p')
document.querySelector('#banner')
document.querySelector('.square')
document.querySelector('img:nth-of-type(2)') //second occurence of type on page
document.querySelector('a[title="Java"]') //type and attribute

//document.querySelectorAll() can select all of any CSS style selector
document.querySelectorAll('p')
document.querySelectorAll('img')
const links = document.querySelectorAll('p a')
// for (let link of links) {
//     console.log(link.href)
// }
