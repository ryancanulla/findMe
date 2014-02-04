Ext.define("FindMe.ui.status.Status", {
    extend: "Ext.container.Container",
    alias: 'widget.app-status',
    requires: [],
    controller: 'FindMe.ui.status.StatusController',

    map:null,

    initComponent: function () {
        Ext.applyIf(this, {

        });
        return this.callParent(arguments);
    },

    afterRender: function() {
        this.callParent(arguments);

        var mapOptions = {
            zoom: 10
        };

        this.map = new google.maps.Map(document.getElementById(this.getId()),
            mapOptions);
    }
});