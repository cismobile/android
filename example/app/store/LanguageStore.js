Ext.define('mobileV1.store.LanguageStore', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.Language'],
  
	config: {
		model: 'mobileV1.model.Language',
		storeId: 'LanguageStore'
	}
});