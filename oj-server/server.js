const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://alice:123456@ds113063.mlab.com:13063/alice')
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

const path = require('path');
app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);


app.use(function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
