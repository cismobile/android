Ext.define('mobileV1.store.People', {
  
  extend: 'Ext.data.Store',
  
  requires: ['mobileV1.model.Person'],
  
  config: {
    model: 'mobileV1.model.Person',
    autoLoad: true,
	proxy: {
      type: 'sqlitestorage',
      dbConfig: {
        tablename: 'cms_content',
        dbConn: mobileV1.util.InitSQLite.getConnection()
      }
    }
  }
});
