Ext.define('cis.view.CountryList', {
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