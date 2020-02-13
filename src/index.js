import validator from './validator.js';
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  alert(`Hola! Mucho gusto en conocerte`);
});
function formulario (){
  let nombre,apellidos, email, tarjeta, fecha, vencimiento ;
  nombres = document.getElementById("nombres").value;
  apellidos = document.getElementById("apellidos").value;
  tarjeta = document.getElementById("tarjeta").value;
  email = document.getElementById("email").value;
  fecha = document.getElementById("fecha").value;
  vencimiento = document.getElementById("vencimiento").value;
}

if ( nombres === "" || apellidos === "" || tarjeta === "" || email === "" || fecha === "" || vencimiento === "" ){
  alert ("Todos los campos son obligatorios");

}

else if (isNaN (tarjeta)) {
  alert ("Campo de Numeros")

}



