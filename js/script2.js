var ASIS = [];
var AUSE = [];
var grupos;
var intervalo = setInterval(function(){ googleRun(); }, 5000);
var check = [];

$(document).ready(function () {
	var grupos = ['_1A','_1B','_1C','_1D','_2A','_2B','_2C','_2D','_3A','_3B','_3C','_3D','_4A','_4B','_4C','_4D','_5A','_5B','_5C','_5D','_6A','_6B','_6C'];	
for (i=0; i<grupos.length; i++) {
	ASIS.push([]);
}
for (i=0; i<grupos.length; i++) {
	AUSE.push([]);
}
googleRun();

	for (i=0; i<grupos.length; i++) {
Select = document.getElementById('filter');
Select.options[Select.options.length] = new Option(grupos[i], grupos[i]); //Pending  : name
}
	
	$('#filter').on('change',function() {
		var selection = $(this).val();
		$('.ss').show();
		$('.ss').not("."+selection).hide();	
	});
	
	$('#wrapper').on('click','.ss',function() {
	check.push($(this).not('span').text());
	console.log($(this).not('span').text());
	});

});

function googleRun() {

    var url = "https://script.google.com/macros/s/AKfycbzfLJp7-aoKCrwp85nG4uIyRbVTSsGWyntJ7Moc5RQ7cNTMr_g/exec?callback=iniciar&secret=";
    var name = "VALENTINA"
    var request = jQuery.ajax({
      crossDomain: true,
      url: url + encodeURIComponent(name),
      method: "GET",
      dataType: "jsonp"
    });
}


  function iniciar(e) {
var data = e.result;

var grupos = Object.keys(data);

$('#wrapper').html('');


 

var h = 0;
try {
for (i=0; i<grupos.length; i++) {
	var obj = data[grupos[i]]	
	var names = Object.keys(obj)
for (j in obj) {
	var keys = Object.keys(obj[j])
	var clase = document.createElement('div');
	var time = document.createElement('span');
	var gate = document.createElement('span');
	time.className = 'Hora'
	gate.className = 'Puerta'
	var str = names[h]
	var lastChar = str[str.length -1];
	var boygirl = "boy"
	clase.innerHTML = str;
	if (lastChar.toLowerCase() === "a") {
	boygirl = "girl";
	}
	clase.className = 'ss btn '+boygirl+' '+grupos[i]

	clase.appendChild(time);
	clase.appendChild(gate);


	gate.innerHTML = obj[j].gate;
	time.innerHTML = obj[j].time;
	
	var container = document.getElementById('wrapper');
	container.appendChild(clase);
	h++
}

	var h = 0;

}
}
finally {
	for (i=0; i<grupos.length; i++) {
	$('.'+grupos[i]).each(function() {
		var ss = $(this).text();
		AUSE[i].push(ss);
	});	
}
console.log(AUSE);
var selection = $('#filter').val();

if (selection !== null) {
		$('.ss').show();
		$('.ss').not("."+selection).hide();
}
}
  }
 
 function myStopFunction() {
    clearInterval(intervalo);
}

  