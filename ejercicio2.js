function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function() {
        return `Este es ${this.nombre} un ${this.especie} y tiene ${this.edad} años y pesa ${this.peso}KG`
    }

}

const gato = new Mascota("Maki", "Gato", 3, 5)
const perro = new Mascota("Maki", "perro", 5, 12)
const hamster = new Mascota("Maki", "hamster", 1, 0.1)

console.log(gato.presentarse())
console.log(perro.presentarse())
console.log(hamster.presentarse())