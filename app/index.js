var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();
var bodyParser = require('body-parser');
var public = path.resolve("public")

// view engine
require('./views')(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(public));

app.set('views', path.join(__dirname, '../views/'));

require("../routes/index")(app);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
    res.send('Error: Not Found Path ' + req.url);
});

// error handlers

// development error handler
// will print stacktrace
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});


module.exports = app;