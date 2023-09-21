var num1 = prompt("Ingrese numero 1");
var num2 = prompt("Ingrese numero 2");
var resta = num1-num2;

if (resta >= 0){
    console.log("Mayor a cero");
    alert("Mayor a cero");
    let impar = resta % 2; // La division de resta por dos en caso par es igual a cero y si es impar es igual a uno

    if(impar == 0){
        console.log("El resultado es par");
        alert("El resultado es par");
    }else{
        console.log("El resultado es impar");
        alert("El resultado es impar");
    }

}else{
    console.log("Es menor o igual a cero");
    alert("Es menor o igual a cero");
}