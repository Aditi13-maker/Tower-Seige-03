class Box1{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0,
          'friction':0,
          'density':0.3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightpink")
      rect( 0, 0, this.width, this.height);
      pop();
    }
}