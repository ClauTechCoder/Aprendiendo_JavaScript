// 1. Imprime por consola tu nombre si una variable toma su valor

let valor = 8
    if (valor == 8){
            console.log("claudia")
    }else{
        console.log("ERROR")
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "ana"
let paswd = "pepe"
    if (user == "ana" && paswd == "pepe"){
            console.log("LOGIN")
    }else{
        console.log("ERROR")
    }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 0
    if (numero > 0){
            console.log("POSITIVO")
    }else if(numero < 0) {
        console.log("NEGATIVO")
    }else{
        console.log("CERO")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17
restantes = 18 - edad
    if (edad >= 18){
            console.log("PUEDES VOTAR NO PROBLEMA")
    }else{
        console.log("NO PUEDES VOTAR TE FALTAN " + restantes + " AÑOS")
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
 
let myAge = 17
let whoami = myAge >= 18 ? "ADULTO" : "MENOR"
console.log(whoami)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "noviembre"

switch(mes){
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("INVIERNO")
        break
    case "marzo":
    case "abril":
    case "mayo":
        console.log("PRIMAVERA")
        break
    case "junio":
    case "julio":
    case "agosto":
        console.log("VERANO")
        break
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("OTOÑO")
        break
    default:
        console.log("ERROR") 
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dias;

if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
    dias = 31;
} else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
    dias = 30;
} else if (mes === "febrero") {
    dias = 28;
} else {
    console.log("ERROR");
    dias = null;
}

if (dias !== null) {
    console.log(`El mes de ${mes} tiene ${dias} días.`);
}


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludo = "IT"

switch(saludo){
    case "ES":
        console.log("HOLA")
        break
    case "EN":
        console.log("HELLO")
        break
    case "FR":
        console.log("BONJOUR")
        break
    case "IT":
        console.log("CIAO")
        break
    case "JP":
        console.log("Konnichiwa")
        break
    default:
        console.log("ERROR") 
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6
    //UPS YA LO HICE SON SWITCH EHEHEH
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        dias = 31;
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        dias = 30;
        break;
    case "febrero":
        dias = 28;
        break;
    default:
        console.log("ERROR");
        dias = null;
}

if (dias !== null) {
    console.log(`El mes de ${mes} tiene ${dias} días.`);
}

