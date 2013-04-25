Ext.define('cis.view.CategoryList', {
extend: 'Ext.Container',
requires: [
    'Ext.data.TreeStore',
    'Ext.dataview.NestedList',
    'cis.store.CategoryList',
],
xtype: 'categorylist',
config: {
    iconCls: 'compass1',
    title: 'Explore',
    layout: 'vbox',
    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            title: 'Explore'
        },
        {
            xtype: 'nestedlist',
            store: 'CategoryList',
            title: 'Museum Levels',
            displayField: 'title',
            detailCard: {
                html: 'Explore Details'
            },
            listeners: {
                leafitemtap: function(nestedList, list, index, target, record){
                    var detailCard = nestedList.getDetailCard();
                    detailCard.setHtml('<div style="text-align:center;margin:.5em;"><img src="'+record.get('image')+'" alt="'+record.get('title')+'" />'+
                        '<p style="text-align:left;">'+record.get('text')+'</p></div>'
                    );
                }
            },
            flex: 1
        }

    ]
}
});
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

/*Ext.define('cis.view.CategoryList', {
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
});*/