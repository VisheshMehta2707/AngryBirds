class Piggy
{
    constructor (x,y,r)
    {
        var Features={
            isStatic:false,
            restitution: 0.8,
            friction:1
            }
            this.Piggy=Bodies.circle( x,y,r/2 ,Features)
            World.add(myWorld,this.Piggy)
            this.r=r
         this.A= 255
        
    }
    display()
    {
        
        if (this.Piggy.speed>3){
         World.remove(myWorld,this.Piggy)
         push()
         tint ( 255 ,this.A)
         image(PiggyImage,this.Piggy.position.x,this.Piggy.position.y,50,50)
         this.A= this.A-5
         pop()
         
        }
    
         else
{       
        push ()
        translate (this.Piggy.position.x,this.Piggy.position.y)
        rotate (this.Piggy.angle)
                   imageMode (CENTER)  
          image(PiggyImage, 0,0,50,50) ;
    pop ()
    }
}   
}