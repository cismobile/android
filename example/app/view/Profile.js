Ext.define('mobileV1.view.Profile', {
    extend: 'Ext.Panel',
    xtype: 'profileview',

    config: {
		autoDestroy: true,
		height: '100%',
		scrollable: 'vertical',
		padding: '2%',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			border: '0 0 1 0',
			style: 'border-color: black; border-style: solid;',
			title: 'PROFILE',
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
				itemId: 'distCode',
				label: 'Distributor Code',
				readOnly: true
			}]
		},{
			xtype: 'fieldset',
			title: 'Address',
			items: [{
				xtype: 'textfield',
				itemId: 'address1',
				label: 'Address 1',
			},{
				xtype: 'textfield',
				itemId: 'address2',
				label: 'Address 2'
			},{
				xtype: 'textfield',
				itemId: 'address3',
				label: 'Address 3'
			},{
				xtype: 'textfield',
				itemId: 'address4',
				label: 'Address 4'
			}]
		},{
			xtype: 'fieldset',
			title: 'Contact',
			items: [{
				xtype: 'textfield',
				itemId: 'mobileNo',
				label: 'Mobile'
			},{
				xtype: 'textfield',
				itemId: 'telHomeNo',
				label: 'Home'
			},{
				xtype: 'textfield',
				itemId: 'telOfficeNo',
				label: 'Office'
			},{
				xtype: 'textfield',
				itemId: 'faxNo',
				label: 'Fax'
			}]
		},{
			xtype: 'fieldset',
			title: 'Email',
			items: [{
				xtype: 'emailfield',
				label: 'Email',
				itemId: 'emailAddress'
			}]
		},{
			xtype: 'button',
			padding: '2%',
			id: 'profileBtn',
			height: 40,
			text: 'Update',
			handler: function(){
				
			}
		}],
		listeners: {
			activate: function(){
				Ext.ComponentQuery.query('#distCode')[0].setValue(sessionStorage.loginame);
				//Ext.ComponentQuery.query('#eaccBal')[0].setValue(cdecimal(sessionStorage.bal, 2, ',', '.'));
				if(sessionStorage.address1 == "null")
					Ext.ComponentQuery.query('#address1')[0].setValue("");
				else
					Ext.ComponentQuery.query('#address1')[0].setValue(sessionStorage.address1);
				
				if(sessionStorage.address2 == "null")
					Ext.ComponentQuery.query('#address2')[0].setValue("");
				else
					Ext.ComponentQuery.query('#address2')[0].setValue(sessionStorage.address2);
					
				if(sessionStorage.address3 == "null")
					Ext.ComponentQuery.query('#address3')[0].setValue("");
				else
					Ext.ComponentQuery.query('#address3')[0].setValue(sessionStorage.address3);
				
				if(sessionStorage.address4 == "null")
					Ext.ComponentQuery.query('#address4')[0].setValue("");
				else
					Ext.ComponentQuery.query('#address4')[0].setValue(sessionStorage.address4);
				
				if(sessionStorage.email == "null")
					Ext.ComponentQuery.query('#emailAddress')[0].setValue("");
				else
					Ext.ComponentQuery.query('#emailAddress')[0].setValue(sessionStorage.email);
				
				if(sessionStorage.fax == "null")
					Ext.ComponentQuery.query('#faxNo')[0].setValue("");
				else
					Ext.ComponentQuery.query('#faxNo')[0].setValue(sessionStorage.fax);
					
				if(sessionStorage.mobile1 == "null")
					Ext.ComponentQuery.query('#mobileNo')[0].setValue("");
				else
					Ext.ComponentQuery.query('#mobileNo')[0].setValue(sessionStorage.mobile1);
				
				if(sessionStorage.telHome == "null")
					Ext.ComponentQuery.query('#telHomeNo')[0].setValue("");
				else
					Ext.ComponentQuery.query('#telHomeNo')[0].setValue(sessionStorage.telHome);
				
				if(sessionStorage.telOffice == "null")
					Ext.ComponentQuery.query('#telOfficeNo')[0].setValue("");
				else
					Ext.ComponentQuery.query('#telOfficeNo')[0].setValue(sessionStorage.telOffice);
			}
		}
	}
});