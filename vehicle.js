// creating a Vehicle object => OOP

function Vehicle(x, y) {
  this.pos = createVector(x, y);
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 5;

  this.behaviours = function() {
    var seek = this.seek(this.target);
    this.applyForce(seek);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  this.show = function() {
    stroke(15,36,250);
    strokeWeight(5);
    point(this.pos.x, this.pos.y);
  }

//creating a vector that points from the object location to the desired position
  this.seek = function(target) {
    var path = p5.Vector.sub(target, this.pos);
  }
}


