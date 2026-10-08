const prompt = require('prompt-sync')();
function Vehiculo(datos) {
    this.marca = datos.marca;
    this.color = datos.color;
    this.modelo = datos.modelo;
    this.año = datos.año;
    this.disponible = true;

    this.comprar = function () {
        let mensaje
        if (this.disponible == true) {
            this.disponible = false;

            if (this.disponible == false) {
                mensaje = `El vehiculo ya no se encuentra disponible`
            }
            return `\nCompra realizada con éxito.\nDetalles del Vehículo: Marca: ${this.marca} \nModelo: ${this.modelo} \nAño:${this.año}  \nColor: ${this.color} \nDisponibilidad: ${mensaje}\n`;
        } else {
            return `Ocurrio un error en la compra`
        }
    }
    this.manejar = function () {
        return `\nBienvenido al Drive test!\nDetalles del Vehículo: \nMarca: ${this.marca} \nModelo: ${this.modelo} \nAño:${this.año}  \nColor: ${this.color} \nEsta manejando un ${this.marca} ${this.modelo}\n`
    }
    this.mantenimiento = function () {
        return `\nBienvenido al centro de mantenimiento! Detalles del vehiculo Marca: ${this.marca} \nModelo: ${this.modelo} \nAño:${this.año}  \nColor: ${this.color} \nSu vehiculo entro al centro de mantenimiento`
    }
}

function pedirVehiculo() {
    const vehiculos = ["marca","modelo","color","año"];
    const datos = {};
    for (const vehiculo of vehiculos) {
        datos[vehiculo] = prompt(`Ingresa ${vehiculo}: `)
    }
    return new Vehiculo(datos)
};
const vehiculosRegistrados = [];
let respuesta = "s";

while (respuesta.toLowerCase() === "s") {
    const vehiculo = pedirVehiculo();
    vehiculosRegistrados.push(vehiculo);

    respuesta = prompt("¿Quieres ingresar otro vehículo? (s/n) ") || "n";
}

for (const vehiculo of vehiculosRegistrados) {
    console.log(vehiculo.comprar());
    console.log(vehiculo.manejar());
    console.log(vehiculo.mantenimiento());
}