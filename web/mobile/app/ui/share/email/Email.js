Ext.define('FindMe.ui.share.email.Email', {
    extend: 'Ext.form.FieldSet',
    alias: "widget.app-email",

    config: {
        items: [
            {
                xtype: 'textfield',
                itemId: 'emailField',
                placeHolder: 'example@company.com',
                name: 'email',
                required: true
            }
        ]
    }
});