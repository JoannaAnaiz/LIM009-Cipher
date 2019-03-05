let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
/*let desplazamiento = document.getElementById("desplazamiento").value;
let entrada1 = document.getElementById("entrada1").value;
let entrada2 = document.getElementById("entrada2").value;*/
//let resultado = document.getElementById("resultado");


encriptar.addEventListener('click', () =>{
    let desplazamiento= document.getElementById("desplazamiento").value;
    let offsetNumber1= parseInt(desplazamiento,10);
    let entrada1=document.getElementById("entrada1").value;
    document.getElementById("resultado").value=cipher.encode(entrada1,offsetNumber1);
})

desencriptar.addEventListener('click', () =>{
    let desplazamiento= document.getElementById("desplazamiento").value;
    let offsetNumber2= parseInt(desplazamiento,10);
    let entrada2=document.getElementById("entrada2").value;
    document.getElementById("resultado").value=cipher.decode(entrada2,offsetNumber2);
})