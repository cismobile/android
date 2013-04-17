var tabpanel = Ext.define('mobileV1.view.Main', {
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

                styleHtmlContent: true,
                scrollable: true,
				html: [ "<a href=\"javascript:navigator.notification.alert('Congratulations, you are ready to work with Sencha Touch 2 and PhoneGap!')\">Click me</a>" ].join(""),
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
            }
        ],
		listeners: {
			activeitemchange: function(r,value,oldvalue,eOpts){
				this.setActiveItem(0);
				/*if(this.getActiveItem().getItemId() == 'mainAcc'){
					if(localStorage.status === undefined){
						var view = Ext.Viewport.animateActiveItem({xtype: 'loginview'},{ type: 'slide', direction: 'up' });
					}else{
						var view = Ext.Viewport.animateActiveItem({xtype: 'afterloginview'},{ type: 'slide', direction: 'left' });
					}
					this.setActiveItem(view);
					view.show(); //This is additionally done to fire showAnimation
				}*/
			}
		}
    }
});