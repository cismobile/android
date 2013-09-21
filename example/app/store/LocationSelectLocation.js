Ext.define('mobileV1.store.LocationSelectLocation', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.LocationSelectLocation'],
  
	config: {
		model: 'mobileV1.model.LocationSelectLocation',
		storeId: 'LocationSelectLocation'
	}
});