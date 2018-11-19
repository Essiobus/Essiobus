var img;
var img2
const aide = "images/PanalAide.png"

function preload() {
img = loadImage("images/background.png");
img2=createImg(aide, 'test')
}
function setup() {
createCanvas(800, 600);
  img2.position(50,0).mousePressed(test);
}
function draw() {
  background(0)
image(img, 0, 0);
'image(img2,50,0)'

}

function test(){
alert('dfghjk');
document.location.href="home.html"
}