Ext.define('calculatorV1.view.ResultView', {
    extend: 'Ext.Panel',
    xtype: 'ResultView',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
		scrollable: true,
        items: [{
			docked: 'top',
			xtype: 'titlebar',
			title: 'Result',
			items: [{
				xtype: 'button',
				text: 'Back',
				itemId: 'backButton',
				align: 'left',
				handler: function() {
					var view = Ext.Viewport.animateActiveItem({
						xtype: 'main'
					}, {
						type: 'fade'
					});

					view.show();
				}
			}]
		},{
			xtype: 'fieldset',
			title: 'Personal',
			items: [
				{
					xtype: 'numberfield',
					label: 'Sales Bonus',
					name: 'sales_bonus'
				},
				{
					xtype: 'numberfield',
					label: 'Unilevel Bonus',
					name: 'unilevel_bonus'
				},
				{
					xtype: 'numberfield',
					label: 'Network Linear',
					name: 'network_linear'
				}
			]
		}]
    }
});
