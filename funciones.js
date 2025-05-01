"use strict"

// Función clásica
function mostrarProducto() {
    console.log("Bienvenidos al Echo Dot (5.ª generación)");
    console.log("Explorando funcionalidades con Alexa y diseño mejorado");
}

mostrarProducto();
mostrarProducto();

// Función declarada y expresada
function descripcionProducto() {
    console.log("Yo soy el Echo Dot, un dispositivo inteligente con Alexa");
}
descripcionProducto();

const detalleProducto = function() {
    console.log("Yo soy una descripción expresada: diseño compacto, mejor sonido y adaptador de 15 W incluido");
}
detalleProducto();

// Funciones anónimas y autoejecutadas
console.log(function(){
    return "Validación de compatibilidad con dispositivos inteligentes para Echo Dot";
}());

(function(){
    console.log("Validando configuración inicial del Echo Dot con Alexa");
})();

// Argumentos y parámetros
function hello(nameOne, nameTwo) {
    return "Bienvenido al Echo Dot, " + nameOne + " y " + nameTwo;
}

console.log(hello('Alexa', 'Echo Dot'));

// Parámetros por default
function hello(nameOne, nameTwo="Echo Dot 5ª Generación") {
    return "Bienvenido al " + nameOne + " y " + nameTwo;
}

console.log(hello('Amazon'));

// Parámetros rest
const precioFinalItems = function(a, b, ...args) {
    let suma = 0;
    let total = suma + a + b;
    if (args.length > 0) args.forEach(e => total += e);
    return total;
}

console.log(precioFinalItems(60, 100, 30, 40, 50));

// Retorno de una función
function hello() {
    return "Hola, bienvenido al Echo Dot 5ª Generación";
}
console.log(hello());

// Función flecha
function login(user, password) {
    console.log("Usuario y contraseña válidos para la configuración del Echo Dot");
}

const validarMail = (user, email) => {
    console.log("El email ha sido verificado para la cuenta de Amazon");
}

const registrarAvatar = (photo) => console.log("El avatar ha sido registrado para la configuración");

login();

validarMail();

registrarAvatar();

// Simulando un botón en la consola
let estado = false;

const buttonClick = () => {
    if (estado) return console.log("El carrito contiene Echo Dot 5ª Generación");
    return console.log("El carrito se encuentra vacío");
};

buttonClick();

// Simulando el `this` con un objeto
const persona = {
    nombre: "jhonn lugmaña",
    saludar: function () {
        setTimeout(() => {
            console.log("Hola, mi nombre es " + this.nombre + " y estoy configurando un Echo Dot.");
        }, 1000);
    },
}
persona.saludar();
