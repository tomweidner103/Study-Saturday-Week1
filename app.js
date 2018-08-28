// Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Init App
const app = express();

// Basic Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Listen on server

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
