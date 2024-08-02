// Aprender los bucles, para qué usarlos y tipos. Son estructuras de control mientras cierta condicion se cumpla. Re4petimos un blk de codigo.

// Bucle FOR, se ejcuta un num determinado de veces
for (let i = 0; i < 6; i++){ //variable, condicion, cambio en la variable
    console.log("Saludo del fornumero " + i)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for(let i = 0; i < numbers.length; i++){ //interaccion con array
    console.log(`Elemento del array con for: ${numbers[i]}`)
}


//Bucle WHILE, mientras que se siga cumpliendo una condicion

let i = 0
while(i < 6){
    console.log("Saludo del while numero " + i)
    i+=1
}

//Bucle DO-WHILE , es un while que entra dentro min una vez
let l = 0
do{
    console.log("Saludo del do-while numero " + l)
    l+=1
}while(l < 6)

//Bucle for of, recorro valor de algo que pueda ser iterble(estructura de datos principalmente)

let myArray = [1,2,3,4]
let mySet = new Set("Claudia", "Robles", "claclarobles", 24, true)
let myMap = new Map([
    ["name", "Claudia"],
    ["alias", "clacla"],
    ["age", 29]
]) 
let myString = "hola que tal estassss"

for(let valor of myArray){
    console.log("Del for-of valor del array " + valor)
}
for(let valor of mySet){
    console.log("Del for-of valor del set " + valor)
}
for(let valor of myMap){
    console.log("Del for-of valor del map " + valor)
}
for(let valor of myString){
    console.log("Del for-of valor del string " + valor)
}

// Usar break y continue por seguridad
for (let i = 0; i < 6; i++){ 
    if(i == 4){ //con el continue omitimos esa vuelta del bucle (la 4)
        continue
    }else if(i == 5){ // con el break salimos del bucle
        break
    }
    console.log("Saludo del for numero " + i)
}
