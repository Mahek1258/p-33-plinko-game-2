//making divisions
class Divisions {

    //constructor with arguments x,y, width, height
    constructor(x, y, w, h) {

        var options = {

            isStatic: true
        }

        //making this variables and storing the weidth, height,and the creating of rectangle in it
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;

        //adding it to world
        World.add(world, this.body);
    }
    //display with no arrguments
    display() {
        
        //putting this.body.position in a variable pos
        var pos = this.body.position;

        //putting rect mode as centre and filling it white
        rectMode(CENTER);
        fill("white");

        //creating rectangle
        rect(pos.x, pos.y, this.w, this.h);
    }
};