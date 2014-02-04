Ext.define("FindMe.ui.login.LoginController", {
    extend: "Deft.mvc.ViewController",

    requires: [ 'FindMe.ui.login.LoginService' ],

    inject: [ 'loginService', 'userService', 'viewportService' ],

    control: {
        loginButton: { tap: 'onSubmit' },
        emailField: true,
        passwordField: true,
        errorMessage: true
    },

    init: function() {
        this.callParent(arguments);
        this.onSubmit('ryancanulla@gmail.com', 'Summer855');
    },

    onSubmit: function(autoEmail, autoPassword) {
        var email = autoEmail ? autoEmail : this.getEmailField().getValue(),
            password = autoPassword ? autoPassword : this.getPasswordField().getValue();

        this.loginService.login(email, password).then({
            scope: this,
            success: function(accountId) {
                this.userService.fetchUser(accountId).then({
                    scope: this,
                    success: function(accountId) {
                        this.viewportService.goTo(this.viewportService.WELCOME);
                    }
                });

                this.resetForm();
                this.getErrorMessage().setHidden(true);
            },
            failure: function(error) {
                this.getErrorMessage().setHidden(false);
                this.resetForm();
            }
        }).always(function() {
            }).done();
    },

    resetForm: function() {
        this.getEmailField().setValue('');
        this.getPasswordField().setValue('');
    }
});
