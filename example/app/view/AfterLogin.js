Ext.define('mobileV1.view.AfterLogin', {
    extend: 'Ext.Container',
    xtype: 'afterloginview',
    requires: ['Ext.layout.VBox','Ext.TitleBar'],
    config: {
		styleHtmlContent: true,
        scrollable: true,
        items: [{
			xtype: 'titlebar',
			title: 'My Account',
			docked: 'top',
			items: [{
				xtype: 'button',
				itemId: 'logOffButton',
				ui: 'action',
				text: 'logout',
				align: 'right'
			}]
		}, {
			xtype: 'container',
			layout: 'hbox',
			style: 'padding:10px 10px 5px 10px',
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
						styleHtmlContent: true
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
						styleHtmlContent: true
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
						styleHtmlContent: true
					}]
				}
			]
		}, {
			xtype: 'container',
			layout: 'hbox',
			style: 'padding:10px 10px 5px 10px',
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
						styleHtmlContent: true
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
						styleHtmlContent: true
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
						styleHtmlContent: true
					}]
				}]
			}
        ],
		listeners: [{
                delegate: '#logOffButton',
                event: 'tap',
                fn: 'onLogOffButtonTap'
            }
        ]
    },
	onLogOffButtonTap: function () {
        localStorage.clear();
		//var me = this;
		//me.fireEvent('logoutCommand', me);
		//var tabPanel = Ext.Viewport.down("tabpanel");
		//tabPanel.setActiveItem(0);
		this.setActiveItem(0);
		//view.show(); //This is additionally done to fire showAnimation
    }
});

/*Ext.define('mobileV1.view.AfterLogin', {
    extend: 'Ext.tab.Panel',
    xtype: 'afterloginview',
    requires: ['Ext.layout.VBox','Ext.TitleBar'],
    config: {
		tabBarPosition: 'bottom',
		activeItem: 1,
        items: [{
                title: 'Home',
                iconCls: 'home',
				itemId: 'mainTabPanel',
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
				styleHtmlContent: true,
                scrollable: true,
				items: [{
					xtype: 'titlebar',
					title: 'My Account',
					docked: 'top',
					items: [{
							xtype: 'button',
							itemId: 'logOffButton',
							ui: 'action',
							text: 'logout',
							align: 'right'
						}
					]
				}, {
					xtype: 'container',
					layout: 'hbox',
					style: 'padding:10px 10px 5px 10px',
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
								styleHtmlContent: true
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
								styleHtmlContent: true
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
								styleHtmlContent: true
							}]
						}
					]
				}, {
					xtype: 'container',
					layout: 'hbox',
					style: 'padding:10px 10px 5px 10px',
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
								styleHtmlContent: true
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
								styleHtmlContent: true
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
								styleHtmlContent: true
							}]
						}
					]
				}]
            }
        ],
		listeners: [{
			delegate: '#logOffButton',
			event: 'tap',
			fn: 'onLogOffButtonTap',
		}]
    },
	onLogOffButtonTap: function () {
        localStorage.clear();
		//this.setActiveItem(0);
		//var tabPanel = Ext.Viewport.down("tabpanel");
		this.setActiveItem(0);
		//view.show(); //This is additionally done to fire showAnimation
    }
});*/