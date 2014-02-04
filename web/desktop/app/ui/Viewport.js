Ext.define("FindMe.ui.Viewport", {
    extend: "Ext.container.Viewport",
    requires: [
        'FindMe.ui.header.Header',
        'FindMe.ui.status.Status'
    ],

    initComponent: function () {
        Ext.applyIf(this, {
            layout: 'fit',
            items: [
                {
                    xtype: 'container',
                    layout: { type: 'vbox', align: 'stretch' },
                    cls: 'viewport',
                    items: [
                        {
                            xtype: 'app-header',
                            flex: 1
                        },
                        {
                            xtype: 'app-status',
                            flex: 9
                        }
                    ]
                }
            ]
        });
        return this.callParent(arguments);
    }
});