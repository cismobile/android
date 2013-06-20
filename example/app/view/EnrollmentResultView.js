Ext.define('testingV2.view.EnrollmentResultView', {
    extend: 'Ext.form.Panel',
    xtype: 'EnrollmentResultView',

    config: {
        layout: 'vbox', //defines layout inside config
        scrollable: '50%',
		id: 'enrollmentResult',
        styleHtmlContent: true,
		title: 'Result',
		style: 'font-size:16.5px',	
        items: [{
                xtype: 'fieldset',
                items: [{
                        xtype: 'sliderfield',
                        label: 'Percentage',
                        value: 100,
                        minValue: 0,
                        maxValue: 100,
						itemId: 'percentage',
                        labelWidth: '33%',
						listeners: {
                            dragend: function (t, Slider, thumb, value, e, eOpts) {
								/*var tmpValue = 0;
								if(value >= 0 && value <= 25){
									if(value == 0)
										tmpValue = 0;
									else
										tmpValue = 25;
									this.setValue(tmpValue);
								}else if(value > 26 && value <= 50){
									tmpValue = 50;
									this.setValue(tmpValue);
								}else if(value > 51 && value <= 75){
									tmpValue = 75;
									this.setValue(tmpValue);
								}else if(value > 76 && value <= 100){
									tmpValue = 100;
									this.setValue(tmpValue);
								}*/
								eventDrag(value);
                            },
							change: function(me, Slider, thumb, value, oldValue, eOpts){
								eventDrag(value);
								/*var tmpValue = 0;
								if(value >= 0 && value <= 25){
									if(value == 0)
										tmpValue = 0;
									else
										tmpValue = 25;
									this.setValue(tmpValue);
								}else if(value > 26 && value <= 50){
									tmpValue = 50;
									this.setValue(tmpValue);
								}else if(value > 51 && value <= 75){
									tmpValue = 75;
									this.setValue(tmpValue);
								}else if(value > 76 && value <= 100){
									tmpValue = 100;
									this.setValue(tmpValue);
								}
								eventDrag(tmpValue);*/
							}
                        }
                    },{
						xtype: 'textfield',
						label: 'Final Total',
						readOnly: true,
						itemId: 'tot8',
						labelWidth: '33%'
					}
                ]
            }, {
                xtype: 'carousel',
                flex: 1,
                items: [{
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							style: 'margin-top:-15px;',
							title: 'Week 1',
							items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '33%',
								itemId: 'ndsb1',
								readOnly: true,
								value: 'UBD $ 0.00'
                            },{
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '33%',
								itemId: 'gpb1',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'Ranking',
								labelWidth: '33%',
                                itemId: 'rank1',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '33%',
                                itemId: 'lb1',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '33%',
                                itemId: 'nlb1',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
								xtype: 'textfield',
                                label: 'Total',
								labelWidth: '33%',
                                itemId: 'total1',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							style: 'margin-top:-15px;',
							title: 'Week 2',
							items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '33%',
								itemId: 'ndsb2',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '33%',
                                itemId: 'gpb2',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'Ranking',
								labelWidth: '33%',
                                itemId: 'rank2',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '33%',
                                itemId: 'lb2',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '33%',
                                itemId: 'nlb2',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
								xtype: 'textfield',
                                label: 'Total',
								labelWidth: '33%',
                                itemId: 'total2',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        title: 'Week 3',
                        items: [{
							xtype: 'fieldset',
							style: 'margin-top:-15px;',
							title: 'Week 3',
							items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '33%',
								itemId: 'ndsb3',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '33%',
                                itemId: 'gpb3',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'Ranking',
								labelWidth: '33%',
                                itemId: 'rank3',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '33%',
                                itemId: 'lb3',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '33%',
                                itemId: 'nlb3',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
								xtype: 'textfield',
                                label: 'Total',
								labelWidth: '33%',
                                itemId: 'total3',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							style: 'margin-top:-15px;',
							title: 'Week 4',
							items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '33%',
								itemId: 'ndsb4',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '33%',
								itemId: 'gpb4',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'Ranking',
								labelWidth: '33%',
                                itemId: 'rank4',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '33%',
                                itemId: 'lb4',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '33%',
                                itemId: 'nlb4',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
								xtype: 'textfield',
                                label: 'Total',
								labelWidth: '33%',
                                itemId: 'total4',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							style: 'margin-top:-15px;',
							title: 'Week 5',
							items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '33%',
								itemId: 'ndsb5',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '33%',
								itemId: 'gpb5',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'Ranking',
								labelWidth: '33%',
                                itemId: 'rank5',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '33%',
                                itemId: 'lb5',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '33%',
                                itemId: 'nlb5',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
								xtype: 'textfield',
                                label: 'Total',
								labelWidth: '33%',
                                itemId: 'total5',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							style: 'margin-top:-15px;',
							title: 'Week 6',
							items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '33%',
								itemId: 'ndsb6',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '33%',
								itemId: 'gpb6',
                                name: 'gpb',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'Ranking',
								labelWidth: '33%',
                                itemId: 'rank6',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '33%',
                                itemId: 'lb6',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '33%',
                                itemId: 'nlb6',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
								xtype: 'textfield',
                                label: 'Total',
								labelWidth: '33%',
                                itemId: 'total6',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							style: 'margin-top:-15px;',
							title: 'Week 7',
							items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '33%',
								itemId: 'ndsb7',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '33%',
								itemId: 'gpb7',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'Ranking',
								labelWidth: '33%',
                                itemId: 'rank7',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '33%',
								readOnly: true,
								itemId: 'lb7',
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '33%',
								itemId: 'nlb7',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
								xtype: 'textfield',
                                label: 'Total',
								labelWidth: '33%',
                                itemId: 'total7',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }, {
                        xtype: 'container',
                        items: [{
							xtype: 'fieldset',
							style: 'margin-top:-15px;',
							title: 'Week 8',
							items: [{
                                xtype: 'textfield',
                                label: 'NDSB',
								labelWidth: '33%',
								itemId: 'ndsb8',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'GPB',
								labelWidth: '33%',
								itemId: 'gpb8',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'Ranking',
								labelWidth: '33%',
                                itemId: 'rank8',
								readOnly: true
                            }, {
                                xtype: 'textfield',
                                label: 'LB',
								labelWidth: '33%',
                                itemId: 'lb8',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
                                xtype: 'textfield',
                                label: 'NLB',
								labelWidth: '33%',
                                itemId: 'nlb8',
								readOnly: true,
								value: 'UBD $ 0.00'
                            }, {
								xtype: 'textfield',
                                label: 'Total',
								labelWidth: '33%',
                                itemId: 'total8',
								readOnly: true,
								value: 'UBD $ 0.00'
							}]
						}]
                    }
                ]
            }
        ]
    }
});