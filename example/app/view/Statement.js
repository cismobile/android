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
			height: '30%',
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
					itemId : 'yearMonth',
					label: 'Year & Month',
					value: appDate,
					slotOrder:['month', 'year'],
					picker: {
						yearFrom: 1980,
						minuteInterval : 1,
						ampm : true,
						slotOrder: ['month', 'year']
					},
					updatedata: function(newValue) {
						var picker = this.getPicker();
						if (this.initialized && picker) {
							picker.setValue(newValue);
						}

						this.getInput().setValue(Ext.Date.format(newValue,'Y-m')); 
					}
				}]
			},{
				xtype: 'button',
				padding: '2%',
				id: 'statementBtn',
				height: 40,
				text: 'Submit',
				handler: function(){
					var cDate = Ext.ComponentQuery.query('#yearMonth')[0].getValue();
					alert(ConvertDateFromDiv(cDate));
					getEaccStatement(sessionStorage.userid,cDate,'30');
				}
			}]
		},{
			xtype: 'container',
			padding: '5% 0% 0% 0%',
			height: '100%',
			items: [{
				xtype: 'list',
				scrollable: 'vertical',
				store: 'eAccStatement',
				height: '70%',
				//masked: {xtype: 'loadmask',indicator: false,message: 'Loading..'},
				emptyText: 'Empty',
				//styleHtmlContent: true,
				cls: 'imageSetting',
				style: 'text-transform:none;',
				// html: '<table border=0 style="margin-top:5%;font-size:16px"><tr><td style="width:37%">Doc No</td><td style="width:28%">Amount</td><td style="width:34%">Date</td></tr></table></br><hr style="margin-top:-45px" width="100%">',
				itemTpl: new Ext.XTemplate(
					'<div class=""><div style="float: left; width: 38%;">{f_doc_no}</div><div style="float:left;width:28%;text-align:right">{[this.totalFormat(values.trans_amount)]}</div><div style="float:left;width:33%;text-align:right">{f_trans_date:date("Y-m-d")}</div></div>',{
					totalFormat : function(total) {
						return total.toFixed(2);
				}
})
				//itemTpl: '<div class=""><div style="float: left; width: 38%;">{f_doc_no}</div><div style="float:left;width:28%;text-align:right">{trans_amount:num("0.00")}</div><div style="float:left;width:33%;text-align:right">{f_trans_date:date("Y-m-d")}</div></div>'
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