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
                title: 'Enrollment Result'
            }, {
                xtype: 'fieldset',
                items: [{
                        xtype: 'sliderfield',
                        label: 'Percentage',
                        value: 50,
                        minValue: 0,
                        maxValue: 100,
                        listeners: {
                            dragend: function (t, Slider, thumb, value, e, eOpts) {
                                this.setLabel(value + ' %');
                            },
							change: function(me, Slider, thumb, newValue, oldValue, eOpts){
								this.setLabel(newValue + ' %');
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
                                label: 'Week 1 GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 1 LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 1 NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 2',
                        items: [{
                                xtype: 'numberfield',
                                label: 'Week 2 GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 2 LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 2 NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 3',
                        items: [{
                                xtype: 'numberfield',
                                label: 'Week 3 GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 3 LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 3 NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 4',
                        items: [{
                                xtype: 'numberfield',
                                label: 'Week 4 GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 4 LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 4 NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 5',
                        items: [{
                                xtype: 'numberfield',
                                label: 'Week 5 GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 5 LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 5 NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 6',
                        items: [{
                                xtype: 'numberfield',
                                label: 'Week 6 GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 6 LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 6 NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 7',
                        items: [{
                                xtype: 'numberfield',
                                label: 'Week 7 GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 7 LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 7 NLB',
								labelWidth: '50%',
                                name: 'nlb'
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Week 8',
                        items: [{
                                xtype: 'numberfield',
                                label: 'Week 8 GPB',
								labelWidth: '50%',
                                name: 'gpb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 8 LB',
								labelWidth: '50%',
                                name: 'lb'
                            }, {
                                xtype: 'numberfield',
                                label: 'Week 8 NLB',
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
            }
        ]
    },
    onReportTap: function () {
        Ext.getCmp('mainPanel').setActiveItem(1);
    }
});