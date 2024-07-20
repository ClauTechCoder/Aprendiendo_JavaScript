// 1. Escribe un comentario en una línea

//HOLA ESTE ES UN COMENTARIO EN UNA LINEA

// 2. Escribe un comentario en varias líneas

/*
hola este es un comentario en varias lineas
JEJEJEJEJEJJEJEJEJ
*/ 

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let varString = "tipo string"
let varNumero = 22.33
let varBoolean = true
let varundefinedValue
let varNull = null
let varSymbol = Symbol("myvarSymbol")
let varBigInt = 65451564654644645654654646106n

// 4. Imprime por consola el valor de todas las variables

console.log(varString)
console.log(varNumero)
console.log(varBoolean)
console.log(varundefinedValue)
console.log(varNull)
console.log(varSymbol)
console.log(varBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof varString)
console.log(typeof varNumero)
console.log(typeof varBoolean)
console.log(typeof varundefinedValue)
console.log(typeof varNull)
console.log(typeof varSymbol)
console.log(typeof varBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

varString = "tipo otro string ejejej"
varNumero = 2.18
varBoolean = false
varundefinedValue
varNull = null
varSymbol = Symbol("myohtervarSymbol")
varBigInt = 66666666666666666666666666666666666666666666666666666666n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

varString = 4
varNumero = "esto es 2.18"
varBoolean = null
varundefinedValue = false
varNull
varSymbol = 66666666666666666666666666666666666666666666666666666666n
varBigInt = Symbol("thisismysymbol")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const constString = "tipo string"
const constNumero = 22.33
const constBoolean = true
const constUndefinedValue
const constNull = null
const constSymbol = Symbol("myconstSymbol")
const constBigInt = 65451564654644645654654646106n

// 9. A continuación, modifica los valores de las constantes

constString = "otro string"
constNumero = 455465.22235
constBoolean = false
constUndefinedValue
constNull = null
constSymbol = Symbol("myconstOtherSymbol")
constBigInt = 77777777777777777777777777777777777777777n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser

//1- ERROR --> una variable indefinida no puede tener valor coonstante
//2- ERROR --> las variables constantes no pueden cambiar su valor (ejercicio 9 entero)