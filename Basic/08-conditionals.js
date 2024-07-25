// Aprendo el manejo básico de los condicionales en este lenguaje
// Grupo 1: if, else if, else. Si pasa esto haz x si no y si no...

let age = 15

if(age == 25){//entra si age cumple con esa condicion, si no se cumple pasa a la siguiente
    console.log("La edad que tienes son 25 años")
}else if(age < 18){ //Entro si cumplo esta condicion, si no me voy al else.
    console.log("Eres menor de edad")
}else{// si no coincide ninguna condicion entro aquí
    console.log("No tienes 25 años y no eres menor de edad")
}



// Grupo 2: ternario, es un if, else if en una sola linea. Misma dinámica.
// Directamente puedo asignar el valor a una variable.

const decision = age == 25 ? "La edad que tienes son 25 años" : "La edad que tienes NO son 25 años"
console.log(decision)

// Grupo 3: switch. Cuando teneos muchas condiciones para evaluar una misma variable.Legible

let day = 15
let dayName

switch(day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default: //caso por defecto
        console.log("NUMERO DE DIA INCORRECTO")
}

console.log(dayName)

