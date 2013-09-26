Ext.define('mobileV1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
   	
	id: 'maintab',
	config: {
		zIndex: 2,
        tabBarPosition: 'bottom',
		layout: 'fit',
		activeItem: 0,
		layout: {animation: false},
		styleHtmlContent: true,
        items: [{
			xtype: 'homeview',
			itemId: 'homeview'
		},{
			xtype: 'productview',
			itemId: 'productview'
		},{
			xtype: 'locationview',
			itemId: 'locationview'
		},{
			xtype: 'eventsview',
			itemId: 'eventsview'
		},{
			title: 'Login',
			iconCls: 'user',
			id: 'userontainer',
			layout: {type: 'vbox'},
			listeners: {
				activate: function(){
					if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
						this.removeAll();
						this.add({xtype: 'loginview'});
					}else if(sessionStorage.userid > 0){
						Ext.getCmp('userName').setHtml('<div style="height:50px"><img height=40 width=40 src="resources/image/user.png""><div style="padding-left:50px;margin-top:-30px">'+sessionStorage.loginame+'</div></div>');
						this.removeAll();
						this.add({xtype: 'statementview'});
					}
				}
			}
		},{
			xtype: 'mediaview',
			itemId: 'mediaview'
		}/*,{
			xtype: 'pointview',
			itemId: 'pointview'
		}*/],
		listeners: {
			initialize: function(){
				if(localStorage.companyid != 0){
					storeProductCategory();
					storeProfile();
					storeNews();
					storeEvents();
					storeMediaList();
					storeLocationStates(4);
				}
			},
			activeitemchange: function(r,value,oldvalue,eOpts){
				switch(this.getActiveItem().getItemId()){
					case 'homeview':
						sessionStorage.curview = 'home';
						break;
					case 'productview':
						sessionStorage.curview = 'product';
						break;
					case 'locationview':
						sessionStorage.curview = 'location';
						break;
					case 'loginview':
						sessionStorage.curview = 'user';
						break;
				}
				
				/*if(this.getActiveItem().getItemId() == 'locationview'){
					storeLocationStates(4);
					//var view = Ext.Viewport.animateActiveItem({xtype: 'locationview'},{ type: 'slide', direction: 'left' });
				}
				
				if(this.getActiveItem().getItemId() == 'pointview'){
					if(localStorage.status === undefined){
						var view = Ext.Viewport.animateActiveItem({xtype: 'loginview'},{ type: 'slide', direction: 'left' });
						//Ext.Viewport.setActiveItem(view);

						view.show(); //This is additionally done to fire showAnimation

					}
				}*/
				
				if(this.getActiveItem().getItemId() == 'homeview'){
				 var temp = new Object();
					
		            db.transaction(function (tx) {
						tx.executeSql('SELECT * FROM cms_content,cms_category', [], function (tx, results) {
							var len = results.rows.length;
							for (var i = 0; i < len; i++) {
								temp.f_title = results.rows.item(i).f_title;
								temp.f_description = results.rows.item(i).f_description;
								
								Ext.getStore('People').setData(Ext.JSON.encode(temp));
							}
						})
					});
				
		            
		           /* var temp1 = new Object();
					
		            db.transaction(function (tx) {
						tx.executeSql('SELECT * FROM cms_content', [], function (tx, results) {
							var len = results.rows.length;
							for (var i = 0; i < len; i++) {
								temp1.f_title = results.rows.item(i).f_title;
								temp1.f_description = results.rows.item(i).f_description;
								
								Ext.getStore('MainNews').setData(Ext.JSON.encode(temp1));
								console.log(results.rows.item(i));
							}
						})
					});
					*/
		         }
			}
		}
    }
});