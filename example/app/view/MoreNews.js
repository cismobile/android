Ext.define('mobileV1.view.MoreNews', {
        extend: 'Ext.Panel',
        xtype: 'moreNewsView',
        
        config: {
			id: 'mNewsID',
			autoDestroyed: true,
			items: [{
				xtype: 'list',
				store: 'MainNews',
				height: '100%',
				itemId: 'mNews',
				scrollable: true,
				grouped: true,
				onItemDisclosure: true,
				itemTpl: '{f_title}'
			}]
        }
    });