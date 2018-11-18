// Require Dependencies
'use strict';
const express = require('express');
const morgan = require('morgan');
const path =  require('path');
const routes = require('./route/index')
// Init App
const app = express();
// Basic Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use('/index', routes);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res,next)=>{
  res.send('Hello World');
})



// app.use((req,res,next)=>{
//   res.status(404).send(notFound("404 Not found"))
//   next();
// })
// app.use((err,req,res,next)=>{
//   res.status(500).send(error('error 500 server error, dont worry were fixing it', err));
// })

module.exports = app;
