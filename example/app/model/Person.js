Ext.define('mobileV1.model.Person', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_id', type: 'int' }, 
		{ name: 'f_title', type: 'string' },
		{ name: 'f_description',type: 'string'}
    ]
  }
  
});