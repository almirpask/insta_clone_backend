const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://mongo:mongo@cluster0-d8h1h.mongodb.net/test?retryWrites=true&w=majority', {
  userNewUrlParser: true
})

app.use((req, res, next) => {
  req.io = io;
  next();
})

app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
app.use(routes)

server.listen(3333);