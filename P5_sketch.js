var myFont;
var points = [];
let angle = 0;
var lineX = [];
var vehicles = [];

function preload(){
  myFont = loadFont('assets/Font/SharpSansNo1-BoldItalic.otf');
}

function setup (){
  var canvas = createCanvas(1400, 800);
  canvas.parent('canvasContainer');
  textSize(250);
  textFont(myFont);
  points = myFont.textToPoints('hello world', 50, 300);
  points.forEach(function(dot) {
    var vehicle = new Vehicle(dot.x, dot.y);
    vehicles.push(vehicle);
    console.log(vehicles);
  });

}

function draw(){
background(255);
vehicles.forEach(function(vehicle) {
  vehicle.update();
  vehicle.show();
});

}

//Steering behaviour = desiredVelocity - currentVelocity
