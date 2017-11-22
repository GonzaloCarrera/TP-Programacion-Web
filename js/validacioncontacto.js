function validar() {
	var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var regextel = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
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
	var tel = document.getElementById("tel").value;
		if(!(regextel).test(tel)){
			mensaje+="<p>*El telefono no cumple los requisitos</p>";
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