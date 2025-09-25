// Importar clases
import {Maquina} from "./maquina.js" 
import {Humano} from "./humano.js" 
import {Extraterrestre} from "./extraterrestre.js" 

// The Fisher-Yates algorithm for shuffling an array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Inicializar un único array con 50 maquinas, 50 humanos y 50 extraterrestres
let campo = []
for(i=0; i<50; i++){
    //creamos
    let maquina = new Maquina(i);
    let extraterrestre = new Extraterrestre(i);
    let humano = new Humano(i);
    //guardamos
    campo.push(maquina);
    campo.push(extraterrestre);
    campo.push(humano);
}

// Ordenar los elementos del array al azar
shuffleArray(campo);

// Imprimir el campo
console.log(campo)
// Para ir imprimiendo los turnos
let turno =1

// Mientras quede mas de un jugador en el array pelear por parejas
while (campo.length > 1){
    console.log(`Turno: ${turno}`)
    for(let i = 0; i<campo.lenght-1; i+2){
        campo[i].luchar(campo[i+1]);

        //eliminamos los que se mueren
        if(campo[i].salud <= 0){
            campo.splice(i,1);
        }
        if(campo[i+1].salud <=0){
            campo.splice(i+1, 1);
        }
    }
    turno++
}
// Imprimir campeón. Unico elemento que queda en el array
console.log("Campeón: " + campo[0].nombre) 
