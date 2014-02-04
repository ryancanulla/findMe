Ext.define('FindMe.ui.status.StatusModule', {
    singleton: true,

    constructor: function () {
        Deft.Injector.configure({
            statusService: 'FindMe.ui.status.StatusService',
            statusModel: 'FindMe.ui.status.StatusModel'
        });
    }
});