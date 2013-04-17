Ext.define('mobileV1.view.AfterLogin', {
    extend: 'Ext.tab.Panel',
    xtype: 'afterloginview',
    requires: ['Ext.layout.VBox','Ext.TitleBar'],

    config: {
		tabBarPosition: 'bottom',
		activeItem: 1,
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
            }, {
                title: 'My Acc',
                iconCls: 'user',
				itemId: 'mainAcc',
				items: [{
					xtype: 'titlebar',
					title: 'My Account',
					docked: 'top',
					items: [{
							xtype: 'button',
							itemId: 'logOffButton',
							ui: 'action',
							padding: '10px',
							text: 'logout',
							align: 'right',
						}
					]
				}, {
					xtype: 'container',
					layout: 'hbox',
					style: 'padding:20px;margin-top:30px',
					items: [{
							xtype: 'container',
							layout: 'vbox',
							width: '33%',
							height: 160,
							items: [{
								xtype: 'button',
								html: '<img src="resources/image/login3.png">',
								style: 'margin: 5px 5px 5px 0px',
								//ui: 'round',
								flex: 1
							},{
								xtype: 'label',
								html: 'eAccount',
								styleHtmlContent: true,
								style: 'text-align: center'
							}]
						}, {
							xtype: 'container',
							layout: 'vbox',
							width: '33%',
							height: 160,
							items: [{
								xtype: 'button',
								html: '<img src="resources/image/login3.png">',
								style: 'margin: 5px 5px 5px 0px',
								//ui: 'round',
								flex: 1
							},{
								xtype: 'label',
								html: 'Transfer',
								styleHtmlContent: true,
								style: 'text-align: center'
							}]
						},{
							xtype: 'container',
							layout: 'vbox',
							width: '33%',
							height: 160,
							items: [{
								xtype: 'button',
								html: '<img src="resources/image/login3.png">',
								style: 'margin: 5px 5px 5px 0px',
								//ui: 'round',
								flex: 1
							},{
								xtype: 'label',
								html: 'Transfer',
								styleHtmlContent: true,
								style: 'text-align: center'
							}]
						}
					]
				}, {
					xtype: 'container',

					layout: 'hbox',
					flex: 1,
					style: 'padding:20px;margin-top:30px',
					items: [{
							xtype: 'container',
							layout: 'vbox',
							width: '33%',
							height: 160,
							items: [{
								xtype: 'button',
								html: '<img src="resources/image/login3.png">',
								style: 'margin: 5px 5px 5px 0px',
								//ui: 'round',
								flex: 1
							},{
								xtype: 'label',
								html: 'Transfer',
								styleHtmlContent: true,
								style: 'text-align: center'
							}]
						}, {
							xtype: 'container',
							layout: 'vbox',
							width: '33%',
							height: 160,
							items: [{
								xtype: 'button',
								html: '<img src="resources/image/login3.png">',
								style: 'margin: 5px 5px 5px 0px',
								//ui: 'round',
								flex: 1
							},{
								xtype: 'label',
								html: 'Transfer',
								styleHtmlContent: true,
								style: 'text-align: center'
							}]
						}, {
							xtype: 'container',
							layout: 'vbox',
							width: '33%',
							height: 160,
							items: [{
								xtype: 'button',
								html: '<img src="resources/image/login3.png">',
								style: 'margin: 5px 5px 5px 0px',
								//ui: 'round',
								flex: 1
							},{
								xtype: 'label',
								html: 'Transfer',
								styleHtmlContent: true,
								style: 'text-align: center'
							}]
						}
					]
				}]
            }
        ]
    }
});