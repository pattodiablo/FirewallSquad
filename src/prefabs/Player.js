
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
		this.updateEvent = this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

create(){
	this.scene.physics.world.enableBody(this);
	this.body.setCollideWorldBounds(true);
	this.isPressingSpacebar = false;
	this.hasShot=false;
	this.body.drag=300;

	this.cursors = this.scene.input.keyboard.addKeys(
		{
		up:Phaser.Input.Keyboard.KeyCodes.W,
		down:Phaser.Input.Keyboard.KeyCodes.S,
		left:Phaser.Input.Keyboard.KeyCodes.A,
		right:Phaser.Input.Keyboard.KeyCodes.D,
		space:Phaser.Input.Keyboard.KeyCodes.SPACE
		
		});
}

shoot(){
console.log("trying shoot")

}

update(){


	if (this.cursors.space.isDown)
    {
		
		if(!this.hasShot){
			console.log("creando shot")
			const playerBullet = new PlayerBullet(this.scene, this.x,this.y);
			this.scene.add.existing(playerBullet);
		}
	
		this.hasShot=true
	
	
    }

	if (this.cursors.space.isUp)
    {

		this.hasShot=false;
		
	
    }
	
	if (this.cursors.left.isDown)
    {
		this.body.rotation-=2;
	
    }
    else if (this.cursors.right.isDown)
    {
		this.body.rotation+=2;
    }

    if (this.cursors.up.isDown)
    {
		this.scene.physics.velocityFromRotation(this.rotation, 350, this.body.velocity);
    }
    
}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
