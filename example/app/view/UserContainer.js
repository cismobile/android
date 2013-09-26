Ext.define('mobileV1.view.UserContainer', {
	extend: 'Ext.Panel',
	xtype: 'userontainerview',
	
	config: {
		title: 'User',
		iconCls: 'user',
		id: 'userontainer',
		autoDestroy: true,
		listeners: {
			activate: function(){
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'loginview'});
				}else{
					Ext.getCmp('userName').setHtml('<div style="height:50px"><img height=40 width=40 src="resources/image/user.png""><div style="padding-left:50px;margin-top:-30px">'+sessionStorage.loginame+'</div></div>');
					Ext.getCmp('userontainer').removeAll();
					Ext.getCmp('userontainer').add({xtype: 'statementview'});
				}
			}
		}
	}
});