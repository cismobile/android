Ext.define('testingV2.view.ResultView', {
    extend: 'Ext.Panel',
    xtype: 'ResultView',

    config: {
		//scrollable: true,
		styleHtmlContent: true,
		id: 'salesResult',
		layout: 'vbox',
		title: 'Result',
		style: 'font-size:16.5px',	
        items: [/*{
			docked: 'top',
			xtype: 'titlebar',
			title: 'Result',
			items: [{
				xtype: 'button',
				text: 'Back',
				ui: 'back',
				itemId: 'backButton',
				align: 'left',
			}]
		},*/{
			xtype: 'fieldset',
			items: [{
				xtype: 'textfield',
				label: 'Total Sales',
				labelWidth: '50%',
				itemId: 'total_sales',
				readOnly: true,
				value: 'UBD $ 0.00'
			}]
		},{
                xtype: 'carousel',
                flex: 1,
                items: [{
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							title: 'Week 1',
							items: [{
                                xtype: 'textfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								itemId: 'sales1',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni1',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
								label: 'Network Linear',
								labelWidth: '50%',
								itemId: 'net1',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
								xtype: 'textfield',
								label: 'Total',
								labelWidth: '50%',
								itemId: 'sales_tot1',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							title: 'Week 2',
							items: [{
                                xtype: 'textfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								itemId: 'sales2',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni2',
								readOnly: true
                            }, {
                                xtype: 'textfield',
								label: 'Network Linear',
								labelWidth: '50%',
								itemId: 'net2',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
								xtype: 'textfield',
								label: 'Total',
								labelWidth: '50%',
								itemId: 'sales_tot2',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							title: 'Week 3',
							items: [{
                                xtype: 'textfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								itemId: 'sales3',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni3',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
								label: 'Network Linear',
								labelWidth: '50%',
								itemId: 'net3',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
								xtype: 'textfield',
								label: 'Total',
								labelWidth: '50%',
								itemId: 'sales_tot3',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							title: 'Week 4',
							items: [{
                                xtype: 'textfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								itemId: 'sales4',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni4',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
								label: 'Network Linear',
								labelWidth: '50%',
								itemId: 'net4',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
								xtype: 'textfield',
								label: 'Total',
								labelWidth: '50%',
								itemId: 'sales_tot4',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							title: 'Week 5',
							items: [{
                                xtype: 'textfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								itemId: 'sales5',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni5',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
								label: 'Network Linear',
								labelWidth: '50%',
								itemId: 'net5',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
								xtype: 'textfield',
								label: 'Total',
								labelWidth: '50%',
								itemId: 'sales_tot5',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							title: 'Week 6',
							items: [{
                                xtype: 'textfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								itemId: 'sales6',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni6',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
								label: 'Network Linear',
								labelWidth: '50%',
								itemId: 'net6',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
								xtype: 'textfield',
								label: 'Total',
								labelWidth: '50%',
								itemId: 'sales_tot6',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							title: 'Week 7',
							items: [{
                                xtype: 'textfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								itemId: 'sales7',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni7',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
								label: 'Network Linear',
								labelWidth: '50%',
								itemId: 'net7',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
								xtype: 'textfield',
								label: 'Total',
								labelWidth: '50%',
								itemId: 'sales_tot7',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							title: 'Week 8',
							items: [{
                                xtype: 'textfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								itemId: 'sales8',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni8',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
								label: 'Network Linear',
								labelWidth: '50%',
								itemId: 'net8',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
								xtype: 'textfield',
								label: 'Total',
								labelWidth: '50%',
								itemId: 'sales_tot8',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }
                ]
            }
		],
		listeners: [{
                delegate: '#backButton',
                event: 'tap',
                fn: 'onReportTap'
            }
        ]
    },
	onReportTap: function(){
		Ext.getCmp('salesResult').hide({type: 'fadeOut'});
		Ext.getCmp('mainPanel').setActiveItem(1);
	}
});
