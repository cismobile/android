Ext.define('cis.store.CategoryList', {
    extend: 'Ext.data.Store',
	
    config: {
        model: 'cis.model.CategoryList',
        autoLoad: true,
        sorters: 'categories_name',
        /*grouper: {
            groupFn: function(record) {
                return record.get('categories_name')[0];
            }
        },*/
        proxy: {
            type: 'jsonp',
			url: 'http://bangsar.publicvm.com/solucisv3_dev/index.php/api2/Product/CategoryList?language_id=1',
			callbackKey: 'callback',
			reader: {
				rootProperty: 'data'
			}
        }
    }
});
