var fond;
var help;
var start;
var close;
const aide = "images/PanalAideB.png";
const croix = "images/croix.png";

function preload() {
fond = loadImage("images/trucmachin.png");
help = createImg(aide, 'helpicon');
close = createImg(croix, 'closeicon');
}

function setup() {
createCanvas(800, 600);
  help.position(50,500).mousePressed(helpicon);
  close.position(750, 0, 20,20).mousePressed(closeicon);
}

function draw() {
background(0);
image(fond, 0, 0);
image(close, 500,0,20,20);
}

function helpicon(){
   alert('ceci est un bonton test yoloooo !');
}

function closeicon(){
   window.open("game.html");
}