$( document ).ready(function( $ ) {
	
 $("#form").submit(function(event){

	 
                var $form = $("#form");
                var $inputs = $form.find("input, select, button, textarea");
                var serializedData = $form.serialize();
        

                $('h1').text('Enviando solicitud...');
       
                request = $.ajax({
                        url: "https://script.google.com/macros/s/AKfycbzfLJp7-aoKCrwp85nG4uIyRbVTSsGWyntJ7Moc5RQ7cNTMr_g/exec",
						type: "post",
                        data: serializedData
                });
        

                request.done(function (response, textStatus, jqXHR){
                        // log a message to the console
console.log("Sent data through AJAX to sheets");
                });
        

                request.fail(function (jqXHR, textStatus, errorThrown){
                        // log the error to the console
                        console.error(
                                "The following error occured: "+
                                textStatus, errorThrown
                        );
                });
        


                request.always(function () {
	var date = new Date();
	var fecha = date.toLocaleDateString();
	var hora = date.toLocaleTimeString();

$('h1').html('Se solicitó a las: '+hora+'.</br>Favor de avanzar a la puerta que elegiste.');
$('.center').not('H1').hide();

console.log(hora);
                });
        
                // prevent default posting of form
                event.preventDefault();
 });


});