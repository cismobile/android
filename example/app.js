var sysPath = "http://210.5.44.102/solucisv3_ing/index.php";
var imagePath = "http://210.5.44.102/solucisv3_ing/images/cms/originals/";

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
		Ext.Viewport.setMasked({xtype:'loadmask',message:'Loading'});
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onRequestFileSystemSuccess, null); 

		function onRequestFileSystemSuccess(fileSystem) { 
			var entry = fileSystem.root; 
			entry.getDirectory("cismobile", {create: true, exclusive: false}, function(){}, function(){}); 
			/*entry.getFile(imagePath"GoogleLogo.jpg", {create:true}, function(f) {
		        f.remove(function() {
		            alert("File removed<p/>");
		        });
		    }, function(){alert("")});*/
		}
		
		var fileTransfer = new FileTransfer();
		
		function checkRevision(nRevision_id){
			if(localStorage.revision_id == nRevision_id){
				if(localStorage.rStatus == 'ok'){
					location.reload();
				}
				
				Ext.Viewport.setMasked(false);
				Ext.Viewport.add([{xtype: 'mainview'}]);
			}
		}
		
		var db = openDatabase('mobileDB', '1.19', '', 2 * 1024 * 1024);
		
		db.transaction(function (tx) {  
			//tx.executeSql('Drop table cms_content If EXISTS');
			tx.executeSql('CREATE TABLE IF NOT EXISTS cms_category (f_id PRIMARY KEY, f_title VARCHAR(255),f_description TEXT,f_type VARCHAR(20),f_status VARCHAR(20),f_parent_id INT,f_deleted TINYINT(4),f_published_date DATETIME,f_unpublished_date DATETIME,f_created_date DATETIME,f_created_by INT,f_updated_date DATETIME,f_updated_by INT,f_user_id INT,f_seqno INT,f_summary TEXT,f_level INT)');
			tx.executeSql('CREATE TABLE IF NOT EXISTS cms_content (f_id PRIMARY KEY, f_title TEXT,f_description TEXT,f_share_url TEXT,f_type VARCHAR(20),f_subtype VARCHAR(20),f_status VARCHAR(1),f_category_id INT(11),f_deleted TINYINT(4),f_published_date DATETIME,f_unpublished_date DATETIME,f_created_date DATETIME,f_created_by INT,f_updated_date DATETIME,f_updated_by INT,f_seqno INT)');
			tx.executeSql('CREATE TABLE IF NOT EXISTS cms_location (f_id PRIMARY KEY, f_content_id INT,f_address1 VARCHAR(255),f_address2 VARCHAR(255),f_address3 VARCHAR(255),f_address4 VARCHAR(255),f_latitude REAL,f_longitude REAL,f_tel_o VARCHAR(20),f_fax VARCHAR(20))');
			tx.executeSql('CREATE TABLE IF NOT EXISTS cms_media (f_id PRIMARY KEY, f_content_type VARCHAR(20),f_media_type VARCHAR(20),f_content_id INT,f_ori_filename VARCHAR(255),f_filename VARCHAR(255),f_status VARCHAR(1),f_deleted TINYINT(4),f_published_date DATETIME,f_unpublished_date DATETIME,f_created_date DATETIME,f_created_by INT,f_updated_date DATETIME,f_updated_by INT)');
			tx.executeSql('CREATE TABLE IF NOT EXISTS cms_keyword (f_id PRIMARY KEY,f_type VARCHAR(20),f_keyword VARCHAR(255),f_deleted INT,f_published_date DATETIME,f_unpublished_date DATETIME,f_created_date DATETIME,f_created_by INT,f_updated_date DATETIME,f_updated_by INT)');
		});
				
		// Insert Data
		//if(localStorage.revision_id != 0){
			var http = new XMLHttpRequest();
			var params = "id="+localStorage.revision_id+"&deleted=0&action=insert";
				http.open("POST", sysPath + "/api/cmsRevision/", true);
				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http.setRequestHeader("Content-length", params.length);
				http.setRequestHeader("Connection", "close");
				http.onreadystatechange = function() {
				if (http.readyState == 4 && http.status == 200) {
					var tempResult = eval("(" + http.responseText + ")");
						if(tempResult != "empty"){
						for(var a = 0;a < tempResult.length;++a){
							if(tempResult[a].type == "category"){
									var cHttp = new XMLHttpRequest();
									var params = "id="+tempResult[a].content_id;
										cHttp.open("POST", sysPath + "/api/cmsCategory", true);
										cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
										cHttp.setRequestHeader("Content-length", params.length);
										cHttp.setRequestHeader("Connection", "close");
										cHttp.onreadystatechange = function() {
										if (cHttp.readyState == 4 && cHttp.status == 200) {
											var tmpR = eval ("(" + cHttp.responseText + ")");
											db.transaction(function (tx) {  
												tx.executeSql("INSERT INTO cms_category (f_id,f_title,f_description,f_type,f_status,f_parent_id,f_deleted,f_published_date,f_unpublished_date,f_created_date,f_created_by,f_updated_date,f_updated_by,f_user_id,f_seqno,f_summary,f_level) VALUES ('"+tmpR.f_id+"','"+tmpR.f_title+"','"+tmpR.f_description+"','"+tmpR.f_type+"','"+tmpR.f_status+"','"+tmpR.f_parent_id+"','"+tmpR.f_deleted+"','"+tmpR.f_publish_date+"','"+tmpR.f_unpublished_date+"','"+tmpR.f_created_date+"','"+tmpR.f_created_by+"','"+tmpR.f_updated_date+"','"+tmpR.f_updated_by+"','"+tmpR.f_user_id+"','"+tmpR.f_seqno+"','"+tmpR.f_summary+"','"+tmpR.f_level+"')",function(){},checkRevision(tempResult[tempResult.length - 1].revision_id));										
											});
										}
									}
									cHttp.send(params);
							}else if(tempResult[a].type == "content"){
									var bHttp = new XMLHttpRequest();
									var params = "aID="+tempResult[a].content_id;
										bHttp.open("POST", sysPath + "/api/cmsRevision/Content", true);
										bHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
										bHttp.setRequestHeader("Content-length", params.length);
										bHttp.setRequestHeader("Connection", "close");
										bHttp.onreadystatechange = function() {
										if (bHttp.readyState == 4 && bHttp.status == 200) {
											var catTemp = eval ("(" + bHttp.responseText + ")");
											db.transaction(function (tx) {  
												tx.executeSql("INSERT INTO cms_content (f_id,f_title,f_description) VALUES ('"+catTemp.f_id+"','"+catTemp.f_title+"','"+catTemp.f_description+"')",function(){},checkRevision(tempResult[tempResult.length - 1].revision_id));
											});
										}
									}
									bHttp.send(params);
							}else if(tempResult[a].type == "media"){
									var aHttp = new XMLHttpRequest();
									var params = "id="+tempResult[a].content_id;
										aHttp.open("POST", sysPath + "/api/cmsMedia", true);
										aHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
										aHttp.setRequestHeader("Content-length", params.length);
										aHttp.setRequestHeader("Connection", "close");
										aHttp.onreadystatechange = function() {
										if (aHttp.readyState == 4 && aHttp.status == 200) {
											// Download Media - Image
											var tmpR = eval ("(" + aHttp.responseText + ")");
											var url = imagePath + tmpR.f_filename;
											var filePath = "file:///sdcard/cismobile/";
											
											fileTransfer.download(
												url,
												filePath + tmpR.f_filename,
												function(entry) {
													alert("download complete: " + entry.fullPath);
												},
												function(error) {
													alert("download error source " + error.source);
													alert("download error target " + error.target);
													alert("upload error code" + error.code);
												}
											);
											
											db.transaction(function (tx) {  
												tx.executeSql("INSERT INTO cms_media (f_id,f_content_type,f_media_type,f_content_id,f_ori_filename,f_filename,f_status,f_deleted,f_published_date,f_unpublished_date,f_created_date,f_created_by,f_updated_date,f_updated_by) VALUES ('"+tmpR.f_id+"','"+tmpR.f_content_type+"','"+tmpR.f_media_type+"','"+tmpR.f_content_id+"','"+tmpR.f_ori_filename+"','"+tmpR.f_filename+"','"+tmpR.f_status+"','"+tmpR.f_deleted+"','"+tmpR.f_published_date+"','"+tmpR.f_unpublished_date+"','"+tmpR.f_created_date+"','"+tmpR.f_created_by+"','"+tmpR.f_updated_date+"','"+tmpR.f_updated_by+"')",function(){},checkRevision(tempResult[tempResult.length - 1].revision_id));										
											});
										}
									}
									aHttp.send(params);
							}
							localStorage.revision_id = tempResult[a].revision_id;
							localStorage.rStatus = 'ok';
						}
					}else{
						
					}
				}else{
					localStorage.rStatus = 'no';
					checkRevision(localStorage.revision_id);
				}
			}
			http.send(params);
		//}else{
			/*var nHttp = new XMLHttpRequest();
			var params = "id="+localStorage.revision_id+"&deleted=0&action=delete";
				nHttp.open("POST", sysPath + "/api/cmsRevision/", true);
				nHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				nHttp.setRequestHeader("Content-length", params.length);
				nHttp.setRequestHeader("Connection", "close");
				nHttp.onreadystatechange = function() {
					if (nHttp.readyState == 4 && nHttp.status == 200) {
						var tempResult = eval("(" + nHttp.responseText + ")");
						if(tempResult != "empty"){
							for(var a = 0;a < tempResult.length;a++){
								if(tmpR[a].type == "media"){
									/*window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, deleteMediaFile, null); 
									
									function deleteMediaFile(fileSystem) { 
										var entry = fileSystem.root; 
										entry.getFile(imagePath + tmpR.f_filename, {create:true}, function(f) {
											f.remove(function() {
												alert("File removed<p/>");
											});
										}, function(){alert("")});
									}
									
									
								}
								localStorage.revision_id = tempResult[a].revision_id;
								alert(localStorage.revision_id);
							}
						}else{
							checkRevision(localStorage.revision_id);
						}
					}
				}
				nHttp.send(params);*/
		//}

		// Update Data
		
		// Delete Data
		
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
		//Ext.Viewport.setMasked(false);

		if(Ext.os.name == "iOS" && Ext.os.is.Tablet === true){
			var meta = document.createElement('meta');
			meta.setAttribute("name","viewport");
			meta.setAttribute("content","user-scalable=no, initial-scale=1, maximum-scale=2, minimum-scale=2, width=100, height=100");
			(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(meta);
		}
		
        // Initialize the main view
        /*Ext.Viewport.add([{
				xtype: 'mainview'
			}
        ]);*/
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
