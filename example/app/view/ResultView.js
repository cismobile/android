Ext.define('calculatorV1.view.ResultView', {
    extend: 'Ext.Panel',
    xtype: 'ResultView',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
		scrollable: true,
		styleHtmlContent: true,
        items: [{
			docked: 'top',
			xtype: 'titlebar',
			title: 'Result',
			items: [{
				xtype: 'button',
				text: 'Back',
				itemId: 'backButton',
				align: 'left',
			}]
		},{
			xtype: 'fieldset',
			title: 'Personal',
			items: [
				{
					xtype: 'numberfield',
					label: 'Sales Bonus',
					labelWidth: '50%',
					name: 'sales_bonus'
				},
				{
					xtype: 'numberfield',
					label: 'Unilevel Bonus',
					labelWidth: '50%',
					name: 'unilevel_bonus'
				},
				{
					xtype: 'numberfield',
					label: 'Network Linear',
					labelWidth: '50%',
					name: 'network_linear'
				}
			]
		}],
		listeners: [{
                delegate: '#backButton',
                event: 'tap',
                fn: 'onReportTap'
            }
        ]
    },
	onReportTap: function(){
		Ext.getCmp('mainPanel').setActiveItem(1);
	}
});
