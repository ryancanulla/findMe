Ext.define("FindMe.ui.header.Header", {
    extend: "Ext.container.Container",
    alias: 'widget.app-header',
    requires: [],

    initComponent: function () {
        Ext.applyIf(this, {
            cls: 'header',
            layout: 'hbox',
            items: [
                {
                    xtype: 'label',
                    text: 'find me'
                }
            ]
        });
        return this.callParent(arguments);
    }
});