Ext.define('mobileV1.model.LocationSelectLocation', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_id', type: 'int' }, 
		{ name: 'f_title', type: 'string' },
		{ name: 'f_filename', type: 'string' },
		{ name: 'images',type: 'string' },
		{ name: 'f_tel_o',type: 'string' }
    ]
  }
  
});