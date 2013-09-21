Ext.define('mobileV1.store.ProductLastCategoryStore', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.ProductSelectSubCategory'],
  
	config: {
		model: 'mobileV1.model.ProductSelectSubCategory',
		storeId: 'ProductLastCategoryStore'
	}
});