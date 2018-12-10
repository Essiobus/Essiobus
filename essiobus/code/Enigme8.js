var fond;
var Q1;
var Q2;
var Q3;
const question1= "images/enigmes/reponse/Q8-1.png";
const question2= "images/enigmes/reponse/Q8-2.png";
const question3= "images/enigmes/reponse/Q8-3.png";


function preload() {
fond = loadImage("images/enigmes/reponse/Q8-Question.png");
Q1=createImg(question1, 'choix1');
Q2=createImg(question2, 'choix2');
Q3=createImg(question3, 'choix3');
}


function setup() {
createCanvas(800, 600);
  Q1.position(70,201).mousePressed(Mauvais);
  Q2.position(70,291).mousePressed(Mauvais);
  Q3.position(66,380).mousePressed(Bon);
}
function draw() {
  background(0);
image(fond, 0, 0);
}

function Bon(){
alert('Bonne réponse');
score+=50;
window.close();
}

function Mauvais(){
alert('Mauvaise réponse');
window.close();
}