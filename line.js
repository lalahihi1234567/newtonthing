class Line{
    constructor(bodyA,bodyB, distance){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:310,
            stiffness:0
        }
        this.distance=distance;
        this.line=Constraint.create(options);
        World.add(world,this.line);
    }
    display(){
    var pointA=this.line.bodyA.position;
    var pointB=this.line.bodyB.position;
    var offset=pointB.x+this.distance;
    stroke("grey");
    line(pointA.x,pointA.y,offset,pointB.y);
    }
}