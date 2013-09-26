Ext.define('mobileV1.view.Withdraw', {
    extend: 'Ext.Panel',
    xtype: 'withdrawview',

    config: {
		autoDestroy: true,
		height: '100%',
		padding: '2%',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			border: '0 0 1 0',
			style: 'border-color: black; border-style: solid;',
			title: 'WITHDRAW',
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
				xtype: 'numberfield',
				itemId : 'withdrawAmount',
				label: 'Amount',
				minValue: 0
			},{
				xtype: 'textareafield',
				itemId : 'withdrawRemark',
				label: 'Remark'
			}]
		},{
			xtype: 'button',
			padding: '2%',
			id: 'withdrawBtn',
			height: 40,
			text: 'Submit',
			handler: function(){
				var amt = Ext.ComponentQuery.query('#withdrawAmount')[0].getValue();
				var rmk = Ext.ComponentQuery.query('#withdrawRemark')[0].getValue();
				
				if(amt != 0 && amt <= sessionStorage.bal){
					submitWithdraw(sessionStorage.userid,sessionStorage.companycode,amt,rmk);
				}else{
					alert("Minimum Value is 1");
				}
			}
		}],
		listeners: {
			activate: function(){
				Ext.ComponentQuery.query('#eaccBal')[0].setValue(cdecimal(sessionStorage.bal, 2, ',', '.'));
			}
		}
	}
});