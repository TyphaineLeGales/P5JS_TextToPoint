var myFont;
var points = [];
var vehicles = [];

function preload(){
  myFont = loadFont('assets/Font/SharpSansNo1-BoldItalic.otf');
}

function setup (){
  var canvas = createCanvas(600, 200);
  canvas.parent('canvasContainer');
  textSize(100);
  textFont(myFont);
  points = myFont.textToPoints('hello world', 50, 120);
  points.forEach(function(dot) {
    var vehicle = new Vehicle(dot.x, dot.y);
    vehicles.push(vehicle);

  });

}

function draw(){
background(15,36,250);
vehicles.forEach(function(vehicle) {
  vehicle.behaviours();
  vehicle.update();
  vehicle.show();
});

}

//Steering behaviour = desiredVelocity - currentVelocity
