function validar() {
	var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	document.getElementById("mensaje").innerHTML="";
	var mensaje="";
	var error="0";
	
	var nombreyapellido=document.getElementById("nombreyapellido").value;
	if(nombreyapellido==""){
		mensaje+="<p>*Nombre y apellido obligatorio</p>";
		error++;
	}
	var email = document.getElementById("email").value;
		if(!(regexemail).test(email)){
			mensaje+="<p>*El campo email no cumple los requisitos</p>";
			error++;
		}
	var consulta=document.getElementById("consulta").value;
		if(consulta==""){
			mensaje+="<p>*Ingrese su consulta</p>";
			error++;
		}
	if(error>0){
		document.getElementById("mensaje").innerHTML=mensaje;
		return false;
	}
	else{
		return true;
	}
}