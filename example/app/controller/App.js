Ext.define('mobileV1.controller.App',{
	extend: 'Ext.app.Controller',    
	config:{
		refs:{
			main : 'mainview',
			item : 'navigation',
			
			navBtn : 'image[name="nav_btn"]'
		},

		control : {
			navigation: {
                onItemTapCommand: 'naviTap'
            },
			navBtn : {
				tap : 'toggleNav'
			}
			// navigation : {
				// itemtap : function(list, index, target, record){
					// this.toggleNav();
				// }
			// }
		}
	},
	
	/**
	 * Toggle the slide navogation view
	 */
	toggleNav : function(){
		var me = this;
		mainEl = me.getMain().element;
		
		if (mainEl.hasCls('out')) {
			mainEl.removeCls('out').addCls('in'); 
			//me.getMain().setMasked(false);
		} else {
			mainEl.removeCls('in').addCls('out');
			//me.getMain().setMasked(true);
		}
	},
	
	naviTap: function(record){
		var me = this;
		mainEl = me.getMain().element;
		
		if (mainEl.hasCls('out')) {
			mainEl.removeCls('out').addCls('in'); 
			//me.getMain().setMasked(false);
		} else {
			mainEl.removeCls('in').addCls('out');
			//me.getMain().setMasked(true);
		}
		
		//if(sessionStorage.userid == 0){
		switch(record.data.type){				
			// if(sessionStorage.curview === undefined){
				// Ext.getCmp('home').push({xtype: 'transferview',title: "TRANSFER"});
			// }else{
				// Ext.getCmp(sessionStorage.curview).push({xtype: 'transferview',title: "TRANSFER"});
			// }
			
			// sessionStorage.transfer = 1;
			case 'history':
				Ext.getCmp('maintab').setActiveItem(3);
				sessionStorage.userpage = 'history';
				
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'loginview'});
				}else if(sessionStorage.userid > 0){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'historyview'});
					sessionStorage.history = 1;
				}
				break;
			case 'summary':
				Ext.getCmp('maintab').setActiveItem(3);
				sessionStorage.userpage = 'summary';
				
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'loginview'});
				}else if(sessionStorage.userid > 0){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'summaryview'});
					sessionStorage.summary = 1;
				}
				break;
			case 'transfer':
				Ext.getCmp('maintab').setActiveItem(3);
				sessionStorage.userpage = 'transfer';
				
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'loginview'});
				}else if(sessionStorage.userid > 0){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'transferview'});
					sessionStorage.transfer = 1;
				}
				break;
			case 'statement':
				Ext.getCmp('maintab').setActiveItem(3);
				sessionStorage.userpage = 'statement';
				
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'loginview'});
				}else if(sessionStorage.userid > 0){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'statementview'});
					sessionStorage.statement = 1;
				}
				break;
			case 'withdraw':
				Ext.getCmp('maintab').setActiveItem(3);
				sessionStorage.userpage = 'withdraw';
				
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'loginview'});
				}else if(sessionStorage.userid > 0){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'withdrawview'});
					sessionStorage.withdraw = 1;
				}
				break;
			case 'profile':
				Ext.getCmp('maintab').setActiveItem(3);
				sessionStorage.userpage = 'profile';
				
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'loginview'});
				}else if(sessionStorage.userid > 0){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'profileview'});
					sessionStorage.profile = 1;
				}
				break;
			case 'login':
					Ext.getCmp('maintab').setActiveItem(3);
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'loginview'});
					sessionStorage.userpage = 'login';
				break;
			case 'logout':
				var counter = Ext.getStore('naviStore').getData().length;
				var naviArray = new Array;
				for(var a = 0;a < counter;a++){
					var naviObject = new Object;
					naviObject.group = Ext.getStore('naviStore').getData().getAt(a).data.group;
					
					if(Ext.getStore('naviStore').getData().getAt(a).data.type == 'logout'){
						naviObject.title = '<div style="margin-left:4%"><img src="resources/image/userlogin.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Login</div></div>';
						naviObject.type = 'login';
					}else{
						naviObject.title = Ext.getStore('naviStore').getData().getAt(a).data.title;
						naviObject.type = Ext.getStore('naviStore').getData().getAt(a).data.type;
					}
					
					naviArray[a] = naviObject;
				}
				
				//Ext.getStore('naviStore').removeAll();
				Ext.getCmp('userName').setHtml('<div style="height:50px"><img height=40 width=40 src="resources/image/user.png""><div style="padding-left:50px;margin-top:-30px">Guest</div></div>');
				Ext.getStore('naviStore').setData(naviArray);
				
				Ext.ComponentQuery.query('#navHomeBtn')[0].hide();
				
				Ext.getCmp('maintab').setActiveItem(0);
				sessionStorage.userid = 0;
				break;
		}
			
			
			//Ext.getCmp(sessionStorage.curview).push({xtype: 'loginview',title: "Login"});
			//Ext.getCmp('product').push({xtype: 'loginview',title: "Login"});
			//Ext.getCmp('location').push({xtype: 'loginview',title: "Login"});
		//}
	}	
});