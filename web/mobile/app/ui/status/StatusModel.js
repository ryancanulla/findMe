Ext.define('FindMe.ui.status.StatusModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name:'accountId', type: 'string' },
        {name:'latitude', type: 'string' },
        {name:'longitude', type: 'string' },
        {name:'heading', type: 'string' },
        {name:'speed', type: 'int' },
        {name:'altitude', type: 'int' },
        {name:'zoom', type: 'int' }
    ],
    proxy: {
        type: 'rest',
        url : '/status',
        api: {
            update: '/status/update'
        }
    }
});
