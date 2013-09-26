Ext.define('mobileV1.store.People', {
	extend: 'Ext.data.Store',
  
	requires: ['mobileV1.model.Person'],
  
	config: {
		model: 'mobileV1.model.Person',
		storeId: 'People'
	}
});
