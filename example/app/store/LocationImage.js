Ext.define('mobileV1.store.LocationImage', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.NewsImage'],
  
	config: {
		model: 'mobileV1.model.NewsImage',
		storeId: 'locationImage'
	}
});
