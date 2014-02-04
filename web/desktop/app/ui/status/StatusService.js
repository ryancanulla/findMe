Ext.define('FindMe.ui.status.StatusService', {
    mixins: { observable: 'Ext.util.Observable' },

    requires:[
        'Ext.util.Observable'
    ],

    inject: ['statusModel'],

    statics: {
        STATUS_CHANGED: 'statusServiceStatusChanged',
        STATUS_ERROR: 'statusServiceStatusError'
    },

    status: null,

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
    },

    fetchStatus:function(id) {
        var statusModel = Ext.ModelManager.getModel('FindMe.ui.status.StatusModel');
        statusModel.load(id, {
            scope: this,
            success: function(result) {
                this.status = result;
                this.fireEvent('statusChanged');
            },
            failure: function(error) {
                this.fireEvent('statusError', error);
            }
        });
    },

    getStatus:function() {
        return this.status;
    }
});