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
		'mobileV1.util.InitSQLite',
		'Ext.dataview.DataView'
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
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onRequestFileSystemSuccess, null); 

		function onRequestFileSystemSuccess(fileSystem) { 
			var entry = fileSystem.root; 
			entry.getDirectory("cismobile", {create: true, exclusive: false}, onGetDirectorySuccess, onGetDirectoryFail); 
		}

		var fileTransfer = new FileTransfer();
		var url = "http://www.media-lemondenumerique.com/upload/images/2013/02/GoogleLogo.jpg";
		var filePath = "file:///sdcard/cismobile/";

		fileTransfer.download(
		    url,
		    filePath + "GoogleLogo.jpg",
		    function(entry) {
		        alert("download complete: " + entry.fullPath);
		    },
		    function(error) {
		        alert("download error source " + error.source);
		        alert("download error target " + error.target);
		        alert("upload error code" + error.code);
		    }
		);
		
		var db = openDatabase('mobileDB', '1.19', '', 2 * 1024 * 1024);
		
		db.transaction(function (tx) {  
			//tx.executeSql('Drop table cms_content If EXISTS');
			tx.executeSql('CREATE TABLE IF NOT EXISTS cms_content (f_id PRIMARY KEY, f_title TEXT,f_description TEXT,f_share_url TEXT,f_type VARCHAR(20),f_subtype VARCHAR(20),f_status VARCHAR(1),f_category_id INT(11),f_deleted TINYINT(4),f_published_date DATETIME,f_unpublished_date DATETIME,f_created_date DATETIME,f_created_by INT(11),f_updated_date DATETIME,f_updated_by INT(11),f_seqno INT(3))');
			tx.executeSql('CREATE TABLE IF NOT EXISTS cms_location (f_id PRIMARY KEY, f_content_id INT,f_address1 VARCHAR(255),f_address2 VARCHAR(255),f_address3 VARCHAR(255),f_address4 VARCHAR(255),f_latitude REAL,f_longitude REAL,f_tel_o VARCHAR(20),f_fax VARCHAR(20))');
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
					if(localStorage.revision_id != tempResult[a].revision_id){
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
									tx.executeSql("INSERT INTO cms_content (f_id,f_title,f_description) VALUES ('"+tmpR.f_id+"','"+tmpR.f_title+"','"+tmpR.f_description+"')");
								});
							}
						}
						cHttp.send(params);
						localStorage.revision_id = tempResult[a].revision_id;
					}
				}
			}
		}
		http.send(params);

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

		if(Ext.os.name == "iOS" && Ext.os.is.Tablet === true){
			var meta = document.createElement('meta');
			meta.setAttribute("name","viewport");
			meta.setAttribute("content","user-scalable=no, initial-scale=1, maximum-scale=2, minimum-scale=2, width=100, height=100");
			(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(meta);
		}
		
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
