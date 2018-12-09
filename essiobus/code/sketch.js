var fond;
var help
const aide = "images/PanalAide.png"

function preload() {
fond = loadImage("images/background.png");
help=createImg(aide, 'test')
}
function setup() {
createCanvas(800, 600);
  help.position(50,0).mousePressed(test);
}
function draw() {
  background(0)
image(fond, 0, 0);


}

function test(){
alert('Ça marche');
document.location.href="home.html"
}