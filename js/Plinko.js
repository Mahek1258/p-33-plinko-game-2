//creating pinkos class
class Plinko {

    //constructor with x and y arrguments
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        //this statemenyts
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        //adding into world
        World.add(world, this.body);
    }
    display() {
        //using this statements and making variables
        var pos = this.body.position;
        var angle = this.body.angle;

        //push,pop
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        //eclipsemode as radius and making cirle
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};