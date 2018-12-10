var fond;
var intitule;
var Q1;
var Q2;
const question1= "images/enigmes/reponse/Q17-1.png";
const question2= "images/enigmes/reponse/Q17-2.png";

function preload() {
fond = loadImage("images/enigmes/reponse/Q17-Question.png");
Q1=createImg(question1, 'choix1');
Q2=createImg(question2, 'choix2')
}

function setup() {
  createCanvas(800, 600);
  Q1.position(73,209).mousePressed(Bon);
  Q2.position(430,209).mousePressed(Mauvais)
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