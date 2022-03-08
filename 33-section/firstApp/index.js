const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!!");
//   res.send("<h1>This is my webpage!</h1>");
// })

app.get('/', (req, res) => {
  res.send('This is the home page!!!');
})

// CREATE A ROUTE PATTERN
// Using .params to get the term used in the request
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on ${subreddit} subreddit!</h1>`);
})

app.post('/cats', (req, res) => {
  res.send('POST REQUEST TO /cats - THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
  res.send('MEOW!!!');
})

app.get('/dogs', (req, res) => {
  res.send('WOOF!!!');
})

// Using .query to handle multiple key value pairs from a search
app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('<h1>Nothing found if nothing searched</h1>')
  }
  res.send(`<h1>You searched for ${q}.</h1>`);
})

app.get('*', (req, res) => {
  res.send(`I don't know that path!`)
})


app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080!")
})