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
				height: '40%',
				id: 'proDetailImage',
				margin: '2% 0 2% 0'
				//src: 'http://src.sencha.io/x50/x50/http://210.5.44.102/mobiledemo2/images/products/large/main_6140-susu-harimau_big.jpg'
				//inline: {wrap:false},
				//scrollable: 'horizontal',
				//store: 'ProductDetailImages',
				//itemTpl: imgProDetailsUrl
			},{
				xtype: 'container',
				id: 'proDetailPrice'
			},{
				xtype: 'container',
				height: '35%',
				style: 'font-size:12.5px',
				width: '100%',
				id: 'proDetailDescription',
				//store: 'proDescription',
				scrollable: 'vertical',
				styleHtmlContent: true,
				//itemTpl: '{description}'
			},{
				xtype: 'container',
				layout: 'hbox',
				items: [{
					xtype: 'image',
					src: 'resources/image/icon_facebook_128.png',
					style: 'margin-left:10px',
					width: 37,
					height: 37
				},{
					xtype: 'image',
					src: 'resources/image/icon_twitter_128.png',
					style: 'margin-left:10px',
					width: 37,
					height: 37
				},{
					xtype: 'image',
					src: 'resources/image/icon_linkedin_128.png',
					style: 'margin-left:10px',
					width: 37,
					height: 37
				},{
					xtype: 'image',
					right: '2%',
					src: 'resources/image/cart1.png',
					width: 37,
					height: 37
				}]
			}],
			listeners: {
				// activate: function(){
					// Ext.getCmp('proDetailImage').setSrc(sessionStorage.imgUrl);
				// }
			}
		}
});