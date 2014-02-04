Ext.define('FindMe.ui.share.sms.Sms', {
    extend: 'Ext.form.FieldSet',
    alias: "widget.app-sms",

    config: {
        items: [
            {
                xtype: 'textfield',
                itemId: 'phoneField',
                placeHolder: '(000) 000-0000',
                name: 'phone'
            }
        ]
    }
});