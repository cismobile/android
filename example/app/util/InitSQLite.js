Ext.define('mobileV1.util.InitSQLite', {
  singleton : true,

  requires: [
    'Sqlite.Connection',
    'Sqlite.data.proxy.SqliteStorage',
    'Ext.data.reader.Array'
  ],
  
  initDb: function() {
    Ext.ns('DbConnection');
    
    this.DbConnection = Ext.create('Sqlite.Connection', {
      dbName: 'mobileDB',
      dbDescription: ''
    });
  },
  
  getConnection: function() {
    if(!Ext.isDefined(this.DbConnection)) this.initDb();
    return this.DbConnection;
  }
});
