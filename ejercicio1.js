//Función constructora
function Computador(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
    this.verProductos = function(){
        console.log(`Marca: ${this.marca}, Procesador: ${this.procesador}, RAM: ${this.ram} GB, Precio: $${this.precio}`);
    };

}

const lenovo = new Computador("Lenovo Gaming","AMD Ryzen 9", 32, 15000000);
const asus =  new Computador("Asus Vivobook","AMD Ryzen 7", 16, 2000000);
const hp = new Computador("HP pavilion","Intel 5", 16, 1400000);

lenovo.verProductos();
asus.verProductos();
hp.verProductos();