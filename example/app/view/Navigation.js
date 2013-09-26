Ext.define('mobileV1.view.Navigation', {
	extend: 'Ext.Panel',
	xtype: 'navigation',

	autoDestroy: true,
	config: {
		zIndex: 1,
		cls : 'nav-list',
		items: [{
			xtype: "toolbar",
			ui: "searchbar",
			items: [{
				xtype: 'container',
				//html: '<img src="resources/image/user.png" width=30 height=30><div style="padding-left:100px">Guest</div>'
				id: 'userName',
				html: '<div style="height:50px"><img height=40 width=40 src="resources/image/user.png""><div style="padding-left:50px;margin-top:-30px">Guest</div></div>'
			}/*{
				xtype: "searchfield",
				placeHolder: "Search...",
				flex: 1,
				padding: '5px',
				listeners: {
					scope: this,
					action: function(field) {
						console.log(field.getValue());
					}
				}
			}*/]
		},{
			xtype: 'list',
			height: '90%',
			itemId: 'navView',
			itemTpl : '{title}',
			grouped: true,
			store: {
				storeId: 'naviStore',
				fields: ['title','group','type'],
				sorters: 'group',
				grouper: {
					groupFn: function (item) {
						return item.get('group');
					}
				}
			},
			data : [{
				title : '<div style="margin-left:4%"><img src="resources/image/eaccStatement.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Statement</div></div>',
				group : 'E-Account',
				type  : 'statement'
			},{
				title : '<div style="margin-left:4%"><img src="resources/image/eaccTransfer.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Transfer</div></div>',
				group : 'E-Account',
				type  : 'transfer'
			},{
				title : '<div style="margin-left:4%"><img src="resources/image/withdraw.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Withdraw</div></div>',
				group : 'E-Account',
				type  : 'withdraw'
			},{
				title : '<div style="margin-left:4%"><img src="resources/image/setting.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Profile</div></div>',
				group : 'Setting',
				type  : 'profile'
			},{
				title : '<div style="margin-left:4%"><img src="resources/image/userlogin.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Login</div></div>',
				group : 'Setting',
				type  : 'login'
			},{
				title : '<div style="margin-left:4%"><img src="resources/image/bonus.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Summary</div></div>',
				group : 'Bonus',
				type  : 'summary'
			},{
				title : '<div style="margin-left:4%"><img src="resources/image/history.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">History</div></div>',
				group : 'Sales',
				type  : 'history'
			},{
				title : '<div style="margin-left:4%"><img src="resources/image/signup.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Signup</div></div>',
				group : 'Sales',
				type  : 'signup'
			},{
				title : '<div style="margin-left:4%"><img src="resources/image/cart.png"><div style="margin-left:40px;margin-top:-27px;font-weight:bold">Shopping Cart</div></div>',
				group : 'Sales',
				type  : 'shoppingcart'
			}]
		}],
		listeners: [{
			delegate: '#navView',
			event: 'itemtap',
			fn: 'onItemTap'
		}]
	},
	onItemTap: function (list, index, target, record) {
        var me = this;
		me.fireEvent('onItemTapCommand',record);

	}
});