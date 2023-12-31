var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const DBConnection =require('./db/DBConnection');
DBConnection().then(r=> console.log(r));

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Middlewares
app.use(logger('dev'));
//Converts Request body data to JSON format
app.use(express.json());
//When we pass form data as URL encoded it is also converted to JSON format
app.use(express.urlencoded({ extended: false }));
//req.cookies
app.use(cookieParser());
//static path define
app.use(express.static(path.join(__dirname, 'public')));

//Path of route
app.use('/', indexRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
