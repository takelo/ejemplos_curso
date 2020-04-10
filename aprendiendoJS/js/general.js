/*document.getElementById('mensaje').innerHTML = "Bienvenido Juan";
console.log("funciona");*/
/*
var nombre = "Juan";
var edad = 80;
console.log(nombre);
console.log(edad);

var nombreCliente = "pepe"; //camelCase
var nombre_cliente = "pepe"; //underscore
va*/
/*
var nombre = "Juan";
var nombre = "Pedro";

let apellido = "Perez";
apellido = "Gomez";

console.log(nombre);
console.log(apellido);
document.getElementById('mensaje').innerHTML = "Bienvenido Juan";

const divMensaje = document.getElementById('mensaje');

console.log(mensaje);
*/
/*
let nombre = "Juan",
    apellido = 'Perez',
    mensaje = 'don\'t do that';

console.log(mensaje);
console.log(nombre+" "+apellido);
console.log(`${nombre} ${apellido}`);
*/
/*
let banda = "Metallica",
    cancion = "Enter Sandman";
let nombre;
nombre = banda + ": "+cancion;

//cantidad letras 
console.log(nombre.length);

//concatenar
nombre = nombre.concat(" es lo mas", " y es genial");

//mayuscula
nombre = nombre.toUpperCase();

//minuscula
nombre = nombre.toLowerCase();
console.log(nombre);

let actividad = "Estoy aprendiendo JS y me estoy divirtiendo";

//separar en un arreglo
nombre = actividad.split(" ");

console.log(nombre);

//remplazar
nombre = actividad.replace("JS", "HTML");

console.log(nombre);

let master = "Master ",
    puppet = "Of the puppets";

console.log(master.repeat(3));
console.log(puppet);
*/
/*
const numero1 = 30,
      numero2 = "20", //es un String no un numero
      numero3 = 20.20,
      numero4 = -4,
      numero5 = 20;

console.log(numero1);
console.log(numero2);

let resultado;

resultado = numero1 + numero5;
resultado = numero1 - numero5;
resultado = numero1 * numero5;
resultado = numero1 / numero5;

resultado = Math.round(2.5);
resultado = Math.floor(2.9);
resultado = Math.ceil(2.1);
resultado = Math.sqrt(25);
resultado = Math.abs(numero4);
resultado = Math.pow(8,3);
resultado = Math.min(10 , 20 , 5 , 30, 8);
resultado = Math.max(10 , 20 , 5 , 30, 8);

resultado = (20 + 30) * 2
*/
/*
let numero1 = 8,
    numero2 = "10",
    numero3 = "20.8";

console.log(numero1+Number(numero2));
console.log(numero1+parseInt(numero2));
console.log(numero1+parseFloat(numero3));

let dato = 384738743984324;

dato = String(dato);

console.log(typeof dato);
*/

//Arreglos
/*
const numeros = [10, 20, 30, 40, 50];
const meses = new Array("ene", "feb", "mar");
const arreglo = ["hola", 10, true, null];

console.log(numeros);
console.log(meses);
console.log(meses[2]);
console.log(arreglo);
console.log(arreglo.length);
console.log(Array.isArray(arreglo));

meses[3] = "Abr";
meses.push("May");
meses.unshift("Dic");
meses.pop();
meses.shift();
meses.splice(0,2);
meses.reverse();

let frutas = ["Pera", "Banana", "Durazno", "Ananana"];
frutas.sort();
console.log(frutas);
*/
/*
const persona = {
    nombre: "Juan",
    apellido: "Power",
    edad: 45,
    trabajo: true,
    musica: ["rock", "electronica", "80 hits"],
    hogar : {
        pais: "Argentina",
        cudad: "Parana"
    }
}

console.log(persona);
console.log(persona.edad);
console.log(persona.musica[1]);
console.log(persona.hogar.pais);
console.log(persona["hogar"]["pais"]);
*/
/*
const nombre = "Juan",
      trabajo = "Desarrollador";

console.log("Nombre: " + nombre + " Trabajo: " + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector("#mensaje");

let html = "<ul>"+
                "<li> Nombre: " + nombre + "</li>"+
                "<li> Trabajo: " + trabajo + "</li>"+
            "</ul>";
            
let html2 = `<ul>
            <li> Nombre:  ${nombre}  </li>
            <li> Trabajo:  ${trabajo}  </li>
        </ul>`;

contenedorApp.innerHTML=html2;

*/
/*
function holaMundo(){
    console.log("Hola mundo");
}

holaMundo();

const holaMundo2 = function(){
    console.log("Hola mundo");
}

holaMundo2();


function saludar(nombre,apellido = "No se sabe"){
    console.log("Hola "+ nombre +" "+apellido);
}

saludar("Juan","Gomez");
saludar("Valeria");
saludar("El panchi");
saludar("Max", "Power");
*/
/*
//IIFE iffy
(function(nombre){
    console.log("AQUI ESTOY APRENDIENDO "+nombre);
})("JS");
*/

