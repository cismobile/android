Ext.define('cis.view.Main', {
    extend: 'Ext.tab.Panel',
	alias: "widget.mainview",
    requires: [
        'Ext.TitleBar',
		'Ext.carousel.Carousel'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
                title: 'News',
                iconCls: 'home',
                
                scrollable: true,
				styleHtmlContent: true,
				
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Home',
					items: [{
						xtype: 'toolbar',
						docked: 'top'
					}]
                },
				
				html: [
					'<img src="http://staging.sencha.com/img/sencha.png" />',
					'<h1>Welcome to Sencha Touch</h1>',
					"<p>You're creating the Getting Started app. This demonstrates how ",
					"to use tabs, lists and forms to create a simple app</p>",
					'<h2>Sencha Touch (2.0.0)</h2>'
				].join("")
            },
            {
                title: 'Shop',
                iconCls: 'star',
				xtype: 'categorylist'
            },{
				title: 'My Acc',
				iconCls: 'user',
				items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'My Account'
					}
				]
			},{
				title: 'Events',
				iconCls: 'search',
				items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'User'
					}
				]
			},{
				title: 'More',
				iconCls: 'more',
				items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'User'
					}
				]
			}
        ]
    }
});
