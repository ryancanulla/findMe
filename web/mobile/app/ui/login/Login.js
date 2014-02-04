Ext.define('FindMe.ui.login.Login', {
    extend: 'Ext.form.Panel',
    alias: "widget.app-login",

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.Label',
        'Ext.Img'
    ],

    controller: 'FindMe.ui.login.LoginController',

    config: {
        title: 'Login',
        items: [
            {
                xtype: 'label',
                itemId: 'errorMessage',
                html: 'Login failed. Please enter the correct credentials.',
                hidden: true,
                style: 'color:#990000;margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                itemId: 'loginForm',
                title: 'Login To Find Me.',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'emailField',
                        placeHolder: 'Email',
                        name: 'email',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        itemId: 'passwordField',
                        placeHolder: 'Password',
                        name: 'password',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                ui: 'action',
                padding: '10px',
                text: 'Log In'
            }
        ]
    }

});