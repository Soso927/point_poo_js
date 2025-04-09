// Vous mettrez ici le code de la classe Point
class Point {
    #x;
    #y;
    
    constructor (abscisse,ordonnee){
        this.#x = abscisse;
        this.#y = ordonnee;
    }

    get x ()
    {
        return this.#x;
    }

    set x (abscisse)
    {
        this.#x = abscisse;
    }


    get y ()
    {
        return this.#y;
    }

    set y (ordonnee)
    {
        this.#y = ordonnee;
    }

}


