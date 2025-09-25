import {Jugador} from "./jugador.js"

export class Extraterrestre extends Jugador{
    constructor(nombre){
        const fuerza = Math.floor(Math.random() * 100) + 1; // 1-100
        super(nombre, fuerza, 150);
    }
   
    getNombre(){
        return this.nombre.split("").reverse().join("");
    }
}
