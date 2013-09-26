Ext.define('mobileV1.view.Events', {
    extend: 'Ext.Panel',
    xtype: 'eventsview',

    config: {
        title: 'Events',
        iconCls: 'star',
        layout: {type: 'vbox'},
		
        items: [{
            xtype: 'navigationview',
            id: 'events',
			layout: {animation: false},
            autoDestroy: true,
            flex: 1,
            defaultBackButtonText: '',
            navigationBar: {
                backButton: { 
					//align : 'left',
					//iconCls: 'back',
					style: 'font-size:18px;',
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
                items: [{
						xtype: 'image',
						align : 'left',
						name : 'nav_btn',
						itemId: 'navEventBtn',
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
					}/*,{
						xtype: 'image',
						src: 'resources/image/MainPage/btn-logout.png',
						height: 35,
					    width: 35,
						align: 'right',
					    style:{
					    	'margin-right': '10px'
					    }
					}*/
                ]
            },

            items: [{
                xtype: 'container',
                title: 'Events',
                items: [{
                        xtype: 'dataview',
                        scrollable: 'vertical',
                        store: 'People',
                        height: '55%',
						masked: {xtype: 'loadmask',indicator: false,message: 'Loading..'},
						emptyText: 'Empty',
                        styleHtmlContent: true,
						style: 'text-transform:none;',
                        itemTpl: '{f_description}'
                    }, {
                        xtype: 'panel',
                        //src: 'resources/image/MainPage/bar-news-event.png',
                        height: 40,
						width: '100%',
                        html: '<div style="background-color:rgb(18,118,169);text-align:left;color:white;font-size:24px;padding-top:5px;"><span style="padding:10px">News & Events</span></div>',
                        styleHtmlContent: false,
                        listeners: {
                            tap: function () {
                                Ext.getCmp('home').setNavigationBar({
                                    /*backButton: {
                                        iconCls: 'arrow_left',
                                        align: 'left',
                                        iconMask: true,
                                        ui: 'round-black'
                                    }*/
                                });
                                Ext.getCmp('home').push({
                                    xtype: 'moreNewsView',
                                    title: 'NEWS & EVENTS'
                                });
                            }
                        }
                    }, {
                        xtype: 'list',
                        store: 'EventList',
                        height: '35%',
                        scrollable: true,
                        onItemDisclosure: true,
						masked: {xtype: 'loadmask',indicator: false,message: 'Loading..'},
						itemTpl: '<div style="width:100%;font-size:12px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">{f_title}</div>',
                        itemId: 'envetlist',
						style: 'text-transform:none;',
                        listeners: {
                            itemtap: function (t, index, item, e) {
								Ext.Viewport.setMasked({xtype: 'loadmask',indicator: false,message: 'Loading..'});
								var counter = 0;
								
                                var cHttp = new XMLHttpRequest();
                                var params = "id=" + e.data.f_id + "&type=article&m_type=images&deleted=0";
                                cHttp.open("POST", sysPath + '/cms/CmsArticleSetup/AppNewsImages', true);
                                cHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                cHttp.setRequestHeader("Content-length", params.length);
                                cHttp.setRequestHeader("Connection", "close");
                                cHttp.onreadystatechange = function () {
                                    if (cHttp.readyState == 4 && cHttp.status == 200) {
										var tmpR = Ext.JSON.decode(cHttp.responseText);
										
										// if(tmpR.length == 1 && tmpR[0].f_id === undefined)
											// newsImg = emptyImg;
										// else
											// newsImg = imgNewsUrl;
										
										Ext.Viewport.setMasked(false);
										Ext.getCmp('events').push({xtype: 'eventview',title: e.data.f_title});
										Ext.getCmp('eventImg').setSrc(imagePath+tmpR[0].f_filename);
										Ext.getCmp('eventDetailDescription').setHtml(e.data.f_description);
                                       // Ext.getStore('newsimage').setData(tmpR);
                                    }
                                }
                                cHttp.send(params);
                            }
                        }
                    }
                ]
            }]
        }],
        listeners: {
            activate: function () {
				if(sessionStorage.userid == 0 || sessionStorage.userid === undefined){
					Ext.ComponentQuery.query('#navEventBtn')[0].hide();
				}else if(sessionStorage.userid > 0){
					Ext.ComponentQuery.query('#navEventBtn')[0].show();
				}
            }
        }
    }
});