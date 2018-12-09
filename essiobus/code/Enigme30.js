var fond;
var Q1;
var Q2;
var Q3;
var Q4;
const question1= "images/enigmes/reponse/Q30-1.png";
const question2= "images/enigmes/reponse/Q30-2.png";
const question3= "images/enigmes/reponse/Q30-3.png";
const question4= "images/enigmes/reponse/Q30-4.png";

function preload() {
fond = loadImage("images/enigmes/reponse/Q30-Question.png");
Q1=createImg(question1, 'choix1');
Q2=createImg(question2, 'choix2');
Q3=createImg(question3, 'choix3');
Q4=createImg(question4, 'choix4');
}


function setup() {
createCanvas(800, 600);
  Q1.position(62,253).mousePressed(Mauvais);
  Q2.position(415,250).mousePressed(Mauvais);
  Q3.position(58,360).mousePressed(Mauvais);
  Q4.position(415,365).mousePressed(Bon);
}
function draw() {
  background(0);
image(fond, 0, 0);
}

function Bon(){
alert('Bonne réponse');
Reponse=1;
//alert(Reponse);
window.close();
}

function Mauvais(){
alert('Mauvaise réponse');
Reponse=0;
window.close();
}