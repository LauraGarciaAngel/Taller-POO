function Libro(nombre, autor, stock, prestado ){
    this.nombre = nombre;
    this.autor = autor;
    this.stock = stock;
    this.prestado = prestado
    this.prestado = false
    
    this.prestar = function(){
        if (this.prestado == false) {
            this.prestado = true;
            return `Se ha actualizado el estado del libro: "${this.nombre}"`;
        }else{
            return `El libro "${this.nombre}" no se encuentra en la biblioteca`;
        }
    }
    this.devolver = function(){
        if (this.prestado == true) {
            this.prestado = false;
            return `Gracias por devolver el libro, regrese pronto`;
        }else{
            return `error con el estado del libro`;
        }
    }
}

const elTunel = new Libro("el túnel","Ernesto Sabato", "disponible", false);

console.log(`${elTunel.prestar()} | el estado actual del libro es: ${elTunel.prestado}`)
console.log(`${elTunel.devolver()} | el estado actual del libro es: ${elTunel.prestado}`)