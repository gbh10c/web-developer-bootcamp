// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE
// ==========================================
// function rollDie(sides){
//     if(sides === undefined){
//         sides = 6
//     }
//     return Math.ceil(Math.random() * sides)
// }


// ============
// THE NEW WAY!
// ============

function rollDie(sides = 6){
    return Math.ceil(Math.random() * sides)
}

//Make sure that default param(s) come(s) last!
function greet(msg, person = 'fellow human being'){
    console.log(`${msg}, ${person}!`)
}