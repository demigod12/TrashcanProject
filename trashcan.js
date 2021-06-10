class Trash{
    constructor(x, y, width, height, wallThickness) {

        this.x = x;
		this.y = y;
		this.width = 200;
        this.height = 100;
        this.wallThickness = 20;
        this.angle = 0;

		this.image = loadImage("dustbingreen.png");

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic:true});
		this.leftWallBody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:true})
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        
        this.rightWallBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody);
        

		

        
    }
    display(){
        var posBot= this.bottomBody.position;
        var posLef= this.leftWallBody.position;
        var posRig= this.rightWallBody.position;

        push()
			translate(posLef.x, posLef.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(0)
			stroke(25)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.height);
        pop();

        push()
			translate(posRig.x, posRig.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(0)
			stroke(25)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.height);
        pop();

        push()
			translate(posBot.x, posBot.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(25)
			angleMode(RADIANS)
			fill(0)
			rect(0,0,this.width, this.wallThickness);
		pop();

			image(this.image);
			
		}
}