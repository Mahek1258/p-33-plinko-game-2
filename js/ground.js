//creating class
class Ground{

    //constructor with arrguments x,y,width,height
    constructor(x,y,w,h) {

      var options = {
          isStatic: true
      }

      //putting width ,height , the creation of rectangle in this.w,this.h,this.body variables
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;

      //adding this . body into world
       World.add(world, this.body);
    }
    //display with no arrguments
    display(){

      //putting this.body.position into a variable pos
      var pos =this.body.position;

      //setting rectmode as centre and color as white
      rectMode(CENTER);
      fill("white");

      //creating rect
      rect(pos.x, pos.y, this.w,this.h);
    }
  };