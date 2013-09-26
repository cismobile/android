Ext.define('mobileV1.view.Transfer', {
    extend: 'Ext.Panel',
    xtype: 'transferview',

    config: {
		autoDestroy: true,
		padding: '2%',
		height: '100%',
		scrollable: 'vertical',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			border: '0 0 1 0',
			style: 'border-color: black; border-style: solid;',
			title: 'TRANSFER',
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
				xtype: 'textfield',
				itemId: 'transferTo',
				label: 'Distributor - To'
			},{
				xtype: 'passwordfield',
				itemId: 'transferPassword',
				label: 'Password'
			},{
				xtype: 'textfield',
				itemId: 'transferRefNo',
				label: 'Ref No'
			},{
				xtype: 'numberfield',
				itemId : 'transferAmount',
				label: 'Amount'
			},{
				xtype: 'textareafield',
				itemId : 'transferRemark',
				label: 'Remark'
			}]
		},{
			xtype: 'button',
			padding: '2%',
			id: 'transferBtn',
			height: 40,
			text: 'Submit',
			handler: function(){
				var amt = Ext.ComponentQuery.query('#transferAmount')[0].getValue();
				var refNo = Ext.ComponentQuery.query('#transferRefNo')[0].getValue();
				var pwd = Ext.ComponentQuery.query('#transferPassword')[0].getValue();
				var rmk = Ext.ComponentQuery.query('#transferRemark')[0].getValue();
				var transferTo = Ext.ComponentQuery.query('#transferTo')[0].getValue();
				
				submitTransfer(sessionStorage.userid,sessionStorage.companycode,transferTo,pwd,amt,rmk);
			}
		}],
		listeners: {
			activate: function(){
				Ext.ComponentQuery.query('#eaccBal')[0].setValue(cdecimal(sessionStorage.bal, 2, ',', '.'));
				//Ext.getCmp('eaccBal').setValue(cdecimal(sessionStorage.bal, 2, ',', '.'));
			}
		}
	}
});