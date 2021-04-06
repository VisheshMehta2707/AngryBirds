class Ground
{
    constructor (x,y,w,h)
    {
        var Features={
            isStatic:true
            
            }
            this.Ground=Bodies.rectangle(x,y,w,h,Features)
            World.add(myWorld,this.Ground)
         this.w=w
         this.h=h
    }
    display()
    {
        fill ("brown")
        rectMode(CENTER)  
 rect ( this.Ground.position.x,this.Ground.position.y,this.w,this.h) ;
    }
}
     