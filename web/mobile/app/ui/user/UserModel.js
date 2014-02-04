Ext.define('FindMe.ui.user.UserModel', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'accountId', type: 'string'},
        {name:'name', type: 'string' }
    ],

    proxy: {
        type: 'rest',
        url : '/user'
    }
});
