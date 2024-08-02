// 1. Crea un array que almacene cinco animales

    let myAnimalArray = ["dog", "cat", "cow", "duck", "bird"]

// 2. Añade dos más. Uno al principio y otro al final

    myAnimalArray.unshift("tiger")
    myAnimalArray.push("crocodrile")
    console.log(myAnimalArray)

// 3. Elimina el que se encuentra en tercera posición

    myAnimalArray.splice(2,2)
    console.log(myAnimalArray)

// 4. Crea un set que almacene cinco libros

    let myBookSet = new Set(["book 1", "book 2", "book 3", "book 4", "book 5"])

// 5. Añade dos más. Uno de ellos repetido

    myBookSet.add("Book 6")
    myBookSet.add("Book 2")

// 6. Elimina uno concreto a tu elección

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map