var fondHome;
var CroixFermer;
var help;
var warning;
var stop;
var timedevent;
var EventCount = 0;
var Brandom;
const warningpanel = "images/incident.png";
const croix = "images/croix2.png";
const aide = "images/PanalAide.png";
const arret = "images/arret.png";

var randomevent;

var Largeur = [130 , 200, 270, 340, 410, 480, 550, 620, 690];
var Hauteur = [77 , 137, 197, 257, 317, 377];
// 77 : Ligne rouge
// 137 : Ligne Orange
// 197 : Ligne Jaune
// 257 : Ligne verte
// 317 : Ligne bleue
// 377 : Ligne rose


 var randomtime = getRndInteger(1000,5000);
// genère un temps aléatoire entre une valeur minimum et une valeur maximum



function preload() {
fondHome = loadImage("images/Jeu.png");
//préchargement de l'image de fond
CroixFermer = createImg(croix, 'fermer');
//préchargement de l'icone croix pour fermer
help = createImg(aide, 'info');
//préchargement de l'icone aide pour se documenter
}

function setup() {
createCanvas(800, 600);
   CroixFermer.position(772,4).mousePressed(fermer);
   help.position(350,480).mousePressed(info);

}
function draw() {
   background(0);
   image(fondHome, 0, 0);
     
  frameRate(5);
  randomevent = int(random(0,100));
  if(randomevent % 2 === 0 ){
    timedevent = setInterval(eventstop,randomtime);
    randomtime = getRndInteger(1000,5000);
  }
  else{
    timedevent = setInterval(eventwarning,randomtime);
    randomtime = getRndInteger(1000,5000);
  }
  Brandom = parseInt(random(0,11));
  //text(randomevent,500,600);
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

   alert('Nombre alerte : '+EventCount);
   // !!!!!!!!!  enigme 3,4,5,6,7 non montées  !!!!!!!
   if (Brandom == 0)
   { window.open("enigme1.html")}
   else if (Brandom == 1)
   { window.open("enigme2.html")}
    else if (Brandom == 2)
   { window.open("enigme3.html")}
    else if (Brandom == 3)
   { window.open("enigme4.html")}
    else if (Brandom == 4)
   { window.open("enigme5.html")}
    else if (Brandom == 5)
   { window.open("enigme6.html")}
    else if (Brandom == 6)
   { window.open("enigme7.html")}
    else if (Brandom == 7)
   { window.open("enigme8.html")}
    else if (Brandom == 8)
   { window.open("enigme9.html")}
    else if (Brandom == 9)
   { window.open("enigme10.html")}
   // !!!!!!!!!  enigme 3,4,5,6,7 non montées  !!!!!!!
}


function stoptest(){
   alert('Nombre d"alerte' +EventCount);

   // !!!!!!!!!  enigme 3,4,5,6,7 non montées  !!!!!!!
if (Brandom == 0)
   { window.open("enigme1.html")}
   else if (Brandom == 1)
   { window.open("enigme2.html")}
    else if (Brandom == 2)
   { window.open("enigme3.html")}
    else if (Brandom == 3)
   { window.open("enigme4.html")}
    else if (Brandom == 4)
   { window.open("enigme5.html")}
    else if (Brandom == 5)
   { window.open("enigme6.html")}
    else if (Brandom == 6)
   { window.open("enigme7.html")}
    else if (Brandom == 7)
   { window.open("enigme8.html")}
    else if (Brandom == 8)
   { window.open("enigme9.html")}
    else if (Brandom == 9)
   { window.open("enigme10.html")}
// !!!!!!!!!  enigme 3,4,5,6,7 non montées  !!!!!!!
}

function eventstop(){
   stop = createImg(arret,'stoptest');
   stop.position(Largeur[int(random(0,9))],Hauteur[int(random(0,6))]).mousePressed(stoptest);
    
   if (EventCount >= 3) {
      stop.hide();
   }
   else{
   EventCount += 1;
   }
   

   
}

function eventwarning(){
   warning = createImg(warningpanel,'incident');
   warning.position(Largeur[int(random(0,9))],Hauteur[int(random(0,6))]).mousePressed(incident);
   
    if (EventCount >= 3) {
      warning.hide();
   }
   else{
      EventCount += 1;
   }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

