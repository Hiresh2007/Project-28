class Mango {
    constructor(x, y, radius) {
        var opt = {
            'isStatic':true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,40,opt);
        this.radius = 40;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, this.radius);
        pop();
      }
}