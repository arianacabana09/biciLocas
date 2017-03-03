function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById("name");
  var apellido = document.getElementById("lastname");
  var correo = document.getElementById("input-email");
  var contraseña = document.getElementById("input-password");
  var opcion = document.getElementById("bici");
  var vacio = opcion.options[opcion.selectedIndex].value;

  var expresion = /^[a-z][\w.-]+@\w[\w.-]+.[\w.-]*[a-z][a-z]$/i;

  //valido el nombre
  if (nombre.value.length < 2 ){
    alert("Tiene que escribir su nombre");
    nombre.value.focus();
    return 0;
  }

  //valido el apellido
  if (apellido.value.length < 2){
    alert("Tiene que escribir su apellido");
    apellido.value.focus();
    return 0;
  }

  //valido el correo
  if (!expresion.test(correo) && correo.value.length< 10){
      alert("Ingrese el formato correcto del correo");
      correo.value.focus();
      return 0;
  }

  //valido la contraseña
  if (contraseña.value.length<6){
    alert("Ingrese una contraseña de minimo 6 caracteres");
    contraseña.value.focus();
    return 0;
  }

  //valido el interés
  if(vacio.value == "0"){
    alert("Seleccione una opción")
    return 0;
  }

      /*if(opcion.value == null || opcion.value == "") {
      alert("Porfavor, seleccione su color favorito");
    }*/
}
