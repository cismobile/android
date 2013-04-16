Ext.define('cis.controller.productList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            categorylist: 'categorylist'
        },
        control: {
            'categorylist list':{
				itemtap: 'showPost'
			}
        }
    },
    
	showPost: function(list,index,element,record){
		this.getCategorylist().push({
			xtype: 'panel',
			title: 'Product List' + ' - ' + record.get('categories_name'),
			html: record.get('categories_name'),
			scrollable: true,
			styleHtmlContent: true
		})
	}
});