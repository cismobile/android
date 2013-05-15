Ext.define('calculatorV1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
	fullscreen: true,
    requires: [
            'Ext.TitleBar', 'Ext.field.Select','Ext.field.Slider','Ext.Carousel'
    ],
    config: {
        tabBarPosition: 'bottom',
		
        items: [{
                title: 'Home',
                iconCls: 'home',
				layout: 'vbox', //defines layout inside config
                styleHtmlContent: true,
                scrollable: true,

                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Home'
                    }, {
                        xtype: 'fieldset',
                        title: 'Enrollment',
                        items: [{
                                xtype: 'selectfield',
                                label: 'Personal Ranking',
                                usePicker: true,
                                options: [{
                                        text: '50 CV',
                                        value: '50'
                                    }, {
                                        text: '100 CV',
                                        value: '100'
                                    }, {
                                        text: '400 CV',
                                        value: '400'
                                    }, {
                                        text: '800 CV',
                                        value: '800'
                                    }
                                ]
                            }, {
                                xtype: 'selectfield',
                                label: 'Downline Ranking',
                                usePicker: true,
                                options: [{
                                        text: '50 CV',
                                        value: '50'
                                    }, {
                                        text: '100 CV',
                                        value: '100'
                                    }, {
                                        text: '400 CV',
                                        value: '400'
                                    }, {
                                        text: '800 CV',
                                        value: '800'
                                    }
                                ]
                            }, {
                                xtype: 'selectfield',
                                label: 'Types',
                                usePicker: true,
                                options: [{
                                        text: '1',
                                        value: '1'
                                    }, {
                                        text: '2',
                                        value: '2'
                                    }, {
                                        text: '3',
                                        value: '3'
                                    }
                                ]
                            }
                        ]
                    }, {
                        xtype: 'fieldset',
                        title: 'Result',
                        items: [{
                                xtype: 'sliderfield',
                                label: 'Percentage',
                                value: 50,
                                minValue: 0,
                                maxValue: 100
                            }
                        ]
                    }, {
						xtype: 'carousel',
						flex: 1,
						items: [
							{
								xtype: 'container',
								title: 'Week 1',
								items: [{
										xtype: 'numberfield',
										label: 'Week 1 GPB',
										name: 'gpb'
									},{
										xtype: 'numberfield',
										label: 'Week 1 LB',
										name: 'lb'
									},{
										xtype: 'numberfield',
										label: 'Week 1 NLB',
										name: 'nlb'
								}]
							},{
								xtype: 'container',
								title: 'Week 2',
								items: [{
										xtype: 'numberfield',
										label: 'Week 2 GPB',
										name: 'gpb'
									},{
										xtype: 'numberfield',
										label: 'Week 2 LB',
										name: 'lb'
									},{
										xtype: 'numberfield',
										label: 'Week 2 NLB',
										name: 'nlb'
								}]
							},{
								xtype: 'container',
								title: 'Week 3',
								items: [{
										xtype: 'numberfield',
										label: 'Week 3 GPB',
										name: 'gpb'
									},{
										xtype: 'numberfield',
										label: 'Week 3 LB',
										name: 'lb'
									},{
										xtype: 'numberfield',
										label: 'Week 3 NLB',
										name: 'nlb'
								}]
							},{
								xtype: 'container',
								title: 'Week 4',
								items: [{
										xtype: 'numberfield',
										label: 'Week 4 GPB',
										name: 'gpb'
									},{
										xtype: 'numberfield',
										label: 'Week 4 LB',
										name: 'lb'
									},{
										xtype: 'numberfield',
										label: 'Week 4 NLB',
										name: 'nlb'
								}]
							},{
								xtype: 'container',
								title: 'Week 5',
								items: [{
										xtype: 'numberfield',
										label: 'Week 5 GPB',
										name: 'gpb'
									},{
										xtype: 'numberfield',
										label: 'Week 5 LB',
										name: 'lb'
									},{
										xtype: 'numberfield',
										label: 'Week 5 NLB',
										name: 'nlb'
								}]
							},{
								xtype: 'container',
								title: 'Week 6',
								items: [{
										xtype: 'numberfield',
										label: 'Week 6 GPB',
										name: 'gpb'
									},{
										xtype: 'numberfield',
										label: 'Week 6 LB',
										name: 'lb'
									},{
										xtype: 'numberfield',
										label: 'Week 6 NLB',
										name: 'nlb'
								}]
							},{
								xtype: 'container',
								title: 'Week 7',
								items: [{
										xtype: 'numberfield',
										label: 'Week 7 GPB',
										name: 'gpb'
									},{
										xtype: 'numberfield',
										label: 'Week 7 LB',
										name: 'lb'
									},{
										xtype: 'numberfield',
										label: 'Week 7 NLB',
										name: 'nlb'
								}]
							},{
								xtype: 'container',
								title: 'Week 8',
								items: [{
										xtype: 'numberfield',
										label: 'Week 8 GPB',
										name: 'gpb'
									},{
										xtype: 'numberfield',
										label: 'Week 8 LB',
										name: 'lb'
									},{
										xtype: 'numberfield',
										label: 'Week 8 NLB',
										name: 'nlb'
								}]
							}
						]
				 
					}
                ]
            }, {
                title: 'Report Sales',
                iconCls: 'star',
                scrollable: true,
                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Report Sales'
                    }, {
                        xtype: 'fieldset',
                        title: 'Personal',
                        items: [{
                                xtype: 'numberfield',
                                placeHolder: 'CV',
                                label: 'Repeat',
                                name: 'personal_repeat'
                            }, {
                                xtype: 'numberfield',
                                placeHolder: 'Person - 1 digit',
                                label: 'Sponsor',
                                name: 'personal_sponsor'
                            }, {
                                xtype: 'textfield',
                                placeHolder: 'Person',
                                label: 'Active Member',
                                name: 'active_member'
                            }
                        ]
                    }, {
                        xtype: 'button',
                        itemId: 'reportButton',
                        ui: 'action',
                        padding: '10px',
                        text: 'Submit'
                    }
                ]
            }, {
                title: 'Testing',
                hidden: true,
            }
        ],
        listeners: [{
                delegate: '#reportButton',
                event: 'tap',
                fn: 'onReportTap'
            }
        ]
    },
    onReportTap: function () {
        var view = Ext.Viewport.animateActiveItem({
            xtype: 'ResultView'
        }, {
            type: 'fade'
        });

        view.show(); //This is additionally done to fire showAnimation
    }
});