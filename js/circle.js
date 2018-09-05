function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log("No furula");
	}
}

function showPosition(position) {
	here = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	}

	var url_string = window.location.href
	var url = new URL(url_string);
	var ss = url.searchParams.get('ss');
	var inst = ss.substring(0, 2);
var data = {loc: here,plantel: inst}
	initMap(data);
}

function initMap(data) {
	var here = data.loc;
	var plantel = data.plantel;
	console.log(plantel);
	console.log(here);
	var current;

	var ptCentrado = {
		lat: 19.29417297756944,
		lng: -99.69221022023771
	};
	var pmCentrado = {
		lat: 19.257316470404707,
		lng: -99.59412338630307
	};
	var center;

	var pmCoords = [{
			lat: 19.25853188884752,
			lng: -99.59503533736813
		},
		{
			lat: 19.258592659533207,
			lng: -99.59170939818966
		},
		{
			lat: 19.256637857855555,
			lng: -99.59161283866513
		},
		{
			lat: 19.25652644358661,
			lng: -99.59504606620419
		}
	];
	var ptCoords = [{
			lat: 19.29699400058323,
			lng: -99.69592967955998
		},
		{
			lat: 19.29676110076818,
			lng: -99.69410577742985
		},
		{
			lat: 19.29572823672423,
			lng: -99.69411650626591
		},
		{
			lat: 19.295880128904244,
			lng: -99.69603696792058
		}
	];

	if (plantel === "pm" || plantel === "sm") {
		center = pmCentrado;
		current = pmCoords;
	} else if (plantel === "pt" || plantel === "st") {
		current = ptCoords;
		center = ptCentrado;
	} else {
		$('#warning').show();
	}


	var map = new google.maps.Map(document.getElementById('map'), {
		center: center,
		zoom: 15,
	});


	var geoFence = new google.maps.Polygon({
		paths: current,
		strokeColor: "#FF0000",
		strokeOpacity: 0.6,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.25
	});

	geoFence.setMap(map);

	var proximity = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(here.lat, here.lng), geoFence);
	if (proximity === true) {
		console.log("Te encuentras en proximidad al instituto");
		googleRun();
		$('#container').show();
		$('#map').hide();

	} else {
		console.log("Acercate más al instituto");

		$('#container').hide();
	}


}