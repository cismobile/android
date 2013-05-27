var ndsb1Value = 0,ndsb2Value = 0;
var gpb1Value = 0,gpb2Value = 0,gpb3Value = 0,gpb4Value = 0,gpb5Value = 0,gpb6Value = 0,gpb7Value = 0,gpb8Value = 0;
var sum1 = 0,sum2 = 0,sum3 = 0,sum4 = 0,sum5 = 0,sum6 = 0,sum7 = 0,sum8 = 0;

var cdecimal = function(value,decPlaces, thouSeparator, decSeparator, currencySymbol) {
	var n = value,
	decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
	decSeparator = decSeparator == undefined ? "." : decSeparator,
	thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
	currencySymbol = currencySymbol == undefined ? "" : currencySymbol,
	sign = n < 0 ? "-" : "",
	i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
	j = (j = i.length) > 3 ? j % 3 : 0;
	return sign + currencySymbol + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

var calWeekTotal = function(value){
	sum1 = ndsb1Value + (gpb1Value * (value / 100));
	sum2 = ndsb2Value + (gpb2Value * (value / 100));
	sum3 = ndsb2Value + (gpb3Value * (value / 100));
	sum4 = ndsb2Value + (gpb4Value * (value / 100));
	sum5 = ndsb2Value + (gpb5Value * (value / 100));
	sum6 = ndsb2Value + (gpb6Value * (value / 100));
	sum7 = ndsb2Value + (gpb7Value * (value / 100));
	sum8 = ndsb2Value + (gpb8Value * (value / 100));

	Ext.ComponentQuery.query('#total1')[0].setValue('UBD $' + cdecimal(sum1,2,',','.'));
	Ext.ComponentQuery.query('#total2')[0].setValue('UBD $' + cdecimal(sum2,2,',','.'));
	Ext.ComponentQuery.query('#total3')[0].setValue('UBD $' + cdecimal(sum3,2,',','.'));
	Ext.ComponentQuery.query('#total4')[0].setValue('UBD $' + cdecimal(sum4,2,',','.'));
	Ext.ComponentQuery.query('#total5')[0].setValue('UBD $' + cdecimal(sum5,2,',','.'));
	Ext.ComponentQuery.query('#total6')[0].setValue('UBD $' + cdecimal(sum6,2,',','.'));
	Ext.ComponentQuery.query('#total7')[0].setValue('UBD $' + cdecimal(sum7,2,',','.'));
	Ext.ComponentQuery.query('#total8')[0].setValue('UBD $' + cdecimal(sum8,2,',','.'));
	
	Ext.ComponentQuery.query('#tot8')[0].setValue('UBD $' + cdecimal( sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8,2,',','.'));
}

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
	
	calWeekTotal(value);
}
				
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
								layout: 'default',
                                label: 'Personal',
								itemId: 'personal',
                                labelWidth: '50%',
								usePicker: true,
                                floatingCls: 'width:100px;height:100px',
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
								listeners: {
									itemtap: function(){
										alert('OK');
									}
								},
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
							var perCV = 0;
							var gpb1 = 0;
							
							ndsb1Value = (downValue * recruitValue) * 0.2;
							 
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
							Ext.ComponentQuery.query('#ndsb1')[0].setValue('UBD $' + cdecimal(ndsb1Value,2,',','.'));
							Ext.ComponentQuery.query('#ndsb2')[0].setValue('UBD $' + cdecimal(ndsb2Value,2,',','.'));
							Ext.ComponentQuery.query('#ndsb3')[0].setValue('UBD $' + cdecimal(ndsb2Value,2,',','.'));
							Ext.ComponentQuery.query('#ndsb4')[0].setValue('UBD $' + cdecimal(ndsb2Value,2,',','.'));
							Ext.ComponentQuery.query('#ndsb5')[0].setValue('UBD $' + cdecimal(ndsb2Value,2,',','.'));
							Ext.ComponentQuery.query('#ndsb6')[0].setValue('UBD $' + cdecimal(ndsb2Value,2,',','.'));
							Ext.ComponentQuery.query('#ndsb7')[0].setValue('UBD $' + cdecimal(ndsb2Value,2,',','.'));
							Ext.ComponentQuery.query('#ndsb8')[0].setValue('UBD $' + cdecimal(ndsb2Value,2,',','.'));
							
							/* GPB Value */
							gpb1Value = gpb1;
							gpb2Value = tmpNode2 * downValue * perCV;
							gpb3Value = tmpNode3 * downValue * perCV;
							gpb4Value = tmpNode4 * downValue * perCV;
							gpb5Value = tmpNode5 * downValue * perCV;
							gpb6Value = tmpNode6 * downValue * perCV;
							gpb7Value = tmpNode7 * downValue * perCV;
							gpb8Value = tmpNode8 * downValue * perCV;
							
							Ext.ComponentQuery.query('#gpb1')[0].setValue('UBD $' + cdecimal(gpb1,2,',','.'));
							Ext.ComponentQuery.query('#gpb2')[0].setValue('UBD $' + cdecimal(gpb2Value,2,',','.'));
							Ext.ComponentQuery.query('#gpb3')[0].setValue('UBD $' + cdecimal(gpb3Value,2,',','.'));
							Ext.ComponentQuery.query('#gpb4')[0].setValue('UBD $' + cdecimal(gpb4Value,2,',','.'));
							Ext.ComponentQuery.query('#gpb5')[0].setValue('UBD $' + cdecimal(gpb5Value,2,',','.'));
							Ext.ComponentQuery.query('#gpb6')[0].setValue('UBD $' + cdecimal(gpb6Value,2,',','.'));
							Ext.ComponentQuery.query('#gpb7')[0].setValue('UBD $' + cdecimal(gpb7Value,2,',','.'));
							Ext.ComponentQuery.query('#gpb8')[0].setValue('UBD $' + cdecimal(gpb8Value,2,',','.'));
							
							/* Total */
							/*Ext.ComponentQuery.query('#total1')[0].setValue('UBD $' + cdecimal( ndsb1Value + gpb1Value,2,',','.'));
							Ext.ComponentQuery.query('#total2')[0].setValue('UBD $' + cdecimal( ndsb2Value + gpb2Value,2,',','.'));
							Ext.ComponentQuery.query('#total3')[0].setValue('UBD $' + cdecimal( ndsb2Value + gpb3Value,2,',','.'));
							Ext.ComponentQuery.query('#total4')[0].setValue('UBD $' + cdecimal( ndsb2Value + gpb4Value,2,',','.'));
							Ext.ComponentQuery.query('#total5')[0].setValue('UBD $' + cdecimal( ndsb2Value + gpb5Value,2,',','.'));
							Ext.ComponentQuery.query('#total6')[0].setValue('UBD $' + cdecimal( ndsb2Value + gpb6Value,2,',','.'));
							Ext.ComponentQuery.query('#total7')[0].setValue('UBD $' + cdecimal( ndsb2Value + gpb7Value,2,',','.'));
							Ext.ComponentQuery.query('#total8')[0].setValue('UBD $' + cdecimal( ndsb2Value + gpb8Value,2,',','.'));*/
							
							calWeekTotal(100);
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