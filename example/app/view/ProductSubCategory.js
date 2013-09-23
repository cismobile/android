Ext.define('mobileV1.view.ProductSubCategory', {
    extend: 'Ext.Panel',
    xtype: 'subproductview',

    config: {
        title: 'Product',
        iconCls: 'star',
        layout: 'fit',
		height: '100%',
		//scrollable: false,
        items: [{
			xtype: 'list',
			width: '100%',
			//scrollable: 'vertical',
			store: 'ProductSelectSubCategory',
			cls: "myTop",
			itemTpl: '<div style="height:70px;"><img class="imageSetting" height="70" width="70" src="'+imageSubPath+'{f_filename}"><div style="padding-left:100px;margin-top:-70px">{name}</br><span style="color:red">Price: {products_price}</span></div></div>',
			onItemDisclosure: true,
			listeners: {
				itemtap: function (t, index, target, record, e, eOpts) {
					//Ext.getStore('ProductSelectSubCategory').getData().items
					var tmpProArr = Ext.getStore('ProductSelectSubCategory').findRecord('sku',record.data.sku);
					var tmpDescription = new Array();
					
					Ext.getStore('proDescription').setData('[{"name":'+Ext.JSON.encode(tmpProArr.data.name)+',"description":'+Ext.JSON.encode(tmpProArr.data.description)+',"products_price":'+Ext.JSON.encode(tmpProArr.data.products_price)+'}]');
					
					Ext.getStore('ProductDetailImages').setData('[{"f_filename":'+Ext.JSON.encode(tmpProArr.data.f_filename)+'}]');
					
					Ext.getCmp('product').push({xtype:'productdetailsview',title: 'PRODUCT'});
				}
			}
        }]
    }
});