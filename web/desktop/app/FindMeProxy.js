Ext.define('FindMe.FindMeProxy', {
    alias: 'proxy.findme',
    extend: 'Ext.data.proxy.Rest',

    defaultParams: 'param',
    removeDefaultParams: true,

    constructor: function() {
        this.reader = {
            type: 'json'
        };

        this.callParent(arguments);
    }
});
