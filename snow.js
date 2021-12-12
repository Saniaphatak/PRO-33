class snow {
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1    
        }
    //load image
    this.body = Bodies.circle(x,y,40,options);
    this.image = loadImage("snow4.webp");
    this.radius = 45;
    //add to world
    World.add(world, this.body);
  }

  updateYpos(){     
    if(this.body.position.y > height){

        Matter.Body.setPosition(this.body, {x:random(0,900),y: 10})
    }
}

    display(){
        push();
        var angle = this.body.angle;
        var pos= this.body.position;
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.radius,this.radius);
        pop();
       
    }
}


        
   

    