

$('#button-addon2').click(function(){

		if ($('#txtBuscar').val().length > 0) {
			var tiene =	$("#button-addon2").hasClass("btn-success");
			if (tiene) {
				$("#txtBtn").text('Borrar');
				$("#txtBuscar").prop("readonly",true);
				$("#button-addon2").removeClass("btn-success");
				$("#button-addon2").addClass("btn-danger");
				$("#txtBuscar").removeClass("searchBoxGreen");
				$("#txtBuscar").addClass("searchBoxRed");
				
				$("#icono").removeClass("fa-search");
				$("#icono").addClass("fa-backspace");


			}else{
				$("#txtBtn").text('Buscar');
				$("#txtBuscar").prop("readonly",false);
				$('#txtBuscar').val('');
				$("#button-addon2").addClass("btn-success");
				$("#button-addon2").removeClass("btn-danger");
				$("#txtBuscar").addClass("searchBoxGreen");
				$("#txtBuscar").removeClass("searchBoxRed");
				$("#icono").addClass("fa-search");
				$("#icono").removeClass("fa-backspace");
			}
		}
    
});