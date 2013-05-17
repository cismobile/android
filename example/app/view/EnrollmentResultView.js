Ext.define('calculatorV1.view.EnrollmentResultView', {
    extend: 'Ext.Panel',
    xtype: 'EnrollmentResultView',
    requires: [
            'Ext.TitleBar'
    ],
    config: {
        layout: 'vbox', //defines layout inside config
        //scrollable: true,
		id: 'enrollmentResult',
        styleHtmlContent: true,
        items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Enrollment Result',
				items: [{
					xtype: 'button',
					text: 'Back',
					itemId: 'backEnrollButton',
					align: 'left',
				}]
            }, {
                xtype: 'fieldset',
                items: [{
                        xtype: 'sliderfield',
                        label: 'Percentage',
                        value: 0,
                        minValue: 0,
                        maxValue: 100,
                        listeners: {
                            dragend: function (t, Slider, thumb, value, e, eOpts) {
                                this.setLabel(value + ' %');
								Ext.ComponentQuery.query('#gpb1')[0].setValue(value);        
								Ext.ComponentQuery.query('#gpb2')[0].setValue(value);    
                            },
							change: function(me, Slider, thumb, newValue, oldValue, eOpts){
								this.setLabel(newValue + ' %');
								Ext.ComponentQuery.query('#gpb1')[0].setValue(value);        
							},
							drag: function(t, Slider, thumb, value, e, eOpts) {
                                this.setLabel(value + ' %');
								Ext.ComponentQuery.query('#gpb1')[0].setValue(value);        
                            }
                        }
                    }
                ]
            }, {
                xtype: 'carousel',
                flex: 1,
                items: [{
                        xtype: 'fieldset',
                        title: 'Week 1',
                        items: [{
                                xtype: 'numberfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb1',
                                name: 'ndsb1',
								readOnly: true
                            },{
                                xtype: 'numberfield',
                                label: 'GPB',
								labelWidth: '50%',
								itemId: 'gpb1',
                                name: 'gpb1',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 2',
                        items: [{
                                xtype: 'numberfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb2',
                                name: 'ndsb2',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'GPB',
								labelWidth: '50%',
                                itemId: 'gpb2',
								name: 'gpb2',
								readOnly: true,
                            }, {
                                xtype: 'numberfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 3',
                        items: [{
                                xtype: 'numberfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb3',
                                name: 'ndsb3',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 4',
                        items: [{
                                xtype: 'numberfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb4',
                                name: 'ndsb4',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 5',
                        items: [{
                                xtype: 'numberfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb1',
                                name: 'ndsb1',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 6',
                        items: [{
                                xtype: 'numberfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb1',
                                name: 'ndsb1',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 7',
                        items: [{
                                xtype: 'numberfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb1',
                                name: 'ndsb1',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 8',
                        items: [{
                                xtype: 'numberfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb1',
                                name: 'ndsb1',
								readOnly: true
                            }, {
                                xtype: 'numberfield',
                                label: 'GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb'
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
            },{
				delegate: '#backEnrollButton',
                event: 'tap',
                fn: 'onEnrollBackTap'
			}
        ]
    },
    onReportTap: function () {
        Ext.getCmp('mainPanel').setActiveItem(1);
    },
	onEnrollBackTap: function() {
		Ext.getCmp('enrollmentResult').hide();
	}
});