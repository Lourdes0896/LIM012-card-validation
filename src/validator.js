const validator = {
  // ...
};

export default validator;

let numeroTarjeta='123456789';
  let arreglo='';
  let arreglo2=Array.from(numeroTarjeta);
  console.log(arreglo2);
  let invertido=arreglo2.reverse();
  console.log(invertido);
  let result=0;
  for(let i=0;i<invertido.length;i=i+2){
    //if(invertido[i]%2==0){
    let duplicado=invertido[i]*2;
    //let sumar=Array.from(duplicado);
    console.log(duplicado);
    
 }

  