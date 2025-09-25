import {Jugador} from "./jugador.js" 
export class Extraterrestre extends Jugador{
    constructor(miNombre){
        const fuerza = Math.floor(Math.random() * 100) + 1; // 1-100
        super("e" + miNombre, fuerza, 150);
    }
   
    getNombre(){
        return this.miNombre.reverse();
    }
}
