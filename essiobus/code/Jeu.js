var fondHome;
var CroixFermer;
var help;
var warning;
var stop;
var EventCount = 0;
const warningpanel = "images/incident.png";
const croix = "images/croix2.png";
const aide = "images/PanalAide.png";
const arret = "images/arret.png";

var randomtime = Math.random(10000,15000);
//demarre l'intervale en appelant la fonction qui sera executé et son temps d'execution
var timedevent = setInterval(eventwarning, randomtime); 

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

function clignottement(){
   
}

function incident(){
   alert('Nombre alerte : '+EventCount);
   if (EventCount >= 3) {
      clearInterval(timedevent); //stop l'intervale
   }
   else{
   EventCount += 1;
   }
}

function stoptest(){
   alert(' Nombre d"alerte' +EventCount);
   if (EventCount >= 3) {
      clearInterval(timedevent); //stop l'intervale
   }
   else{
   EventCount += 1;
   }
}

function eventstop(){
   stop = createImg(arret,'stoptest');
   stop.position(70,190).mousePressed(stoptest);
    
   if (EventCount >= 3) {
      clearInterval(timedevent); //stop l'intervale
   }
   else{
   EventCount += 1;
   }
}

function eventwarning(){
   warning = createImg(warningpanel,'incident');
   warning.position(50,190).mousePressed(incident);
   // clearInterval(timedevent); //stop l'intervale
   timedevent = setInterval(eventstop, 1000);
  
   if(EventCount >= 3){
      clearInterval(timedevent); //stop l'intervale
   }
   else{
   EventCount += 1;
   }
}

