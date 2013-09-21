Ext.define('mobileV1.model.ProductSelectSubCategory', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'sku',type: 'string'},
		{ name: 'name',type: 'string'},
		{ name: 'f_id',type: 'int' },
		{ name: 'f_category_id', type: 'int' }, 
		{ name: 'f_title',type: 'string'},
		{ name: 'f_filename',type:'string' },
		{ name: 'product_skus',type: 'string'},
		{ name: 'description',type: 'string'},
    ]
  }
  
});