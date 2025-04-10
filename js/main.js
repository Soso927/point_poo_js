// Vous mettrez ici le code JavaScript principal

// On sélectionne le bouton dans le document HTML
const bouton = document.querySelector('button');

// On sélectionne l'élément où le résultat sera affiché (par ID)
const resultat = document.querySelector('#point_state');

// Affichage de l'élément dans la console pour vérification
console.log(resultat);

// Ajout d'un événement sur le bouton : quand on clique, on exécute la fonction
bouton.addEventListener('click', () => {
    // On récupère la valeur entrée dans le champ d’input avec l’ID x
    const x = document.querySelector('#x').value;

    // On récupère la valeur entrée dans le champ d’input avec l’ID y
    const y = document.querySelector('#y').value;

    // On crée une nouvelle instance de la classe Point avec les coordonnées x et y
    let point = new Point(x, y);

    // Affiche l’abscisse (x) du point dans la console
    console.log(`Le résultat de l'abscisse est ${point.x}`);

    // Affiche l’ordonnée (y) du point dans la console (attention : le texte parle encore d’abscisse par erreur)
    console.log(`le résultat de l'abscisse est ${point.y}`);

    // Affiche les coordonnées du point dans l’élément HTML ciblé
    resultat.textContent = `Point A (${point.x} ; ${point.y})`;
});

