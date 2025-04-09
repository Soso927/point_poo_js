// Vous mettrez ici le code JavaScript principal
const bouton = document.querySelector('button');
const resultat = document.querySelector('#point_state');
bouton.addEventListener('click', ()=> {
const x = document.querySelector('#x').value;
const y = document.querySelector('#y').value;
// j'instancie la classe point avec le constructeur
let abscisse = new Point(x,y);
console.log(`Le résultat de l'abscisse est ${abscisse.x}`);
console.log(`le résultat de l'abscisse est ${abscisse.y}`);
// resultat.textContent = `Point A (${x} ; ${y})`;



})




// let point = new Point (15,12)
// point.x = 32;
// console.log(point);

