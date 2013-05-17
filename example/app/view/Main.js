Ext.define('calculatorV1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
            'Ext.TitleBar', 'Ext.field.Select', 'Ext.field.Slider', 'Ext.Carousel'
    ],
    //fullscreen: true,
    config: {
        tabBarPosition: 'bottom',
		id: 'mainPanel',
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
						itemId: 'enResult',
                        items: [{
                                xtype: 'selectfield',
                                label: 'Personal Ranking',
                                labelWidth: '50%',
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
                                labelWidth: '50%',
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
                                labelWidth: '50%',
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
                            }, {
                                /*xtype: 'sliderfield',
                                label: 'Percentage',
                                value: 50,
                                minValue: 0,
                                maxValue: 100,
                                listeners: {
                                    dragend: function (t, Slider, thumb, value, e, eOpts) {
                                        alert(value);
                                    }
                                }*/
                            }
                        ]
                    }, {
						xtype: 'button',
                        itemId: 'nextButton',
                        ui: 'action',
                        padding: '10px',
                        text: 'Next',
						handler: function(){
							Ext.getCmp('enrollmentResult').show();
						}
					}
                ]
            }, {
                title: 'Report Sales',
                iconCls: 'star',
				styleHtmlContent: true,
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
								labelWidth: '50%',
                                label: 'Repeat',
                                minValue: 0,
                                maxValue: 9,
                                name: 'personal_repeat'
                            }, {
                                xtype: 'numberfield',
                                placeHolder: 'Person - 1 digit',
								labelWidth: '50%',
                                label: 'Sponsor',
                                name: 'personal_sponsor'
                            }, {
                                xtype: 'textfield',
                                placeHolder: 'Person',
								labelWidth: '50%',
                                label: 'Active Member',
                                name: 'active_member'
                            }
                        ]
                    }, {
                        xtype: 'button',
                        itemId: 'reportButton',
                        ui: 'action',
                        padding: '10px',
                        text: 'Submit',
						handler: function(){
							Ext.getCmp('salesResult').show();
						}
                    }, {
                        xtype: 'button',
                        itemId: 'cancelButton',
                        ui: 'cancel',
                        style: 'margin-top: 10px',
                        padding: '10px',
                        text: 'Reset'
                    }
                ]
            }, {
				title: 'Result',
				hidden: true,
				xtype: 'ResultView'
            }, {
				title: 'Enrollment Result',
				hidden: true,
				xtype: 'EnrollmentResultView'
			}
        ],
		listeners: {
			activeitemchange: function(r,value,oldvalue,eOpts){
				Ext.getCmp('salesResult').hide();
				Ext.getCmp('enrollmentResult').hide();
			}
		}
        /*listeners: [{
                delegate: '#reportButton',
                event: 'tap',
                fn: 'onReportTap'
            },{
				delegate: '#nextButton',
                event: 'tap',
                fn: 'onNextTap'
			}
        ]*/
    }
    /*onReportTap: function () {		
		Ext.getCmp('salesResult').show();
		//this.setActiveItem(2);
		/*var view = Ext.Viewport.animateActiveItem({
            xtype: 'ResultView'
        }, {
            type: 'fade'
        });

        view.show(); //This is additionally done to fire showAnimation
    },
	onNextTap: function(){
		//Ext.getCmp('enrollmentResult').setStyle('position','absolute');
		//Ext.getCmp('enrollmentResult').show();
		//this.setActiveItem(3);
		Ext.getCmp('enrollmentResult').show();
	}*/
});