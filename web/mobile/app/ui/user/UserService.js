Ext.define('FindMe.ui.user.UserService', {

    user: null,

    constructor: function (config) {
        this.user = Ext.create('FindMe.ui.user.UserModel');
    },

    fetchUser: function(accountId) {
        var deferred = Ext.create('Deft.Deferred');

        FindMe.ui.user.UserModel.load(accountId, {
            scope: this,
            failure: function(record, operation) {
                console.log('Error loading UserModel');
                deferred.reject("Error");
            },
            success: function(record, operation) {
                this.user = record;
                deferred.resolve();
            }
        });
        return deferred.promise;
    },

    getUser: function() {
        return this.user;
    }

});
