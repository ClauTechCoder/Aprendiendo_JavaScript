// Aprendo el concepto del uso de los mapas. Sirve para guardar estructuras de datos
// Es una coleccion de elementos no únicos. Par de clave(k)-valor(v). Los relacionamos.

let myMap = new Map() // mapa declarado

// mapa con valores de inicio, atención a corchetes y comas ["k", "v"]
myMap = new Map([
    ["name", "Claudia"],
    ["alias", "clacla"],
    ["age", 29]
]) 
console.log(myMap)

// Métodos que puedo usar 

myMap.set("ciudad", "New Yotk") // actualizo elemento o lo agrego (k ,v)
myMap.set("name", "Pepe")

let myName = myMap.get("name") //me da el valor respecto a la clave que le hemos pasado
console.log(myName)

console.log(myMap.has("surname")) //pregunto si está esa clave
myMap.keys() // me da un listado de solo claves
myMap.values() // me da un listado de solo valores
myMap.entries() // me da un listado con claves y valores. Me retorna el par
let mapSize = myMap.size //me da el tamaño del mapa



myMap.delete("age") //alimina mendiante la k esta y su valor
myMap.clear() //elimino todo el contenido del mapa





