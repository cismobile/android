Ext.define('mobileV1.store.LocationSelectState', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.LocationSelectState'],
  
	config: {
		model: 'mobileV1.model.LocationSelectState',
		storeId: 'LocationSelectState'
	}
});