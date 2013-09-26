var sysPath = "http://210.5.44.102/mobiledemo2/index.php";
var imgPath = "http://210.5.44.102/mobiledemo2/";
var pdfPath = "http://210.5.44.102/mobiledemo2/pdf/";
var imagePath = "http://src.sencha.io/"+imgPath+"/images/cms/originals/";
var imageSubPath = "http://src.sencha.io/x50/x50/"+imgPath;
var imageLocationPath = "http://src.sencha.io/x50/"+imgPath+"images/cms/originals/";
var imageNewsPath = "http://src.sencha.io/"+imgPath+"images/cms/originals/"; 
var imageProductPath = "http://src.sencha.io/x50/x50/"+imgPath; 
var emptyImg = "<img style='margin-left:5px;margin-right:5x;' height=160 class='imageSetting' src='http://src.sencha.io/http://210.5.44.102/mobiledemo2/images/cni_empty2.jpg'></img>";
var imgProUrl = '<img id="{f_category_id}" style="" src="'+imagePath+'{f_filename}"><p style="position:absolute; background-color:white; filter:alpha(opacity=60); opacity:.6;width:100%;height:12%;"><span style="color:black; filter:alpha(opacity=100); opacity:1;font-size:38px;padding:10px;font-family:bold">{f_title}</span></p></img>';
var imgNewsUrl = '<img style="margin-left:5px;margin-right:5x;" class="imageSetting" src="'+imageNewsPath+'{f_filename}"></img>';
var imgProDetailsUrl = '<img style="margin-left:5px;margin-right:5x;" height="200" class="imageSetting" src="'+imageProductPath+'{f_filename}"</img>';
var imgLocUrl = '<div><img height="150" src="http://src.sencha.io/'+imagePath+'{f_filename}"</img></div>';
var newsImg = "";
var proImg = "";
var locImg = "";
var appDate = new Date();
var filePath = "file:///sdcard/cismobile/";
var db = openDatabase('mobileDB', '1.19', '', 2 * 1024 * 1024);
	
sessionStorage.statement = 0;
sessionStorage.transfer = 0;

Ext.Loader.setPath({
	'Ext': 'touch/src',
	'mobileV1': 'app',
	'Sqlite': 'app/sqlite'
});

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': 'ux'
    }
});

Ext.application({
	name: 'mobileV1',

	requires: [
		'Ext.Img',
		'Ext.MessageBox',
		'mobileV1.util.InitSQLite',
		'Ext.dataview.DataView',
		'Ext.dataview.List',
		'Ext.navigation.View',
		'Ext.field.Search',
		'Ext.TitleBar',
		'Ext.field.Hidden',
		'Ext.Map',
		'Ext.field.Number',
		'Ext.ux.panel.PDF',
		'Ext.field.Email',
		'Ext.field.DatePicker'
	],

	views: [
		'Viewport',
		'Navigation',
		'Language',
		'Company',
		'Media',
		'Events',
		'Event',
		'Signup',
		'ShoppingCart',
		'Profile',
		'Summary',
		'History',
		'Transfer',
		'Statement',
		'Withdraw',
		'PdfViewer',
		'User',
		'Main',
		'Home',
		'Login',
		'AfterLogin',
		'Product',
		'Location',
		'Point',
		'News',
		'MoreNews',
		'SelectLocation',
		'SelectLocations',
		'LocationDetails',
		'LocationMap',
		'ProductDetails',
		'ProductSubCategory',
		'ProductLastCategory',
		'EmptyData'
	],

	controllers: [
		'App'
	],

	models: [
		'Language',
		'Person',
		'eAccountReader',
		'MainNews',
		'NewsImage',
		'ProductMainCategoryImage',
		'ProductSelectSubCategory',
		'LocationSelectState',
		'LocationSelectLocation'
	],

	stores: [
		'CompanyStore',
		'LanguageStore',
		'eAccStatement',
		'EventList',
		'People',
		'MediaList',
		'MainNews',
		'MoreNews',
		'NewsImage',
		'LocationImage',
		'LocationDescription',
		'proDescription',
		'ProductMainCategoryImage',
		'ProductSelectSubCategory',
		'ProductLastCategoryStore',
		'ProductDetailImages',
		'LocationSelectState',
		'LocationSelectLocation',
		'LocationSelectLocations'
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
		//Ext.fly('appLoadingIndicator').destroy();
        
		//navigator.splashscreen.hide();

		/* Create Table */
		cTable(db);
		
		if (Ext.os.name == "iOS" && Ext.os.is.Tablet === true) {
			var meta = document.createElement('meta');
			meta.setAttribute("name", "viewport");
			meta.setAttribute("content", "user-scalable=no, initial-scale=1, maximum-scale=2, minimum-scale=2, width=100, height=100");
			(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(meta);
		}

		// Initialize the main view
		if(localStorage.companyid > 0 && localStorage.languageid > 0){
			Ext.Viewport.add([{xtype: 'app_viewport'}]);
		}else{
			storeCompanyList();
			Ext.Viewport.add([{xtype: 'companyview'}]);
		}
		
		// Ext.Viewport.add({
            // xtype     : 'pdfpanel',
            // fullscreen: true,
            // layout    : 'fit',
            // src       : 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf', // URL to the PDF - Same Domain or Server with CORS Support
            // style     : {
                // backgroundColor: '#333'
            // }
        // });
		
		//if(Ext.device.Connection.isOnline()){
			//detectLogin();
		//}else{
			//alert('Please Check The Internet Connection');
		//}
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