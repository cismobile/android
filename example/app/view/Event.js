Ext.define('mobileV1.view.Event', {
        extend: 'Ext.Panel',
        xtype: 'eventview',
        
        config: {
        	xtype: 'panel',
        	title: 'Event',
			layout: 'vbox',
			items: [{
				xtype: 'image',
				height: '37%',
				width: '100%',
				id: 'eventImg',
				margin: '2% 0 2% 0'
				//src: 'http://src.sencha.io/x50/x50/http://210.5.44.102/mobiledemo2/images/products/large/main_6140-susu-harimau_big.jpg'
				//inline: {wrap:false},
				//scrollable: 'horizontal',
				//store: 'ProductDetailImages',
				//itemTpl: imgProDetailsUrl
			},{
				xtype: 'container',
				height: '50%',
				style: 'font-size:14px',
				width: '100%',
				id: 'eventDetailDescription',
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
				}]
			}]
		}
});