var fond;
var help;
var restart;
var acceuil;
const aide = "images/PanalAide.png";
const debut="images/PanalRestart.png";
const index="images/PanalAcceuil.png";


function preload() {
fond = loadImage("images/Fin.png");
help=createImg(aide, 'info');
restart=createImg(debut, 'redebutJeu');
acceuil=createImg(index, 'indexJeu')
}


function setup() {
createCanvas(800, 600);
  help.position(5,0).mousePressed(info);
  restart.position(25,425).mousePressed(redebutJeu);
  acceuil.position(450,425).mousePressed(IndexJeu);
}
function draw() {
  background(0);
image(fond, 0, 0);


}

function info(){
//alert('Ça marche');
document.location.href="info.html";
}

function redebutJeu(){
//alert('Ça marche');
document.location.href="jeu.html";
}

function IndexJeu(){
//alert('Ça marche');
document.location.href="index.html";
}