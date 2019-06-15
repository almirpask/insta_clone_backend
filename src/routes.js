const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const routes  = express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.create)
routes.post('/posts/:id/like', LikeController.create)

module.exports = routes
