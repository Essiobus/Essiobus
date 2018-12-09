var fond;
var intitule;
var Q1;
var Q2;
const question1= "images/enigmes/reponse/Q7-1.png";
const question2= "images/enigmes/reponse/Q7-2.png";

function preload() {
fond = loadImage("images/enigmes/reponse/Q7-Question.png");
Q1=createImg(question1, 'choix1');
Q2=createImg(question2, 'choix2')
}

function setup() {
  createCanvas(800, 600);
  Q1.position(73,209).mousePressed(Mauvais);
  Q2.position(430,209).mousePressed(Bon)
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