// Aprendo el concepto de estructuras de datos con esto.Almacenar varios valores en una sola variable.

let myArray = []
let myArray2 = new Array();//desaconsejado
 
myArray = [1] //le meto un valor al array
myArray2 =  new Array(1); //dará error, realmente l que haces es incializar el array con X casillas

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 =  new Array(1,2,3,4);//ahora si lo imprimira es confuso, mejor no usar.

console.log(myArray)
console.log(myArray2)

myArray = ["Claudia", "Robles", 24, true] // valido para cualquier tipo de dato como apreciamos. se pueden mezclar
myArray2 =  new Array("Claudia", "Robles", 24, true);

console.log(myArray)
console.log(myArray2)

let myArray3 = new Array(3);//tengoa rray con 3 posiciones reservadas, se redimenisiona solo si se añaden más
myArray3[0] = "claudia" //asigno en una posicion determinada un valor determinado
myArray3[1] = "Robles"
myArray3[2] = "claclarobles"

console.log(myArray3[1])

// MÉTODOS COMUNES, operaciones que puedo hacer a los arrays

let myOtherArray = []

myOtherArray.push("CLAUDIA") // añade al array, se añaden de forma creciente. El primero es pos 0
myOtherArray.push("ROBLES")
myOtherArray.push("CLACLAROBLES")
myOtherArray.push(24)

myOtherArray.pop() // elimina ultimo elemento del array y lo devuelve

myOtherArray.shift() // hace lo mismo que el pop
myOtherArray.unshift("HOLA") // agrega uno o mas elementos al principio del array

console.log(myOtherArray.length) // me da la longitud de mi array, el numero de elementos.

myOtherArray.splice(1,3) // elimina los elementos de ese intervalos que le hemos pasado
myOtherArray.splice(1,2,3) // elimino  dos elementos(desde el 1 nos cargamso dos) y añado otro (el 3)
myOtherArray.slice(0, 2) // te devuelve un intervalo del array sin tener en cuenta el ultimo indice

myOtherArray.length = 0 //es una manera muy cutre de borrar el array, mejor volver a iniciarlo myOtherArray = []
