var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    UserSchema = require('./schemas/user'),
    bcrypt = require('bcrypt-nodejs');

passport.use(new LocalStrategy(
    function (username, password, done) {
        UserSchema.findOne({ 'email': username })
            .exec(function (error, user) {
                if (error) {
                    done(null, false);
                } else {
                    if (bcrypt.compareSync(password, user.password)) {
                        done(null, { username: user.email });
                    } else {
                        done(null, false);
                    }
                }
            });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.username);
});

passport.deserializeUser(function (username, done) {
    done(null, {username: username});
});

module.exports = passport;