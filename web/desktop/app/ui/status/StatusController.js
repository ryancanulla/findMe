Ext.define("FindMe.ui.status.StatusController", {
    extend: "Deft.mvc.ViewController",

    requires: [
        'FindMe.ui.status.StatusService'
    ],

    inject: [
        'statusService'
    ],

    control: {},

    init: function() {
        this.callParent(arguments);

        this.statusService.on('statusChanged', this.updatedMap, this);
        this.statusService.on('statusError', this.showError, this);
    },

    updatedMap:function(event) {
        var map = this.getView().map,
            status = this.statusService.getStatus(),
            newLocation = new google.maps.LatLng(status.get('latitude'), status.get('longitude'));

        map.setCenter(newLocation);
        map.setZoom(status.get('zoom'));
        this.addMarker(newLocation, 'Ryan Canulla');
    },

    addMarker: function(position, title ) {
        var map = this.getView().map;

        new google.maps.Marker({
            position: position,
            map: map,
            title: title
        });
    },

    showError:function(event) {

    }
});
