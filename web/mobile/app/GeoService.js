Ext.define('FindMe.GeoService', {
    mixins: { observable: 'Ext.util.Observable' },
    requires: [ 'Ext.util.Geolocation' ],

    geo: null,
    status: null,

    CHANGED:'GeoServiceChangedEvent',

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);

        this.geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: true,
            allowHighAccuracy: true,
            listeners: {
                scope: this,
                locationupdate: function (geo) {
                    this.status = geo.position.coords;
                    this.fireEvent(this.CHANGED);
                },
                locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                    debugger;
                    if (bTimeout) {
                        console.log('Timeout occurred.');
                    } else {
                        console.log(message);
                    }
                }
            }
        });
    },

    update: function () {
        this.geo.updateLocation();
    },

    getStatus: function() {
        return this.status;
    }

});

