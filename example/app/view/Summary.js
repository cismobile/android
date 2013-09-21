Ext.define('mobileV1.view.Summary', {
    extend: 'Ext.Panel',
    xtype: 'summaryview',

    config: {
		autoDestroy: true,
		height: '100%',
		padding: '2%',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			border: '0 0 1 0',
			style: 'border-color: black; border-style: solid;',
			title: 'SUMMARY',
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
			title: 'Eligible To Bonus From Week',
			items: [{
				xtype: 'textfield',
				itemId: 'eligibleBonusFrom',
				label: 'From',
				readOnly: true
			},{
				xtype: 'textfield',
				itemId: 'eligibleBonusTo',
				label: 'To',
				readOnly: true
			}]
		},{
			xtype: 'fieldset',
			title: 'Next Maintenance Week',
			items: [{
				xtype: 'textfield',
				itemId: 'maintenanceWeek',
				label: 'Next Maintenance Week',
				readOnly: true
			}]
		},{
			xtype: 'fieldset',
			title: 'Group Performance Bonus GPB Potential',
			items: [{
				xtype: 'textfield',
				itemId: 'sharingGroup',
				label: 'Sharing Group',
				readOnly: true
			},{
				xtype: 'textfield',
				itemId: 'bonusGroup1',
				label: 'Bonus Group 1',
				readOnly: true
			},{
				xtype: 'textfield',
				itemId: 'bonusGroup2',
				label: 'Bonus Group 2',
				readOnly: true
			}]
		}],
		listeners: {
			activate: function(){
				Ext.ComponentQuery.query('#eligibleBonusFrom')[0].setValue(sessionStorage.eligibleBonus1);
				Ext.ComponentQuery.query('#eligibleBonusTo')[0].setValue(sessionStorage.eligibleBonus2);
				Ext.ComponentQuery.query('#maintenanceWeek')[0].setValue(sessionStorage.maintenanceWeek);
				Ext.ComponentQuery.query('#sharingGroup')[0].setValue(sessionStorage.sharingGroup);
				Ext.ComponentQuery.query('#bonusGroup1')[0].setValue(sessionStorage.bonusGroup1);
				Ext.ComponentQuery.query('#bonusGroup2')[0].setValue(sessionStorage.bonusGroup2);
			}
		}
	}
});