Ext.define('FindMe.ui.status.Status', {
    extend: 'Ext.Container',
    alias: "widget.app-status",

    requires: [ ],

    controller: 'FindMe.ui.status.StatusController',

    config: {
        fullscreen:true,
        layout: { type: 'vbox', align: 'stretch' },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Status'
            },
            {
                xtype: 'label',
                html: '<div align="center">my status?</div>',
                padding: 20
            }
        ]
    },

    afterRender: function() {
        this.callParent(arguments);

        var mapOptions = {
            zoom: 10
        };

        this.map = new google.maps.Map(document.getElementById(this.getId()),
            mapOptions);
    }

});