var fond;
var help;
var start;
const aide = "images/PanalAide.png";
const debut="images/PanalStart.png";


function preload() {
fond = loadImage("images/background.png");
help=createImg(aide, 'info');
start=createImg(debut, 'debutJeu');
}



function setup() {
createCanvas(800, 600);
  help.position(5,0).mousePressed(info);
  start.position(450,420).mousePressed(debutJeu);
}
function draw() {
  background(0);
image(fond, 0, 0);

}

function info(){
//alert('Ça marche');
window.open("info.html");
}

function debutJeu(){
//alert('Ça marche');
document.location.href="jeu.html";
}