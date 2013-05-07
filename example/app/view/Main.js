Ext.define('mobileV1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
		activeItem: 0,
        items: [{
                title: 'Home',
                iconCls: 'home',
				store: 'People',
                styleHtmlContent: true,
                scrollable: true,
				itemTpl: '<p style="font-weight:bold;text-align:center;font-size:24px">{f_title}</p><img src="/sdcard/cismobile/GoogleLogo.jpg" width="97%" height="30%">{f_description}',
				xtype: 'dataview',
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Home'
                }
            }, {
                title: 'My Acc',
                iconCls: 'user',
				itemId: 'mainAcc',
				xtype: 'afterloginview'
            },{
				title: 'Login',
                iconCls: 'star',
				hidden: true,
				itemId: 'mainAcc',
				xtype: 'loginview'
			}
        ],
		listeners: {
			activeitemchange: function(r,value,oldvalue,eOpts){
				if(this.getActiveItem().getItemId() == 'mainAcc'){
					if(localStorage.status === undefined){
						var view = Ext.Viewport.animateActiveItem({xtype: 'loginview'},{ type: 'slide', direction: 'down' });
						Ext.Viewport.setActiveItem(view);
						view.show(); //This is additionally done to fire showAnimation
					}
				}
			}
		}
    }
});