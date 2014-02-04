Ext.define('FindMe.ui.share.Share', {
    extend: 'Ext.Container',
    alias: "widget.app-share",

    requires: [
        'FindMe.ui.share.sms.Sms',
        'FindMe.ui.share.email.Email'
    ],

    controller: 'FindMe.ui.share.ShareController',

    config: {
        title: 'Login',
        fullscreen:true,
        layout: { type: 'vbox', align: 'stretch' },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Share My Location!'
            },
            {
                xtype: 'label',
                html: '<div align="center">How do you want to share your location?</div>',
                padding: 20
            },
            {
                xtype: 'container',
                layout: { type: 'vbox', align: 'center' },
                items: [
                    {
                        xtype: 'segmentedbutton',
                        itemId: 'shareTypeToggle',
                        allowMultiple: false,
                        style: { marginTop: 20 },
                        items: [
                            { itemId: 'smsButton', text: 'SMS', pressed: true },
                            { itemId: 'emailButton', text: 'Email' }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 3,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'app-sms',
                        itemId: 'sms'
                    },
                    {
                        xtype: 'app-email',
                        itemId: 'email'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'shareButton',
                text: 'Share Now',
                docked: 'bottom',
                margin: 20
            }
        ]
    }

});