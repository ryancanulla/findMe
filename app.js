/**
 * Module dependencies.
 */
var express = require('express'),
    MongoStore = require('connect-mongo')(express),
    passport = require('./auth'),
    routes = require('./routes'),
    http = require('http'),
    db = require('./db'),
    path = require('path'),
    app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.session({
    secret: 'LphNh1fc74qNj5Z9FPCtC7w3OQekX084',
    store: new MongoStore({
        mongoose_connection: db
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.methodOverride());
app.use(function (req, res, next) {
    res.set('X-Powered-By', 'ryancanulla.com');
    next();
});
app.use(app.router);

app.use(express.directory(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.post('/register', routes.handleRegistration);

app.get( '/login', routes.getLoginScreen);
app.post( '/login', routes.handleLogin);
//app.post('/login', passport.authenticate('local'));

app.get('/user/:accountId', routes.getUserInfo);

app.get('/status/:accountId', routes.getSingleStatus);
app.put('/status/:accountId/update', routes.handleStatusUpdate);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
