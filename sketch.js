var fond;
var help;
var start;
const aide = "images/PanalAide.png";
const startbutton = "images/PanalStart.png";

function preload() {
fond = loadImage("images/background.png");
help = createImg(aide, 'helpicon');
start = createImg(startbutton, 'starticon')
}
function setup() {
createCanvas(800, 600);
  help.position(50,0).mousePressed(helpicon);
  start.position(500,400).mousePressed(starticon);
}

function draw() {
background(0);
image(fond, 0, 0);

}

function starticon(){
   document.location.href="game.html";
}

function helpicon(){
   
}