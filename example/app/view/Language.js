Ext.define('mobileV1.view.Language', {
    extend: 'Ext.Container',
    xtype: 'languageview',
    
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
				title: '<div class="listCountry">Language(s)</div>',
				items: [{
					xtype: 'button',
					text: '',
					icon: 'resources/image/back.png',
					ui : 'plain',
					listeners: {
						tap: function(){
							storeCompanyList();
							var view = Ext.Viewport.animateActiveItem({xtype: 'companyview'},{});
							view.show();
						}
					}
				}]
            },{
				xtype: 'list',
				store: 'LanguageStore',
				masked: {xtype: 'loadmask',indicator: false,message: 'Loading..'},
				emptyText: 'Empty Data',
				height: '100%',
				scrollable: true,
				itemTpl: '{f_description}',
				//itemId: 'newslist',
				style: 'text-transform:none;',
				listeners: {
					itemtap: function(t, index, item, e){
						storeProductCategory();
						storeProfile();
						storeNews();
						storeLocationStates(4);
						
						localStorage.languageid = e.data.f_id;
						var view = Ext.Viewport.animateActiveItem({xtype: 'app_viewport'},{});
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