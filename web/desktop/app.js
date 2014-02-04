Ext.Loader.setConfig({
    enabled: true,
    'Ext.ux': 'resources/lib'
});

Ext.syncRequire([
    "Ext.Component",
    "Ext.ComponentManager",
    "Ext.ComponentQuery",
    'Deft.mixin.Controllable',
    'Deft.mixin.Injectable',
    'SNA.routes.Routing'
]);

Ext.onReady(function () {

    Ext.application({
        requires: [
            'Ext.ux.Router',
            'FindMe.routes.RoutingController',
            'FindMe.ui.Viewport',
            'FindMe.ui.status.StatusModule'
        ],

        controllers: [
            'FindMe.routes.RoutingController'
        ],

        routes: FindMe.routes.Routing.ROUTES,

        name: 'FindMe',
        autoCreateViewport: false,
        launch: function () {

//            Deft.Injector.configure({
//                localize: {
//                    className: 'SNA.services.LocalizeService',
//                    eager: true
//                }
//            });

//            Deft.Injector.resolve('localize').on('loaded', function() {
//                Ext.tip.QuickTipManager.init();

//            }, this);

            Ext.create('FindMe.ui.Viewport');
            FindMe.app.getController('FindMe.routes.RoutingController').setup();
        }
    });

});