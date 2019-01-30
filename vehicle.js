function Vehicle(x, y) {
  this.pos = createVector(x, y);
  this.target = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();
  this.r = 5;
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
}

Vehicle.prototype.show = function() {
  stroke(15,36,250);
  strokeWeight(5);
  point(this.pos.x, this.pos.y);
}
