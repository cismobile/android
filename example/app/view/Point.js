Ext.define('mobileV1.view.Point', {
        extend: 'Ext.Panel',
        xtype: 'pointview',
        requires: [
            'Ext.TitleBar'
        ],
        config: {
			title: 'Points',
			iconCls: 'cisService',
			styleHtmlContent: true,
			scrollable: true,
			layout: 'fit',
			items: [{
					docked: 'top',
					xtype: 'titlebar',
					title: 'Points',
				},{
					xtype: 'dataview',
					store: 'People',
					itemTpl: '<p style="font-weight:bold;text-align:center;font-size:24px">{f_title}</p><div style="text-align:center;"><img src="resources/image/cis.png"></div>{f_description}',
				}
			]
        }
    });