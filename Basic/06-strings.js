

// Aprendo el manejo básico de las cadenas de texto, sus operaciones más comunes

let myName = "Claudia"
let greeting = "Hola, " + myName  + "!"// concatenacion de cadenas
console.log(greeting)

console.log(greeting.length) // me da la longitud de la cadena
console.log(greeting[7])//accedo al caracter de esa posicion, tbn valido charAt(7)
console.log(greeting.toUpperCase()) // de minuscula a mayuscula
console.log(greeting.toLowerCase()) // de mayuscula a mayuscula
console.log(greeting.indexOf("Claudia")) // el indice donde encuentra esa palabra -1 not found
console.log(greeting.includes("Claudia")) // cadena de texto incluye esa palabra,false es not
console.log(greeting.slice(0, 10)) //dame el texto del 0 la 10 caracter
console.log(greeting.replace("Hola", "Adios")) //busca y sustituye la palabra mencionada

//Template literals (plantillas literales), strings de varias lineas

let message =  `hola estoy aprendiendo
a codificar en JavaScript`  //cadena de texto en varias lineas con ``

console.log(message) 
console.log(`Hola, ${myName}`) //interpolacion de variables, me muestra el valor del string


