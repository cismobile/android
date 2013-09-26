Ext.define('mobileV1.view.ProductSubCategory', {
    extend: 'Ext.Panel',
    xtype: 'subproductview',

    config: {
        title: 'Product',
        iconCls: 'star',
        layout: 'fit',
		height: '100%',	
        items: [{
			xtype: 'list',
			width: '100%',
			store: 'ProductSelectSubCategory',
			//cls: "myTop",
			//scrollable: 'horizontal',
			//itemCls: 'dataview-item',
			//padding: '1%',
			//itemTpl: '<img class="imageSetting" height="100" width="100" src="'+imageSubPath+'{f_filename}"></br><div style="width:100%;font-size:12px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">{name}</div>',
			itemTpl: '<div style="height:70px;"><img class="imageSetting" height="70" width="70" src="'+imageSubPath+'{f_filename}"><div style="padding-left:100px;margin-top:-70px;font-size:12px;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">{name}</br><span style="color:red">Price: {products_price}</span></div></div>',
			onItemDisclosure: true,
			listeners: {
				itemtap: function (t, index, target, record, e, eOpts) {
					var tmpProArr = Ext.getStore('ProductSelectSubCategory').findRecord('sku',record.data.sku);
					var tmpDescription = new Array();
					
					Ext.getStore('proDescription').setData('[{"name":'+Ext.JSON.encode(tmpProArr.data.name)+',"description":'+Ext.JSON.encode(tmpProArr.data.description)+',"products_price":'+Ext.JSON.encode(tmpProArr.data.products_price)+'}]');
					
					//Ext.getStore('ProductDetailImages').setData('[{"f_filename":'+Ext.JSON.encode(tmpProArr.data.f_filename)+'}]');
					Ext.getCmp('product').push({xtype:'productdetailsview',title: 'PRODUCT'});
					Ext.getCmp('proDetailImage').setSrc(imageSubPath+tmpProArr.data.f_filename);
					Ext.getCmp('proDetailPrice').setHtml("<hr width=100%></hr><h5 style='text-align:center'>"+tmpProArr.data.name+"</br>Price: "+tmpProArr.data.products_price+"</h5><hr width=100% style='margin-top:-6%'></hr>");
					Ext.getCmp('proDetailDescription').setHtml(tmpProArr.data.description);
					//Ext.getCmp('productImg').setValue(imageSubPath+tmpProArr.data.f_filename);
				}
			}
        }]
    }
});