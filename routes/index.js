var StatusSchema = require('../schemas/status'),
    UserSchema = require('../schemas/user'),
    bcrypt = require('bcrypt-nodejs'),
    passport = require('../auth');

exports.handleRegistration = function (req, res) {
    var user = new UserSchema({
        name: req.param('name'),
        email: req.param('email'),
        password: bcrypt.hashSync(req.param('password'))
    });

    user.save(function (error) {
        if (error) {
            console.log(error.err);
            if (error.code === 11000) {
                res.status(400).json({ 'status': error.err });
            } else {
                res.status(500).json({ 'status': error.err });
            }
        } else {
            res.status(200).json({ 'status': 'success' });
        }
    });
};

exports.getLoginScreen = function (req, res) {
    res.render('login', { title: 'Log In' })
};

exports.handleLogin = function (req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.status(403).json({ 'status': '403' }) }

        req.logIn(user, function(err) {
            if (err) { return next(err); }
            res.status(200).json({
                'status': '200',
                'user': user
            });
            return res;
        });

    })(req, res, next);
};

exports.getUserInfo = function (req, res) {
    if (req.session.passport.user === undefined) {
        res.redirect('/login');
    }
    else {
        UserSchema.findOne({ 'email': req.param('accountId') })
            .exec(function (error, user) {
                console.log(error);
                if (error) {
                    res.status(500).json({ 'status': error.err });
                } else {
                    res.status(200).json({
                        "name": user.name,
                        "accountId": user.email
                    });
                }
            });
    }
};

exports.handleStatusUpdate = function (req, res) {
    var status;

    if (req.session.passport.user === undefined) {
        res.redirect('/login');
    } else {
        StatusSchema.findOne({ "accountId": req.session.passport.user })
            .exec(function (error, document) {
                if (!document) {
                    status = new StatusSchema({
                        accountId: req.session.passport.user,
                        latitude: req.param('latitude'),
                        longitude: req.param('longitude')
                    });
                } else {
                    status = document;
                    status.latitude = req.param('latitude');
                    status.longitude = req.param('longitude');
                }

                status.save(function (error) {
                    if (error) {
                        res.status(500).json({ 'status': '500' });
                    } else {
                        res.status(200).json({ 'status': 'success' });
                    }
                });
            });
    }
};

exports.getSingleStatus = function (req, res) {
    var number = req.param('userId');

    if (req.session.passport.user === undefined) {
        res.redirect('/login');
    } else {
        StatusSchema.findOne({ "accountId": req.session.passport.user })
            .exec(function (error, document) {
                if (error) {
                    console.log(error);
                    res.status(500).json({ 'status': '500' });
                } else {
                    res.status(200).json(document);
                }
            });
    }
};

exports.getStatusList = function (req, res) {
    if (req.session.passport.user === undefined) {
        res.redirect('/login');
    } else {
        StatusSchema.find()
            .exec(function (error, statusList) {
                if (error) {
                    console.log(error);
                    res.status(500).json({ 'status': '500' });
                } else {
                    res.status(200).json(statusList);
                }
            });
    }
};
