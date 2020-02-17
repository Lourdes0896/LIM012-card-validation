const validator = {
  // ...
};


//PRUEBAS
const validator=(tarjeta)=>{
  let arreglo2=Array.from(tarjeta)
  let invertido=arreglo2.reverse();
  //console.log(invertido);
  const pares = [];
  const impares = [];
  const suma=[];
   let cont=0;
  let acum=0;
  let sumatotal=0;
  for(let i=0;i<invertido.length;i++){
    console.log(i+": "+invertido[i]);
    if(i % 2 !== 0){
      pares.push(invertido[i]*2);
    
    }else{
      impares.push(invertido[i]);
    }
    
  }

  for(let j=0;j<pares.length;j++){
    if(pares[j]>9)  {
      suma.push((pares[j]%10)+(Math.trunc(pares[j]/10)));
     }else{
      suma.push(pares[j]);
    }
  }

  for(let k=0;k<suma.length;k++){
    cont = cont+parseInt(suma[k]);
  }
  for(let l=0;l<impares.length; l++){
    acum = acum+parseInt(impares[l]);
    
  }
  sumatotal=parseInt (acum+cont);
  console.log(suma);
  console.log(impares);
  console.log(cont);
  console.log(sumatotal);
  console.log ('suma total es:' + ((cont+acum)%10));
  if (sumatotal%10===0){
    console.log('Tarjeta Valida');
    }
    else{
    console.log('tarjeta invalida');
    }
  }
validator('1234567890');



export default validator;
