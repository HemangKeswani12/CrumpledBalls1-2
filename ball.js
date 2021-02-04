class ball{
    constructor(x, y, width, height, angle) {
        var options={
            'restitution': 0.3,
            'density': 1.2,
            'friction':0.5,
            'isStatic': false
        }
        packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	    World.add(world, packageBody);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
    }
}