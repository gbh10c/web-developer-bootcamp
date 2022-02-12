// ==============
// FUNCTION SCOPE
// ==============
// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs);
// }
// collectEggs();

// let bird = 'Scarlet Macaw';
// function birdWatch(){
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();



// ==============
// BLOCK SCOPE
// ==============

// let radius = 8;
// if (radius > 0){
//     const PI = 3.14159;
//     let msg = 'HI!';
// }
// console.log(radius);
// console.log(PI); //outside of block scope

// for (let i = 0; i < 5; i++) {
//     let msg = 'asd;afoija';
//     console.log(msg);
// }
//console.log(msg); //outside of block scope


// ==============
// LEXICAL SCOPE
// ==============

// function bankRobbery(){
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
//     function cryForHelp(){
//         function inner(){
//             for(let hero of heroes){
//                 console.log(`PLEASE HELP US, ${hero.toUpperCase()}!!!`);
//             }
//         }
//         inner();
//     }    
//     cryForHelp();
// }