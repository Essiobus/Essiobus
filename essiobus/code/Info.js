var fond;
var CroixFermer;
const croix = "images/croix2.png";

function preload() {
fond = loadImage("images/Informations.png");
CroixFermer = createImg(croix, 'fermer');
}
function setup() {
createCanvas(800, 600);
  CroixFermer.position(772,4).mousePressed(fermer);
}
function draw() {
  background(0)
image(fond, 0, 0);


}

function fermer(){
//alert('Ça marche fraté');
window.close();
}