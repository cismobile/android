/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'mobileV1': 'app',
	'Sqlite': 'app/sqlite'
});
//</debug>

Ext.application({
    name: 'mobileV1',

    requires: [
        'Ext.MessageBox',
		'mobileV1.util.InitSQLite'
    ],

    views: [
        'Main',
		'Login',
		'AfterLogin'
    ],
	
	controllers: [
		'Login'
	],
	
	models: [
		'Person'
	],
	
	stores: [
		'People'
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

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

		var db = openDatabase('mobileDB', '1.0', '', 2 * 1024 * 1024);
		
		db.transaction(function (tx) {  
			//tx.executeSql('Drop table cms_content If EXISTS');
			tx.executeSql('CREATE TABLE IF NOT EXISTS cms_content (f_id PRIMARY KEY, f_title TEXT,f_description TEXT,f_share_url TEXT,f_type VARCHAR(20),f_subtype VARCHAR(20),f_status VARCHAR(1),f_category_id INT(11),f_deleted TINYINT(4),f_published_date DATETIME,f_unpublished_date DATETIME,f_created_date DATETIME,f_created_by INT(11),f_updated_date DATETIME,f_updated_by INT(11),f_seqno INT(3))');
		});
		
		var http = new XMLHttpRequest();
		var params = "id=0&type=content";;
			http.open("POST", "http://210.5.44.102/solucisv3_ing/index.php/api/cmsRevision/", true);
			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			http.setRequestHeader("Content-length", params.length);
			http.setRequestHeader("Connection", "close");
			http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				var tempResult = eval ("(" + http.responseText + ")");
				for(var a = 0;a < tempResult.length;a++){
					var cHttp = new XMLHttpRequest();
					var params = "aID="+tempResult[a].content_id;
						cHttp.open("POST", "http://210.5.44.102/solucisv3_ing/index.php/api/cmsRevision/Content", true);
						cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						cHttp.setRequestHeader("Content-length", params.length);
						cHttp.setRequestHeader("Connection", "close");
						cHttp.onreadystatechange = function() {
						if (cHttp.readyState == 4 && cHttp.status == 200) {
							var tmpR = eval ("(" + cHttp.responseText + ")");
							db.transaction(function (tx) {  
								tx.executeSql("INSERT INTO cms_content (f_id,f_title,f_description,f_share_url,f_type,f_subtype,f_status,f_category_id,f_deleted,f_published_date,f_unpublished_date,f_created_date,f_created_by,f_updated_date,f_updated_by,f_seqno) VALUES ('"+tmpR.f_id+"','"+tmpR.f_title+"','"+tmpR.f_description+"','"+tmpR.f_share_url+"','"+tmpR.f_type+"','"+tmpR.f_subtype+"','"+tmpR.f_status+"','"+tmpR.f_category_id+"','"+tmpR.f_deleted+"','"+tmpR.f_published_date+"','"+tmpR.f_unpublished_date+"','"+tmpR.f_created_date+"','"+tmpR.f_created_by+"','"+tmpR.f_updated_date+"','"+tmpR.f_updated_by+"','"+tmpR.f_seqno+"')");
							});
						}
					}
					cHttp.send(params);
					localStorage.revision_id = tempResult[a].revision_id;
				}
			}
		}
		http.send(params);
		
        // Initialize the main view
        Ext.Viewport.add([{
				xtype: 'mainview'
			}
        ]);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
