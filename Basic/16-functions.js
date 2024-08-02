// Aprender uso básico de las funciones, aunque ya he usado hasta ahora sin "darme" cuenta.

function myFunction() { //asi se declara sin prametros
    console.log("Mi primera funcion")
}

myFunction() //llamada a funcion

function myParamFunction(name, alias) { 
//esta es una funcion con parametros, en este caso paso dos String
    console.log("Hola " + name + " o mejor dicho " + alias)
}

myParamFunction("Claudia","clacla") 

// FUNCIONES ANONIMAS, no tienen nombre pero se tienen que relacionar con una constante

const myFunc = function(name){
    console.log("Hola " + name)
}

myFunc("Claudia") // funciona igual que las que tienen nombre 

// FUNCIONES FLECHA, donde (parametro) => {acciones}

const myFunc2 = (name) => {
    console.log("Hola " + name)
}
const myFunc3 = (name) => console.log("Hola " + name) //si hay 1 linea

myFunc2("Claudia")
myFunc3("Claudia")

// CON PARAMETROS, ya un poco mas "complejo"

function sum(a, b){
    console.log(a + b)
}
sum(3,15)

function defaultSum(a = 0 , b = 0){ 
    // le doy valor por defecto si no se lo pasan
    console.log(a + b)
}
defaultSum(3,15)
defaultSum(3) // falta uno y no da error
defaultSum() //faltan ambos y no da error

//FUNCIONES CON RETORNO, las acciones en ellas me devuelve su resultado

function mult(a,b){
    return a * b
}
console.log(mult(5,10)) //imprimo el resultado que retorna la funcion

//FUNCIONES ANIDADAS

function external() {
    console.log("funcion externa")
    function internal() { // si no la invoco dentro de mi funcion externa no hace nada
        console.log("funcion interna")
    }
    internal() // llamada a funcion, ya funciona
}

external() //con la externa puedo con la interna da error, nolo existe dentro de external

// FUNCIONES DE ORDEN SUPERIOR, su argumento/parametro es otra funcion

function superiorFunc(func){

}
superiorFunc(sum(3,10)) // me da el valor de la suma sin problema

//FOREACH, funcion para bucles iterables

let myArray = [1, 2, 3, 4]
let mySet = new Set("Claudia", "Robles", "claclarobles", 24, true)
let myMap = new Map([
    ["name", "Claudia"],
    ["alias", "clacla"],
    ["age", 29]
]) 

myArray.forEach(function(value){ //capacidad de iterar sobre un array
    console.log(value)
})

mySet.forEach(function(value){ //capacidad de iterar sobre un set
    console.log(value)
})

myMap.forEach(function(value){ //capacidad de iterar sobre un map
    console.log(value)
})

