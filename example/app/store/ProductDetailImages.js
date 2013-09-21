Ext.define('mobileV1.store.ProductDetailImages', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.NewsImage'],
  
	config: {
		model: 'mobileV1.model.NewsImage',
		storeId: 'ProductDetailImages'
	}
});
