const input = document.querySelector(".input");
const copy = document.querySelector('.btn-copy');
let divRespuesta = document.querySelector(".container__aside__respuesta");
let divMensaje = document.querySelector(".container__aside__mensaje");
let divSalida = document.querySelector(".respuesta");


input.addEventListener('input',updateValue);

copy.addEventListener('click', copiar);



let texto;
let isValid = true;
let encriptado;
let desencriptado;


function updateValue(e){
  texto = e.target.value;
}



encriptarSubmit = ()=> {
  
  if(!texto) return;


  let value = verificarCadena(texto);

  if(isValid){

    encriptado =  encriptar(value);
    
  }
  else {
    
    Swal.fire({
      title: 'Error!',
      text: 'Solo se aceptan letras en minúscula',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
    reiniciarCampos();
    return;
  }

  divMensaje.classList.add("ocultar");
  divRespuesta.classList.remove("ocultar");
  divSalida.textContent = encriptado;
  reiniciarCampos();
  return;
}


desencriptarSubmit = ()=> {
  
  if(!texto) return;

  let value = verificarCadena(texto);

  if(isValid){
    desencriptado =  desencriptar(value);
  }
  else {
    
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
    reiniciarCampos();
    return;
  }
  

  divMensaje.classList.add("ocultar");
  divRespuesta.classList.remove("ocultar");
  divSalida.textContent = desencriptado;
  reiniciarCampos();
  return;
}



function verificarCadena(texto) {
  // Expresión regular para caracteres especiales, números o tildes
  const regex = /[^\sa-z]/gi;

  if (regex.test(texto)) {
      isValid = false;
      return "Error, el texto solo debe contener letras en minúscula";
  } else {
      return texto.toLowerCase();
  }
}



function encriptar(texto){

  let encriptado='';

  for (let i = 0; i < texto.length; i++) {

    if(texto[i]=='a'){
      encriptado+='ai';
    }
    else if(texto[i]=='e'){
      encriptado+='enter';
    }
    else if(texto[i]=='i'){
      encriptado+='imes';
    }
    else if(texto[i]=='o'){
      encriptado+='ober';
    }
    else if(texto[i]=='u'){
      encriptado+='ufat';
    }
    else{
      encriptado+=texto[i];
    }
    
  }

  return encriptado;

}


function desencriptar(texto) {
  let desencriptado = texto;

  // Realizar todas las sustituciones en orden
  if (texto.includes('ai')) {
      desencriptado = desencriptado.replace(/ai/g, "a");
  }
  if (texto.includes('enter')) {
      desencriptado = desencriptado.replace(/enter/g, 'e');
  }
  if (texto.includes('imes')) {
      desencriptado = desencriptado.replace(/imes/g, 'i');
  }
  if (texto.includes('ober')) {
      desencriptado = desencriptado.replace(/ober/g, 'o');
  }
  if (texto.includes('ufat')) {
      desencriptado = desencriptado.replace(/ufat/g, 'u');
  }

  return desencriptado;
}

reiniciarCampos = ()=> {

  texto = '';
  isValid = true;
  encriptado= '';
  desencriptado= '';
  error = '';
  input.value = '';

}


function copiar(){

  navigator.clipboard.writeText(divSalida.textContent);
  copy.textContent = '¡Copiado!';
  copy.classList.add('copiado');
  
  setTimeout(() => {
    copy.classList.remove('copiado');
    copy.textContent = 'Copiar';

  }, 1000);

}
