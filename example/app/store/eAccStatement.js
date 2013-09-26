Ext.define('mobileV1.store.eAccStatement', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.eAccountReader'],
  
	config: {
		model: 'mobileV1.model.eAccountReader',
		storeId: 'eAccStatement'
	}
});
