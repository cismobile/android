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
				store: 'People',
                styleHtmlContent: true,
                scrollable: true,
				itemTpl: '<p style="font-weight:bold;text-align:center;font-size:24px">{f_title}</p><img src="/resources/image/cis.png" width="97%" height="30%">{f_description}',
				xtype: 'dataview',
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Home'
                }
            }, {
                title: 'My Acc',
                iconCls: 'user',
				itemId: 'mainAcc'
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
					//view.show(); //This is additionally done to fire showAnimation
				}
			}
		}
    }
});