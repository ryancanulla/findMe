Ext.define('FindMe.ui.login.LoginService', {

    constructor: function (config) {
    },

    login: function(email, password) {
        var deferred = Ext.create('Deft.Deferred');

        Ext.Ajax.request({
            url: '/login',
            scope: this,
            method: 'POST',
            params: {
                username: email,
                password: password
            },
            success: function(response, opts) {
                var result = Ext.JSON.decode(response.responseText);
                deferred.resolve(result.user.username);
            },
            failure: function(response, opts) {
                deferred.reject("Error");
            }
        });

        return deferred.promise;
    }
});
