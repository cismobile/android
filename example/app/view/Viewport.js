Ext.define('mobileV1.view.Viewport', {
	extend: 'Ext.Container',
	xtype: 'app_viewport',
	
	id: 'viewport',
	config: {
		fullscreen: true,
		layout: 'hbox',
		items : [{
			xtype : 'mainview',
			cls: 'slide',
			
			// Needed to fit the whole content
			width: '100%'
		}, {
			xtype : 'navigation',
			width : '85%'
		}]
	}
});
