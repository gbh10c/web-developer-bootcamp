// let count = 0
// while (count < 10) {
//     count++
//     console.log(count)
// }

// const Secret = "BabyHippo";

// let guess = prompt("Enter the secret code:")
// while (guess !== Secret) {
//     guess = prompt("Enter the secret code:") 
// }
// console.log("You guessed the secret code!")


// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me") break;
// }
// console.log("You win.");


// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// let maximum = parseInt(prompt("Enter the maximum number:"));
// while (!maximum) {
//     maximum = parseInt(prompt("Not a valid number. Please try again:"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess:"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter another guess: (Press 'q' to quit)");
//     } else {
//         guess = prompt("Too low! Enter another guess: (Press 'q' to quit)");
//     }
// }
// if (guess === 'q') {
//     console.log("Thanks for playing!")
// } else {
//     console.log(`You guessed the correct number (${targetNum}) in ${attempts} attempts.`);
// }