Ext.define('cis.view.Country', {
    extend: 'Ext.List',
    xtype: 'Country',

    config: {
        title: 'Country List',
        //cls: 'x-contacts',

        store: 'CountryList',
		itemTpl: [
            '<div>{f_code} - {f_name}</div>'
        ].join(''),
		onItemDisclosure: function(list,index,element,record){
			this.getCountrylist().push({
				store: 'CategoryList',
				title: 'Category List',
				iconCls: 'star',
				xtype: 'list',
				itemTpl: '{categories_name}'
				//flex: 1
			})
		}
    }
});
