class package{
    constructor(){
        this.spt=createSprite(width/2, 80, 10,10);
	this.spt.addImage(packageIMG)
	this.spt.scale=0.2
    }
    applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2
    }
}