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
  Q1.position(73,209).mousePressed(Test);
  Q2.position(430,209).mousePressed(Test)
}

function draw() {
  background(0);
  image(fond, 0, 0);
}

function Test(){
alert('Ça marche fraté');
}