// Vous mettrez ici le code de la classe Point

// Déclaration de la classe Point
class Point {
    // Déclaration des attributs privés x et y (grâce au #)
    #x;
    #y;
    
    // Constructeur appelé lors de l’instanciation de la classe
    constructor (abscisse, ordonnee) {
        // Initialisation de l'attribut privé #x avec la valeur passée en paramètre
        this.#x = abscisse;

        // Initialisation de l'attribut privé #y avec la valeur passée en paramètre
        this.#y = ordonnee;
    }

    // Getter pour l'attribut privé #x (abscisse)
    get x() {
        return this.#x;
    }

    // Setter pour modifier la valeur de l'attribut privé #x (abscisse)
    set x(abscisse) {
        this.#x = abscisse;
    }

    // Getter pour l'attribut privé #y (ordonnee)
    get y() {
        return this.#y;
    }

    // Setter pour modifier la valeur de l'attribut privé #y (ordonnee)
    set y(ordonnee) {
        this.#y = ordonnee;
    }
}
