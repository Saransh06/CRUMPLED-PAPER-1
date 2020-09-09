class Ball {
    constructor(x, y,radius) {
      var options = {
           isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     
      
      World.add(world, this.body);
    }
    display(){
      var ballPos = this.body.position;
      
           ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill("blue");
            ellipse(ballPos.x, ballPos.y, this.radius,this.radius);
     
    }
  };
  