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

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Home'
                }
            }/*, {
                title: 'My Acc',
                iconCls: 'user',
				itemId: 'mainAcc',
				xtype: 'afterloginview'
            }, {
				title: 'Events',
                iconCls: 'star',
				xtype: 'loginview'
			}*/
        ],
		listeners: {
			activeitemchange: function(r,value,oldvalue,eOpts){
				if(this.getActiveItem().getItemId() == 'mainAcc'){
					if(localStorage.status === undefined){
						var view = Ext.Viewport.animateActiveItem({xtype: 'loginview'},{ type: 'slide', direction: 'down' });
					}else{
						var view = Ext.Viewport.add({xtype: 'afterloginview'});
					}
					Ext.Viewport.setActiveItem(view);
					view.show(); //This is additionally done to fire showAnimation
				}
			}
		}
    }
});