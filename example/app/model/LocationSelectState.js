Ext.define('mobileV1.model.LocationSelectState', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_id', type: 'int' }, 
		{ name: 'f_title', type: 'string' },
		{ name: 'images',type: 'string' }
    ]
  }
  
});