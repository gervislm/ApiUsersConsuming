const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json());
mongoose.connect('mongodb+srv://user:1234@cluster0.s2zrjxl.mongodb.net/miapp?retryWrites=true&w=majority');

app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.delete)

app.use(express.static('app'));

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/index.html`);
})

app.get('*', (req, res) => {
  res.status(404).send('Page not found')
})

app.listen(port, () => {
  console.log('Running App')
})