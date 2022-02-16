// function sum(){
//     console.log(arguments);
// }

// COLLECT THE "REST" IN NUMS:
function sum(...nums){
    return nums.reduce((total, num) => total + num)
}

function raceResults(gold, silver, ...others){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${others} `)
}