const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/static'));
app.use(bodyParser());

module.exports = app;