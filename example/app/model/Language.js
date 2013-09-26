Ext.define('mobileV1.model.Language', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_id', type: 'int' }, 
		{ name: 'f_code', type: 'string' },
		{ name: 'f_description',type: 'string'}
	]}
});