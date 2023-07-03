var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

const session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var perfilRouter = require('./routes/perfil');
var principalRouter = require('./routes/principal');
var authRouter = require('./routes/auth').router;

var app = express();

var LocalStrategy = require("passport-local").Strategy;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/perfil', perfilRouter);
app.use('/principal', principalRouter);
app.use('/auth', authRouter);


// view engine setup
app.use(
  session({
    secret: "perro",
    resave:true,
    saveUninitialized:true,
    cookie:{ 
      
      maxAge: 1*60*60*1000
    }
   
  })
)

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));




passport.serializeUser(function(user, done){
  done(null,user);
});

passport.deserializeUser(function(user,done){
  done(null, user);
})

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
