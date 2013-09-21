Ext.define('mobileV1.store.MoreNews', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.MainNews'],
  
	config: {
		model: 'mobileV1.model.MainNews',
		storeId: 'MoreNews'
	}
});