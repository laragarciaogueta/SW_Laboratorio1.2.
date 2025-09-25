export class Jugador{
    //constructora
    constructor(miNombre, fuerza, salud){
        this.miNombre = miNombre
        this.fuerza = fuerza
        this.salud = salud
    }
    
    //metodo getNombre()
    getNombre(){
        return this.miNombre
    }

    //método luchar(jugador)
    luchar(jugador){
        if ( Math.random()* this.fuerza > jugador.fuerza ){ jugador.salud -= this.fuerza;
        } else {
        this.salud -= jugador.fuerza;
        }
    }

}
    
