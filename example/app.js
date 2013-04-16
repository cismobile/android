Ext.Loader.setPath({
    'Ext': 'touch/src',
    'cis': 'app'
});

Ext.application({
    name: 'cis',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
		'Login',
		'Main',
        'CountryList',
		'Country',
	],
	
    controllers: [
        'Login',
        'countryList'
    ],

	models: [
		'CategoryList',
		'CountryList'
	],
	
	stores: [
		'CategoryList',
		'CountryList'
	],
    
	icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

		var db = openDatabase('mobileDB', '1.0', 'Test DB', 2 * 1024 * 1024);
		
		db.transaction(function (tx) {  
			tx.executeSql('Drop table em_company');
			tx.executeSql('CREATE TABLE IF NOT EXISTS em_company (id PRIMARY KEY, f_code VARCHAR(20),f_name VARCHAR(30))');
		});
		
		Ext.getStore('CountryList').on('load', function (store, records, successful, operation, eOpts) {         
			for (var i = 0; i < records.length; i++) {
				var e = records[i];
				(function(e) {
					db.transaction(function (tx) {  
							tx.executeSql('INSERT INTO em_company (f_code) VALUES (?)',  [e.get('f_code')]);
					});
				  })(e);
			}
		});

        Ext.Viewport.add([{
				xtype: 'loginview'
			},{
				xtype: 'mainview'
			},{
                xtype: 'countrylist'
            }
        ]);
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?", function (buttonId) {
            if (buttonId === 'yes') {
                window.location.reload();
            }
        });
    }
});
