const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const createRouter = require('./helpers/create_router.js')

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));
app.use(parser.json());

app.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
