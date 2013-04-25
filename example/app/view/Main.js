Ext.define('cis.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: ['Ext.Img'],
    config: {
		layout: 'fit',
		items: [{
			xtype: 'image',
			itemId: 'imageTesting',
			html: '<img src="resources/image/login.jpg">'
		},{
			xtype: 'image',
			itemId: 'imageTesting2',
			html: '<img src="resources/image/galaxy_wallpaper_12-HD.jpg">'
		},{
			xtype: 'container',
			layout: 'hbox',
			items: [{
				xtype: 'button',
				width: '50%',
				style: 'opacity:0',
				text: 'left',
				handler: function(){
					var form = this.parent.parent;
					form.down('#imageTesting').show();
					form.down('#imageTesting2').hide();
				}
			},{
				xtype: 'button',
				width: '50%',
				style: 'opacity:0',
				text: 'right',
				handler: function(){
					var form = this.parent.parent;
					form.down('#imageTesting').hide();
					form.down('#imageTesting2').show();
				}
			}]
		}]
        /*items: [{
			xtype: 'image',
			itemId: 'imageTesting',
			html: '<img src="resources/image/login.jpg">'
		},{
			xtype: 'container',
			style: 'position:absolute;top:0',
			items: [{
				xtype: 'container',
				width: '100%',
				items: [{
					xtype: 'button',
					text: 'left',
					handler: function(){
						var form = this.parent.parent.parent;
						form.down('#imageTesting').setHtml('<img src="resources/image/galaxy_wallpaper_12-HD.jpg">');
					}
				},{
					xtype: 'button',
					text: 'right',
					align: 'right',
					handler: function(){
						var form = this.parent.parent.parent;
						form.down('#imageTesting').setHtml('<img src="resources/image/login.jpg">');
					}
				}]
			}]
		}]*/
    }
});