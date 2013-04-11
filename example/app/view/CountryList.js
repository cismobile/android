Ext.define('cis.view.CountryList', {
    extend: 'Ext.navigation.View',
	xtype: 'countrylist',
	requires: ['Ext.data.proxy.JsonP','Ext.dataview.List'],
    config: {
		store: 'CountryList',
        items: [
			{ xtype: 'Country' }
        ]
    }
});