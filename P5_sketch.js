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
    // if (index%2 == 0){
      stroke(15,36,250);
      strokeWeight(5+6*sin(angle));
      point(dot.x, dot.y);
      angle+=1;
    // } else {
    //   strokeWeight(4-2*sin(angle));
    //   point(dot.x, dot.y);
    // }
  });

}
