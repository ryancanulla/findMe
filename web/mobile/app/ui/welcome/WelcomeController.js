Ext.define("FindMe.ui.welcome.WelcomeController", {
    extend: "Deft.mvc.ViewController",

    requires: [ ],

    inject: [ 'userService', 'geoService' ],

    control: {
        title: true,
        view: {
            activate: 'update'
//            deactivate: 'cleanUpView'
        }
    },

    init: function() {
        this.callParent(arguments);
        this.geoService.on(this.geoService.CHANGED, this.update, this);
    },

    update: function() {
        this.getTitle().setHtml('Welcome ' + this.userService.getUser().get('name') + '!' + ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        debugger;
//        this.updateMapLocation();
    },

    cleanUpView: function() {
        Ext.device.Geolocation.clearWatch();
    },

    updateMapLocation:function() {
        var map = this.getView().map,
            status = this.geoService.getStatus(),
            newLocation = new google.maps.LatLng(status.latitude, status.longitude);
//        map.setCenter(newLocation);
//        map.setZoom(16);
//        this.addMarker(newLocation, 'username');
    },

    addMarker: function(position, title ) {
        var map = this.getView().config.mapContainer;

        new google.maps.Marker({
            position: position,
            map: map,
            title: title
        });
    },

    showError:function(event) {

    }
});
