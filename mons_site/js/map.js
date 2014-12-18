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
				var styles = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]}];
	
	map.setOptions({styles: styles});
}


google.maps.event.addDomListener(window, 'load', initialize);