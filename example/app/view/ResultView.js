Ext.define('calculatorV1.view.ResultView', {
    extend: 'Ext.Panel',
    xtype: 'ResultView',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
		//scrollable: true,
		styleHtmlContent: true,
		id: 'salesResult',
		layout: 'vbox',
        items: [{
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
								readOnly: true
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni1',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
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
								readOnly: true
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni2',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
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
								readOnly: true
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni3',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
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
								readOnly: true
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni4',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
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
								readOnly: true
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni5',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
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
								readOnly: true
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni6',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
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
								readOnly: true
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni7',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
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
								readOnly: true
                            },{
                                xtype: 'textfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								itemId: 'uni8',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
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
