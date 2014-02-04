var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:FindMe855@ds059938.mongolab.com:59938/find-me');

module.exports = mongoose.connection;