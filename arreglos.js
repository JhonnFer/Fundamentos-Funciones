// arrays - arreglos
const productos = ["Fotografía de Producto", "Retrato Cinematográfico", "Fotografía Editorial de Producto"];
const precios = [150, 120, 100];
productos.forEach((producto, índice) => {
    console.log(índice, producto);
});

// .map() (VOID = DE CUALQUIER TIPO)
const nuevosproductos = productos.map((producto) => {
    return producto.toUpperCase();
});
console.log(nuevosproductos);

// Segunda forma
const nuevosproductosdos = productos.map((producto) => (
    producto.toUpperCase()
));

// Forma tres
const newproductsThree = productos.map((p) => p.toUpperCase());


// .filter se usa cuando usamos un delete
const items = productos.filter(p => p !== "Fotografía de Producto");
console.log(items);

// .concat
const newItems = [...productos, ...precios];

// .find()
const findItems = productos.find((p) => (p === "Retrato Cinematográfico"));

findItems ? console.log(findItems) : console.log("Sin resultados");

console.log(findItems);

// .push
productos.push("Nuevo servicio");
productos.unshift("Servicio destacado"); // Eliminar unshift

// .pop
productos.pop();
productos.shift(); // Eliminar

// includes()
productos.includes("Fotografía Editorial de Producto") ? console.log("Existe") : console.log("No existe");

// Longitud
productos.length === 3 ? console.log("% 50 por ciento") : console.log("Sin descuento");

// .slice
const newItemsSlice = productos.slice(0, 2);
console.log(newItemsSlice);

////////////////////////////////////////////

// const precios = [1000, 1500, 2000, 500]
const subTotal = precios.reduce((ac, precio) => ac + precio, 0);
console.log(subTotal);

console.log("Chifles");

console.log("Vaso de limonada");

setTimeout(function timeout() {
    console.log("Ceviche");
}, 5000);

console.log("Cerveza");
