Ext.define('mobileV1.view.AfterLogin', {
    extend: 'Ext.Container',
    xtype: 'afterloginview',
    requires: ['Ext.layout.VBox','Ext.TitleBar'],

    config: {
        items: [{
				xtype: 'titlebar',
				title: 'My Account',
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
            }
        ]
    }
});