// creating a Vehicle object => OOP

function Vehicle(x, y) {
  this.pos = createVector(x, y);
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 5;

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  this.show = function() {
    stroke(15,36,250);
    strokeWeight(5);
    point(this.pos.x, this.pos.y);
  }
}


