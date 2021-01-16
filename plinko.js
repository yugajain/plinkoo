class Plinko { 
	constructor(x,y) 
	{ var options={ isStatic:true,
		 restitution:0.3, 
		 friction:0 } 
		 this.r=10; 
		 this.body= Bodies.circle(x, y, this.r/2, options) 
		 World.add(world, this.body); 
		} 
		display() 
		{ var plinkopos=this.body.position;
			 push()
			  translate(plinkopos.x, plinkopos.y); 
			  ellipseMode(CENTER) ;
			  strokeWeight(3); 
			  fill("red"); 
			  ellipse(0,0,this.r, this.r);
			   pop() }
			 }