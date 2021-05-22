class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("block.png")
        this.visibility=255
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        }
        else{
          World.remove(world,this.body) 
          push()
          this.visibility=this.visibility-5
          tint(255,this.visibility)
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
          pop()
        }
      }
}
