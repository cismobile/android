Ext.define('mobileV1.view.SelectLocation', {
        extend: 'Ext.Panel',
        xtype: 'selectlocationview',
        config: {
			title: 'Location',
			iconCls: 'info',
			scrollable: true,
			layout: 'fit',
			autoDestroy: true,
			id: 'selectLocationView',
			items: [{
				xtype: 'hiddenfield',
				itemId: 'category_id',
				name: 'category_id'
			},{
				xtype: 'list',
				store: 'LocationSelectLocation',
				onItemDisclosure: true,
				height: '100%',
				width: '100%',
				//itemTpl: '<img height="100" width="100" src={f_filename}></img><span style="margin:5px;">{f_title}</span>',
				//itemTpl: '<span>{f_title}</span>',
				cls: "myTop",
				itemTpl: '<div style="height:70px"><img class="imageSetting" height="70" width="70" src="'+imageLocationPath+'{images}"><div style="padding-left:100px;margin-top:-50px;font-size:14px">{f_title}</div></div>',
				listeners: {
					itemtap: function(t, index, item, e){
						var cHttp = new XMLHttpRequest();
						var params = "id="+e.data.f_id+"&delete=0";
						cHttp.open("POST", sysPath + '/cms/CmsLocationSetup/LocationDetailsByState', true);
						cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						cHttp.setRequestHeader("Content-length", params.length);
						cHttp.setRequestHeader("Connection", "close");
						cHttp.onreadystatechange = function () {
							if (cHttp.readyState == 4 && cHttp.status == 200) {
								var tmpR = eval("(" + cHttp.responseText + ")");
								Ext.getStore('LocationSelectLocations').removeAll();
								Ext.getStore('LocationSelectLocations').setData(tmpR);
								
								Ext.Viewport.add(Ext.create('mobileV1.view.LocationDetails'));
								Ext.ComponentQuery.query('#locationhidden')[0].setValue(Ext.JSON.encode(tmpR));
								Ext.getCmp('location').push({xtype:'selectlocationsview',title: e.data.f_title});
							}
						}
						cHttp.send(params);
					}
				}
			}]
        }
    });