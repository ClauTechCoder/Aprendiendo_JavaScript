
//Aprendo los basicos y los diferentes tipos de operadores

//Operadores Aritméticos

let a = 5
let b = 10
console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division
console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ //incremento, si lo hago a la vez que imprimo no aumenta me sigue dando 5
b-- //decremento, si lo hago a la vez que imprimo no disminuye me sigue dando 10
console.log(a)
console.log(b)


//Operadores de asignación

let myVariable = 2 
myVariable += 2 //es hacer realmente myVariable = myVariable + 2 --> myVariable = 2 + 2
console.log(myVariable)

myVariable -= 1 ////es hacer realmente myVariable = myVariable -1 --> myVariable = 4 - 1
console.log(myVariable)

//Podemos hacerlo asi con el resto de operadores aritméticos

//Operadores de comparación (>,>=,<,<=...)

console.log(a > b) //6 > 10? --> no, me va a dar falso!!!
console.log(a < b) //6 < 10? --> si, me va a dar true!!!
console.log(a == b) //6 = 10? --> no, me va a dar true!!!
console.log(a == 6) // por que? si son iguales... -->no estamos comparando el valor realmente
console.log(a == "6") //estamos comparando tipos diferentes pero da igual el resultado jeje
console.log(a === 6) //asi se soluciona la comparacion anterior, comparamos bien los valores
console.log(a === a) //es lo mismo, da true
console.log(a === "6") //uno es un numero y otro un string dara false
//doble igual --> compruebo igualdad por valor
//triple igual --> comrpuebo igualdad por identidad (por tipo y valor)

console.log(a != 6) // comparador de desigualdad, son iguales dara false
console.log(a !== "6") // comparador de desigualdad, son diferenres dara true

/* Valores verdaderos (porque si naturalmente)
    - numeros positivos y negativos menos el cero
    - cadenas de texto excepto vacias
    - boolean true
*/

/* Valores falsos (porque si naturalmente)
    - 0, 0n
    - null, undefined
    - NaN , boolean false
    - cadenas de texto vacías
*/

//Operadores lógicos- uso de la logica booleana (and,or,not...), muchas anidaciones posibles

console.log( 5 > 10 && 15 > 20) //AND--> 1 si ambas son verdaderas
console.log( 5 > 10 || 15 < 20) //OR--> 1 si alguna es verdaderas
console.log( 5 > 10 && 15 > 20 || 30 < 40) //aqui and no se cumple pero or si entonces --> 1
console.log(!(5 > 10 && 15 > 20)) //el not es invertir el valor  0 -> 1 y de 1 -> 0

//Operadores ternarios variable ? condicion1 :condicion2 , true -> condicion1, si no condicion2

const isRaining = true

isRaining ? console.log("LLUEVE") : console.log("NO LLUEVE")


