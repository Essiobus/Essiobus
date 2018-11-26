var fond;
var help;
var start;
const aide = "images/PanalAide.png";


function preload() {
fond = loadImage("images/trucmachin.png");
help = createImg(aide, 'helpicon');
}
function setup() {
createCanvas(800, 600);
  help.position(50,500).mousePressed(helpicon);
}

function draw() {
background(0);
image(fond, 0, 0);

}

function helpicon(){
   alert('ceci est un bonton test yoloooo !');
}