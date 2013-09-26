Ext.define('mobileV1.store.ProductMainCategoryImage', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.ProductMainCategoryImage'],
  
	config: {
		model: 'mobileV1.model.ProductMainCategoryImage',
		storeId: 'ProductMainCategoryImage'
	}
});