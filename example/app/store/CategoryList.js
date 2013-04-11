Ext.define('cis.store.CategoryList', {
    extend: 'Ext.data.Store',
	
    config: {
        model: 'cis.model.CategoryList',
        autoLoad: true,
        sorters: 'f_categories',
        proxy: {
            type: 'jsonp',
			url: 'http://bangsar.publicvm.com/solucisv3_dev/index.php/api2/Product/CategoryList',
			extraParams: {language_id:1},
			callbackKey: 'callback',
			reader: {
				rootProperty: 'data'
			}
        }
    }
});
