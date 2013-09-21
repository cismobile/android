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
			autoDestroy: true,
			itemId: 'newsPanel',
			items: [{
				xtype: 'panel',
				layout: {
					type:'vbox',
					pack:'center'
				},
				items :[{
					xtype: 'dataview',
				   	height: 210,
				   	width: '100%',
					padding: 5,
					inline: {wrap:false},
				   	scrollable: 'horizontal',
					itemId: 'newDataView',
					autoDestroy: true,
				   	store: 'newsimage',
					listeners: {
						activate: function(){
							this.setItemTpl(newsImg);
						}
					}
					//itemTpl: '<a class="fancybox" rel="group" href="'+imageNewsPath+'{f_filename}"><img style="margin-left:5px;margin-right:5x;" height="150px" src="'+imageNewsPath+'{f_filename}" data-fullimage="'+imageNewsPath+'{f_filename}"></img></a>'
					//itemTpl: '<img style="margin-left:5px;margin-right:5x;" height="200px" src="'+imageNewsPath+'{f_filename}" data-fullimage="'+imageNewsPath+'{f_filename}"></img>'
				}]
			}, {
				xtype: 'container',
				margin: '0 0 0 35%',
				width: '100%',
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
						//Ext.getCmp('pdf').setSrc('http://cdn.mozilla.net/pdfjs/tracemonkey.pdf');
					}
				}]
			}, {
				xtype: 'panel',
				itemId: 'newsdescription',
				name: 'newsdescription',
				height: '60%',
				width: '100%',
				style: 'padding-top:8px',
				styleHtmlContent: true,
				scrollable: 'vertical'
			},{
					xtype: 'hiddenfield',
				    itemId: 'ndsb1',
				    name: 'ndsb1'
				}
			],
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