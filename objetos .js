// 01/05/2025
//objects

let user = {
    name: "Jloyaga",
    lastName: "Studio",
    address: {
        city: "Quito"
    },
    friends: ["cliente1", "cliente2", "cliente3"],
    age: 5, // Si consideramos que el estudio tiene 5 años de existencia
    isActive: true,
    password: "1234"
}

// Si agrego un avatar y valor
user.avatar = "https://www.instagram.com/jloyaga_studio/avatar.png"; // Este es solo un ejemplo

console.log(user.address);
console.log(user.name);
console.log(user.lastName);

// Eliminar usuario.password
delete user.password;

// es6 unstructure
const { name, lastName, address, age, avatar } = user;

console.log(name);
console.log(lastName);
console.log(address);

// Agregar otra información
const otherInformation = {
    estado: "activo",
    teléfono: "098956563", // teléfono ficticio
    amigos: ["cliente1", "cliente2", "cliente3"],
    sendMail() {
        console.log(`Enviando correo a ${otherInformation.amigos[0]}`);
    }
}

// Operador de propagación ES6 - operador de propagación(...)
const allInformation = {
    ...user,
    ...otherInformation
};

console.log(allInformation);

// Método 1 o formulario
console.log(Object.keys(user).includes("name"));

// Método 2 o formulario
console.log(Object.values(user).includes("Jloyaga"));

// Funciones - devoluciones de llamadas
function ShowWelcome(name) {
    console.log(`Bienvenido ${name}`);
}

function RegisterUser(callback) {
    const usuario = "Jloyaga Studio";
    callback(usuario);
}

ShowWelcome("Jloyaga Studio");
// Uso de la llamada de retorno
RegisterUser(ShowWelcome);

