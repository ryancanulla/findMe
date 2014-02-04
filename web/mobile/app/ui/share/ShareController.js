Ext.define("FindMe.ui.share.ShareController", {
    extend: "Deft.mvc.ViewController",

    requires: [],

    inject: [ 'viewportService', 'geoService' ],

    control: {
        shareTypeToggle: {
            toggle: 'onToggleShareType'
        },
        sms: true,
        email: true,
        shareButton: {
            tap: 'onShareLocation'
        }
    },

    init: function() {
        this.callParent(arguments);

        this.getSms().setHidden(false);
        this.getEmail().setHidden(true);
    },

    onToggleShareType: function(container, button, pressed) {
        var viewElement;

        if(button.getItemId() === 'smsButton') {
            viewElement = this.getSms();
        }
        else {
            viewElement = this.getEmail();
        }

        if(pressed) {
            viewElement.setHidden(false);
        }
        else {
            viewElement.setHidden(true);
        }
    },

    onShareLocation:function() {
        this.viewportService.goTo(this.viewportService.STATUS);
        this.geoService.update();
    }
});
