var myFont;
var point = [];
let angle = 0;
var lineX = [];

function preload(){
  myFont = loadFont('assets/Font/SharpSansNo1-BoldItalic.otf');
}

function setup (){
var canvas = createCanvas(1400, 800);
canvas.parent('canvasContainer');
textSize(250);
fill(255);
textFont(myFont);
points = myFont.textToPoints('hello world', 50, 300);

}

function draw(){
background(255);
  points.forEach(function(dot, index) {

      stroke(15,36,250);
      strokeWeight(5);
      point(dot.x, dot.y);

  });

}

//Steering behaviour = desiredVelocity - currentVelocity
