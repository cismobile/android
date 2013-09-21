Ext.define('mobileV1.view.Pdfviewer', {
    extend: 'Ext.Panel',
    xtype: 'pdfviewer',

    config: {
		autoDestroy: true,
		layout: 'fit',
		items: [{
            xtype     : 'pdfpanel',
			name    : 'pdf',
            fullscreen: true,
            //src       : 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf', // URL to the PDF - Same Domain or Server with CORS Support
            style     : {
                backgroundColor: '#333'
            },
			listeners: {
				activate: function(){
					this.setSrc('http://59.188.15.246/cni_isp2_india_new/pdf/1379662370.pdf');
				}
			}
        }]
	}
});