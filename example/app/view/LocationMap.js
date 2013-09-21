Ext.define('mobileV1.view.LocationMap', {
    extend: 'Ext.Panel',
    xtype: 'LocationMapView',

    config: {
		fullscreen: true,
		layout: 'fit',
        items: [{
            xtype: 'map',
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

					//navigator.geolocation.getCurrentPosition(function(position){
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
					//},function(error){});

					// var start = '';
					// var mGeo = this.getGeo();
					// var start = new google.maps.LatLng(mGeo.getLatitude(), mGeo.getLongitude());
					// var end = new google.maps.LatLng(tmp[0].f_latitude, tmp[0].f_longitude); 

					// var directionsDisplay = new google.maps.DirectionsRenderer();
					// var directionsService = new google.maps.DirectionsService();

					// directionsDisplay.setMap(gmap);

					// var request = {
						// origin:start, 
						// destination:end,
						// travelMode: google.maps.DirectionsTravelMode.DRIVING
					// };

					// directionsService.route(request, function(response, status) {                                                   
						// if (status == google.maps.DirectionsStatus.OK) {
							// directionsDisplay.setDirections(response);
						// }
					// });
					
                    // var infowindow = new google.maps.InfoWindow({
                        // content: '<b>' + tmp[0].f_title + '</b>' + '</br>' + tmp[0].f_address1 + '</br>' + tmp[0].f_address2 + '</br>' + tmp[0].f_address3 + '</br>' + tmp[0].f_address4,
                    // });

                    // google.maps.event.addListener(marker, 'click', function () {
                        // infowindow.open(map, marker);
                    // });

                    // setTimeout(function () {
                        // map.panTo(position);
                    // }, 1000);
                }
            }
        }]
    }
});