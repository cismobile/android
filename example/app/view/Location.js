Ext.define('mobileV1.view.Location', {
        extend: 'Ext.Panel',
        xtype: 'locationview',

        config: {
			title: 'Location',
			iconCls: 'cisLocation',
			layout: 'fit',
			items: [{
				xtype:'navigationview',
				id: 'location',
				layout: {animation: false},
				defaultBackButtonText: '',
				navigationBar: {
					backButton: { 
						//align : 'left',
						//iconCls: 'back',
						//ui : 'plain',
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
					items:[/*{
						xtype: 'image',
						src: 'resources/image/News&Events/btn-back.png',
						height: 35,
					    width: 35,
						align: 'left',
						listeners: {
							tap: function(){
								Ext.getCmp('maintab').setActiveItem(0);
							}
						}
					},{
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
						id: 'navLocBtn',
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
					}/*, {
						xtype: 'image',
						src: 'resources/image/ProductPages/btn-search.png',
						height: 35,
					    width: 35,
						align:'right',
						style:{
					    	'margin-right': '10px'
					    },
						listeners: {
							tap: function(){
								alert('');
							}
						}
					}*/]
					
				},
				items: [{
					xtype: 'container',
					title: 'LOCATIONS',
					style: {
						background : '#ffffff'
					},
					items: [{
						xtype: 'list',
						store: 'LocationSelectState',
						masked: {xtype: 'loadmask',indicator: false,message: 'Loading..'},
						height: '100%',
						width: '100%',
						onItemDisclosure: true,
						cls: "myTop",
						//indexBar: true,
						itemId: 'statelist',
						//itemTpl: '{f_title}',
						itemTpl: '<div style="height:70px"><img class="imageSetting" height="70" width="70" src="'+imageLocationPath+'{images}"><div style="padding-left:100px;margin-top:-50px">{f_title}</div></div>',
						listeners: {
							itemtap: function(t, index, item, e){
								/*Ext.getCmp('location').setNavigationBar({
									style: {background : '#cccccc'},
								})*/
								storeLocationSecStates(e.data.f_id,e.data.f_title);
							}
						}
					}]
				}]
			
			}],
			listeners: {
				activate: function(){
					if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
						Ext.ComponentQuery.query('#navLocBtn')[0].hide();
					}else if(sessionStorage.userid > 0){
						Ext.ComponentQuery.query('#navLocBtn')[0].show();
					}
				}
			}
        
        }
    });