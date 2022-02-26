// THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// MORE CALLBACK HELL
// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('IT WORKED!!!', response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log('IT WORKED AGAIN!!!', response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log('IT WORKED AGAIN, AGAIN!!!', response)
//                     }, function (err) {
//                         console.log('ERROR (3nd request)!!!', err)
//                     })
//             }, function (err) {
//                 console.log('ERROR (2nd request)!!!', err)
//             })
//     }, function (err) {
//         console.log('ERROR!!!', err)
//     });



// PROMISES
// Can be written this way...but usually chained without the variable (below)
// const request = fakeRequestPromise('yelp.com/api/coffee/page1');

// request
//     .then(() => {
//      console.log('PROMISE RESOLVED')
//      console.log('IT WORKED!')
//     })
//     .catch(() => {
//      console.log('PROMISE REJECTED')
//      console.log('OH NO, ERROR!')
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {        
        console.log('IT WORKED! (P1)')
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {                
                console.log('IT WORKED! (P2)')
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log('IT WORKED! (P3)')
                    })
                    .catch(() => {
                        console.log('OH NO, ERROR! (P3)')
                    })
            })
            .catch(() => {                
                console.log('OH NO, ERROR! (P2)')
            })
    })
    .catch(() => {    
        console.log('OH NO, ERROR! (P1)')
    })