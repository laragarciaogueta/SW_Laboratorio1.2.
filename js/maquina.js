
import {Jugador} from "./jugador.js" 
export class Maquina extends Jugador{
    constructor(nombre){
        const fuerza  = Math.floor(Math.random()*85) + 1
        super(nombre, fuerza, 130);
    }

}