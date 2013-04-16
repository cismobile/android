Ext.define('cis.store.Session', {
    extend: 'Ext.data.Store',
	
    config: {
        model: 'cis.model.Session',
		proxy: {
            type: 'sessionstorage',
			id: 'mySession'
        }
    }
});
