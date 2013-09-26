Ext.define('mobileV1.model.NewsImage', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_id', type: 'int' }, 
		{ name: 'f_filename',type: 'string'},
		{ name: 'f_description',type: 'string'}
    ] 
  }
  
});