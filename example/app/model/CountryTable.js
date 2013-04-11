Ext.define('cis.model.CountryTable', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_code', type: 'string'},
		{ name: 'f_name',type: '}
    ],
    
    validations: [
    {
      name: 'name',
      type: 'length',
      min: 4,
      message: 'Person\'s name must be at least 4 characters long'
    }
    ],
    
    proxy: {
      type: 'sqlitestorage',
      dbConfig: {
        tablename: 'country',
        dbConn: SqliteDemo.util.InitSQLite.getConnection()
      }
    }
  }
  
});