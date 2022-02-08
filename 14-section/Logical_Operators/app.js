// =====================
// LOGICAL AND OPERATOR
// =====================
// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid password.");
// } else {
//     console.log("Incorrect password format.");
// }

// =====================
// REVISITING AGE EXAMPLE
// =====================

// const age = 199;

// if ((age >=  0 && age < 5) || age >= 65) {
//     console.log('You get in for free!');
// } else if (age >=5 && age < 10) {
//     console.log('You pay $10');
// } else if (age >= 10 && age < 65) {
//     console.log('You pay $20');
// } else {
//     console.log('Invalid age.')
// }

// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free



// const firstName = prompt("Enter your first name.");
// if (!firstName) {
//     firstName = prompt("Try again!");
// } else {
//     console.log(`Thank you, ${firstName}`);
// }

// =====================
// COMBINING && and ||
// =====================

const age = 43;

if (!(age >=  0 && age < 5 || age >= 65)) {
    console.log('You do not get in for free!');
}
