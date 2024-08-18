// 1. Crea una clase que reciba dos propiedades

    class Person {

        constructor(name,sex){
            this.name = name;
            this.sex = sex;
        }
        
        personalGreeting(){
            if (this.sex == 'MALE' || this.sex == 'male' || this.sex == 'M' || this.sex == 'm'){
                console.log("HOLA " + this.name + " BIENVENIDO!!");
            }else if(this.sex == 'FEMALE' || this.sex == 'female' || this.sex == 'F' || this.sex == 'f'){
                console.log("HOLA " + this.name + " BIENVENIDA!!");
            }else{
                console.log("HOLA " + this.name + " BIENVENIDE!!");
            }
            
        }

        static staticInfo(){
            console.log("NOMBRE: " + this.name + " SEXO: " + this.sex);
        }
        basicInfo(){
            console.log("NOMBRE: " + this.name + " SEXO: " + this.sex);
        }

    }

// 2. Añade un método a la clase que utilice las propiedades

    // EL METODO AÑADIDO SE LLAMA STATICINFO

// 3. Muestra los valores de las propiedades e invoca a la función

    let myPerson = new Person("Mathew", "M")
    myPerson.personalGreeting();


// 4. Añade un método estático a la primera clase

    // EL METODO AÑADIDO SE LLAMA BASICINFO

// 5. Haz uso del método estático

    Person.staticInfo();

// 6. Crea una clase que haga uso de herencia

    class Worker extends Person {

        constructor(name,sex,job){
            super(name,sex)
            this.job = job
        }

        workingNow(){
            console.log ("Actualmente me encuentro trabajando")
        }
        basicInfo(){
            console.log("NOMBRE: " + this.name + " SEXO: " + this.sex + " TRABAJO: " + this.job);
        }

    }

    let myWorker = new Worker("Ana","female","Mecanica")
    myWorker.basicInfo()

// 7. Crea una clase que haga uso de getters y setters

class House {

    #color
    #city
    #type

    constructor (color,city,type){
        this.#color = color
        this.#city = city
        this.#type = type
    }

    get color(){
        return this.#color
    }

    get city(){
        return this.#city
    }

    get type(){
        return this.#type
    }

    set color(newcolor){
        this.#color = newcolor
    }
    set city(newcity){
        this.#city = newcity
    }
    set type(newtype){
        this.#type = newtype
    }

}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
    // YA ESTA HECHO ARRIBA DIRECTAMENTE

// 9. Utiliza los get y set y muestra sus valores

let myHouse = new House("black", "Madrid", "chalet") // uy me mude lo modifico xd
myHouse.color = "white"
myHouse.city = "Mallorca"
myHouse.type = "Piso"
console.log("CIUDAD: " + myHouse.city + " TIPO: "+ myHouse.type + " COLOR: " + myHouse.color)

// 10. Sobrescribe un método de una clase que utilice herencia 
    //HECHO EN LA CLASE WORKER SOBREESCRIBO EL METODO BASICINFO