Ext.define('mobileV1.view.SelectLocations', {
        extend: 'Ext.Panel',
        xtype: 'selectlocationsview',
        config: {
			title: 'Location',
			iconCls: 'info',
			scrollable: true,
			layout: 'fit',
			id: 'selectLocationsView',
			items: [{
				xtype: 'list',
				store: 'LocationSelectLocations',
				onItemDisclosure: true,
				styleHtmlContent: true,
				height: '100%',
				width: '100%',
				//itemTpl: '<img height="100" width="100" src={f_filename}></img><span style="margin:5px;">{f_title}</span>',
				//itemTpl: '<span>{f_title}</span>',
				cls: "myTop",
				itemTpl: '<div style="height:70px"><img class="imageSetting" height="70" width="70" src="'+imageLocationPath+'{images}"><div style="padding-left:100px;margin-top:-70px">{f_title}</br><div style="font-family:bold">Office Tel No: {f_tel_o}</div></div></div>',
				listeners: {
					itemtap: function(view, index, item, e){
						var tmp = Ext.JSON.decode(Ext.ComponentQuery.query('#locationhidden')[0].getValue());
						var rec = view.getStore().getAt(index);
						var cHttp = new XMLHttpRequest();
						var params = "content_id="+tmp[0].f_id+"&delete=0";
						cHttp.open("POST", sysPath + '/cms/CmsLocationSetup/LocationDetailsByState', true);
						cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						cHttp.setRequestHeader("Content-length", params.length);
						cHttp.setRequestHeader("Connection", "close");
						cHttp.onreadystatechange = function () {
							if (cHttp.readyState == 4 && cHttp.status == 200) {
								var tmpR = eval("(" + cHttp.responseText + ")");
								Ext.Viewport.add(Ext.create('mobileV1.view.LocationDetails'));
								Ext.getStore('locationImage').setData(tmpR);
								Ext.getStore('locDescription').setData(tmpR);
								
								if(!tmpR[0].f_filename){
									locImg = emptyImg;
								}else{
									locImg = imgLocUrl;
								}
								
								Ext.getCmp('location').push({xtype:'locationdetailsview',title:tmpR[0].f_title});
							}
						}
						cHttp.send(params);
					}
				}
			}]
        }
    });