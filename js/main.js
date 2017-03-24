function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById("name");
  var apellido = document.getElementById("lastname");
  var correo = document.getElementById("input-email");
  var psw = document.getElementById("input-password");
  var opcion = document.getElementById("bici");

  var crtCantidad = /^\s+|\s+$/;
  var crtNumero = /[0-9]/;

  validaNombre();

//valido el nombre
function validaNombre(){
  if (nombre.value.length < 2 || crtCantidad.test(nombre.value)){
    alert("Tiene que ingresar su nombre");
    return nombre.focus();
  } else if (crtNumero.test(nombre.value)){
    alert("Solo se permiten letras");
    return nombre.focus();
  } else if (!(/[^a-z]+([a-z]{1,})/.test(nombre.value))){
    alert("Su nombre debe empezar con mayúscula");
    return nombre.focus();
  } else{
    validaApellido();
  }
}

//valido el apellido
function validaApellido(){
  if (apellido.value.length < 2 || crtCantidad.test(apellido.value)){
    alert("Tiene que ingresar su apellido");
    return apellido.focus();
  } else if (crtNumero.test(apellido.value)){
    alert("Solo se permite letras");
    return apellido.focus();
  } else if (!(/[^a-z]+([a-z]{1,})/.test(apellido.value))){
    alert("Su apellido debe empezar con mayúscula");
    return apellido.focus();
  } else{
    validaEmail();

  }
}

//valido el correo
function validaEmail(){
  var crt = /\S+@\+\S+.\+S+/;
  var crt2= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/;

  if (!crt.test(correo.value) && correo.value.length < 10){
    alert("Ingrese el formato correcto del correo");
    return correo.focus();
  } else if (!(crt2.test(correo.value))){
    alert ("Correo no válido");
    return correo.focus();
  }
  else{
    validaPass();
  }
}

//valido la contraseña
function validaPass(){
  if (psw.value.length < 6 || crtCantidad.test(psw.value)){
    alert("Ingrese una contraseña de mínimo 6 carácteres");
    return psw.focus();
  } else if(psw.value == "123456"){
    alert("La contraseña debe ser diferente de 123456");
    return psw.focus();
  } else if(psw.value == "098754"){
    alert("La contraseña debe ser diferente de 098754");
    return psw.focus();
  } else{
    validaOpciones();
  }
}

//valido el interés
function validaOpciones(){
  var op = opcion.options[opcion.selectedIndex].text;
    if(opcion.value == 0){
      alert("Eliga una opción");
      return opcion.focus();
    }
    else {
      alert ("Usted a elegido: "+ op + " \n Gracias por su visita :)");
    }
  }
}
