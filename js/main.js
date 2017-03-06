function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById("name");
  var apellido = document.getElementById("lastname");
  var correo = document.getElementById("input-email");
  var contraseña = document.getElementById("input-password");
  var opcion = document.getElementById("bici");
  var select = opcion.options[opcion.selectedIndex].value;

  //var caracteresvalidos = /^[a-z][\w.-]+@\w[\w.-]+.[\w.-]*[a-z][a-z]$/i;

  //valido el nombre
  function validaNombre(){
  if (nombre.value.length < 2){
    alert("Tiene que escribir su nombre");
    return nombre;
  }
} validaNombre();

  //valido el apellido
  function validaApellido(){
  if (apellido.value.length < 2){
    alert("Tiene que escribir su apellido");;
    return 0;
  }
} validaApellido();

  //valido el correo
  function validaEmail(){
    var crt = /\S+@\+\S+.\+S+/;
  if (!crt.test(correo) && correo.value.length< 10){
      alert("Ingrese el formato correcto del correo");
      return 0;
    }
} validaEmail();

  //valido la contraseña
  function validaPass(){
    if (contraseña.value.length<6){
      alert("Ingrese una contraseña de minimo 6 caracteres");
      return 0;
    }

  } validaPass()

  //valido el interés
  function validaOpciones(){
    //var op = sel.options[sel.selectedIndex].text;
    if(opcion.value == 0){
      alert("Eliga una opción");}
    else {
      alert ("Usted a elegido: "+ select);
    }
  } validaOpciones()


      /*if(opcion.value == null || opcion.value == "") {
      alert("Porfavor, seleccione su color favorito");
    }*/
}
