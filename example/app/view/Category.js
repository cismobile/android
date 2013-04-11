Ext.define('cis.view.Category', {
    extend: 'Ext.List',
    xtype: 'Category',

    config: {
        title: 'Shopping Cart - Category List',
        //cls: 'x-contacts',

        store: 'CategoryList',
        itemTpl: [
            '<div>{categories_name}</div>'
        ].join('')
    }
});
