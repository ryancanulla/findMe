Ext.define('FindMe.routes.Routing', {

    statics: {

        ROUTES: {
            '/': 'FindMe.routes.RoutingController#index',
            'locate/:id': 'FindMe.routes.RoutingController#onLocate'
        }
    }
});