/*
const musica = {
    reproducir: function(cancion){
        console.log("Reproduciendo la cancion: "+cancion);
    },
    pausar: function(){
        console.log("Pause...");
    }
}

musica.reproducir("Galvanize");
musica.pausar();


musica.borrar = function(id){
    console.log("Borrando la cancion con el id: "+id);
}
musica.borrar(8);
*/
/*
const suma = (a = 0, b = 0) =>  a + b;


const multiplicar =  a => a * 5;


let resultado = suma(2, 3);
console.log(resultado);

resultado = multiplicar(resultado);
console.log(resultado);
*/
/*
const persona ={
    nombre: "Juan"
}

class Tarea {
    constructor(nombre, urgencia){
        this.nombre = nombre;
        this.urgencia = urgencia;
    } 
}

const tarea1 = new Tarea("Aprender JS", "Urgente");
const tarea2 = new Tarea("Tirar la basura", "Urgente");
const tarea3 = new Tarea("Pasear el perro", "Media");
const tarea4 = new Tarea("Conocer suegros", "0");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);
*/
/*
const fecha = new Date();
const undia = new Date("10-10-1983");

let valor = fecha.getMonth();

console.log(valor);

*/
/*
const valor = "1000";

if(valor == 1000){
    console.log("son iguales");
} else{
    console.log("No son iguales");
}

if(valor === 1000){
    console.log("son iguales");
} else{
    console.log("No son iguales");
}

if(valor !== 1000){
    console.log("No son iguales");
} else{
    console.log("son iguales");
}
const edad = 13;

if(edad > 17){
    console.log("Mayor de edad");
} else{
    console.log("menor de edad");
}

if(edad >= 18){
    console.log("Mayor de edad");
} else{
    console.log("menor de edad");
}

if(edad > 18 && valor >500){
    console.log("se cumple");
}

if(edad > 18 || valor >500){
    console.log("se cumple");
}
*/
/*
let logueado = true;

console.log(logueado ? "Si se logueo": "No se logueo");
*/
/*
const metodoPago = "bitcoins";

switch(metodoPago){
    case "efectivo":
        console.log("Pagaste con "+metodoPago);
        break;
    case "cheque":
        console.log("Pagaste con "+metodoPago+ " verificaremos que tengas fondo");
        break;
    case "tarjeta":
        console.log("Pagaste con "+metodoPago+ " espere por favor...");
        break;
    default:
        console.log("Metodo no aceptado");
        break;
}
*/
/*
for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

const carrito = ["salchichas", "tomate", "lechuga", ];

for(let i = 0 ; i < carrito.length ; i++){
    console.log(carrito[i]);
}

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

let x = 11;
do{
    console.log(x);
    x++;
} while (x < 10)
*/

//arreglo
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];
/*
pendientes.forEach(x => {
    console.log(x);
});
*/
/*
let nuevoArreglo = pendientes.map(x => {
    return x;
});

console.log(nuevoArreglo);


//arreglo con objetos
const carrito = [
    {id:1, producto: "Libro"}, 
    {id:2, producto: "Birome"},
    {id:3, producto: "Goma"}
]

//objeto
let auto = {
    marca:"Ford",
    modelo: "78"
}
Object.values(auto).forEach(x => {
    console.log(x);
});
Object.keys(auto).forEach(x => {
    console.log(x);
});


/*
for(x of pendientes){
    console.log(x);
}
for(x of carrito){
    console.log(x.producto);
}
for(x of Object.values(auto)){
    console.log(x);
}
*/
/*
let musica = "rock";

if(musica){
    let musica = "rap";
    console.log("Dentro del if, musica: "+ musica);
}
console.log("Fuera del if, musica: "+ musica);
*/
/*
const cliente = {
    nombre: "Alejandra",
    tipo: "Premium",
    datos: {
        ubicacion:{
            ciudad: "Parana",
            pais: "Argentina"
        },
        cuenta:{
            desde: "10-12-2012",
            saldo:4000
        }
    }
}

console.log(cliente);


let {datos: {ubicacion}} = cliente ;
let {datos: {ubicacion : {ciudad}}} = cliente ;

console.log(ubicacion);
console.log(ciudad);

/*
const nombre = cliente.nombre;

console.log(nombre);
*/
/*
let {tipo} = cliente;

console.log(tipo);

let {nombre, tipo} = cliente;

console.log(nombre +" "+tipo);
*/

const banda = "Metallica",
        genero = "Heavy Metal",
        canciones = ["Master of the Puppets", "Enter the sadman", "Give me fuel"];

const metallica = {banda,genero,canciones}

console.log(metallica);