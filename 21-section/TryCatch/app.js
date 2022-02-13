// try {
//     hello.toUpperCase();
// } catch {
//     console.log('ERROR!!!');
// }

// Additional code will still run, even if try/catch locates the error.
// console.log('after');

// Use "e" to help identify the error.
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log('Please pass a string');
    }
}