Ext.define('mobileV1.model.MainNews', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_id', type: 'int' }, 
		{ name: 'f_title', type: 'string' },
		{ name: 'f_description',type: 'string'},
		{ name: 'description',type: 'string'},
		{ name: 'f_filename',type: 'string'},
		{ name: 'f_name',type: 'string'},
		{ name: 'f_code',type: 'string'},
		{ name: 'created_date',type: 'string'},
		{ name: 'f_created_date',type: 'string'},
		{ name: 'f_price_code',type: 'string'},
		{ name: 'products_price',type: 'string'},
		{ name: 'name',type: 'string'}
    ]
  }
  
});