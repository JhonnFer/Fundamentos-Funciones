'use strict';
// Ejemplo con var
var nombreProducto = "Enchufe Inteligente";
var compatibilidad;
// reasignar el valor a una variable declarada

nombreProducto = "Amazon Smart Plug";
compatibilidad = "Alexa";

console.log(nombreProducto + " compatible con " + compatibilidad);
console.log(precio);
// También puede usarse antes de la declaración

var precio;
if (true) {
    var precio = 24.99;
}
console.log(precio);
// Ejemplo con let
// ----------------------
// Recomendado para valores que pueden cambiar.
// IMPORTANTE  No permite redeclarar la misma variable en el mismo ámbito.
let tipoConexion = "Wi-Fi";
let region;

tipoConexion = "2.4GHz";//  reasignar sí se puede
region = "Internacional";

console.log(tipoConexion + " - " + region);
// Ejemplo con const

// "Importante"  No se puede reasignar ni redeclarar. Ideal para valores fijos.

const color = "Blanco";
let consumo = "Bajo";

console.log(color + " - " + consumo);

// String 

`use strict`

let nombreMarca = "Alexa-amazon"
let precio2 = 50

console.log("Marca: "+nombreMarca+" | precio:"+precio2)

//metodos 
'use strict';

let descripcion = "Amazon Smart Plug, funciona con Alexa, sin necesidad de concentrador";
// Mostrar  número total de caracteres

console.log("Número de letras:", descripcion.length);
// Verificar si incluye ciertas palabras clave

console.log("¿Incluye 'Alexa'?", descripcion.includes("Alexa"));
// Convertir todo a mayúsculas

console.log("Mayúsculas:", descripcion.toUpperCase());
// Convertir todo a minúsculas

console.log("Minúsculas:", descripcion.toLowerCase());
// Eliminar espacios al principio y final (Si los hubiese caso no hay)

console.log("Sin espacios adelante/atrás:", descripcion.trim());
// Reemplazar una parte del texto

console.log("Reemplazar 'concentrador':", descripcion.replace("concentrador", "hub central"));
// Cortar una parte del "texto"
console.log("Cortar texto (slice):", descripcion.slice(0, 40));
console.log("Cortar texto (substring):", descripcion.substring(0, 40));
console.log("Caracter específico:", descripcion.charAt(5));
// Repetir la descripción 2 veces
console.log("Repetir descripción:", descripcion.repeat(2));
// Dividir la descripción en palabras
console.log("Dividir en palabras:", descripcion.split(" "));

//----------
// usando "Template Literals"
'use strict';

const producto = "Amazon Smart Plug";
const marca = "Amazon";
const origen = "EE.UU.";
const enStock = false;
const Precio = 24.99;
// Concatenación tradicional
console.log(producto + " - " + marca + " - " + origen);
// Template string con operador ternario
console.log(`${producto} - ${marca} - ${origen} - ${enStock ? `$${Precio}` : 'Producto no disponible'}`);
//${enStock ? `$${Precio}` : 'Producto no disponible'}
//Es un atajo para escribir un if-else, pero todo en una línea.

// numeros
//- Existen un [`método`]
//- Existe un tema importante para trabajar con números y es el [`orden de las operaciones.`]
// - Es importante saber el uso de operadores de [`incremento`]
'use strict';

// Es importante reconocer el tipo de valor asignado
const precioStr = "24.99";
const precioNum = 24.99;

console.log(precioNum, precioStr);
console.log(typeof(precioNum), typeof(precioStr));

console.log("Suma:", precioNum + 5);
console.log("Resta:", precioNum - 5);
console.log("Multiplicación:", precioNum * 3);
console.log("División:", precioNum / 2);
console.log("Módulo:", precioNum % 10);
// Importante el manejo de operadores de incremento y decremento
let unidades = 10;

console.log(++unidades);
console.log(unidades++);

let devoluciones = 2;

console.log(--devoluciones);
console.log(devoluciones--);
//Método Math
'use strict';

const precioUnico = 24.99;

