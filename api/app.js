var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var APIRouter = require("./routes/api");
var indexRouter = require('./routes/index');
var dbutil = require('./utils/dbUtils');
var cors = require("cors");
var vhost = require('vhost');

const bodyParser  = require('body-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);


var app = express();
var portfolio = express();
var hoseInventory = express();
var api = express();

dbutil.connect((err) => {console.log(err)});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 9000);

app.use(cors({
  origin:['http://hoseinventory.kienanobrien.com'],
  methods:['GET','POST'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

portfolio.use(express.static(path.join(__dirname, 'portfolio')));
hoseInventory.use(express.static(path.join(__dirname, 'projects/build')));
api.use(APIRouter);

portfolio.use((req, res, next) => {
  return res.sendFile(path.resolve( __dirname, 'portfolio' , 'index.html'));
});
hoseInventory.use((req, res, next) => {
  return res.sendFile(path.resolve( __dirname, 'projects/build' , 'index.html'));
});

app.use(session({
  secret:"some secret",
  saveUninitialized: false,
  resave: false,
  cookie: {
    httpOnly: false,
    domain: ''
  },
  maxAge: 8*60*60*100,
  store: new MongoStore({client: dbutil.getClient() }),
  name: "user"

}));

app.use(vhost('kienanobrien.com', portfolio));
app.use(vhost('api.kienanobrien.com', api));
app.use(vhost('hoseinventory.kienanobrien.com', hoseInventory));

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
