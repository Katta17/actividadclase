//CONSOLE.LOG -> es la forma de enviar mensajes a la consola del navegador
console.log("HOLA MUNDO!");

//Conceptos basicos en JAVASCRIPT 

//1. Tipos de variables
//2. Manejo del DOM
//3. Condicionales
//4. Ciclos


//Las vaviables en JAVASCRIPT -- CONTENEDORES DE INFORMACION

// 3 tipos de variables en JS
//VAR -> YA NO SE USA

//LET-> Es una variable que puede cambiar en el tiempo
//CONST-> Una variable que no puede cambiar en el tiempo

//TIPOS DE DATOS O INFORMACION SE PUEDE ALMACENAR
// el igual (=) no es comparativo sino que sirve para asignar

//NUMERICOS:

let numero =7;
// cadena de caracteres-> texto -> string (en programacion)

// el texto siempre debe estar dentro de comillas
let texto = "hola mundo";

//Booleanos -> Dato que fuede ser o verdadero o falso

let es,Verdadero = true;
let esFAlso = false;

//Booleanos -> un dato que puede ser o verdadero o falso 
let esVerdadero = true; //true -> verdad
let esFalso = false; // false -> falso

//Arreglos -> arrays(en programación) -> me permiten almacenar varios datos al mismo tiempo en una misma variable
let arregloNombres = ["Luisa", "Emmanuel", "Paula", "Lucila"];
let arregloNumeros = [1, 3, 5, 8, 20];

//Objetos -> "Una representación de elementos de la vida real pero en nuestro código"

// -> atributos -> características de ese objeto
// -> métodos -> acciones que puede realizar el objeto -> son funciones

// (), [], {}
//[] -> corchetes -> son para declarar arreglos
//{} -> llaves -> para declarar objetos
// () -> paréntesis-> nos permiten ejecutar acciones -> invocar funciones

const celular = {
    color:"blanco",
    modelo:"Galaxy A7",
    ancho:350,
    alto:800,
    //El método -> un mensaje que me indica (representa) la acción
    enviarMensajes: function(){
        //entre estos corchetes al lado de unos paréntesis yo establezco la accion a realizar
        console.log("Mensaje enviado");
    },
    //El método -> las aciones -> directamente una operación
    sumar: function(){
        console.log(5+4);
    }
}


// EJEMPLOS DE FUNCIONES

// funciones -> acciones que ustedes pueden tener en sus sitios web

// Funciones -> pueden o no recibir datos entrada -> un procesamiento de datos y luego nos devuelve un resultado 
function buscarObjeto(){
    console.log("le muestra lo que está buscando")
}

function filtarInformacion (){
    console.log("me muestra sólo información de la depresion");
}


//En la carpeta scripts van TODOS los archivos de JS PERO destinados a darle dinamismo al sitio web NO SE RELACIONAN CON LA FUNCIONALIDAD DEL SITIO A NIVEL DEL BACKED

//NODE JS -> Utilizamos para poder implementar js en nustro backend -> Operaciones lógicas nos permiten el FUNCIONAMIENTO de nuestro sitio web
