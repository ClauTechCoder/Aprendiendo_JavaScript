// 1. Crea una variable para cada operación aritmética

    let Suma = 2
    let Resta = 2
    let Multiplicacion = 3
    let Division = 3
    let Modulo = 4
    let Exponente = 4

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    Suma += Suma
    Resta -= Resta
    Multiplicacion *= Multiplicacion
    Division /= Division
    Modulo %= Modulo
    Exponente **= Exponente


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log( 5 > 3)
console.log( 5 < 9)
console.log( 4 == 4)
console.log( 8 === 8)
console.log(2.25 != 3.25)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log( 0.5 > 3)
console.log( 15 < 9)
console.log( 14 == 4)
console.log( 18 === 8)
console.log(3.25 != 3.25)

// 5. Utiliza el operador lógico and

console.log(18 > 12 && 25 == 25)

// 6. Utiliza el operador lógico or

console.log(18 < 12 || 25 == 25)

// 7. Combina ambos operadores lógicos
    
console.log(18 < 12 && 25 == 25 || 15 >= 3)

// 8. Añade alguna negación

console.log(!(6 ==6))

// 9. Utiliza el operador ternario

let imPretty = false

imPretty ? console.log("YOU ARE PRETTY!!!") : console.log("YOU ARE NOT PRETTY!!!")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((3 + 4) > 5 && (7 * 8 < 125))