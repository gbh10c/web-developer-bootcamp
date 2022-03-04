const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// async version
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//   console.log('IN THE CALLBACK')
//   if (err) throw err;
// });

// sync version
try{
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/styles.css`)
fs.writeFileSync(`${folderName}/app.js`)
} catch(err) {
console.log('Something went wrong')
console.log(err)
}
