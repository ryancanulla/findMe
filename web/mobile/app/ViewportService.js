Ext.define('FindMe.ViewportService', {

    LOGIN: null,
    WELCOME: null,
    SHARE: null,
    STATUS: null,

    constructor: function (config) {
    },

    setup: function () {
        this.LOGIN = Ext.Viewport.add(Ext.create('FindMe.ui.login.Login'));
        this.WELCOME = Ext.Viewport.add(Ext.create('FindMe.ui.welcome.Welcome'));
        this.SHARE = Ext.Viewport.add(Ext.create('FindMe.ui.share.Share'));
        this.STATUS = Ext.Viewport.add(Ext.create('FindMe.ui.status.Status'));

        this.goTo(this.LOGIN);
    },

    goTo: function (screen) {
        switch (screen) {
            case this.LOGIN:
                Ext.Viewport.setActiveItem(this.LOGIN);
                break;
            case this.WELCOME:
                Ext.Viewport.setActiveItem(this.WELCOME);
                break;
            case this.SHARE:
                Ext.Viewport.setActiveItem(this.SHARE);
                break;
            case this.STATUS:
                Ext.Viewport.setActiveItem(this.STATUS);
                break;
        }
    }
});
