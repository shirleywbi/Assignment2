// Reference: https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./api/routes/index');
var usersRouter = require('./api/routes/users');
var messagesRouter = require('./api/routes/messages');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', messagesRouter);

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

// Connect to MongoDB
let messages = [
    {
        name: 'Rick',
        text: 'We\'re no strangers to love. You know the rules and so do I. ' +
        'A full commitment\'s what I\'m thinking of. You wouldn\'t get this from any other guy.',
        date: "6/2/2019 11:45:11",
        id: "622019114511"
    },
    {
        name: 'Richard',
        text: 'I just wanna tell you how I\'m feeling... Gotta make you understand...',
        date: "6/2/2019 11:45:30",
        id: "622019114530"
    },
    {
        name: 'Paul',
        text: 'Never gonna give you up. Never gonna let you down. ' +
        'Never gonna run around and desert you. Never gonna make you cry. ' +
        'Never gonna say goodbye.',
        date: "6/2/2019 11:50:00",
        id: "622019115000"
    },
    {
        name: 'Rick Astley',
        text: 'Never gonna tell a lie and hurt you.',
        date: "6/3/2019 9:45:04",
        id: "63201994504"
    }];

const MongoClient = require('mongodb').MongoClient;
const URL = require('../config.js');

MongoClient.connect(URL, { useNewUrlParser: true }, function(err, client) {
    if (err) {
        console.log("Error in connecting to MongoDB.");
        return;
    }
    console.log("Connected...");
    let db = client.db('data');
    db.createCollection('messages').then(() => {
      let msgCollection = db.collection('messages');
      msgCollection.stats((err, res) => {
        printIfError(err);
        if (res.count === 0) {
          msgCollection.insertMany(messages);
        }
      });
      msgCollection.find({}, (err, data) => {
        printIfError(err);
        data.toArray((err, res) => {
          printIfError(err);
          console.log(res);
        });
      })  
    });
    db.close;
})

function printIfError(err) {
  if (err) {
    console.log("error: " + err);
  }
}

module.exports = app;
