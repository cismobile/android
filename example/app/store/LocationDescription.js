Ext.define('mobileV1.store.LocationDescription', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.MainNews'],
  
	config: {
		model: 'mobileV1.model.MainNews',
		storeId: 'locDescription'
	}
});
