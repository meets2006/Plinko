class Plinko{
    constructor(x,y)
    {
        var opt={
            restitution:1,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,20,opt)
        this.r=20
        World.add(world,this.body)
    }
    display()
    {
        var pos =this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    ellipseMode(RADIUS);
    fill("white")
    ellipse(0,0,this.r,this.r);
    pop();
    }
}