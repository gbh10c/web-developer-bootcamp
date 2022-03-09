const { publicDecrypt } = require('crypto');
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
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