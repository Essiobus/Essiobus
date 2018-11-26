var fondHome;
var CroixFermer;
const croix = "images/croix.png";

function preload() {
fondHome = loadImage("images/trucmachin.png");
CroixFermer = createImg(croix, 'fermer');
}

function setup() {
createCanvas(800, 600);
  CroixFermer.position(0,0).mousePressed(fermer);
}

function draw() {
background(0);
image(fondHome, 0, 0);
}

function fermer(){
alert('Ça marche fraté');
document.location.href="index.html";
}
