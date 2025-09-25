export class Jugador{
    //constructora
    constructor(nombre, fuerza, salud){
        this.nombre = nombre
        this.fuerza = fuerza
        this.salud = salud
    }
    
    //metodo getNombre()
    getNombre(){
        return this.nombre
    }

    //método luchar(jugador)
    luchar(jugador){
        if ( Math.random()* this.fuerza > jugador.fuerza ){ jugador.salud -= this.fuerza;
        } else {
        this.salud -= jugador.fuerza;
        }
    }

}
    
