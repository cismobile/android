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
				itemTpl: '{f_title}',
                xtype: ''
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