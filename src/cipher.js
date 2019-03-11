window.cipher = {
  encode: (entrada1,offsetNumber1) => {
    let codificar = "";
    for(let i=0; i<entrada1.length; i++){ 
      let ascii1 = entrada1.charCodeAt(i);
          codificar += String.fromCharCode((ascii1-65+offsetNumber1)%26+65);
    
       }
       return codificar;
    },
  decode: (entrada2,offsetNumber2) => {
    let decodificar = "";
    for (let j=0; j<entrada2.length; j++){ 
      let ascii2 = entrada2.charCodeAt(j);
          decodificar += String.fromCharCode((ascii2-offsetNumber2+65)%26+65);
          }
        return decodificar;
  }
};
