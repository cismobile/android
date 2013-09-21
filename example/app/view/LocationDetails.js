Ext.define('mobileV1.view.LocationDetails', {
    extend: 'Ext.Panel',
    xtype: 'locationdetailsview',

    config: {
        xtype: 'panel',
        iconCls: 'info',
        layout: 'vbox',
        scrollable: false,
        height: '100%',
        //styleHtmlContent: true,
        items: [{
            xtype: 'dataview',
			height: 210,
			width: '100%',
			padding: 5,
			inline: {wrap:false},
			scrollable: 'horizontal',
			itemId: 'newDataView',
			autoDestroy: true,
			inline: {wrap: false},
            store: 'locationImage',
			listeners: {
				activate: function(){
					this.setItemTpl(locImg);
				}
			}
			//itemTpl: '<img height="150" src="'+imagePath+'{f_filename}"</img>'
        }, {
            xtype: 'dataview',
            //itemId: 'locationdescription',
            style: 'font-size:12.5px',
            padding: 10,
            flex: 1,
            store: 'locDescription',
            itemTpl: '<div>{f_description}</div><span><a>Get Direction</a></span>',
			listeners: {
				itemtap: function(view, index, item, e){
					Ext.getCmp('location').push({xtype:'LocationMapView',title:e.data.f_title});
				}
			}
        },/*, {
            xtype: 'map',
            //id : 'mapView',
            itemId: 'mapID',
            useCurrentLocation: {autoUpdate: true},
            mapOptions: {
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },
            getLocation: true,
            flex: 1,
            listeners: {
                initialize: function () {
                    var gMap = this.getMap();
                    var trafficLayer = new google.maps.TrafficLayer();
                    trafficLayer.setMap(gMap);
                },
                maprender: function (component, gmap, geo, eOpts) {
                    var tmp = Ext.JSON.decode(Ext.ComponentQuery.query('#locationhidden')[0].getValue());

                    // var position = new google.maps.LatLng(tmp[0].f_latitude, tmp[0].f_longitude);
                    // var marker = new google.maps.Marker({
                        // position: position,
                        // map: gmap
                    // });
				
					var start = '';
					var mGeo = this.getGeo();
					var start = new google.maps.LatLng(mGeo.getLatitude(), mGeo.getLongitude());
					var end = new google.maps.LatLng(tmp[0].f_latitude, tmp[0].f_longitude); 

					var directionsDisplay = new google.maps.DirectionsRenderer();
					var directionsService = new google.maps.DirectionsService();

					directionsDisplay.setMap(gmap);

					var request = {
						origin:start, 
						destination:end,
						travelMode: google.maps.DirectionsTravelMode.DRIVING
					};

					directionsService.route(request, function(response, status) {                                                   
						if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(response);
						}
					});
					
                    var infowindow = new google.maps.InfoWindow({
                        content: '<b>' + tmp[0].f_title + '</b>' + '</br>' + tmp[0].f_address1 + '</br>' + tmp[0].f_address2 + '</br>' + tmp[0].f_address3 + '</br>' + tmp[0].f_address4,
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        infowindow.open(map, marker);
                    });

                    setTimeout(function () {
                        map.panTo(position);
                    }, 1000);
                }
            }
        }, */{
            xtype: 'hiddenfield',
            itemId: 'locationhidden',
            name: 'locationhidden'
        }, {
            xtype: 'hiddenfield',
            itemId: 'latitudeValue',
            name: 'latitudeValue'
        }, {
            xtype: 'hiddenfield',
            itemId: 'longitudeValue',
            name: 'longitudeValue'
        }],
        listeners: {
            activate: function (newActiveItem, t, oldActiveItem, eOpts) {
                var tmp = Ext.JSON.decode(Ext.ComponentQuery.query('#locationhidden')[0].getValue());

                this.down('#latitudeValue').setValue(tmp[0].f_latitude);
                this.down('#longitudeValue').setValue(tmp[0].f_longitude);
                //this.down('#locationimage').setTpl('<img src="">');
                //this.down('#locationimage').setSrc(imagePath + tmp[0].f_filename);
                //this.down('#locationdescription').setHtml(tmp[0].f_description);
                //this.down('#locationdescription').setHtml("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
                //this.down('#locationmap').setHtml('<iframe width="100%" height="auto" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.my/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Bangsar+South,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur&amp;aq=0&amp;oq=ban&amp;sll=3.110092,101.669369&amp;sspn=0.012898,0.019312&amp;ie=UTF8&amp;hq=Bangsar+South,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur&amp;t=m&amp;ll=3.113305,101.664991&amp;spn=0.014998,0.018239&amp;z=15&amp;output=embed"></iframe>');

                //this.down('#locationimage').setHidden(true);
                //this.down('#newsdescription').setHtml(tmp.f_description);

                /*
					 * [select media table using content_id]
						Write assign image data into NewsImage store
					
					*/

            }
        }
    }
});