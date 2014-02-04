Ext.define('FindMe.ui.welcome.Welcome', {
    extend: 'Ext.Container',
    alias: "widget.app-welcome",

    requires: [
    ],

    controller: 'FindMe.ui.welcome.WelcomeController',

    config: {
        title: 'Welcome',
        itemId: 'welcomePanel',

        layout: { type: 'vbox', align: 'center' },

        mapContainer: null,

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Start Sharing',
                items: [
                    {
                        text: 'Log Out',
                        align: 'left'
                    }
//                    {
//                        iconCls: 'settings',
//                        align: 'right'
//                    }
                ]
            },
            {
                xtype: 'label',
                itemId: 'title',
                maxWidth: 450,
                padding: 20,
                flex: 1
            },
            {
                xtype: 'container',
                html: '<div id="currentLocationMap"></div>',
                flex: 2
            },
            {
                xtype: 'button',
                text: 'Start',
                maxHeight: 50,
                padding: 20,
                flex: 1
            }
        ]
    },

    constructor: function () {
        this.callParent();
        this.on('painted', function () {
            this.config.mapContainer = new google.maps.Map(document.getElementById('currentLocationMap'));
        }, this);
    }
});