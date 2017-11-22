$(document).ready(function(){
	$("#contacto").submit(function(){
		return validar();
	});

	function validar(){
		var mensaje="";
		var error=0;
		var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
		var regextel = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
		$("#mensaje").empty();
			if($("#nombreyapellido").val()==""){
				mensaje+="<p>*El Nombre y Apellido es obligatorio</p>";
				error++;
			}
			if(!($("#email").match(regexemail)){
				mensaje+="<p>*El email no cumple las condiciones dadas.</p>";
				error++;
			}	
			if(!($("#tel").match(regextel))){
				mensaje+="<p>*El telefono no cumple las condiciones dadas.</p>";
				error++;
			}	
			if($("#consulta").val()==""){
				mensaje+="<p>*Ingrese una consulta</p>";
				error++;
			}
		if(error>0){
			$("#mensaje").append(mensaje);
			return false;
		}
		else{
			return true;
		}
	}

});