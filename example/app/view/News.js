Ext.define('mobileV1.view.News', {
        extend: 'Ext.Panel',
        xtype: 'newsview',
        
        /*
	   	xtype: 'dataview',
	   	height: 100,
	   	width: '100%',
	   	scrollable: 'horizontal',
	   	inline: {
	   		wrap: false
	   	},
	   	//store: People,
	   	itemTpl: '<div></div>'
	 */
        config: {
			//styleHtmlContent: true,
			xtype: 'panel',
			layout: 'vbox',
			itemId: 'newsPanel',
			items: [{
				xtype: 'container',
				height: '40%',
				layout: 'fit',
				items: [{
					xtype: 'image',
					width: '100%',
					mode: 'image',
					id: 'newDataView',
					padding: '1%',
					//padding: 5,
					//inline: {wrap:false},
					//scrollable: 'horizontal',
					//autoDestroy: true,
					//store: 'newsimage',
					/*listeners: {
						activate: function(){
							this.setItemTpl(newsImg);
						}
					}*/
					//itemTpl: '<a class="fancybox" rel="group" href="'+imageNewsPath+'{f_filename}"><img style="margin-left:5px;margin-right:5x;" height="150px" src="'+imageNewsPath+'{f_filename}" data-fullimage="'+imageNewsPath+'{f_filename}"></img></a>'
					//itemTpl: '<img style="margin-left:5px;margin-right:5x;" height="200px" src="'+imageNewsPath+'{f_filename}" data-fullimage="'+imageNewsPath+'{f_filename}"></img>'
				}]
			}/*, {
				xtype: 'container',
				margin: '0 0 0 35%',
				width: '60%',
				items: [{
					xtype: 'button',
					cls: 'imageSetting',
					width: '20%',
					height: '10%',
					text: 'PDF',
					padding: '2%',
					style: 'margin-left: 5%',
					handler: function(){
                        Ext.getCmp('home').push({xtype: 'pdfviewer',title: "PDF"});
                        //Ext.getCmp('pdf').setSrc('http://59.188.15.246/cni_isp2_india_new/pdf/1379662370.pdf');
					}
				}]
			}, */,{
				xtype: 'panel',
				itemId: 'newsdescription',
				name: 'newsdescription',
				height: '52%',
				width: '100%',
				styleHtmlContent: true,
				scrollable: 'vertical'
			},{
				xtype: 'panel',
				layout: 'hbox',
				height: '8%',
				items: [{
					xtype: 'image',
					src: 'resources/image/icon_facebook_128.png',
					style: 'margin-left:10px',
					width: 37,
					height: 37,
					listeners: {
						tap: function(){
							alert('F');
						}
					}
				},{
					xtype: 'image',
					src: 'resources/image/icon_twitter_128.png',
					style: 'margin-left:10px',
					width: 37,
					height: 37,
					listeners: {
						tap: function(){
							alert('T');
						}
					}
				},{
					xtype: 'image',
					src: 'resources/image/icon_linkedin_128.png',
					style: 'margin-left:10px',
					width: 37,
					height: 37,
					listeners: {
						tap: function(){
							alert('L');
						}
					}
				}]
			},{
				xtype: 'hiddenfield',
				itemId: 'ndsb1',
				name: 'ndsb1'
			}],
			listeners: {
				activate: function(){
					var tmp = Ext.JSON.decode(Ext.ComponentQuery.query('#ndsb1')[0].getValue());
					this.down('#newsdescription').setHtml(tmp.f_description);
					
					/*
					 * [select media table using content_id]
						Write assign image data into NewsImage store
					
					*/
					
				}
			}
        }
    });