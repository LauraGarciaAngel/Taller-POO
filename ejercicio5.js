const prompt = require('prompt-sync')();
function Vehiculo() {
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.año = año;
    this.disponible = disponible;
    this.disponible = true;

    this.comprar = function () {
        let mensaje
        if (disponible == true) {
            disponible = false;

            if (disponible == false) {
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
    let marca = prompt(`Ingrese la marca: `);
    let modelo = prompt(`Ingrese el modelo: `);
    let color = prompt(`Ingrese el color: `)
    let año = prompt(`Ingrese el año: `);
    return marca, modelo, color, año
};

let activo = true;

const vehiculo1 = new Vehiculo(marca, modelo, color, año, true);
const vehiculo2 = new Vehiculo(marca, modelo, color, año, true);
const vehiculo3 = new Vehiculo(marca, modelo, color, año, true);

while (activo){
    pedirVehiculo()
    let respuesta = prompt("Desea agregar otro vehiculo (S/N)");
    if (respuesta === "N") {
        activo = false
    }
}

console.log(vehiculo1.comprar());
console.log(vehiculo1.manejar());
console.log(vehiculo1.mantenimiento());
console.log(vehiculo2.comprar());
console.log(vehiculo2.manejar());
console.log(vehiculo2.mantenimiento());
console.log(vehiculo3.comprar());
console.log(vehiculo3.manejar());
console.log(vehiculo3.mantenimiento());