Ext.define('cis.view.Categories', {
    extend: 'Ext.List',
    xtype: 'Categories',

    config: {
        title: 'Category List',
        //cls: 'x-contacts',

        store: 'CategoryList',
        itemTpl: [
            '<div><img border="0" src="http://bangsar.publicvm.com/solucisv3_dev/resources/images/categories/categories_ipod.jpg" alt="Pulpit rock" width="50" height="50"> {categories_name}</div>'
        ].join('')
    }
});
