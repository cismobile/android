var ndsb1Value = 0,
    ndsb2Value = 0;
var gpb = new Array();
var sum = new Array();

var cdecimal = function (value, decPlaces, thouSeparator, decSeparator, currencySymbol) {
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

var calWeekTotal = function (value) {
    sum[1] = ndsb1Value + (gpb[1] * (value / 100));
    sum[2] = ndsb2Value + (gpb[2] * (value / 100));
    sum[3] = ndsb2Value + (gpb[3] * (value / 100));
    sum[4] = ndsb2Value + (gpb[4] * (value / 100));
    sum[5] = ndsb2Value + (gpb[5] * (value / 100));
    sum[6] = ndsb2Value + (gpb[6] * (value / 100));
    sum[7] = ndsb2Value + (gpb[7] * (value / 100));
    sum[8] = ndsb2Value + (gpb[8] * (value / 100));

	for(var a = 1;a <= 8;a++){
		Ext.ComponentQuery.query('#total'+a)[0].setValue('UBD $ ' + cdecimal(sum[a], 2, ',', '.'));
	}

    Ext.ComponentQuery.query('#tot8')[0].setValue('UBD $' + cdecimal(sum[1] + sum[2] + sum[3] + sum[4] + sum[5] + sum[6] + sum[7] + sum[8], 2, ',', '.'));
}

var eventDrag = function (value) {
    Ext.ComponentQuery.query('#percentage')[0].setLabel(value + ' %');

	for(var a = 1;a <= 8;a++){
		Ext.ComponentQuery.query('#gpb' + a)[0].setValue('UBD $ ' + cdecimal(gpb[a] * (value / 100), 2, ',', '.'));
	}

    calWeekTotal(value);
}

var calSales = function(){
	var tmpPersonal = parseFloat(Ext.ComponentQuery.query('#personal_repeat')[0].getValue());
	var tmpResult = 0;
	
	if(!isNaN(tmpPersonal) && tmpPersonal >= 20){
		tmpResult = tmpPersonal * 0.1;

		for(var a = 1;a <= 8;a++){
			if(a > 1){
				tmpResult = 0;
			}
			Ext.ComponentQuery.query('#sales' + a)[0].setValue('UBD $ ' + cdecimal(tmpResult, 2, ',', '.'));
		}
	}
}

var calUniLevel = function(){
	var tmpUni = parseFloat(Ext.ComponentQuery.query('#personal_sponsor')[0].getValue());
	var tmpActMember = parseFloat(Ext.ComponentQuery.query('#active_member')[0].getValue());
	var tmpDownline = parseFloat(Ext.ComponentQuery.query('#personal_downline')[0].getValue());
	var tmpCounter = 0;
	var tmpResult = 0;
	
	if(!isNaN(tmpUni) && !isNaN(tmpActMember)){
		tmpCounter = tmpUni * tmpActMember;
		tmpResult = tmpCounter * tmpDownline;
	}else{
		tmpResult = 0;
	}
	
	for(var a = 1;a <= 8;a++){
		var tmpTotal = (tmpResult * 0.07) * a;
		
		Ext.ComponentQuery.query('#uni' + a)[0].setValue('UBD $ ' + cdecimal(tmpTotal, 2, ',', '.'));
	}
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
                    scrollable: false,

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
                                    ],
									listeners: {
										initialize: function(){
											//this.setFloatingCls('floatingPanel');
										}
									}
                                }, {
                                    xtype: 'selectfield',
                                    label: 'Downline',
                                    itemId: 'downline',
                                    labelWidth: '50%',
                                    usePicker: true,
                                    listeners: {
                                        itemtap: function () {
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
                            handler: function () {
                                //Ext.Viewport.setMasked({xtype:'loadmask',message:'Loading'});
                                var persValue = parseFloat(Ext.ComponentQuery.query('#personal')[0].getValue());
                                var downValue = parseFloat(Ext.ComponentQuery.query('#downline')[0].getValue());
                                var recruitValue = parseFloat(Ext.ComponentQuery.query('#recruitment')[0].getValue());
                                var perCV = 0;
                                var gpb1 = 0;

                                ndsb1Value = (downValue * recruitValue) * 0.2;

                                switch(persValue){
									case 800:
										perCV = 0.12;
										break;
									case 400:
										perCV = 0.1;
										break;
									case 100:
										perCV = 0.08;
										break;
									case 50:
										perCV = 0.06;
										break;
								}

                                var tmpNode1 = recruitValue - 1;
                                var tmpNode2 = tmpNode1 * recruitValue;
                                var tmpNode3 = tmpNode2 * recruitValue;
                                var tmpNode4 = tmpNode3 * recruitValue;
                                var tmpNode5 = tmpNode4 * recruitValue;
                                var tmpNode6 = tmpNode5 * recruitValue;
                                var tmpNode7 = tmpNode6 * recruitValue;
                                var tmpNode8 = tmpNode7 * recruitValue;

                                gpb1 = (tmpNode1 * downValue * perCV);

                                /* NDSB Value */
                                Ext.ComponentQuery.query('#ndsb1')[0].setValue('UBD $' + cdecimal(ndsb1Value, 2, ',', '.'));
                                Ext.ComponentQuery.query('#ndsb2')[0].setValue('UBD $' + cdecimal(ndsb2Value, 2, ',', '.'));
                                Ext.ComponentQuery.query('#ndsb3')[0].setValue('UBD $' + cdecimal(ndsb2Value, 2, ',', '.'));
                                Ext.ComponentQuery.query('#ndsb4')[0].setValue('UBD $' + cdecimal(ndsb2Value, 2, ',', '.'));
                                Ext.ComponentQuery.query('#ndsb5')[0].setValue('UBD $' + cdecimal(ndsb2Value, 2, ',', '.'));
                                Ext.ComponentQuery.query('#ndsb6')[0].setValue('UBD $' + cdecimal(ndsb2Value, 2, ',', '.'));
                                Ext.ComponentQuery.query('#ndsb7')[0].setValue('UBD $' + cdecimal(ndsb2Value, 2, ',', '.'));
                                Ext.ComponentQuery.query('#ndsb8')[0].setValue('UBD $' + cdecimal(ndsb2Value, 2, ',', '.'));

                                /* GPB Value */
                                gpb[1] = gpb1;
                                gpb[2] = tmpNode2 * downValue * perCV;
                                gpb[3] = tmpNode3 * downValue * perCV;
                                gpb[4] = tmpNode4 * downValue * perCV;
                                gpb[5] = tmpNode5 * downValue * perCV;
                                gpb[6] = tmpNode6 * downValue * perCV;
                                gpb[7] = tmpNode7 * downValue * perCV;
                                gpb[8] = tmpNode8 * downValue * perCV;

                                for(var a = 1;a <= 8;a++){
									Ext.ComponentQuery.query('#gpb' + a)[0].setValue('UBD $' + cdecimal(gpb[a], 2, ',', '.'));
                                }

                                calWeekTotal(100);
                                //setTimeout(function () {            
                                //Ext.Viewport.setMasked(false);
                                Ext.getCmp('enrollmentResult').show();
                                //}, 500);
                                //Ext.ComponentQuery.query('#ndsb1')[0].setValue();
                            }
                        }
                    ]
                }, {
                    title: 'Sales',
                    iconCls: 'star',
                    styleHtmlContent: true,
                    scrollable: false,
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
                                    itemId: 'personal_repeat'
                                }, {
                                    xtype: 'spinnerfield',
									increment: 1,
									groupButtons: false,
									cycle: true,
                                    placeHolder: 'Person - 1 digit',
                                    labelWidth: '50%',
                                    label: 'Sponsor',
									minValue: 0,
                                    maxValue: 9,
                                    itemId: 'personal_sponsor'
                                }, {
									xtype: 'numberfield',
									placeHolder: 'CV',
									labelWidth: '50%',
									label: 'Downline',
									itemId: 'personal_downline'
								}, {
                                    xtype: 'textfield',
                                    placeHolder: 'Person',
                                    labelWidth: '50%',
                                    label: 'Active Member',
                                    itemId: 'active_member'
                                }
                            ]
                        }, {
                            xtype: 'button',
                            itemId: 'reportButton',
                            ui: 'action',
                            padding: '10px',
                            text: 'Next',
                            handler: function () {
								calSales();
								calUniLevel();
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
                activeitemchange: function (r, value, oldvalue, eOpts) {
                    Ext.getCmp('salesResult').hide({
                            type: 'fadeOut'
                        });
                    Ext.getCmp('enrollmentResult').hide({
                            type: 'fadeOut'
                        });
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