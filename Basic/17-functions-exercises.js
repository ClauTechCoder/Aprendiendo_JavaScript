// 1. Crea una función que reciba dos números y devuelva su suma

    function mySumfunction(a,b){
    return a + b;
    }
    console.log(mySumfunction(1,1))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

    myArray = [1,2,3,4,5,6,7,8]
    function bestNumber(array){
        let max = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
        return max
    }
    console.log(bestNumber(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
    myString  = "hola esto es un string"
    function countVocals(String){
        let h = 0;
        for (let j = 0; j < String.length; j++){
            if(String.charAt(j) == 'a' || String.charAt(j) == 'e' || String.charAt(j) == 'i' || String.charAt(j) == 'o' || String.charAt(j) == 'u') {
                h++;
            } else {
                continue
            }
        }
        return h
    }
    console.log(countVocals(myString))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

    let myArrayString = ["hola", "soy", "un","array"]
    function upperArray(arrayStrings){
        let myOtherArray = new Array();
        for (let j = 0; j < arrayStrings.length; j++){
            myOtherArray[j] = arrayStrings[j].toUpperCase()
        } 
        return myOtherArray
    }
    console.log(upperArray(myArrayString))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

    function myRealNumber(a){
        if((a < 1)){
            return false
        }
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                return false; 
            }
        }
        return true
    }
    console.log(myRealNumber(4))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
    let myArrayString2 = ["hola", "soy", "otro","array"]
    function myCommonArray(a1,a2){
        let myNewArray = new Array()
        for( let i = 0; i < a1.length; i++){
            for( let j = 0; j <a2.length; j++){
                if(a1[i]==a2[j]){
                    myNewArray.push(a1[i])
                }
            }
        }
        return myNewArray
    }
    console.log(myCommonArray(myArrayString2,myArrayString))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

    let myArrayNumbers = [1,2,3,4,5,6,7,8,9,10]
    function sumArray(array){
            let myNumber = 0
            for(let o = 0; o < array.length; o++){
                myNumber += array[o] 
            }
            return myNumber
    }
    console.log(sumArray(myArrayNumbers))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

    function sqrtNumbers(array){
        let mysqrtArray = new Array()
        for(let i = 0; i < array.length; i++){
            mysqrtArray.push(array[i] ** 2)
        }
        return mysqrtArray
    }
    console.log(sqrtNumbers(myArrayNumbers))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

    let myCorrectString = "hola esto es una prueba de inversion"
    function reverseString(String){
        let wordsArray = String.split(' ');
        let reversedArray = wordsArray.reverse();
        let myReverseString = reversedArray.join(' ');
        return myReverseString;
    }
    console.log(reverseString(myCorrectString))


// 10. Crea una función que calcule el factorial de un número dado

    function myOwnFactorial(factorial) {
    let resultado = 1;
    for (let i = 1; i <= factorial; i++) {
        resultado *= i;
    }
    return resultado;
    }
    console.log(myOwnFactorial(5))
