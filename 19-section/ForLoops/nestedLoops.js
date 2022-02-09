// ===================================
// NESTED FOR LOOP EXAMPLES
// ===================================

// for (let i = 1; i <=10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j <=3; j++) {
//         console.log(`       j is: ${j}`)
//     }
// }

// ===================================
// NESTED ARRAY ITERATION
// ===================================


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]
    console.log(`ROW ${i+1}:`)
    for (j = 0; j < row.length; j++)
        console.log(seatingChart[i][j])
}

