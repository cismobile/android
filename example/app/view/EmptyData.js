Ext.define('mobileV1.view.EmptyData', {
    extend: 'Ext.Panel',
    xtype: 'EmptyDataView',

    config: {
        xtype: 'panel',
        iconCls: 'info',
        scrollable: false,
        height: '100%',
        //styleHtmlContent: true,
        items: [{
            xtype: 'panel',
			html: '<img src="resources/image/error.png"><div style="margin-left:5%">Empty Data</div>',
			style: 'margin-top:10%;margin-left:40%;font-size:18px;font-family:bold'
        }]
    }
});