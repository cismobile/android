/*Ext.define('cis.view.CategoryList', {
    extend: 'Ext.navigation.View',
    //alias: "widget.categorylist",
	xtype: 'categorylist',
	requires: ['Ext.data.proxy.JsonP'],
    config: {
        items: [{
                xtype: 'list',
				title: 'Category List',
                itemTpl: [
					'<div><img border="0" src="http://bangsar.publicvm.com/solucisv3_dev/resources/images/categories/categories_ipod.jpg" alt="Pulpit rock" width="50" height="50"> {categories_name}</div>'
				],
                store: {
                    autoLoad: true,
                    fields: ['categories_name'],
                    proxy: {
                        type: 'jsonp',
                        url: 'http://bangsar.publicvm.com/solucisv3_dev/index.php/api2/Product/CategoryList?language_id=1',
                        callbackKey: 'callback',
						reader: {
                            rootProperty: 'data'
                        }
                    }
                }
            }
        ]
    }
});*/

Ext.define('cis.view.CategoryList', {
    extend: 'Ext.navigation.View',
    //alias: "widget.categorylist",
	xtype: 'categorylist',
	requires: ['Ext.data.proxy.JsonP','Ext.dataview.List'],
    config: {
		store: 'CategoryList',
        items: [
			{ xtype: 'Categories' }
        ]
    }
});