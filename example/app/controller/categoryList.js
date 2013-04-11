Ext.define('cis.controller.categoryList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            categorylist: 'categoryList'
        },
        control: {
            'categorylist list':{
				itemtap: 'showPost'
			}
        }
    },
    
	showPost: function(list,index,element,record){
		this.getCategorylist().push({
			xtype: 'list',
			title: 'Category list',
			html: record.get('categories_name'),
			scrollable: true,
			styleHtmlContent: true
		})
	}
});