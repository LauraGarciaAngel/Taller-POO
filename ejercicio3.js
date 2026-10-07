function Estudiante(nombre, nota, curso) {
    this.nombre = nombre;
    this.nota = nota;
    this.curso = curso;
    this.aprobado = this.nota >= 3.0

    this.mostrarResultado= function(){
        let mensaje;
        if (this.aprobado == true) {
            mensaje = "aprobo";
        }else{
            mensaje = "reprobo";
        };
        return `El estudiante ${this.nombre}, del curso ${this.curso}, ${mensaje}`;
    }
}

const laura = new Estudiante("laura", 2.9,"Matematicas")
const juliana = new Estudiante("juliana", 4.5,"Matematicas")
const paula = new Estudiante("paula", 5,"Matematicas")
const isabela = new Estudiante("isabela", 5,"Matematicas")

console.log(laura.mostrarResultado())
console.log(juliana.mostrarResultado())
console.log(paula.mostrarResultado())
console.log(isabela.mostrarResultado())