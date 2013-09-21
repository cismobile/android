Ext.define('mobileV1.view.Statement', {
    extend: 'Ext.Panel',
    xtype: 'statementview',

    config: {
		autoDestroy: true,
		padding: '2%',
		height: '100%',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			border: '0 0 1 0',
			style: 'border-color: black; border-style: solid;',
			title: 'STATEMENT',
			border: '0 0 1 0',
			style: 'border-color: black; border-style: solid;',
			baseCls: 'mainTitleBar',
			items: [{
				xtype: 'image',
				align : 'left',
				name : 'nav_btn',
				src: 'resources/image/applist.png',
				height: 37,
				width: 37
			},{
				xtype: 'image',
				src: 'resources/image/cislogo.png',
				height: 37,
				width: 37,
				align: 'right',
				style:{
					'margin-right': '10px'
				}
			}]
		},{
			xtype: 'container',
			height: '30',
			items: [{
				xtype: 'fieldset',
				items: [{
					xtype: 'textfield',
					itemId : 'eaccBal',
					label: 'Balance',
					readOnly: true
				}]
			},{
				xtype: 'fieldset',
				items: [{
					xtype: 'datepickerfield',
					name : 'yearMonth',
					label: 'Year & Month',
					value: new Date(),
					slotOrder:['month', 'year'],
					picker: {
						yearFrom: 1980,
						minuteInterval : 1,
						ampm : true,
						slotOrder: ['month', 'year']
					}
				}]
			}]
		},{
			xtype: 'container',
			height: '70%',
			items: [{
				xtype: 'fieldset',
				title: 'Result',
				height: '100%',
				scrollable: 'vertical',
			}]
		}],
		listeners: {
			activate: function(){
				Ext.ComponentQuery.query('#eaccBal')[0].setValue(cdecimal(sessionStorage.bal, 2, ',', '.'));
				//Ext.getCmp('eaccBal').setValue(cdecimal(sessionStorage.bal, 2, ',', '.'));
			}
		}
	}
});