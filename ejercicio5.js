const prompt = require('prompt-sync')();
function Vehiculo(marca,color,modelo,año,disponible) {
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.año = año;
    this.disponible = true;

    this.comprar = function () {
        let mensaje
        if (this.disponible == true) {
            this.disponible = false;

            if (this.disponible == false) {
                mensaje = `El vehiculo ya no se encuentra disponible`
            }
            return `Compra realizada con éxito.\nDetalles del Vehículo: Marca: ${this.marca} \nModelo: ${this.modelo} \nAño:${this.año}  \nColor: ${this.color} \nDisponibilidad: ${mensaje}\n`;
        } else {
            return `Ocurrio un error en la compra`
        }
    }
    this.manejar = function () {
        return `Bienvenido al Drive test!\nDetalles del Vehículo: \nMarca: ${this.marca} \nModelo: ${this.modelo} \nAño:${this.año}  \nColor: ${this.color} \nEsta manejando un ${this.marca} ${this.modelo}\n`
    }
    this.mantenimiento = function () {
        return `Bienvenido al centro de mantenimiento! Detalles del vehiculo Marca: ${this.marca} \nModelo: ${this.modelo} \nAño:${this.año}  \nColor: ${this.color} \nSu vehiculo entro al centro de mantenimiento`
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
const vehiculo = pedirVehiculo()

console.log(vehiculo.comprar());
/* console.log(vehiculo1.manejar());
console.log(vehiculo1.mantenimiento());
console.log(vehiculo2.comprar());
console.log(vehiculo2.manejar());
console.log(vehiculo2.mantenimiento());
console.log(vehiculo3.comprar());
console.log(vehiculo3.manejar());
console.log(vehiculo3.mantenimiento()); */