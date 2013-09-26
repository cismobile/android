Ext.define('mobileV1.view.Media', {
	extend: 'Ext.Panel',
	xtype: 'mediaview',

	config: {
		title: 'Media',
		iconCls: 'more',
		layout: 'fit',
		items: [{
			xtype:'navigationview',
			id: 'media',
			layout: {animation: false},
			defaultBackButtonText: '',
			navigationBar: {
				backButton: {
					style: 'font-size:18px;',
					xtype: 'button',
					text: '',
					icon: 'resources/image/back.png',
					ui : 'plain'
				},
				style: {
					'background': '#cccccc'
				},
				height: 51,
				items:[{
					xtype: 'image',
					align : 'left',
					name : 'nav_btn',
					id: 'navMediaBtn',
					src: 'resources/image/applist.png',
					height: 37,
					width: 37
				},{
					xtype: 'image',
					src: 'resources/image/cislogo.png',
					height: 37,
					width: 37,
					align: 'right',
					style:{
						'margin-right': '10px'
					}
				}]
				
			},
			items: [{
				xtype: 'container',
				title: 'MEDIA',
				style: {
					background : '#ffffff'
				},
				items: [{
					xtype: 'list',
					store: 'storeMedia',
					masked: {xtype: 'loadmask',indicator: false,message: 'Loading..'},
					height: '100%',
					width: '100%',
					onItemDisclosure: true,
					cls: "myTop",
					//indexBar: true,
					itemId: 'mediaList',
					//itemTpl: '{f_title}',
					itemTpl: '<div style="width:100%;font-size:12px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">{f_ori_filename}</div>',
					listeners: {
						itemtap: function(t, index, item, e){
							sessionStorage.pdf = e.data.f_filename;
							Ext.getCmp('media').push({xtype: 'pdfviewer',title: "PDF"});
						}
					}
				}]
			}]
		}],
		  listeners: {
            activate: function () {
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.ComponentQuery.query('#navMediaBtn')[0].hide();
				}else if(sessionStorage.userid > 0){
					Ext.ComponentQuery.query('#navMediaBtn')[0].show();
				}
            }
        }
	}
});