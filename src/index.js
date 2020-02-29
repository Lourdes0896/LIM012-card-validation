import validator from './validator.js';

document.getElementById("seccion2").style.display="none";
document.getElementById("seccion3").style.display="none";
document.getElementById("seccion4").style.display="none";

let tarjeta = document.getElementById("creditCardNumber");
let botonvalidar =document.getElementById("btn");
let botonregresar =document.getElementById ("verificar");


botonvalidar.addEventListener("click", () => {
  document.getElementById("seccion1").style.display="none";
  if(tarjeta.value === ""){
    alert("Complete sus datos por favor");
    document.getElementById("seccion1").style.display="block";
  }else{
    let validadorfinal = document.getElementById("validador");
    validadorfinal.innerHTML = validator.isValid(tarjeta.value);
    
    if (validadorfinal.innerHTML = true){
      let ocultarnumeros = document.getElementById ("maskify");
      ocultarnumeros.innerHTML = validator.maskify (tarjeta.value);
      document.getElementById("seccion2").style.display="block";
    } else{
    
      document.getElementById("seccion3").style.display="block";
    }

  }
  
});

let botonmenu = document.getElementById ("menuprincipal");
botonmenu.addEventListener("click", ()=> {
  document.getElementById("seccion2").style.display="none";
  document.getElementById("seccion4").style.display="block";
 
  
 });

botonregresar.addEventListener("click",()=>{
  document.getElementById("seccion1").style.display="block";
  document.getElementById("seccion3").style.display="none";


 
});

