
// Usamos mucho la consola/monitor, por tanto aprendo métodos útiles sobre esto.

// CONSOLE LOG
console.log("Ver informacion por pantalla")

//CONSOLE ERROR
console.error("MOSTRAR UN MENSAJE DE ERROR POR PANTALLA")
console.error("HA OCURRIDO UN ERROR", new Error("HOLA SOY EL ERROR")) // veo que ocurre mas chulo

//CONSOLE WARN
console.warn("MOSTRAR UN MENSAJE DE ADVERTENCIA POR PANTALLA")

//CONSOLE INFO
console.info("MOSTRAR UN MENSAJE DE INFORMACION POR PANTALLA")

//CONSOLE TABLE --> mostrar estructura en formato tabla

let data = [
    ["adrian", 28],
    ["sara", 51]
] // para que s epueda ver en tabla lo defino asi con [] en ambos casos

console.table(data) // me va a dar los datos para que los ponga en formato tabla

let dataNew = [ // definido asi le he puesto nombres a la columna de la tabla a mostrar
    {name:"adrian",age: 28},
    {name:"sara",age: 51}
] 

console.table(dataNew)

//CONSOLE GROUP
console.group("User:") // pone en grupo lo que haya debajo saldra dentro de esto
console.log("nombre: Adri")
console.log("Edad: 28")
console.groupEnd() // cierro el grupo lo que va a continuacion ya no pertenece al grupos

//CONSOLE TIME --> medir el tiempo que tarde en ejecutarse un bloque de codigo
console.time("Tiempo de ejecución")
for (let i =0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución") // mismo texto para que sepa que tiene que medir

//CONSOLE ASSERT --> muestra mensaje de error si lo que evalua es falso.
let age = 17
console.assert(age >=18," DEBES SER MAYOR DE EDAD")

//CONSOLE COUNT --> cuenta cantidad de veces que se ha llamado con una etiqueta especifica
console.count("Click") 
console.count("Click")
console.count("Click") // saldra 3 porque la etiqueta aparecio 3 veces
console.countReset("Click") // resetea la cuenta

//CONSOLE TRACE --> muestra el seguimiento de la pila de ejecucion, rastrea ejecucion del codigo.

function funcA() {
    funcB()
}
function funcB() {
    console.trace("Seguimiento de la ejecucion")
}

funcA()

//CONSOLE CLEAR --> limpia la consola literlamente

console.clear() //no me saldrá nada de lo anterior
