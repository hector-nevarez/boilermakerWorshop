// Is this the server entry file??

const express = require('express');
const app = express();
const morgan = require('morgan');
const path= require('path');
module.exports = app;

// login middleware
app.use(morgan('dev'));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../public')));

// Body Parsing middleware 
app.use(express.json());

// api routes
app.use('/api', require('./api'));


// send index.html  [this goes after all the routes always]
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, '../public/index.html')); // At this point I moved the index file to public folder
})

// Error handling endware. Custom 500 by changing the message.
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
