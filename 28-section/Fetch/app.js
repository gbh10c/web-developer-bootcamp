// "Promise" version

// fetch('https://api.tvmaze.com/search/shows?q=girls')
// .then(res => {
//     console.log("RESPONSE, WAITING TO PARSE...", res)
//     return res.json() //returns JSON data as a promise
// })
// .then(data => {
//     console.log("DATA PARSED!", data)
//     console.log(data.length)
// })
// .catch(err => {
//     console.log("OH NO! ERROR", err)
// })


//"async" version; try/catch handles errors instead of .catch

const fetchTvShow = async() => {
    try{
        const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
        const data = await res.json()
        console.log(data.length)
    } catch(err){
        console.log("SOMETHING WENT WRONG!", err)
    }
    
}