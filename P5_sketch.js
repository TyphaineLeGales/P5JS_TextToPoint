var myFont;
var points = [];
let angle = 0;
var lineX = [];
var vehicles = [];

function preload(){
  myFont = loadFont('assets/Font/SharpSansNo1-BoldItalic.otf');
}

function setup (){
  var canvas = createCanvas(1400, 800, WEBGL);
  canvas.parent('canvasContainer');
  textSize(100);
  textFont(myFont);
  points = myFont.textToPoints('hello world', 0, 0);

}

function draw(){
background(255);
orbitControl();
points.forEach(function(dot) {
  push();
  translate(dot.x, dot.y);
  normalMaterial();
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.03);
  box(7);
  pop();

  push();
  translate(dot.x+3, dot.y+3);
  normalMaterial();
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.03);
  box(7);
  pop();


  });


}

//Steering behaviour = desiredVelocity - currentVelocity
