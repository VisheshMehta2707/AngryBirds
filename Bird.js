class Bird
{
    constructor (x,y,w,h)
    {
        var Features={
            isStatic:false,
            restitution: 0.8,
            friction:1
            }
            this.bird=Bodies.rectangle( x,y,w,h,Features)
            World.add(myWorld,this.bird)
            this.w = w
            this.h = h  
    }
    display()
    {
        
        push ()
        translate (this.bird.position.x,this.bird.position.y)
        rotate (this.bird.angle)
                    imageMode(CENTER)  
 image (BirdredImage, 0,0,this.w,this.h);
    pop ()
    }
}