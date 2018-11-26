var fondHome;
var CroixFermer;
const croix = "images/croix2.png";

function preload() {
fondHome = loadImage("images/Jeu.png");
CroixFermer = createImg(croix, 'fermer');
}

function setup() {
createCanvas(800, 600);
  CroixFermer.position(772,4).mousePressed(fermer);
}

function draw() {
background(0);
image(fondHome, 0, 0);
}

function fermer(){
//alert('Ça marche fraté');
if(confirm('Voulez-vous réellement quitter la partie ?')){
  document.location.href="fin.html";
};

}
