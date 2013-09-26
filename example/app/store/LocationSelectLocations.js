Ext.define('mobileV1.store.LocationSelectLocations', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.LocationSelectLocation'],
  
	config: {
		model: 'mobileV1.model.LocationSelectLocation',
		storeId: 'LocationSelectLocations',
		sorters: 'f_title',
		grouper: {
			groupFn: function (record) {
				return record.get('f_title')[0];
			}
		}
	}
});