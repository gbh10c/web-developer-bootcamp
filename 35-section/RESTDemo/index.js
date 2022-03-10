const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol that is so funny!'
  },
  {
    id: uuid(),
    username: 'Edith',
    comment: 'I like to go birdwatching.'
  },
  {
    id: uuid(),
    username: 'Cora',
    comment: 'meeeeeeeow'
  },
  {
    id: uuid(),
    username: 'Murphy',
    comment: 'whatever...'
  },
]

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect('/comments');
})

// app.get('/tacos', (req, res) => {
//   res.send("GET /tacos response")
// })

// app.post('/tacos', (req, res) => {
//   const { meat, qty } = req.body;
//   res.send(`OK, here are your ${qty} ${meat} tacos.`)
// })

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000")
})


// One way to create RESTful APIs:

// GET /comments - list all comments
// POST /comments - create new comment 
// GET /comments/:id - get one comment (using ID)
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - remove (or destroy) one comment