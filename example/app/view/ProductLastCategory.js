Ext.define('mobileV1.view.ProductLastCategory', {
    extend: 'Ext.Panel',
    xtype: 'ProductLastCategoryView',

    config: {
		scrollable: true,
		autoDestroy: true,
		layout: 'fit',
		items: [{
			xtype: 'dataview',
			width: '100%',
			inline: {wrap: true},
			store: 'ProductLastCategoryStore',
			itemTpl: '<img id="{f_category_id}" style="" height="100%" width="100%" src="http://bangsar.publicvm.com/solucisv3_dev/images/cms/originals/{f_filename}"><div style="position:absolute;background-color:white;opacity:0.5;width:100%;height:12%;margin-top:-16%"><span style="position:absolute;font-size:28px;padding:10px;font-family:bold">{f_title}</span></div></img>',
			listeners: {
				itemtap: function (t, index, target, record, e, eOpts) {
					var cHttp = new XMLHttpRequest();
						var params = "delete=0&id="+record.get('f_id')+"";
						cHttp.open("POST", sysPath + '/cms/CmsProductSetup/ProductContent', true);
						cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						cHttp.setRequestHeader("Content-length", params.length);
						cHttp.setRequestHeader("Connection", "close");
						cHttp.onreadystatechange = function () {
							if (cHttp.readyState == 4 && cHttp.status == 200) {
								var tmpR = eval("(" + cHttp.responseText + ")");
								Ext.getStore('ProductDetailImages').setData(tmpR);
								Ext.getStore('proDescription').setData(tmpR);
								Ext.getCmp('product').push({xtype:'productdetailsview',title: record.get('f_title')});
								Ext.getCmp('productDetailDescription').setValue(record.get('f_title'));
							}
						}
						cHttp.send(params);
					
				}
			}
		}]
	}
});