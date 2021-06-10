class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
        }
        this.x = x;
		this.y = y;
		this.width = width;
        this.height = height;        
		this.body=Bodies.rectangle(x, y, width, height, options);
 		World.add(world, this.body);
    }
    display(){
        var Gpos = this.body.position;


        push();
        translate(Gpos.x, Gpos.y);
        rectMode(CENTER);
        fill(110, 180, 60);
        rect(0,0,this.width, this.height);
        pop();
    }
}