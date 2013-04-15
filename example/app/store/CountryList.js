Ext.define('cis.store.CountryList', {
    extend: 'Ext.data.Store',
	
    config: {
        model: 'cis.model.CountryList',
        autoLoad: true,
        sorters: 'f_code',
        /*grouper: {
            groupFn: function(record) {
                return record.get('categories_name')[0];
            }
        },*/
        proxy: {
            type: 'jsonp',
			url: 'http://bangsar.publicvm.com/solucisv3_dev/index.php/api2/Company/CountryList',
			callbackKey: 'callback',
			reader: {
				rootProperty: 'data'
			}
        }
    }
});
