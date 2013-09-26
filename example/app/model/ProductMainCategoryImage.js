Ext.define('mobileV1.model.ProductMainCategoryImage', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_id',type: 'int'},
		{ name: 'f_category_id', type: 'int' }, 
		{ name: 'f_title', type: 'string' }, 
		{ name: 'f_filename',type: 'string'},
		{ name: 'f_description',type: 'string'},
		{ name: 'product_skus',type: 'string'}
    ]
  }
  
});