//MAP DE BASE
function initialize() {
        var mapOptions = {
          center: { lat: 50.450831 , lng: 3.950822},
          zoom: 14,
					panControl: false,
					zoomControl: true,
					zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_LEFT
    },
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					overviewMapControl: false
        };
        var map = new google.maps.Map(document.getElementById('maps'),
            mapOptions);
		
	var i = 0;
	
//POINTEUR+INFO
function pointeur(i){
	// for(i=0; i<listBat.monument.length; i++) {listBat.monument[i]};
	var myLatlng = new google.maps.LatLng(listBat.monument[i].lat,listBat.monument[i].long);
	console.log(listBat.monument[i].lat+','+listBat.monument[i].long);
 
	var imgIcone = 'img/pointer.png';
  
	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
			icon: imgIcone,
      
  });
	
	marker.setMap(map);
	
};
	
for(i=0; i<listBat.monument.length; i++) {pointeur(i)};
 
//Style map	
				var styles = [
  {
    "stylers": [
      { "saturation": -100 },
      { "weight": 2.3 },
      { "lightness": -37 },
      { "visibility": "simplified" },
      { "gamma": 0.62 }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#393b3a" }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#b5b5b5" }
    ]
  }
];
	
	map.setOptions({styles: styles});
}


google.maps.event.addDomListener(window, 'load', initialize);