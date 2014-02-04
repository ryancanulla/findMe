Ext.define('FindMe.routes.RoutingController', {
    extend: 'Ext.app.Controller',

    statusService: null,

    setup: function() {
        this.statusService = Deft.Injector.resolve('statusService');
    },

    index: function(params) {

    },

    onLocate: function(params) {
        this.statusService.fetchStatus(params.id);
    }
});
