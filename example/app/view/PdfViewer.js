Ext.define('mobileV1.view.PdfViewer', {
    extend: 'Ext.Panel',
    xtype: 'pdfviewer',

    config: {
		autoDestroy: true,
		layout: 'fit',
		items: [{
            xtype     : 'pdfpanel',
			itemId    : 'pdf',
            fullscreen: true,
			loadingMessage: 'Loading PDF...',
            //src       : 'http://59.188.15.246/cni_isp2_india_new/pdf/1379662370.pdf', // URL to the PDF - Same Domain or Server with CORS Support
            style     : {
                backgroundColor: 'white'
            },
			listeners: {
				activate: function(){
					//var tmp = Ext.JSON.decode(Ext.ComponentQuery.query('#ndsb1')[0].getValue());
					this.setSrc(pdfPath+sessionStorage.pdf);
                    //alert(this.getSrc());
				}
			}
        }]
	}
});