var fond;
var Q1;
var Q2;
var Q3;
const question1= "images/enigmes/reponse/Q10-1.png";
const question2= "images/enigmes/reponse/Q10-2.png";
const question3= "images/enigmes/reponse/Q10-3.png";


function preload() {
fond = loadImage("images/enigmes/reponse/Q10-Question.png");
Q1=createImg(question1, 'choix1');
Q2=createImg(question2, 'choix2');
Q3=createImg(question3, 'choix3');
}


function setup() {
createCanvas(800, 600);
  Q1.position(70,201).mousePressed(Mauvais);
  Q2.position(70,291).mousePressed(Bon);
  Q3.position(66,380).mousePressed(Mauvais);
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