Ext.define('FindMe.ui.status.StatusModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name:'accountId', type: 'string' },
        {name:'latitude', type: 'string' },
        {name:'longitude', type: 'string' },
        {name:'zoom', type: 'int' }
    ],
    proxy: {
        type: 'rest',
        url : '/status'
    }
});
