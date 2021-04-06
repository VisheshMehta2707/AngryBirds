class Connection
{
    constructor(a,b)
    {
     var Features={
         bodyA:a,
         pointB:b,
         stifness:0.06,
         length: 25
     }  
      this.Connection=Constraint.create(Features) 
      World.add(myWorld,this.Connection)
      this.Sling1=loadImage("SLING.png")
      this.Sling2=loadImage("SLING2.png")
      this.Sling3=loadImage("SLING3.png")
        }
    display()
    {
     image( this.Sling1,250,50) 
     image(this.Sling2,220,40)
      
        if(this.Connection.bodyA != null)
        {
        stroke (48,22,8)
        strokeWeight(5)
        var a = this.Connection.bodyA.position; 
        var b = this.Connection.pointB; 
        line (a.x-10,a.y-5,b.x-10,b.y+5) 
        line (a.x+25,a.y+5,b.x+25,b.y+5)
        }
    }

 connectionBroken () {

this.Connection.bodyA = null

}
}