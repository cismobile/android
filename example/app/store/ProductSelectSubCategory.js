Ext.define('mobileV1.store.ProductSelectSubCategory', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.ProductSelectSubCategory'],
  
	config: {
		model: 'mobileV1.model.ProductSelectSubCategory',
		storeId: 'ProductSelectSubCategory'
	}
});