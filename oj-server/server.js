const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://alice:123456@ds113063.mlab.com:13063/alice')
const restRouter = require('./routes/rest');

app.use('/api/v1', restRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
