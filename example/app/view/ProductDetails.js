Ext.define('mobileV1.view.ProductDetails', {
        extend: 'Ext.Panel',
        xtype: 'productdetailsview',
        requires: [
            'Ext.TitleBar'
        ],
        config: {
        	xtype: 'panel',
        	title: 'Product',
			iconCls: 'star',
			layout: 'vbox',
			items: [{
				xtype: 'dataview',
				height: 210,
				width: '100%',
				padding: 5,
				inline: {wrap:false},
				scrollable: 'horizontal',
				store: 'ProductDetailImages',
				inline: {wrap: false},
				itemTpl: imgProDetailsUrl
			},{
				xtype: 'dataview',
				height: '70%',
				style: 'font-size:12.5px',
				padding: 10,
				flex: 2,
				store: 'proDescription',
				itemTpl: '{description}'
			}]
		}
});