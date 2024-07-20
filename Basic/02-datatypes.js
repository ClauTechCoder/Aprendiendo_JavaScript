
//Aprendo los tipos de datos, para quñe sirven, qué hacer con ellos...

//String: cadena de texto, Primitivo
let name = "Claudia"
let alias = "clacla"
let email = "email@gmail.com"

//Numeros: operamos con ellos, válidos todos(enteros,decimales,negativos...). Primitivo

let age = 37
let height = 1.60

//Booleanos: true o false. Muy usado en condiciones. Todo tipo de lógica booleana. Primitivo
let isStudent = true
let isTeacher = false

//Undefined: la variable esta declarada pero sin valor asignado aún. No inicializada. Primitivo

let undefinedValue

//Null: tiene valor nulo,bn se usa mucho en condiciones o como medida de protección. Primitivo

let nullValue = null

//Symbol: Se instacnia un obj Symbol al que le pasamos la clave del simbolo . Primitivo

let mySymbol = Symbol("mysymbol") //es unico

//BigInt: muy parecido en creacion al simbolo. Numeros extremadamente grandes. Primitivo

let myBigInt = BigInt(864535649468646535465695626562645)
let myBigInt2 = 864535649468646535465695626562645n //es otra manera de representarlo

//Mecanismo para saber con qué tipo de datos estoy trabajando --> typeof nombre_variable

console.log(typeof name) 
console.log(typeof age) 
console.log(typeof height) 
console.log(typeof isStudent)
console.log(typeof undefinedValue) 
console.log(typeof nullValue) //es tipo de dato object, no es tipo null.
console.log(typeof myBigInt) 
console.log(typeof myBigInt2) 
