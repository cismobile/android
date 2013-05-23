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
                title: 'Enrollment',
                iconCls: 'home',
                layout: 'vbox', //defines layout inside config
                styleHtmlContent: true,
                scrollable: true,

                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Entrollment'
                    }, {
                        xtype: 'fieldset',
                        //title: 'Enrollment',
						itemId: 'enResult',
                        items: [{
                                xtype: 'selectfield',
                                label: 'Personal',
								itemId: 'personal',
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
                                label: 'Downline',
								itemId: 'downline',
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
                                label: 'Recruitment',
                                labelWidth: '50%',
								itemId: 'recruitment',
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
							//Ext.Viewport.setMasked({xtype:'loadmask',message:'Loading'});
							var persValue = parseFloat(Ext.ComponentQuery.query('#personal')[0].getValue());
							var downValue = parseFloat(Ext.ComponentQuery.query('#downline')[0].getValue());
							var recruitValue = parseFloat(Ext.ComponentQuery.query('#recruitment')[0].getValue());
							var week1NDSB = 0;
							var perCV = 0;
							var gpb1 = 0;
							
							week1NDSB = (downValue * recruitValue) * 0.2;
							 
							if(persValue != 800){
								perCV = 0.1;
							}else{
								perCV = 0.12
							}
							
							var tmpNode1 = recruitValue - 1;
							var tmpNode2 = tmpNode1 * recruitValue;
							var tmpNode3 = tmpNode2 * recruitValue;
							var tmpNode4 = tmpNode3 * recruitValue;
							var tmpNode5 = tmpNode4 * recruitValue;
							var tmpNode6 = tmpNode5 * recruitValue;
							var tmpNode7 = tmpNode6 * recruitValue;
							var tmpNode8 = tmpNode7 * recruitValue;
							
							gpb1 = ( tmpNode1 * downValue * perCV);
							
							/* NDSB Value */
							Ext.ComponentQuery.query('#ndsb1')[0].setValue(parseFloat(week1NDSB));
							Ext.ComponentQuery.query('#ndsb2')[0].setValue(parseFloat(0));
							Ext.ComponentQuery.query('#ndsb3')[0].setValue(parseFloat(0));
							Ext.ComponentQuery.query('#ndsb4')[0].setValue(parseFloat(0));
							Ext.ComponentQuery.query('#ndsb5')[0].setValue(parseFloat(0));
							Ext.ComponentQuery.query('#ndsb6')[0].setValue(parseFloat(0));
							Ext.ComponentQuery.query('#ndsb7')[0].setValue(parseFloat(0));
							Ext.ComponentQuery.query('#ndsb8')[0].setValue(parseFloat(0));
							
							/* GPB Value */
							Ext.ComponentQuery.query('#gpb1')[0].setValue(parseFloat(gpb1));
							Ext.ComponentQuery.query('#gpb2')[0].setValue(parseFloat(tmpNode2 * downValue * perCV));
							Ext.ComponentQuery.query('#gpb3')[0].setValue(parseFloat(tmpNode3 * downValue * perCV));
							Ext.ComponentQuery.query('#gpb4')[0].setValue(parseFloat(tmpNode4 * downValue * perCV));
							Ext.ComponentQuery.query('#gpb5')[0].setValue(parseFloat(tmpNode5 * downValue * perCV));
							Ext.ComponentQuery.query('#gpb6')[0].setValue(parseFloat(tmpNode6 * downValue * perCV));
							Ext.ComponentQuery.query('#gpb7')[0].setValue(parseFloat(tmpNode7 * downValue * perCV));
							Ext.ComponentQuery.query('#gpb8')[0].setValue(parseFloat(tmpNode8 * downValue * perCV));
							//setTimeout(function () {            
								//Ext.Viewport.setMasked(false);
								Ext.getCmp('enrollmentResult').show({type: 'fadeIn'});
							//}, 500);
							//Ext.ComponentQuery.query('#ndsb1')[0].setValue();
						}
					}
                ]
            }, {
                title: 'Sales',
                iconCls: 'star',
				styleHtmlContent: true,
                scrollable: true,
                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Sales'
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
							Ext.getCmp('salesResult').show({type: 'fadeIn'});
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
				Ext.getCmp('salesResult').hide({type: 'fadeOut'});
				Ext.getCmp('enrollmentResult').hide({type: 'fadeOut'});
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