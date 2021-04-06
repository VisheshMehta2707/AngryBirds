class Plank
{
    constructor (x,y,w,h,a)
    {
        var Features={
            isStatic:false,
            restitution: 0.8,
            friction:1
            }
            this.Plank=Bodies.rectangle( x,y,w,h,a,Features)
            World.add(myWorld,this.Plank)
            Matter .Body.setAngle(this.Plank,a)
            this.a = a
            this.w = w
            this.h = h  
    }
    display()
    {
        push ()
        translate (this.Plank.position.x,this.Plank.position.y)
        rotate (this.Plank.angle)
                    imageMode(CENTER)  
         image(PlankImage, 0,0,this.w,this.h);
    pop ()
    }
}