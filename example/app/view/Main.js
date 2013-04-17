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
				html: 'AA',
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
				if(this.getActiveItem().getItemId() == 'mainAcc'){
					if(localStorage.status === undefined){
						var view = Ext.Viewport.animateActiveItem({xtype: 'loginview'},'fade');
					}else{
						var view = Ext.Viewport.animateActiveItem({xtype: 'afterloginview'},'fade');
					}
					//this.setActiveItem(view);
					view.show(); //This is additionally done to fire showAnimation
				}
			}
		}
    }
});