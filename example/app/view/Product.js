Ext.define('mobileV1.view.Product', {
    extend: 'Ext.Panel',
    xtype: 'productview',

    config: {
        title: 'Product',
        iconCls: 'cisProduct',
        layout: 'fit',
		//scrollable: false,
        items: [{
            xtype: 'navigationview',
            id: 'product',
            flex: 1,
			layout: {animation: false},
			defaultBackButtonText: '',
            navigationBar: {
				backButton: { 
					//align : 'left',
					//iconCls: 'back',
					style: 'font-size:18px',
					//ui : 'plain',
					xtype: 'button',
					text: '',
					icon: 'resources/image/back.png',
					ui : 'plain'
				},
                style: {
                    'background': '#cccccc'
                },
				height: 51,
                items: [/*{
					xtype: 'button',
					align : 'left',
					name : 'nav_btn',
					iconCls: 'add',
					cls: 'myColor',
					iconMask: true,
					ui : 'plain'
				},*/{
					xtype: 'image',
					align : 'left',
					name : 'nav_btn',
					id: 'navProBtn',
					src: 'resources/image/applist.png',
					height: 37,
					width: 37
					// iconMask: true,
					// ui : 'plain'
				},{
					xtype: 'image',
					src: 'resources/image/cislogo.png',
					height: 37,
					width: 37,
					align: 'right',
					style:{
						'margin-right': '10px'
					}
				}/*{
                    xtype: 'image',
                    src: 'resources/image/News&Events/btn-back.png',
                    height: 35,
                    width: 35,
                    align: 'left',
                    listeners: {
                        tap: function () {
                            Ext.getCmp('maintab').setActiveItem(0);
                        }
                    }
                }, {
                    xtype: 'image',
                    src: 'resources/image/ProductPages/btn-search.png',
                    height: 35,
                    width: 35,
                    align: 'right',
                    style: {
                        'margin-right': '10px'
                    },
                    listeners: {
                        tap: function () {
                            alert('');
                        }
                    }
                }*/]
            },
            items: [{
				title: 'PRODUCTS',
				xtype: 'dataview',
				masked: {xtype: 'loadmask',indicator: false,message: 'Loading..',},
				cls:'my-titlebar',
				emptyText: 'No Data',
				width: '100%',
				//scrollable: 'vertical',
				inline: {wrap: true},
				store: 'ProductMainCategoryImage',
				itemTpl: '<div><p style="position:absolute; background-color:white; filter:alpha(opacity=60); opacity:.6;width:100%;height:12%;"><span style="color:black; filter:alpha(opacity=100); opacity:1;font-size:38px;padding:10px;font-family:bold">{f_title}</span></p><img id="{f_category_id}" style="" height="55%" width="100%" src="'+imagePath+'{f_filename}"></img></div>',
				//itemTpl: '<img id="{f_category_id}" style="" height="100%" width="100%" src="'+imagePath+'{f_filename}"><div style="position:absolute;background-color:white;opacity:0.5;width:100%;height:7.5%;margin-top:-16%;font-size:28px;padding:10px;font-family:bold">{f_title}</div></img>',
				listeners: {
					itemtap: function (t, index, target, record, e, eOpts) {
						var tmpPro = new Array();
						var tmpText = record.get('product_skus').split(",");
						
						for(var a = 0;a < tmpText.length;a++){
							tmpPro.push(tmpText[a]);
						}
					
						var cHttp = new XMLHttpRequest();
						var params = "language_id=1&price_code=MYMP&product_sku="+Ext.JSON.encode(tmpPro)+"";
						cHttp.open("POST", sysPath + '/cms/CmsProductSetup/ProductSubCategory', true);
						cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						cHttp.setRequestHeader("Content-length", params.length);
						cHttp.setRequestHeader("Connection", "close");
						cHttp.onreadystatechange = function () {
							if (cHttp.readyState == 4 && cHttp.status == 200) {
								var tmpR = eval("(" + cHttp.responseText + ")");
								Ext.getStore('ProductSelectSubCategory').setData(tmpR);
								
								Ext.getCmp('product').push({xtype:'subproductview',title: record.get('f_title')});
							}
						}
						cHttp.send(params);
					}
				}
            }]
        }],
		listeners: {
			activate: function(){
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.ComponentQuery.query('#navProBtn')[0].hide();
				}else if(sessionStorage.userid > 0){
					Ext.ComponentQuery.query('#navProBtn')[0].show();
				}
			}
		}
    }
});