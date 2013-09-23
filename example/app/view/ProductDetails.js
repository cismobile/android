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
				xtype: 'image',
				height: 210,
				width: '100%',
				padding: 5,
				inline: {wrap:false},
				scrollable: 'horizontal',
				store: 'ProductDetailImages',
				itemTpl: imgProDetailsUrl
			},{
				xtype: 'dataview',
				height: '70%',
				style: 'font-size:12.5px',
				padding: 10,
				flex: 2,
				store: 'proDescription',
				itemTpl: '<hr width=100%></hr><h3 style="text-align:center">{name}</br></br>Price: {products_price}</h3><hr width=100%></hr>{description}'
			}]
		}
});