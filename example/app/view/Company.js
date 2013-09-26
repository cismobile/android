Ext.define('mobileV1.view.Company', {
    extend: 'Ext.Container',
    xtype: 'companyview',
    
	autoDestroy: true,
	config: {
		padding: '15% 0 0 15%',
		styleHtmlContent: true,
        items: [{
			xtype: 'container',
			model: true,
			hideOnMaskTap: true,
			border: 1,
			style: 'border-color: black; border-style: solid;',
			width: '80%',
			height: '90%',
			items: [{
				docked: 'top',
				xtype: 'toolbar',
				title: '<div class="listCountry">Choose Your Country</div>'
            },{
				xtype: 'list',
				store: 'CompanyStore',
				height: '100%',
				//width: '30%',
				//inline: {wrap: true},
				//itemCls: 'dataview-item',
				scrollable: true,
				loadingText: 'Loading',
				itemTpl: '<div class="myList">{f_code} - {f_name}</div>',
				itemId: 'newslist',
				style: 'text-transform:none;',
				listeners: {
					itemtap: function(t, index, item, e){
						Ext.getStore('LanguageStore').removeAll();
						storeLanguage(e.data.f_code);
						
						localStorage.companyid = e.data.f_id;
						localStorage.pricecode = e.data.f_price_code;
						
						var view = Ext.Viewport.animateActiveItem({xtype: 'languageview'},{});
						view.show();
						
					}
				}
			}]
		}],
		listeners: {
			// activeitemchange: function(r,value,oldvalue,eOpts){

			// }
		}
    }
});