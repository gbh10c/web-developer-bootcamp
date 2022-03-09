const { publicDecrypt } = require('crypto');
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// Serves static pages no matter the directory (similar to path below)
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
// Below (along with requiring 'path') allows you to view files outside of the current working directory (cwd)
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/cats', (req, res) => {
  const cats = [
    'Ranger', 'Milosch', 'Scooter', 'Soby', 'Tigger'
  ]
  res.render('cats', { cats });
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render('subreddit', { ...data })
  } else {
    res.render('notfound', { subreddit })
  }
})

app.get('/rand', (req, res) => {
  const num = Math.ceil(Math.random() * 10);
  res.render('random', { rand: num }); //Sends key value pair, but can also send same word for both: 'num'
})

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000")
})