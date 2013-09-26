Ext.define('mobileV1.view.Summary', {
    extend: 'Ext.Panel',
    xtype: 'summaryview',

    config: {
		autoDestroy: true,
		height: '100%',
		padding: '2%',
		scrollable: 'vertical',
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
				label: '',
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
				if(sessionStorage.eligibleBonus1 == "null" || sessionStorage.eligibleBonus1 === undefined)
					Ext.ComponentQuery.query('#eligibleBonusFrom')[0].setValue("");
				else
					Ext.ComponentQuery.query('#eligibleBonusFrom')[0].setValue(sessionStorage.eligibleBonus1);
				
				if(sessionStorage.eligibleBonus2 == "null" || sessionStorage.eligibleBonus2 === undefined)
					Ext.ComponentQuery.query('#eligibleBonusTo')[0].setValue("");
				else
					Ext.ComponentQuery.query('#eligibleBonusTo')[0].setValue(sessionStorage.eligibleBonus2);
					
				if(sessionStorage.maintenanceWeek == "null" || sessionStorage.maintenanceWeek === undefined)
					Ext.ComponentQuery.query('#maintenanceWeek')[0].setValue("");
				else
					Ext.ComponentQuery.query('#maintenanceWeek')[0].setValue(sessionStorage.maintenanceWeek);
				
				if(sessionStorage.sharingGroup == "null" || sessionStorage.sharingGroup === undefined)
					Ext.ComponentQuery.query('#sharingGroup')[0].setValue("");
				else
					Ext.ComponentQuery.query('#sharingGroup')[0].setValue(sessionStorage.sharingGroup);
					
				if(sessionStorage.bonusGroup1 == "null" || sessionStorage.bonusGroup1 === undefined)
					Ext.ComponentQuery.query('#bonusGroup1')[0].setValue("");
				else
					Ext.ComponentQuery.query('#bonusGroup1')[0].setValue(sessionStorage.bonusGroup1);
					
				if(sessionStorage.bonusGroup2 == "null" || sessionStorage.bonusGroup2 === undefined)
					Ext.ComponentQuery.query('#bonusGroup2')[0].setValue("");
				else
					Ext.ComponentQuery.query('#bonusGroup2')[0].setValue(sessionStorage.bonusGroup2);
			}
		}
	}
});