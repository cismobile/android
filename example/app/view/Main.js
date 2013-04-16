Ext.define('cis.view.Main', {
    extend: 'Ext.tab.Panel',
	alias: "widget.mainview",
    requires: [
        'Ext.TitleBar',
		'Ext.carousel.Carousel'
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
            }
        ],
		listeners: {
			activeitemchange: function(r,value,oldvalue,eOpts){
				/*if(this.getActiveItem().getItemId() == 'mainAcc'){
					var view = Ext.Viewport.add({xtype: 'afterloginview'});
					Ext.Viewport.setActiveItem(view);
					view.show(); //This is additionally done to fire showAnimation
				}*/
			}
		}
    }
});
