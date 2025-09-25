import { Jugador } from "./jugador.js";

export class Extraterrestre extends Jugador {
    constructor(nombre) {
        const fuerza = Math.floor(Math.random() * 100) + 1;
        super(nombre, fuerza, 150);
        this._nombre = nombre; // almacenamos el nombre original
    }

    get nombre() {
        return this._nombre.split("").reverse().join("");
    }
}

