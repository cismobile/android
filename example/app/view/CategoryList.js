Ext.define('cis.view.CategoryList', {
    extend: 'Ext.navigation.View',
	xtype: 'categorylist',
	requires: ['Ext.data.proxy.JsonP','Ext.dataview.List'],
    config: {
		store: 'CategoryList',
        items: [
			{ xtype: 'Category' }
        ]
    }
});