	$(document).ready(function () {
	
	
	
googleRun();
	
	


});

function googleRun() {

    var url = "https://script.google.com/macros/s/AKfycbzfLJp7-aoKCrwp85nG4uIyRbVTSsGWyntJ7Moc5RQ7cNTMr_g/exec?callback=ctrlq";

    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });

  }

  // print the returned data
  function ctrlq(e) {
    console.log(e.result)
	var data = e.result;
	
var url_string = window.location.href
var url = new URL(url_string);
var ss = url.searchParams.get('ss');
var gate = url.searchParams.get('gate');
var ss_string = '¿En que puerta recogeras a '+data[ss]+'?';

if (gate > 0) {
	$('#submit').text('Confirmar puerta '+gate);
	$('#submit').slideDown();
}
if (ss !== null) {
if (ss.length == 0) {
var ss_string = "Escanea el código QR de tu credencial";
$('.wrapper2').not('H1').hide();
}
} else {
var ss_string = "Escanea el código QR de tu credencial";
$('.wrapper2').not('H1').hide();
}
var ss_field = document.getElementById('ss');
ss_field.value = ss;

var container = document.getElementById('container'); //Show an accurate prompt with ss name.
var Q = document.createElement('H1')   
var fulanito = document.createTextNode(ss_string);
Q.appendChild(fulanito);
container.prepend(Q);

var output1 = document.getElementById('ss_output');
var output2 = document.getElementById('gate_output');
var output3 = document.getElementById('time_output');
output1.value = data[ss];
output2.value = gate;

	var date = new Date();
	var hora = date.toLocaleTimeString();
	
output3.value = hora;


console.log(ss);
  }