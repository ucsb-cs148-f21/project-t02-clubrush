var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clubsRouter = require('./routes/clubs');
var testAPIRouter = require("./routes/testAPI");
const connectDB = require('./config/db');
var app = express();


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');ç
// app.set('view engine', 'jade');
// app.engine('html', require('ejs').renderFile);

connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../client/build/')));
app.use(express.static(path.join(__dirname, '../client/build')));
// app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use('/clubs', clubsRouter);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('*', (req, res) => {
  console.log("test")
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
