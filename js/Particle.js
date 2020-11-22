//creating of particle class
class Particle {
    //constructor with arrguments x,y,radius
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        //using radius arrgument
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options); 
        //setting random color to it      
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    //display with no variables
    display() {

        //making variables
        var pos = this.body.position;
        var angle = this.body.angle;

        //push,pop
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        //eclipsemode as Radius and creation of a circle
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};