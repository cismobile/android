var eventDrag = function(value){
	Ext.ComponentQuery.query('#percentage')[0].setLabel(value + ' %');
	
	Ext.ComponentQuery.query('#gpb1')[0].setValue('UBD $' + cdecimal(gpb1Value * (value / 100),2,',','.'));
	Ext.ComponentQuery.query('#gpb2')[0].setValue('UBD $' + cdecimal(gpb2Value * (value / 100),2,',','.'));
	Ext.ComponentQuery.query('#gpb3')[0].setValue('UBD $' + cdecimal(gpb3Value * (value / 100),2,',','.'));
	Ext.ComponentQuery.query('#gpb4')[0].setValue('UBD $' + cdecimal(gpb4Value * (value / 100),2,',','.'));
	Ext.ComponentQuery.query('#gpb5')[0].setValue('UBD $' + cdecimal(gpb5Value * (value / 100),2,',','.'));
	Ext.ComponentQuery.query('#gpb6')[0].setValue('UBD $' + cdecimal(gpb6Value * (value / 100),2,',','.'));
	Ext.ComponentQuery.query('#gpb7')[0].setValue('UBD $' + cdecimal(gpb7Value * (value / 100),2,',','.'));
	Ext.ComponentQuery.query('#gpb8')[0].setValue('UBD $' + cdecimal(gpb8Value * (value / 100),2,',','.'));   
}

Ext.define('calculatorV1.view.EnrollmentResultView', {
    extend: 'Ext.form.Panel',
    xtype: 'EnrollmentResultView',
    requires: [
           'Ext.TitleBar'
    ],
    config: {
        layout: 'vbox', //defines layout inside config
        scrollable: false,
		id: 'enrollmentResult',
        styleHtmlContent: true,
        items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Result',
				items: [{
					xtype: 'button',
					text: 'Back',
					ui: 'back',
					itemId: 'backEnrollButton',
					align: 'left',
				}]
            }, {
                xtype: 'fieldset',
                items: [{
                        xtype: 'sliderfield',
                        label: 'Percentage',
                        value: 100,
                        minValue: 0,
                        maxValue: 100,
						itemId: 'percentage',
                        listeners: {
                            dragend: function (t, Slider, thumb, value, e, eOpts) {
								eventDrag(value);
                            },
							change: function(me, Slider, thumb, newValue, oldValue, eOpts){
								eventDrag(newValue);
							},
							drag: function(t, Slider, thumb, value, e, eOpts) {
                                eventDrag(value);
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
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb1',
								readOnly: true
                            },{
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '50%',
								itemId: 'gpb1',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb',
								readOnly: true
                            }, {
                                xtype: 'textfield',
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
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb2',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '50%',
                                itemId: 'gpb2',
								readOnly: true,
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 3',
                        items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb3',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '50%',
                                itemId: 'gpb3',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 4',
                        items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb4',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '50%',
								itemId: 'gpb4',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 5',
                        items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb5',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '50%',
								itemId: 'gpb5',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 6',
                        items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb6',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '50%',
								itemId: 'gpb6',
                                name: 'gpb',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '50%',
                                name: 'nlb',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 7',
                        items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb7',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '50%',
								itemId: 'gpb7',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '50%',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '50%',
								readOnly: true
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 8',
                        items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '50%',
								itemId: 'ndsb8',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '50%',
								itemId: 'gpb8',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'textfield',
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
		Ext.getCmp('enrollmentResult').hide({type: 'fadeOut'});
	}
});