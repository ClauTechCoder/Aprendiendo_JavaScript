// 1. Crea un bucle que imprima los números del 1 al 20

    for(let i =1; i < 21; i++){
        console.log(i)
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

    let res = 0
    for (let i = 1; i < 101; i ++){
        res += i
    }
    console.log(res)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
    
    for(let i = 1; i < 51; i++){
        if(i % 2 == 0){
            console.log(i)
        }else{
            continue
        }
    }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    let myArray = ["pepe", "juan", "ana", "Claudia", "maika"]
    for(let i = 0; i < myArray.length; i++){
        console.log(myArray[i])
    }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
    let myString = "cuento num vocales de un texto"
    const vocales = 'aeiouAEIOU'
    let cuenta = 0
    for(let i = 0; i < myString.length; i++){ 
        if(vocales.includes(myString[i])){
            cuenta++
        }
        
    }
    console.log(cuenta)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
    let myNumbersArray = [1,2,3,4,5,6,7]
    let mult =  1
    for (let i = 0; i < myNumbersArray.length; i ++){
        mult *= myNumbersArray[i]
    }
    console.log(mult)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

    for (let i = 0; i < 11; i++) {
        console.log(i + " * 5" + " = "+ (i*5))
    }

// 8. Usa un bucle para invertir una cadena de texto

const texto = "Hola, ¿cómo estás?";
let cadenaInvertida = '';
for (let i = texto.length - 1; i >= 0; i--) {
    
    cadenaInvertida += texto[i];
}
console.log(`La cadena invertida es: ${cadenaInvertida}`);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let resultado = 0
let numero = 10
let a = 0
let b = 1
    for (let i = 2; i < numero; i++) {
        resultado = a + b
        a = b
        b = resultado
        console.log(resultado)
    }


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let mySecondArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let myNewArray= []
for (let i = 0; i <= mySecondArray.length; i++){
    if(mySecondArray[i] >10){
        myNewArray.push(mySecondArray[i])
    }else {
        continue
    }
}
console.log(myNewArray)