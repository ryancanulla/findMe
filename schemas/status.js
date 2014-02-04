var mongoose = require('mongoose');

module.exports = mongoose.model('Status', {
    accountId: String,
    latitude: String,
    longitude: String,
    zoom: Number
});