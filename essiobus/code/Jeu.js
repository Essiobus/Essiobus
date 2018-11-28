var fondHome;
var CroixFermer;
var help;
var warning;
const warningpanel = "images/incident.png";
const croix = "images/croix2.png";
const aide = "images/PanalAide.png";


//demarre l'intervale en appelant la fonction qui sera executé et son temps d'execution
var timedevent = setInterval(eventfunction, 1000); 

function preload() {
fondHome = loadImage("images/Jeu.png");
CroixFermer = createImg(croix, 'fermer');
help = createImg(aide, 'info');
}

function setup() {
createCanvas(800, 600);
  CroixFermer.position(772,4).mousePressed(fermer);
    help.position(350,480).mousePressed(info);
}

function draw() {
background(0);
image(fondHome, 0, 0);
}

function fermer(){
//alert('Ça marche fraté');
if(confirm('Voulez-vous réellement quitter la partie ?'))
  document.location.href="fin.html";
}

function info(){
//alert('Ça marche');
window.open("info.html");
}

function incident(){
   alert('ça marche !');
   warning.style.display = "none" ;
}
function eventfunction(){
   warning = createImg(warningpanel,'incident');
   warning.position(50,190).mousePressed(incident);
   
   clearInterval(timedevent); //stop l'intervale
}

