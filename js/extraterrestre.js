export {Extraterrestre}
import { resolvePreset } from "@babel/core"
import {Jugador} from "./jugador.js" 
class Extraterrestre extends Jugador{
    constructor(miNombre){
        super(salud) = 150
        super(fuerza) = Math.floor(Math.random()*100 )+ 1
        super(this.miNombre) = "e" + this.miNombre
    }
   
    getNombre(){
        return this.miNombre.reverse();
    }
}
