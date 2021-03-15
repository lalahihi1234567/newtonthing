class Bob{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("hotpink");
        stroke(0);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}