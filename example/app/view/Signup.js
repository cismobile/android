Ext.define('mobileV1.view.Signup', {
    extend: 'Ext.Panel',
    xtype: 'signupview',

    config: {
		autoDestroy: true,
		height: '100%',
		padding: '2%',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			border: '0 0 1 0',
			style: 'border-color: black; border-style: solid;',
			title: 'SIGNUP',
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
			items: []
		}]
	}
});