console.log("El método Math es un:", Math);
console.log("Constante PI:", Math.PI);
console.log("Precio redondeado:", Math.round(precioUnico));
console.log("Raíz cuadrada del consumo en watts (supuesto):", Math.sqrt(16));
console.log("Valor absoluto de un descuento negativo:", Math.abs(-10));
console.log("Precio al cuadrado (ejemplo):", Math.pow(precioUnico, 2));
console.log("Mínimo entre dos precios:", Math.min(19.99, precioUnico));
console.log("Máximo entre dos precios:", Math.max(29.99, precioUnico));
console.log("Número de serie aleatorio:", Math.round(Math.random() * 1000));

//orden de precedencia
'use strict';

console.log(3 + 4 * 5); // Resultado: 23
console.log(4 * 3 ** 2); // Resultado: 36
console.log(49.99 * 0.2); // Calcula el 20% de descuento
console.log(49.99 * 1.12); // Precio con 12% de impuestos

//conversiones
'use strict';

let precioIva= "49.99";
let descuento = "10";

console.log(Number.parseFloat(precioIva)); // Convierte a número decimal
console.log(Number.parseInt(descuento)); // Convierte a número entero

console.log(Number.isInteger(precioIva)); // Verifica si es entero

console.log(`${+precioIva - +descuento}`); // Resultado: 39.99

//booleanos y operradores

'use strict';

let precioProducto = 49.99;
let presupuestoUsuario = 60;

const puedeComprar = precioProducto <= presupuestoUsuario ? "Puede comprar" : "No puede comprar";
console.log(puedeComprar);

let estadoCuenta;
let emailConfirmado = null;

precioProducto += 5; // Aumenta el precio en 5
console.log(precioProducto);

console.log(precioProducto == presupuestoUsuario); // Comparación de valor
console.log(precioProducto === presupuestoUsuario); // Comparación estricta
console.log(estadoCuenta === emailConfirmado); // Comparación de variables no definidas

console.log(precioProducto + parseInt(presupuestoUsuario)); // Suma de valores

console.log(precioProducto != presupuestoUsuario); // Verifica desigualdad
console.log(precioProducto !== parseInt(presupuestoUsuario)); // Verifica desigualdad estricta


//operador ternario

'use strict';

let precioProducto1 = 49.99;
let presupuestoUsuario1 = 60;

const mensajeCompra = precioProducto1 <= presupuestoUsuario1 ? "Puede comprar" : "No puede comprar";
console.log(mensajeCompra);

//condicional
'use strict';

// Condicional simple
const carritoCompras = [];

if (carritoCompras.length === 0) {
    console.log("Agregar productos");
}

// Condicional doble
const carritoConProductos = ['Echo Dot', 'Adaptador de corriente'];

if (carritoConProductos.length !== 0) {
    console.log("Proceder al pago de los productos");
} else {
    console.log("Agregar productos");
}

// Condicional múltiple
const accionUsuario = 2;

switch (accionUsuario) {
    case 1:
        console.log("Agregar al carrito");
        break;
    case 2:
        console.log("Proceder al pago");
        break;
    case 3:
        console.log("Cancelar compra");
        break;
    default:
        console.log(`Acción no reconocida: ${accionUsuario}`);
        break;
}

//bucles for-do-while-while
'use strict';

// Bucle for
for (let i = 5; i >= 0; i--) {
    i === 0 ? console.log("Proceso completo") : console.log(i);
}

// Bucle while
let contador = 5;
while (contador >= 0) {
    contador === 0 ? console.log("Proceso completo") : console.log(contador);
    contador--;
}

// Bucle do-while
let contadorDo = 5;
do {
    contadorDo === 0 ? console.log("Proceso completo") : console.log(contadorDo);
    contadorDo--;
} while (contadorDo >= 0);

// forEach
const productos = ['Echo Dot', 'Adaptador de corriente', 'Cable USB'];
productos.forEach((producto, index) => console.log(`${index} - ${producto}`));

// for...of
for (const producto of productos) {
    console.log(producto);
}

// for...in
const detallesProducto = {
    nombre: "Echo Dot",
    precio: 49.99,
    color: "Carbón"
};

for (const clave in detallesProducto) {
    console.log(`${clave}: ${detallesProducto[clave]}`);
}

// map
const productosConDescuento = productos.map(producto => `${producto} - 10% de descuento`);
console.log(productosConDescuento);
