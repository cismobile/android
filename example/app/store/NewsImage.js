Ext.define('mobileV1.store.NewsImage', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.NewsImage'],
  
	config: {
		model: 'mobileV1.model.NewsImage',
		storeId: 'newsimage'
	}
});
