const validator = {
  isValid: (creditCardNumber)=>{
    let arreglo2=Array.from(creditCardNumber)
    let invertido=arreglo2.reverse();
    const pares = [];
    const impares = [];
    const suma=[];
    let cont=0;
    let acum=0;
    let sumatotal=0;
    for(let i=0;i<invertido.length;i++){
      if(i % 2 !== 0){
        pares.push(invertido[i]*2);
      }else{
        impares.push(invertido[i]);
      }
    }
    for(let j=0;j<pares.length;j++){
      if(pares[j]>=10)  {
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
    sumatotal=(parseInt (acum+cont)) % 10;
    if (sumatotal===0){
       return true;
     }else{
      return false;
     }
  },

    maskify:(creditCardNumber)=>{
      const cardNumber=creditCardNumber.split('');
       for(let i=0; i<cardNumber.length-4; i++){
        cardNumber[i]="#";
       }
       return cardNumber.join('');
     }
};

export default validator;
