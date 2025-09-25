import {Jugador} from "./jugador.js" 

export class Humano extends Jugador{
    constructor(miNombre){
        super("h" + miNombre, 70, 150);
    }

    getNombre(){
        return h + super(this.miNombre)
    }
}

