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
                        xtype: 'fieldset',
                        title: 'Week 1',
                        items: [{
                                xtype: 'numberfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								name: 'sales_bonus',
								readOnly: true
                            },{
                                xtype: 'numberfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								name: 'unilevel_bonus',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 2',
                        items: [{
                                xtype: 'numberfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								name: 'sales_bonus',
								readOnly: true
                            },{
                                xtype: 'numberfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								name: 'unilevel_bonus',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 3',
                        items: [{
                                xtype: 'numberfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								name: 'sales_bonus',
								readOnly: true
                            },{
                                xtype: 'numberfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								name: 'unilevel_bonus',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 4',
                        items: [{
                                xtype: 'numberfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								name: 'sales_bonus',
								readOnly: true
                            },{
                                xtype: 'numberfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								name: 'unilevel_bonus',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 5',
                        items: [{
                                xtype: 'numberfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								name: 'sales_bonus',
								readOnly: true
                            },{
                                xtype: 'numberfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								name: 'unilevel_bonus',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 6',
                        items: [{
                                xtype: 'numberfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								name: 'sales_bonus',
								readOnly: true
                            },{
                                xtype: 'numberfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								name: 'unilevel_bonus',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 7',
                        items: [{
                                xtype: 'numberfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								name: 'sales_bonus',
								readOnly: true
                            },{
                                xtype: 'numberfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								name: 'unilevel_bonus',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 8',
                        items: [{
                                xtype: 'numberfield',
								label: 'Sales Bonus',
								labelWidth: '50%',
								name: 'sales_bonus',
								readOnly: true
                            },{
                                xtype: 'numberfield',
								label: 'Unilevel Bonus',
								labelWidth: '50%',
								name: 'unilevel_bonus',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
								label: 'Network Linear',
								labelWidth: '50%',
								name: 'network_linear',
								readOnly: true
                            }
                        ]
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
