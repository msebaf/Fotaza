var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
const session = require("express-session");
const upload = require("express-fileupload")

var LocalStrategy = require("passport-local").Strategy;
var EstaAutenticado = require('./routes/auth').EstaAutenticado;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var perfilRouter = require('./routes/perfil');
var comentariosRouter = require('./routes/comentarios');
var votosRouter = require('./routes/votos');
var imagenRouter = require('./routes/imagen');
var principalRouter = require('./routes/principal');
var authRouter = require('./routes/auth').router;

var app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(upload())

// Configuración de sesión
app.use(
  session({
    secret: "perro",
    resave: true,
    saveUninitialized: true,
    cookie: { 
      maxAge: 1 * 60 * 60 * 1000
    }
  })
);

// Configuración de Passport
app.use(passport.initialize());
app.use(passport.session());

// Configuración de las estrategias de Passport
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
  done(null, user);
});

passport.deserializeUser(function(user, done){
  done(null, user);
});

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/perfil', perfilRouter);
app.use('/principal', principalRouter);
app.use('/auth', authRouter);
app.use('/imagen',EstaAutenticado, imagenRouter);
app.use('/comentarios',EstaAutenticado, comentariosRouter);
app.use('/votos',EstaAutenticado, votosRouter);


// Manejador de errores 404 y de errores generales
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
