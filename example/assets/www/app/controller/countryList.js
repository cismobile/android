Ext.define('cis.controller.countryList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            countrylist: 'countrylist'
        },
        control: {
            'countrylist list':{
				//itemtap: 'showPost',
				disclosure: function(list, record, node, index, event, eOpts) {    
					event.stopEvent();
				}
			}
        }
    },
    
	/*showPost: function(list,index,element,record){
		/*this.getCountrylist().push({
			store: 'CategoryList',
			title: 'Category List',
			iconCls: 'star',
			xtype: 'list',
			itemTpl: '{categories_name}'
			//flex: 1
		})
	}*/
});